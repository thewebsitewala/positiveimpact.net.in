"use client";

import { useId, useState } from "react";
import type { ClientLogo } from "@/lib/clients";

/**
 * Collapsed, the wall shows 4 rows on desktop and 8 rows on mobile:
 *   mobile 3/row x 8 = 24 · sm 4/row x 8 = 32 · md 6/row x 4 = 24 · xl 10/row x 4 = 40
 * Each logo past a breakpoint's limit is hidden until "Show all".
 */
function collapsedClass(i: number): string {
  if (i < 24) return "flex"; // visible at every width
  if (i < 32) return "hidden sm:flex md:hidden xl:flex"; // sm and xl only
  if (i < 40) return "hidden xl:flex"; // xl only
  return "hidden";
}

const ClientWall = ({ clients }: { clients: ClientLogo[] }) => {
  const [open, setOpen] = useState(false);
  const listId = useId();

  return (
    <>
      <ul
        id={listId}
        className="mt-12 flex flex-wrap justify-center gap-2.5 sm:gap-3"
      >
        {clients.map((c, i) => (
          <li
            key={c.name}
            className={`${open ? "flex" : collapsedClass(i)} group h-20 w-[calc(33.333%-0.42rem)] items-center justify-center rounded-xl border border-sand bg-white px-3 sm:h-24 sm:w-[calc(25%-0.57rem)] md:w-[calc(16.666%-0.63rem)] xl:w-[calc(10%-0.68rem)]`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- small local logo files */}
            <img
              src={c.src}
              alt={c.name}
              title={c.name}
              loading="lazy"
              // Cropped logos are small: cap their upscale so they stay crisp.
              style={
                c.w
                  ? {
                      width: Math.min(Math.round(c.w * 1.25), 120),
                      height: "auto",
                    }
                  : undefined
              }
              className={`max-h-14 max-w-full object-contain transition duration-300 group-hover:opacity-100 group-hover:grayscale-0 ${c.w ? "" : "h-9 w-[110px]"}`}
            />
          </li>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={listId}
          className="inline-flex h-12 items-center gap-2 rounded-full border border-walnut/25 bg-white px-6 text-sm font-medium text-espresso transition hover:-translate-y-px hover:border-walnut/50 active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
        >
          {open ? "Show fewer" : `Show all ${clients.length} clients`}
          <svg
            viewBox="0 0 20 20"
            aria-hidden
            className={`size-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              d="M5.5 7.5l4.5 4.5 4.5-4.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default ClientWall;
