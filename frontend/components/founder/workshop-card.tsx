"use client";

import { useId, useState } from "react";

interface Props {
  title: string;
  items: string[];
  /** How many items show before "Show more". */
  preview?: number;
}

/** Workshop category card with an expandable list; the toggle stays at the bottom. */
const WorkshopCard = ({ title, items, preview = 6 }: Props) => {
  const [open, setOpen] = useState(false);
  const listId = useId();
  const hidden = items.length - preview;
  const shown = open ? items : items.slice(0, preview);

  return (
    <div className="flex flex-col rounded-2xl border border-sand bg-white p-6 sm:p-7">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-[17px] font-medium leading-snug tracking-tight text-espresso">
          {title}
        </h3>
        <span className="shrink-0 rounded-full bg-cream px-2.5 py-0.5 text-[12px] tabular-nums text-walnut">
          {items.length}
        </span>
      </div>

      <ul id={listId} className="mt-5 space-y-3 text-[14px] leading-snug text-walnut">
        {shown.map((it) => (
          <li key={it} className="flex gap-2.5">
            <span aria-hidden className="mt-[0.45em] size-1 shrink-0 rounded-full bg-caramel" />
            {it}
          </li>
        ))}
      </ul>

      {hidden > 0 && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={listId}
          className="mt-auto inline-flex min-h-11 items-center gap-1.5 self-start pt-5 text-[13px] font-medium text-espresso transition-colors hover:text-caramel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
        >
          {open ? "Show less" : `Show ${hidden} more`}
          <svg
            viewBox="0 0 20 20"
            aria-hidden
            className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M5.5 7.5l4.5 4.5 4.5-4.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default WorkshopCard;
