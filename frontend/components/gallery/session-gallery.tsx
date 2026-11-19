"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { GalleryImage } from "@/lib/gallery";

interface Props {
  images: GalleryImage[];
  /** Used in labels, e.g. "Open photo 2 of 7 from Team Bonding…" */
  label: string;
}

const VISIBLE = 5;

/**
 * Photo mosaic for one session: the first photo large, up to four beside it,
 * and a "+N" tile when there are more. Any photo opens a full-screen viewer.
 */
const SessionGallery = ({ images, label }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const count = images.length;
  const shown = images.slice(0, VISIBLE);
  const extra = count - shown.length;

  const open = (i: number) => {
    setIndex(i);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);

  // Arrow keys while the viewer is open (Esc is handled by <dialog>).
  useEffect(() => {
    const d = dialogRef.current;
    if (!d) return;
    const onKey = (e: KeyboardEvent) => {
      if (!d.open) return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  // Swipe left/right on touch screens.
  const touchX = useRef<number | null>(null);

  const tile = (img: GalleryImage, i: number, className: string, sizes: string) => {
    const isLast = i === shown.length - 1 && extra > 0;
    return (
      <button
        key={img.src + i}
        type="button"
        onClick={() => open(i)}
        aria-label={
          isLast
            ? `View all ${count} photos from ${label}`
            : `Open photo ${i + 1} of ${count} from ${label}`
        }
        className={`group relative overflow-hidden rounded-2xl bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel ${className}`}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {isLast && (
          <span className="absolute inset-0 flex items-center justify-center bg-ink/55 text-2xl font-medium text-white backdrop-blur-[2px] transition-colors group-hover:bg-ink/45">
            +{extra + 1}
          </span>
        )}
      </button>
    );
  };

  const [first, ...rest] = shown;

  return (
    <>
      {/* Mobile / tablet: one photo; the rest open in the viewer */}
      <button
        type="button"
        onClick={() => open(0)}
        aria-label={
          count > 1
            ? `View all ${count} photos from ${label}`
            : `Open photo from ${label}`
        }
        className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sand focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel lg:hidden"
      >
        <Image
          src={first.src}
          alt={first.alt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        {count > 1 && (
          <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-full bg-white/90 px-3.5 py-2 text-[13px] font-medium text-espresso shadow-sm backdrop-blur-sm">
            <svg viewBox="0 0 24 24" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              <rect x="3" y="5" width="14" height="14" rx="2" />
              <path d="M7 3h12a2 2 0 012 2v12" strokeLinecap="round" />
            </svg>
            View all {count} photos
          </span>
        )}
      </button>

      {/* Desktop: one large photo with up to four around it */}
      <div className="hidden h-[540px] grid-cols-4 grid-rows-2 gap-3 lg:grid">
        {tile(first, 0, rest.length ? "col-span-2 row-span-2" : "col-span-4 row-span-2", "(min-width: 1024px) 34vw")}
        {rest.map((img, k) =>
          tile(
            img,
            k + 1,
            // With fewer than 5 photos, stretch the side tiles to fill.
            rest.length === 1
              ? "col-span-2 row-span-2"
              : rest.length === 2 || (rest.length === 3 && k === 2)
                ? "col-span-2"
                : "",
            "(min-width: 1024px) 17vw",
          ),
        )}
      </div>

      <dialog
        ref={dialogRef}
        aria-label={`Photos from ${label}`}
        onClick={(e) => e.target === e.currentTarget && close()}
        className="m-0 h-dvh max-h-none w-screen max-w-none overflow-hidden bg-ink/95 p-0 text-white backdrop:bg-transparent"
      >
        <div
          className="flex h-full flex-col"
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return;
            const dx = e.changedTouches[0].clientX - touchX.current;
            if (Math.abs(dx) > 40) (dx > 0 ? prev : next)();
            touchX.current = null;
          }}
        >
          <div className="flex items-center justify-between px-5 py-4 md:px-8">
            <p className="text-sm tabular-nums text-white/70" aria-live="polite">
              {index + 1} / {count}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Close photo viewer"
              className="inline-flex size-11 items-center justify-center rounded-full text-white/80 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-caramel"
            >
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="relative flex flex-1 items-center justify-center px-4 pb-6 md:px-24">
            <div className="relative h-full w-full">
              <Image
                key={images[index].src + index}
                src={images[index].src}
                alt={images[index].alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>

            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous photo"
                  className="absolute left-3 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 active:scale-95 focus-visible:outline-2 focus-visible:outline-caramel md:left-8"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next photo"
                  className="absolute right-3 top-1/2 inline-flex size-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 active:scale-95 focus-visible:outline-2 focus-visible:outline-caramel md:right-8"
                >
                  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
                    <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Thumbnails */}
          <div className="no-scrollbar flex justify-center gap-2 overflow-x-auto px-5 pb-6">
            {images.map((img, i) => (
              <button
                key={img.src + i}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show photo ${i + 1}`}
                aria-current={i === index}
                className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg transition ${
                  i === index ? "opacity-100 ring-2 ring-caramel" : "opacity-45 hover:opacity-80"
                }`}
              >
                <Image src={img.src} alt="" fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      </dialog>
    </>
  );
};

export default SessionGallery;
