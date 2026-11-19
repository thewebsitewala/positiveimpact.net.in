import { founder } from "@/lib/founder";
import { eyebrow, h2, wrap, type Tone } from "./styles";

/** Line icons (24px grid) for the credentials list. */
const credentialIcons: Record<string, string> = {
  degree: "M2 9l10-5 10 5-10 5-10-5zM6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5M22 9v5", // graduation cap
  award: "M12 15a6 6 0 100-12 6 6 0 000 12zM8.5 13.5L7 21l5-3 5 3-1.5-7.5", // award ribbon
  strategy: "M3 20h18M6 16v-4M11 16V8M16 16v-6M20 5l-4 4-3-3-4 4", // chart
  assess:
    "M9 4h6v3H9zM8 5H6a1 1 0 00-1 1v14a1 1 0 001 1h12a1 1 0 001-1V6a1 1 0 00-1-1h-2M9 14l2 2 4-4", // clipboard check
  research: "M12 6c-2-1.5-5-2-8-2v14c3 0 6 .5 8 2 2-1.5 5-2 8-2V4c-3 0-6 .5-8 2zM12 6v14", // open book
};

/** Her story, credentials, and the companies she led at before. */
const FounderStory = ({ tone = "bg-white" }: { tone?: Tone }) => (
  <section aria-labelledby="story-heading" className={`${tone} py-20 md:py-28`}>
    <div className={`${wrap} grid gap-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-24`}>
      <div>
        <p className={eyebrow}>Her story</p>
        <h2 id="story-heading" className={h2}>
          From the corporate floor to the training room
        </h2>
        <div className="mt-6 space-y-4 text-[15px] leading-[1.8] text-walnut">
          {founder.story.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>

        <h3 className="mt-8 text-[13px] font-medium uppercase tracking-wider text-walnut/70">
          Credentials
        </h3>
        <ul className="mt-4 grid gap-x-8 gap-y-5 sm:grid-cols-2">
          {founder.credentials.map((c) => (
            <li key={c.title} className="flex gap-3.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-cream text-caramel">
                <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                  <path d={credentialIcons[c.icon]} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <div>
                <p className="text-[14px] font-medium leading-snug text-espresso">{c.title}</p>
                <p className="mt-0.5 text-[13px] leading-snug text-walnut/80">{c.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <div className="rounded-3xl border border-sand p-7 sm:p-9">
          <h3 className="text-lg font-medium tracking-tight text-espresso">Where she led before</h3>
          <ul className="mt-5">
            {founder.companies.map((c) => (
              <li
                key={c}
                className="flex items-center justify-between border-b border-sand/75 py-4 text-[15px] text-espresso last:border-0"
              >
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default FounderStory;
