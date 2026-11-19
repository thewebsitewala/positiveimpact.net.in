import { learningSteps, philosophy, tbar } from "@/lib/about";
import { eyebrow, h2, wrap, type Tone } from "../founder/styles";

/** The T-BAR model and the four-step experiential learning process. */
const AboutApproach = ({ tone = "bg-white" }: { tone?: Tone }) => (
  <section aria-labelledby="approach-heading" className={`${tone} py-20 md:py-28`}>
    <div className={wrap}>
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-20">
        <div>
          <p className={eyebrow}>Our approach</p>
          <h2 id="approach-heading" className={h2}>
            The T-BAR model
          </h2>
        </div>
        <p className="max-w-xl text-[15px] leading-relaxed text-walnut md:text-base">
          Results come from actions, actions from behaviour, and behaviour from
          thinking. {philosophy.line} So we first shift people&apos;s will to act,
          then build the skill to do it well.
        </p>
      </div>

      {/* Thoughts -> Behaviour -> Action -> Results */}
      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {tbar.map((s, i) => (
          <li key={s.letter} className="relative rounded-2xl border border-sand bg-white p-6 sm:p-7">
            <div className="flex items-center justify-between">
              <span className="flex size-12 items-center justify-center rounded-full bg-espresso text-xl font-medium text-white">
                {s.letter}
              </span>
              <span className="text-[13px] tabular-nums text-walnut/60">0{i + 1}</span>
            </div>
            <h3 className="mt-8 text-lg font-medium tracking-tight text-espresso">{s.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-walnut">{s.text}</p>
            {i < tbar.length - 1 && (
              <span
                aria-hidden
                className="absolute -right-3 top-1/2 z-10 hidden size-6 -translate-y-1/2 items-center justify-center rounded-full bg-caramel text-[12px] text-white lg:flex"
              >
                →
              </span>
            )}
          </li>
        ))}
      </ol>

      {/* Learning process */}
      <div className="mt-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <h3 className="text-2xl font-medium tracking-tight text-espresso md:text-[1.75rem]">
            How every session runs
          </h3>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-walnut md:text-base">
            Our delivery moves from the inside out. Every program follows the
            same four-step experiential process.
          </p>
        </div>
        <ol className="border-t border-sand">
          {learningSteps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-sand py-6">
              <span className="text-[13px] font-medium tabular-nums text-caramel">
                Step {i + 1}
              </span>
              <div>
                <h4 className="text-[17px] font-medium tracking-tight text-espresso">{s.title}</h4>
                <p className="mt-1.5 text-[15px] leading-relaxed text-walnut">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default AboutApproach;
