"use client";

import { useEffect, useState } from "react";

/** Minimum time the mark is on screen, so the draw + fill can finish. */
const MIN_VISIBLE_MS = 1900;
/** Matches the .preloader-exit transition in globals.css. */
const EXIT_MS = 800;

type Phase = "drawing" | "exiting" | "done";

const Preloader = () => {
  const [phase, setPhase] = useState<Phase>("drawing");

  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const minVisible = reduced ? 400 : MIN_VISIBLE_MS;

    document.body.style.overflow = "hidden";

    const timers: number[] = [];
    const pageLoaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });
    const minTime = new Promise<void>((resolve) =>
      timers.push(window.setTimeout(resolve, minVisible)),
    );

    let cancelled = false;
    Promise.all([pageLoaded, minTime]).then(() => {
      if (cancelled) return;
      // Start hero entrance immediately as preloader starts sliding up - zero delay
      root.dataset.loaded = "true";
      setPhase("exiting");
      document.body.style.overflow = "";

      // Fallback in case onTransitionEnd doesn't fire
      timers.push(
        window.setTimeout(() => {
          setPhase("done");
        }, EXIT_MS + 100),
      );
    });

    // Don't release the hero here: in dev, React Strict Mode runs this
    // cleanup right after the first mount, which would start the hero
    // animation while the preloader is still on screen.
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Positive Impact"
      onTransitionEnd={(e) => {
        if (e.target === e.currentTarget && e.propertyName === "transform") {
          setPhase("done");
        }
      }}
      className={`preloader fixed inset-0 z-100 flex items-center justify-center bg-ink ${
        phase === "exiting" ? "preloader-exit" : ""
      }`}
    >
      <svg
        viewBox="-6 -6 267 227"
        className="preloader-mark w-24 overflow-visible md:w-28"
        aria-hidden
      >
        <path
          className="mark-path mark-path-1"
          pathLength={1}
          d="M125 0 L255 158 L125 215 Z"
        />
        <path
          className="mark-path mark-path-2"
          pathLength={1}
          d="M0 158 L125 215 L125 202 Z"
        />
      </svg>
    </div>
  );
};

export default Preloader;
