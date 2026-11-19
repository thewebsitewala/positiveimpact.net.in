"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { trainings } from "@/lib/trainings";
import { EnquireButton } from "../training/enquiry-dialog";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const menuItems = [
  { label: "Home", url: "/" },
  { label: "About", url: "/about" },
  { label: "Trainings", url: "/training" },
  { label: "Courses", url: "/courses" },
  { label: "Founder", url: "/harshita-varghese" },
  { label: "Gallery", url: "/gallery" },
  { label: "Contact", url: "/contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);
  const [trainingsOpen, setTrainingsOpen] = useState(false);
  const [mobileTrainingsOpen, setMobileTrainingsOpen] = useState(false);
  const closeTimer = useRef<number | null>(null);
  const pathname = usePathname();

  // Close any open menu when the route changes. Reset during render (the
  // pattern React recommends) instead of calling setState in an effect.
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) {
    setLastPath(pathname);
    setTrainingsOpen(false);
    setOpen(false);
  }

  // Esc closes the desktop dropdown.
  useEffect(() => {
    if (!trainingsOpen) return;
    const onKey = (e: KeyboardEvent) =>
      e.key === "Escape" && setTrainingsOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [trainingsOpen]);

  const openTrainings = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setTrainingsOpen(true);
  };
  const closeTrainingsSoon = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setTrainingsOpen(false), 140);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      // Update background state
      setScrolled(currentScrollY > 24);

      // Always show when near the top
      if (currentScrollY <= 60) {
        setVisible(true);
        lastScrollY = currentScrollY;
        return;
      }

      // Filter out micro-scrolls to prevent jitter
      const delta = currentScrollY - lastScrollY;
      if (Math.abs(delta) < 6) return;

      if (delta > 0) {
        // Scrolling down -> slide out (and close the trainings dropdown)
        setVisible(false);
        setTrainingsOpen(false);
      } else {
        // Scrolling up -> slide in
        setVisible(true);
      }

      lastScrollY = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Only touch body scroll while the menu is open, so it doesn't undo the
  // preloader's scroll lock on first load.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-out ${
        visible || open
          ? "translate-y-0"
          : "-translate-y-full pointer-events-none"
      } ${solid ? "bg-ink/80 backdrop-blur-md shadow-xs" : "bg-transparent"}`}
    >
      <div className="mx-auto flex  items-center justify-between px-6  md:px-12 lg:px-20 py-3 md:py-4">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            aria-label="Positive Impact home"
            style={delay(0)}
            className="drop shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel"
          >
            <Image
              src="/logo-transparent.png"
              alt="Positive Impact"
              width={1000}
              height={260}
              priority
              className="h-12 w-auto md:h-14"
            />
          </Link>

          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {menuItems.map((item, i) =>
                item.url === "/training" ? (
                  <li
                    key={item.label}
                    className="drop relative"
                    style={delay(80 + i * 60)}
                    onMouseEnter={openTrainings}
                    onMouseLeave={closeTrainingsSoon}
                  >
                    <div className="flex items-center">
                      <Link
                        href={item.url}
                        className="group relative inline-flex h-11 items-center text-sm text-white focus-visible:outline-none"
                      >
                        {item.label}
                        <span className="pointer-events-none absolute inset-x-0 bottom-1.5 h-px origin-left scale-x-0 bg-white/60 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => setTrainingsOpen((v) => !v)}
                        aria-expanded={trainingsOpen}
                        aria-controls="trainings-menu"
                        aria-label="Show all trainings"
                        className="-mr-2 inline-flex size-8 items-center justify-center rounded-full text-white/80 transition hover:text-white focus-visible:outline-2 focus-visible:outline-caramel"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          aria-hidden
                          className={`size-3.5 transition-transform duration-300 ${trainingsOpen ? "rotate-180" : ""}`}
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

                    {/* Dropdown panel. pt-3 bridges the gap so hover isn't lost. */}
                    <div
                      id="trainings-menu"
                      className={`absolute left-0 top-full z-50 w-64 pt-3 transition duration-200 ${
                        trainingsOpen
                          ? "visible translate-y-0 opacity-100"
                          : "invisible -translate-y-1 opacity-0"
                      }`}
                    >
                      <ul className="rounded-xl border border-sand bg-white py-2 shadow-[0_20px_40px_-16px_rgba(28,20,15,0.4)]">
                        {trainings.map((t) => (
                          <li key={t.slug}>
                            <Link
                              href={`/training/${t.slug}`}
                              onClick={() => setTrainingsOpen(false)}
                              className={`block px-4 py-2.5 text-[14px] transition-colors hover:bg-cream hover:text-espresso focus-visible:bg-cream focus-visible:outline-none ${
                                pathname === `/training/${t.slug}`
                                  ? "font-medium text-espresso"
                                  : "text-walnut"
                              }`}
                            >
                              {t.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li
                    key={item.label}
                    className="drop"
                    style={delay(80 + i * 60)}
                  >
                    <Link
                      href={item.url}
                      className="group relative inline-flex h-11 items-center text-sm text-white transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
                    >
                      {item.label}
                      <span className="pointer-events-none absolute inset-x-0 bottom-1.5 h-px origin-left scale-x-0 bg-white/60 transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div className="drop flex items-center gap-2" style={delay(420)}>
          <EnquireButton className="group hidden h-11 items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-medium text-ink shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] transition hover:-translate-y-px hover:bg-sand active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel sm:inline-flex">
            Get a workshop
            <span
              aria-hidden
              className="flex size-8 items-center justify-center rounded-full bg-caramel text-white transition-transform duration-300 group-hover:-rotate-45"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </EnquireButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative -mr-2.5 inline-flex size-11 items-center justify-center rounded-full text-white transition hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-caramel lg:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-5 bg-current transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-[4px]"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-5 bg-current transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-[4px]"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="h-[calc(100dvh-4rem)] overflow-y-auto lg:hidden"
      >
        <nav aria-label="Mobile" className="px-6 pb-10 pt-6">
          <ul className="divide-y divide-white/10">
            {menuItems.map((item) =>
              item.url === "/training" ? (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => setMobileTrainingsOpen((v) => !v)}
                    aria-expanded={mobileTrainingsOpen}
                    aria-controls="mobile-trainings"
                    className="flex h-16 w-full items-center justify-between text-left text-xl font-medium tracking-tight text-white"
                  >
                    {item.label}
                    <svg
                      viewBox="0 0 20 20"
                      aria-hidden
                      className={`size-5 text-white/50 transition-transform duration-300 ${mobileTrainingsOpen ? "rotate-180" : ""}`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                    >
                      <path
                        d="M5.5 7.5l4.5 4.5 4.5-4.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <ul
                    id="mobile-trainings"
                    hidden={!mobileTrainingsOpen}
                    className="pb-4"
                  >
                    {trainings.map((t) => (
                      <li key={t.slug}>
                        <Link
                          href={`/training/${t.slug}`}
                          onClick={() => setOpen(false)}
                          className="flex min-h-11 items-center gap-3 py-1.5 text-[15px] text-white/75 transition-colors hover:text-white"
                        >
                          <span
                            className="size-1 rounded-full bg-caramel"
                            aria-hidden
                          />
                          {t.title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/training"
                        onClick={() => setOpen(false)}
                        className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-[15px] font-medium text-sand"
                      >
                        View all trainings <span aria-hidden>→</span>
                      </Link>
                    </li>
                  </ul>
                </li>
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.url}
                    onClick={() => setOpen(false)}
                    className="flex h-16 items-center justify-between text-xl font-medium tracking-tight text-white"
                  >
                    {item.label}
                    <span aria-hidden className="text-white/40">
                      →
                    </span>
                  </Link>
                </li>
              ),
            )}
          </ul>
          <EnquireButton
            onClick={() => setOpen(false)}
            className="mt-8 flex h-12 w-full items-center justify-center gap-3 rounded-full bg-white text-sm font-medium text-ink active:scale-[0.98]"
          >
            Get a customized workshop
            <span
              aria-hidden
              className="flex size-7 items-center justify-center rounded-full bg-caramel text-white"
            >
              <svg
                viewBox="0 0 24 24"
                className="size-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </EnquireButton>
        </nav>
      </div>
    </header>
  );
};

export default Header;
