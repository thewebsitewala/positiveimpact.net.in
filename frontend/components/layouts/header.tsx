"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type CSSProperties } from "react";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const menuItems = [
  { label: "Programs", url: "/#best-sellers" },
  { label: "Specialities", url: "/#training-speciality" },
  { label: "Gallery", url: "/#gallery-showcase" },
  { label: "About", url: "/#meet-founder" },
  { label: "FAQ", url: "/#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = useState(false);

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
        // Scrolling down -> slide out
        setVisible(false);
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
        visible || open ? "translate-y-0" : "-translate-y-full pointer-events-none"
      } ${
        solid ? "bg-ink/80 backdrop-blur-md shadow-xs" : "bg-transparent"
      }`}
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
              {menuItems.map((item, i) => (
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
              ))}
            </ul>
          </nav>
        </div>

        <div className="drop flex items-center gap-2" style={delay(420)}>
          <Link
            href="/#best-sellers"
            className="group hidden h-11 items-center gap-2 text-sm text-white transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel sm:inline-flex"
          >
            Get a workshop
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>

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
            {menuItems.map((item) => (
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
            ))}
          </ul>
          <Link
            href="/#best-sellers"
            onClick={() => setOpen(false)}
            className="mt-8 flex h-12 items-center justify-center rounded-full bg-white text-sm font-medium text-ink active:scale-[0.98]"
          >
            Get a customized workshop
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
