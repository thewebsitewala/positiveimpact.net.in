import { team } from "@/lib/about";
import TeamCard from "./team-card";
import { eyebrow, h2, type Tone } from "../founder/styles";

/** Meet the team: one card per person. */
const AboutTeam = ({ tone = "bg-cream" }: { tone?: Tone }) => (
  <section
    id="team"
    aria-labelledby="team-heading"
    className={`scroll-mt-24 ${tone} py-20 md:py-28`}
  >
    <div className={"mx-auto max-w-[1300px] px-6 md:px-12 lg:px-20"}>
      <div className="mx-auto max-w-2xl text-center">
        <p className={eyebrow}>Our team</p>
        <h2 id="team-heading" className={h2}>
          The people behind every program
        </h2>
      </div>

      {/* items-start: opening one card's bio doesn't stretch the others. */}
      <ul className="mt-14 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
        {team.map((m) => (
          <TeamCard key={m.name} member={m} />
        ))}
      </ul>
    </div>
  </section>
);

export default AboutTeam;
