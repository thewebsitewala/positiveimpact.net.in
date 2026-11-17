import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";

const stats = [
  { value: "23,000+", label: "Lives touched" },
  { value: "12,500+", label: "Hours of facilitation" },
  { value: "23+", label: "Years of practice" },
];

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

const Hero = () => {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh w-full flex-col overflow-hidden bg-ink text-white"
    >
      {/* Mobile: photo as a top band. lg+: full-bleed background. */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[52svh] lg:inset-0 lg:h-auto">
        <Image
          src="/hero-flipped.png"
          alt="A Positive Impact facilitator leading a workshop with a group of corporate employees"
          fill
          priority
          sizes="100vw"
          className=" object-cover object-[78%_center] lg:object-[70%_center]"
        />
        {/* Mobile: fade the photo into the dark ground below it */}
        <div className="absolute inset-0 bg-linear-to-b from-ink/60 via-ink/10 to-ink lg:hidden" />
        {/* Mobile: top overlay so the header stays legible over the photo */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-ink/90 via-ink/50 to-transparent lg:hidden" />
        {/* lg+: darken the left, where the text sits */}
        <div className="absolute inset-0 hidden bg-linear-to-r from-ink via-ink/70 to-ink/40 lg:block" />
      </div>

      <div className="mx-auto flex w-full flex-1 flex-col px-6 pb-8 pt-[44svh] md:px-12 md:pb-14 lg:pt-28 lg:px-20">
        {/* Headline block: below the photo on mobile, vertically centred on lg+ */}
        <div className="flex flex-1 items-start lg:items-center">
          <div className="max-w-xl">
            <h1
              id="hero-title"
              className="enter text-[clamp(1.75rem,8vw,2.25rem)] font-medium leading-[1.1] tracking-[-0.025em] md:text-5xl lg:text-[3.5rem]"
              style={delay(0)}
            >
              Leadership, built
              <br />
              one thought at a time
            </h1>

            <p
              className="enter mt-5 max-w-md text-[15px] font-light leading-relaxed text-white/70 md:text-base"
              style={delay(120)}
            >
              Customized programs for HR and L&amp;D teams, from first-time
              managers to CXOs. In-person, virtual or outdoors.
            </p>

            <div
              className="enter mt-8 flex flex-wrap items-center gap-x-6 gap-y-4"
              style={delay(240)}
            >
              <Link
                href="#best-sellers"
                className="inline-flex h-12 w-full items-center justify-center rounded-full sm:h-11 sm:w-auto bg-white px-6 text-sm font-medium text-ink transition hover:-translate-y-px hover:bg-sand active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
              >
                Get a customized workshop
              </Link>
            </div>
          </div>
        </div>

        {/* Proof, bottom left */}
        <dl
          className="enter mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-5 md:gap-12 lg:mt-0 lg:border-0 lg:pt-0"
          style={delay(360)}
        >
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-lg font-medium tracking-tight md:text-xl">
                {s.value}
              </dd>
              <dd className="mt-1 text-xs text-white/55">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
