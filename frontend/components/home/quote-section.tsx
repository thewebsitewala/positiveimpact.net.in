import type { FC } from "react";

const QuoteSection: FC = () => {
  return (
    <section
      id="ideology-quote"
      aria-label="Positive Impact Ideology"
      className="relative isolate overflow-hidden bg-ink text-white py-16 md:py-20 lg:py-24"
    >
      {/* Ambient background warm glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-caramel/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-caramel/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Decorative Serif Quote Mark */}
          <div
            aria-hidden="true"
            className="mb-2 text-5xl font-serif leading-none text-caramel/40 sm:text-6xl md:text-7xl select-none"
          >
            “
          </div>

          {/* Main Quote */}
          <blockquote className="text-[22px] font-medium tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[40px] leading-[1.3]">
            “Leadership is about making others better as a result of your
            presence and making sure, that{" "}
            <span className="text-caramel font-semibold">
              &lsquo;YOUR POSITIVE IMPACT&rsquo;
            </span>{" "}
            lasts in your absence.”
          </blockquote>

          {/* Delicate Caramel Divider */}
          <div className="mx-auto my-7 h-px w-16 bg-caramel/50 sm:my-8 sm:w-20" />

          {/* Attribution / Subtitle */}
          <p className="text-xs font-semibold tracking-[0.2em] text-sand/85 uppercase sm:text-sm">
            Our Ideology Inspired by Sheryl Sandberg
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
