import Image from "next/image";
import Link from "next/link";
import { founder } from "@/lib/founder";
import { KEYNOTE } from "@/lib/site";
import HeroBackdrop from "../training/hero-backdrop";
import LinkedInButton from "../linkedin-button";
import { EnquireButton } from "../training/enquiry-dialog";
import { wrap } from "./styles";

const primaryBtn =
  "inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-ink transition hover:-translate-y-px hover:bg-sand active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel";

const FounderHero = () => (
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
            Founder
          </li>
        </ol>
      </nav>
    </div>
    <div className={`${wrap} mt-8 grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20`}>
      <div>
        <p className="text-[13px] font-medium text-sand">{founder.role}</p>
        <h1 className="mt-3 text-4xl font-medium leading-[1.08] tracking-[-0.025em] md:text-5xl lg:text-[3.4rem]">
          {founder.name}
        </h1>
        <p className="mt-6 border-l-2 border-caramel pl-5 text-lg font-light italic leading-snug text-white/90 md:text-xl">
          &ldquo;{founder.tagline}&rdquo;
        </p>
        <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
          {founder.intro}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <EnquireButton training={KEYNOTE} className={primaryBtn}>
            Book Harshita for a keynote
          </EnquireButton>
          <LinkedInButton />
        </div>

        <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 md:gap-8">
          {founder.stats.map((s) => (
            <div key={s.label}>
              <dd className="text-2xl font-medium tracking-tight md:text-3xl">{s.value}</dd>
              <dt className="mt-1.5 text-[12px] leading-snug text-white/55 md:text-[13px]">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      {/* Portrait. On mobile it comes first, above the name. */}
      <div className="relative order-first mx-auto w-full max-w-sm pb-10 lg:order-none lg:max-w-none">
        <div className="relative aspect-[4/4.3] overflow-hidden rounded-3xl bg-[#f4e0c7] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] sm:aspect-[4/4.5]">
          <Image
            src="/harshita-mankad-varghese.png"
            alt="Portrait of Harshita Mankad Varghese"
            fill
            priority
            sizes="(min-width: 1024px) 38vw, 90vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/15" />
        </div>
        <div className="absolute bottom-0 left-6 max-w-[16rem] rounded-2xl border border-white/15 bg-ink/70 p-4 shadow-2xl backdrop-blur-xl">
          <p className="text-[11px] uppercase tracking-wider text-white/50">Certified Senior Trainer</p>
          <p className="mt-1 text-[14px] leading-snug text-white">Dale Carnegie, USA</p>
        </div>
      </div>
    </div>
  </section>
);

export default FounderHero;
