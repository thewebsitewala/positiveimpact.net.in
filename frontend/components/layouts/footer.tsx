import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";
import CurrentYear from "./date";

const programs = [
  { label: "High Impact Leadership", href: "/#best-sellers" },
  { label: "First Time Managers", href: "/#best-sellers" },
  { label: "Business Storytelling", href: "/#best-sellers" },
  { label: "Emotional Intelligence", href: "/#best-sellers" },
  { label: "High Performance Teams", href: "/#best-sellers" },
  {
    label: "Women in Leadership",
    href: "/#best-sellers",
  },
];

const formats = [
  { label: "Experiential Classrooms", href: "/#gallery-showcase" },
  { label: "Virtual Live Online", href: "/#gallery-showcase" },
  { label: "Out-Bound Expeditions", href: "/#gallery-showcase" },
  { label: "Leadership with Horses", href: "/#gallery-showcase" },
  { label: "Executive Retreats", href: "/#gallery-showcase" },
];

const pages = [
  { label: "About Positive Impact", href: "/#meet-founder" },
  { label: "Training Speciality", href: "/#training-speciality" },
  { label: "Best Sellers", href: "/#best-sellers" },
  { label: "Master Trainer Certification", href: "/#meet-founder" },
  { label: "Voice of Participants", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/positiveimpactleadership",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/positiveimpactleadership",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/harshita_mv",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/positiveimpactleadership",
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.085.195v3.425h-1.932c-1.808 0-2.42.868-2.42 2.378v1.458h4.212l-.567 3.667h-3.645v7.98H9.101z" />
      </svg>
    ),
  },
];

const policyLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  {
    label: "Refund & Cancellation Policy",
    href: "/refund-and-cancellation-policy",
  },
];

const Footer: FC = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-[#120C08] text-white">
      {/* Top CTA Section (Matching Reference Layout) */}
      <div className="relative border-b border-white/10 py-16 sm:py-20 lg:py-28">
        {/* Subtle Ambient Radial Glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-caramel/15 blur-[120px]"
        />

        <div className="relative mx-auto max-w-[1600px] px-6 text-center md:px-12 lg:px-20">
          <span className="text-[11px] font-semibold tracking-wider text-caramel uppercase">
            Transform Your Leadership Culture
          </span>

          <h2 className="mt-3 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl leading-[1.15] max-w-3xl mx-auto">
            Ready to Build Leaders Who Drive Measurable Business Impact?
          </h2>

          <p className="mt-4 text-xs font-normal leading-relaxed text-sand/80 sm:text-sm max-w-xl mx-auto">
            Field-tested corporate workshops, experiential learning, and
            executive coaching customized to your organization&apos;s strategic
            goals.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/#best-sellers"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-semibold text-espresso transition-all hover:bg-caramel hover:text-white active:scale-95 shadow-md"
            >
              Get a Customized Workshop
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Giant Watermark Text (Centered in Background - Matching Reference) */}
        <div
          aria-hidden="true"
          className="hidden md:block pointer-events-none mt-12 sm:mt-16 w-full select-none overflow-hidden text-center"
        >
          <span className="inline-block text-[11vw] font-black uppercase tracking-tight text-white/[0.04] leading-none whitespace-nowrap">
            POSITIVE IMPACT
          </span>
        </div>
      </div>

      {/* Main Footer Links & Contact Grid */}
      <div className="mx-auto max-w-[1600px] px-6 py-14 md:px-12 md:py-16 lg:px-20 lg:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8">
          {/* Brand Info & Address (Spans 2 columns on lg) */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="inline-block text-xl font-semibold tracking-tight text-white"
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

            <p className="mt-3 text-xs leading-relaxed text-sand/75 max-w-sm">
              Changing behaviour one thought at a time. Designing and delivering
              customized corporate leadership workshops, managerial mastery, and
              experiential interventions.
            </p>

            {/* Direct Contact Details */}
            <div className="mt-6 space-y-2.5 text-xs text-sand/80">
              <div className="flex items-start gap-2.5">
                <span className="text-caramel shrink-0 mt-0.5">📍</span>
                <span>
                  #696, 9th A Main, 1st Stage Indiranagar, Bengaluru 560038,
                  India
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-caramel shrink-0">📞</span>
                <a
                  href="tel:+919980514510"
                  className="hover:text-caramel transition-colors"
                >
                  +91 99805 14510
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-caramel shrink-0">✉️</span>
                <a
                  href="mailto:enquiries@positiveimpact.net.in"
                  className="hover:text-caramel transition-colors"
                >
                  enquiries@positiveimpact.net.in
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Programs
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-sand/75">
              {programs.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-caramel transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Formats */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Formats
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-sand/75">
              {formats.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-caramel transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Pages / Explore */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5 text-xs text-sand/75">
              {pages.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="hover:text-caramel transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Social Media & Hours */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-white uppercase">
              Connect
            </h3>

            {/* Social Icons */}
            <div className="mt-4 flex items-center gap-2.5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sand/80 transition-all hover:border-caramel hover:bg-caramel hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>

            <div className="mt-5 text-[11px] leading-relaxed text-sand/65">
              <span className="block font-medium text-sand/85">
                Office Hours:
              </span>
              Mon–Fri 9 AM–6 PM <br />
              Sat 9 AM–2 PM
            </div>
          </div>
        </div>

        {/* Bottom Legal / Policy Bar */}
        <div className="mt-14 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 text-xs text-sand/60 sm:flex-row">
          <p>
            © <CurrentYear /> POSITIVE IMPACT®. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {policyLinks.map((policy) => (
              <Link
                key={policy.label}
                href={policy.href}
                className="hover:text-caramel transition-colors"
              >
                {policy.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
