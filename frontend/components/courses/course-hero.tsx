import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";
import { courseImage } from "@/lib/course-images";
import { contact } from "@/lib/site";
import { EnquireButton } from "../training/enquiry-dialog";
import { wrap } from "../founder/styles";

/**
 * Course hero: a full-bleed photo with the title anchored bottom-left and a
 * frosted facts bar along the bottom (distinct from the split training hero).
 */
const CourseHero = ({ course }: { course: Course }) => {
  const facts = [
    course.duration && { label: "Duration", value: course.duration },
    course.formats.length > 0 && {
      label: "Format",
      value: course.formats.join(" · "),
    },
    course.modules.length > 0 && {
      label: "Modules",
      value: `${course.modules.length} modules`,
    },
    course.audience.length > 0 && {
      label: "Who it's for",
      value:
        course.audience.slice(0, 2).join(", ") +
        (course.audience.length > 2 ? " & more" : ""),
    },
  ].filter(Boolean) as { label: string; value: string }[];

  const cols =
    facts.length >= 4
      ? "lg:grid-cols-4"
      : facts.length === 3
        ? "lg:grid-cols-3"
        : "lg:grid-cols-2";

  const crumbs = (
    <nav aria-label="Breadcrumb" className="text-[13px] text-white/60">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
        </li>
        <li aria-hidden>/</li>
        <li>
          <Link
            href="/courses"
            className="transition-colors hover:text-white"
          >
            Courses
          </Link>
        </li>
        <li aria-hidden>/</li>
        <li aria-current="page" className="text-white/85">
          {course.title}
        </li>
      </ol>
    </nav>
  );

  return (
    <section className="relative isolate flex flex-col overflow-hidden bg-ink text-white lg:min-h-[92svh]">
      {/* Photo + legibility layers. Below lg the photo is a top band that fades
          into the dark ground (a wide photo can't fill a tall phone screen). */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[50svh] sm:h-[56svh] lg:inset-0 lg:h-auto">
        <Image
          src={courseImage(course.slug)}
          alt={`${course.title} workshop by Positive Impact`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-ink/50 via-ink/15 to-ink lg:hidden" />
        <div className="absolute inset-0 hidden bg-linear-to-t from-ink via-ink/75 to-ink/25 lg:block" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-ink/80 to-transparent" />
      </div>

      {/* Spacer under the header; the breadcrumb sits here on desktop only.
          On smaller screens it moves below the photo, above the category. */}
      <div className={`${wrap} w-full pt-28 md:pt-32`}>
        <div className="hidden lg:block">{crumbs}</div>
      </div>

      {/* Title block, anchored to the bottom */}
      <div
        className={`${wrap} mt-[calc(46svh-7rem)] w-full pb-8 sm:mt-[calc(52svh-7rem)] md:mt-[calc(52svh-8rem)] md:pb-10 lg:mt-auto lg:pt-16`}
      >
        <div className="max-w-3xl">
          <div className="mb-5 lg:hidden">{crumbs}</div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] font-medium uppercase tracking-wider text-sand backdrop-blur-md">
              <span className="size-1.5 rounded-full bg-caramel" aria-hidden />
              {course.category}
            </span>
            {course.bestseller && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-caramel px-3.5 py-1.5 text-[12px] font-semibold uppercase tracking-wider text-white">
                <svg viewBox="0 0 20 20" className="size-3.5" fill="currentColor" aria-hidden>
                  <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
                </svg>
                Bestseller
              </span>
            )}
          </div>
          <h1 className="mt-5 text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-balance md:text-6xl lg:text-[4.25rem]">
            {course.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-white/75 md:text-lg">
            {course.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <EnquireButton
              training={course.title}
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-sm font-medium text-ink transition hover:-translate-y-px hover:bg-sand active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
            >
              Request course outline
              <span
                aria-hidden
                className="flex size-9 items-center justify-center rounded-full bg-caramel text-white transition-transform duration-300 group-hover:-rotate-45"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="size-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </EnquireButton>
            <a
              href={contact.phoneHref}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white/60 active:scale-[0.98]"
            >
              Call for in-house delivery
            </a>
          </div>
        </div>

        {/* Facts bar */}
        {facts.length > 0 && (
          <dl
            className={`mt-12 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.07] backdrop-blur-xl ${cols}`}
          >
            {facts.map((f, i) => (
              <div
                key={f.label}
                className={`px-5 py-5 sm:px-7 sm:py-6 ${i > 0 ? "lg:border-l lg:border-white/10" : ""} ${
                  i % 2 === 1 ? "border-l border-white/10 lg:border-l" : ""
                } ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""}`}
              >
                <dt className="text-[11px] font-medium uppercase tracking-wider text-white/50">
                  {f.label}
                </dt>
                <dd className="mt-2 text-[15px] font-medium leading-snug text-white md:text-base">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
};

export default CourseHero;
