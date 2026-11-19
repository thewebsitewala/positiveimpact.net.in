import { founder } from "@/lib/founder";
import { eyebrow, h2, wrap, type Tone } from "./styles";

/** Keynote topics in two numbered lists. */
const FounderKeynotes = ({ tone = "bg-white" }: { tone?: Tone }) => (
  <section aria-labelledby="keynotes-heading" className={`${tone} py-20 md:py-28`}>
    <div className={wrap}>
      <p className={eyebrow}>Speaking</p>
      <h2 id="keynotes-heading" className={h2}>
        Keynote topics
      </h2>

      <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-16">
        {Object.entries(founder.keynotes).map(([group, topics]) => (
          <div key={group}>
            <h3 className="text-lg font-medium tracking-tight text-espresso">{group}</h3>
            <ol className="mt-4 border-t border-sand">
              {topics.map((t, i) => (
                <li
                  key={t}
                  className="flex items-baseline gap-4 border-b border-sand py-3.5 text-[15px] text-espresso"
                >
                  <span className="w-6 shrink-0 text-[12px] tabular-nums text-caramel">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {t}
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FounderKeynotes;
