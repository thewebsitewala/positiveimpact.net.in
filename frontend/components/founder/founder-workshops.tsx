import { founder } from "@/lib/founder";
import WorkshopCard from "./workshop-card";
import { eyebrow, h2, wrap, type Tone } from "./styles";

/** Four workshop categories, each with an expandable list. */
const FounderWorkshops = ({ tone = "bg-cream" }: { tone?: Tone }) => (
  <section
    id="workshops"
    aria-labelledby="workshops-heading"
    className={`scroll-mt-24 ${tone} py-20 md:py-28`}
  >
    <div className={wrap}>
      <p className={eyebrow}>Workshops</p>
      <h2 id="workshops-heading" className={h2}>
        Workshops she designs and leads
      </h2>
      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {founder.workshops.map((w) => (
          <WorkshopCard key={w.title} title={w.title} items={w.items} preview={6} />
        ))}
      </div>
    </div>
  </section>
);

export default FounderWorkshops;
