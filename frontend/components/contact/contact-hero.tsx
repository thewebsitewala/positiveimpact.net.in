import Link from "next/link";
import type { ReactNode } from "react";
import { contact } from "@/lib/site";
import HeroBackdrop from "../training/hero-backdrop";
import { wrap } from "../founder/styles";

const Card = ({
  href,
  label,
  value,
  icon,
  external,
}: {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  external?: boolean;
}) => (
  <a
    href={href}
    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    className="group flex items-center gap-4 rounded-2xl border border-white/15 bg-white/[0.06] p-5 backdrop-blur-md transition hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel sm:p-6"
  >
    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-caramel text-white">{icon}</span>
    <span className="min-w-0">
      <span className="block text-[12px] uppercase tracking-wider text-white/50">{label}</span>
      <span className="mt-1 block truncate text-[15px] font-medium text-white">{value}</span>
    </span>
    <span aria-hidden className="ml-auto text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white">
      →
    </span>
  </a>
);

const svg = (d: string) => (
  <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden>
    <path d={d} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ContactHero = () => (
  <section className="relative isolate overflow-hidden bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-40">
    <HeroBackdrop />
    <div className={wrap}>
      <nav aria-label="Breadcrumb" className="text-[13px] text-white/50">
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="transition-colors hover:text-white">
              Home
            </Link>
          </li>
          <li aria-hidden>/</li>
          <li aria-current="page" className="text-white/80">
            Contact
          </li>
        </ol>
      </nav>
      <h1 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-balance md:text-5xl lg:text-[3.5rem]">
        Let&apos;s plan your team&apos;s next program
      </h1>
      <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
        Call, message or write to us. We reply within 24 hours on working days.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        <Card
          href={contact.phoneHref}
          label="Call us"
          value={contact.phone}
          icon={svg("M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z")}
        />
        <Card
          href={contact.whatsappHref}
          external
          label="WhatsApp"
          value="Chat with us"
          icon={
            <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden>
              <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 01-4.8-1.32l-.34-.2-3.57.94.95-3.48-.22-.36a9.43 9.43 0 117.99 4.42zm8.02-17.45A11.27 11.27 0 0012.04.75C5.8.75.72 5.83.72 12.08c0 2 .52 3.94 1.52 5.66L.62 23.25l5.65-1.48a11.3 11.3 0 005.77 1.47h.01c6.25 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.31-8.01z" />
            </svg>
          }
        />
        <Card href={contact.emailHref} label="Email" value={contact.email} icon={svg("M4 6h16v12H4zM4 7l8 6 8-6")} />
      </div>
    </div>
  </section>
);

export default ContactHero;
