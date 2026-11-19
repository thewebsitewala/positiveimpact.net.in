import type { ReactNode } from "react";
import type { Course } from "@/lib/courses";
import { contact } from "@/lib/site";
import { EnquireButton } from "../training/enquiry-dialog";
import { wrap } from "../founder/styles";

const Check = () => (
  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-caramel/15 text-caramel">
    <svg viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden>
      <path d="M5 12.5l4.5 4.5L19 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const Block = ({ id, title, children }: { id: string; title: string; children: ReactNode }) => (
  <section id={id} aria-labelledby={`${id}-h`} className="scroll-mt-28 border-t border-sand pt-10 first:border-0 first:pt-0">
    <h2 id={`${id}-h`} className="text-2xl font-medium tracking-tight text-espresso md:text-[1.75rem]">
      {title}
    </h2>
    <div className="mt-6">{children}</div>
  </section>
);

/** Main course content with a sticky "At a glance" card beside it. */
const CourseBody = ({ course }: { course: Course }) => {
  const glance = [
    course.duration && { label: "Duration", value: course.duration },
    course.formats.length > 0 && { label: "Format", value: course.formats.join(", ") },
    course.modules.length > 0 && { label: "Modules", value: String(course.modules.length) },
    course.audience.length > 0 && { label: "For", value: course.audience.slice(0, 3).join(", ") + (course.audience.length > 3 ? " +" : "") },
  ].filter(Boolean) as { label: string; value: string }[];

  return (
    <section aria-label="Course details" className="bg-white py-16 md:py-24">
      <div className={`${wrap} grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20`}>
        <div className="max-w-3xl space-y-12">
          {(course.intro.length > 0 || course.quote) && (
            <Block id="overview" title="Overview">
              <div className="space-y-4 text-[15.5px] leading-[1.8] text-walnut">
                {course.intro.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              {course.quote && (
                <figure className="mt-8 rounded-2xl bg-cream p-6 md:p-8">
                  <blockquote className="text-lg font-light italic leading-relaxed text-espresso md:text-xl">
                    &ldquo;{course.quote.text}&rdquo;
                  </blockquote>
                  {course.quote.author && (
                    <figcaption className="mt-3 text-[13px] font-medium text-caramel">{course.quote.author}</figcaption>
                  )}
                </figure>
              )}
            </Block>
          )}

          {course.audience.length > 0 && (
            <Block id="audience" title="Who should attend">
              <ul className="flex flex-wrap gap-2.5">
                {course.audience.map((a) => (
                  <li key={a} className="rounded-full border border-sand bg-cream px-4 py-2 text-[14px] text-espresso">
                    {a}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {course.objectives.length > 0 && (
            <Block id="objectives" title="What participants will learn">
              <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {course.objectives.map((o) => (
                  <li key={o} className="flex gap-3.5 text-[15px] leading-relaxed text-espresso">
                    <Check />
                    {o}
                  </li>
                ))}
              </ul>
            </Block>
          )}

          {course.modules.length > 0 && (
            <Block id="modules" title={`Course modules (${course.modules.length})`}>
              <ol className="grid gap-x-8 sm:grid-cols-2">
                {course.modules.map((m, i) => (
                  <li key={m} className="flex items-baseline gap-4 border-b border-sand py-4 text-[15px] text-espresso">
                    <span className="w-6 shrink-0 text-[12px] font-medium tabular-nums text-caramel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {m}
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {course.certification && course.certification.length > 0 && (
            <Block id="certification" title="How to earn the certificate">
              <ol className="space-y-4">
                {course.certification.map((step, i) => (
                  <li key={step} className="flex gap-4 rounded-2xl border border-sand bg-cream/60 p-5">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-espresso text-[13px] font-medium text-white">
                      {i + 1}
                    </span>
                    <span className="pt-1 text-[15px] leading-relaxed text-espresso">{step}</span>
                  </li>
                ))}
              </ol>
            </Block>
          )}

          {(course.methods.length > 0 || course.notes.length > 0) && (
            <Block id="method" title="How it's taught">
              {course.methods.length > 0 && (
                <ul className="flex flex-wrap gap-2.5">
                  {course.methods.map((m) => (
                    <li key={m} className="rounded-full bg-espresso px-4 py-2 text-[14px] text-white">
                      {m}
                    </li>
                  ))}
                </ul>
              )}
              {course.notes.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {course.notes.map((n) => (
                    <li key={n} className="flex gap-3.5 text-[15px] leading-relaxed text-walnut">
                      <Check />
                      {n}
                    </li>
                  ))}
                </ul>
              )}
            </Block>
          )}
        </div>

        {/* At a glance (sticky on desktop) */}
        <aside className="lg:sticky lg:top-28 lg:self-start">
          <div className="rounded-3xl border border-sand bg-cream/60 p-6 sm:p-7">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-caramel">At a glance</p>
            <dl className="mt-5 divide-y divide-sand">
              {glance.map((g) => (
                <div key={g.label} className="grid grid-cols-[5.5rem_1fr] gap-3 py-3.5 first:pt-0">
                  <dt className="text-[13px] text-walnut/70">{g.label}</dt>
                  <dd className="text-[14px] font-medium leading-snug text-espresso">{g.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-[13px] leading-relaxed text-walnut">
              Every course is tailored to your team, its level and its goals.
            </p>
            <EnquireButton
              training={course.title}
              className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-full bg-espresso text-sm font-medium text-white transition hover:-translate-y-px hover:bg-ink active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
            >
              Request course outline
            </EnquireButton>
            <a
              href={contact.phoneHref}
              className="mt-3 inline-flex h-12 w-full items-center justify-center rounded-full border border-sand bg-white text-sm font-medium text-espresso transition hover:border-walnut/40"
            >
              Call {contact.phone}
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CourseBody;
