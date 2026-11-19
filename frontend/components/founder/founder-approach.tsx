import { founder } from "@/lib/founder";
import { eyebrow, h2, wrap, type Tone } from "./styles";

/** The Be-Do-Have coaching model and the frameworks she draws on. */
const FounderApproach = ({ tone = "bg-cream" }: { tone?: Tone }) => {
  // Chips contrast with whichever background the section sits on.
  const chip = tone === "bg-cream" ? "bg-white" : "bg-cream";

  return (
    <section aria-labelledby="approach-heading" className={`${tone} py-20 md:py-28`}>
      <div className={wrap}>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className={eyebrow}>Coaching approach</p>
            <h2 id="approach-heading" className={h2}>
              The Be-Do-Have model
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-walnut md:text-base">
              As a Leadership Impact coach, Harshita works on behavioural
              transformation. Her coaching links a change in mindset to a
              change in behaviour, and that change in behaviour to results.
            </p>
          </div>

          <ol className="grid gap-px overflow-hidden rounded-3xl border border-sand bg-sand sm:grid-cols-3">
            {founder.beDoHave.map((s, i) => (
              <li key={s.step} className="relative bg-white p-7 sm:p-8">
                <span className="text-[13px] tabular-nums text-walnut/60">Step {i + 1}</span>
                <p className="mt-6 text-5xl font-medium tracking-tight text-espresso md:text-6xl">{s.step}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-walnut">{s.text}</p>
                {i < founder.beDoHave.length - 1 && (
                  <span aria-hidden className="absolute right-6 top-7 hidden text-caramel sm:block">
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>
        </div>

        <div className="mt-10">
          <p className="text-[13px] font-medium uppercase tracking-wider text-walnut/70">
            Frameworks she draws on
          </p>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {founder.frameworks.map((f) => (
              <li key={f} className={`rounded-full border border-sand ${chip} px-4 py-2 text-[14px] text-espresso`}>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FounderApproach;
