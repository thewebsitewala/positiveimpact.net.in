"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import EnquiryForm from "./enquiry-form";

type Open = (training?: string) => void;
const EnquiryContext = createContext<Open | null>(null);

/**
 * Provides one enquiry popup for the page. Any <EnquireButton> inside opens it,
 * optionally with a training pre-selected. Uses the native <dialog>, which
 * handles focus trapping, Esc to close and the backdrop.
 */
export function EnquiryProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [training, setTraining] = useState<string | undefined>();
  // Bumped on every open so the form starts fresh each time.
  const [session, setSession] = useState(0);

  const open = useCallback<Open>((t) => {
    setTraining(t);
    setSession((s) => s + 1);
    ref.current?.showModal();
  }, []);

  const close = () => ref.current?.close();

  return (
    <EnquiryContext.Provider value={open}>
      {children}
      <dialog
        ref={ref}
        aria-labelledby="enquiry-title"
        onClick={(e) => {
          // Click on the backdrop (the dialog element itself) closes it.
          if (e.target === e.currentTarget) close();
        }}
        className="enquiry-dialog m-auto max-h-none w-[calc(100%-2rem)] max-w-xl overflow-hidden rounded-3xl bg-cream p-0 text-espresso shadow-2xl backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
      >
        <div className="no-scrollbar max-h-[calc(100dvh-2rem)] overflow-y-auto p-6 sm:p-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-wider text-caramel">
                Enquire
              </p>
              <h2
                id="enquiry-title"
                className="mt-1.5 text-2xl font-medium tracking-tight"
              >
                {training ? training : "Get a customized workshop"}
              </h2>
              <p className="mt-1.5 text-[14px] leading-relaxed text-walnut">
                Tell us about your team and we&apos;ll design a program around it.
              </p>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label="Close enquiry form"
              className="-mr-2 -mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-full text-walnut transition hover:bg-sand/60 focus-visible:outline-2 focus-visible:outline-caramel"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>
          <div className="mt-6">
            <EnquiryForm key={session} defaultTraining={training} onDone={close} compact />
          </div>
        </div>
      </dialog>
    </EnquiryContext.Provider>
  );
}

interface ButtonProps {
  training?: string;
  className?: string;
  children: ReactNode;
  /** Runs before the popup opens (e.g. to close the mobile menu). */
  onClick?: () => void;
}

export function EnquireButton({ training, className, children, onClick }: ButtonProps) {
  const open = useContext(EnquiryContext);
  return (
    <button
      type="button"
      onClick={() => {
        onClick?.();
        open?.(training);
      }}
      className={className}
    >
      {children}
    </button>
  );
}
