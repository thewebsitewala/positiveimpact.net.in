import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getTraining, learningProcess, trainings } from "@/lib/trainings";
import { contact } from "@/lib/site";
import {
  EnquireButton,
} from "../../../../components/training/enquiry-dialog";
import EnquirySection from "../../../../components/training/enquiry-section";
import HeroBackdrop from "../../../../components/training/hero-backdrop";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return trainings.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata(
  props: PageProps<"/training/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const t = getTraining(slug);
  if (!t) return {};
  return pageMeta({
    title: `${t.title} Training for Corporate Teams`,
    description: t.seoDescription,
    path: `/training/${t.slug}`,
    image: t.image,
    imageAlt: `${t.title} session by Positive Impact`,
  });
}

const Check = () => (
  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-caramel/15 text-caramel">
    <svg
      viewBox="0 0 24 24"
      className="size-3.5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      aria-hidden
    >
      <path
        d="M5 12.5l4.5 4.5L19 7.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </span>
);

const eyebrow =
  "text-[12px] font-semibold uppercase tracking-wider text-caramel";
const h2 =
  "mt-3 text-3xl font-medium leading-[1.15] tracking-tight text-espresso md:text-4xl";
const wrap = "mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20";

export default async function TrainingPage(
  props: PageProps<"/training/[slug]">,
) {
  const { slug } = await props.params;
  const t = getTraining(slug);
  if (!t) notFound();

  const others = trainings.filter((o) => o.slug !== t.slug).slice(0, 3);

  // Alternate cream / white down the page whichever optional sections exist.
  const processTone = t.skills || t.courses ? "bg-white" : "bg-cream";
  const enquiryTone =
    t.quote || processTone === "bg-white" ? "bg-cream" : "bg-white";
  const moreTone = enquiryTone === "bg-cream" ? "bg-white" : "bg-cream";

  return (
    <>
      <main id="main">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-40">
          <HeroBackdrop />
          <div
            className={`${wrap} grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20`}
          >
            <div className="order-2 lg:order-1">
              <nav
                aria-label="Breadcrumb"
                className="text-[13px] text-white/50"
              >
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link
                      href="/"
                      className="transition-colors hover:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li>
                    <Link
                      href="/training"
                      className="transition-colors hover:text-white"
                    >
                      Trainings
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li aria-current="page" className="text-white/80">
                    {t.title}
                  </li>
                </ol>
              </nav>

              <h1 className="mt-6 text-3xl font-medium leading-[1.08] tracking-[-0.025em] md:text-5xl lg:text-[3.5rem]">
                {t.title}
              </h1>
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
                {t.tagline}
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <EnquireButton
                  training={t.title}
                  className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-ink transition hover:-translate-y-px hover:bg-sand active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
                >
                  Enquire about this program
                </EnquireButton>
                <a
                  href={contact.phoneHref}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-medium text-white transition hover:border-white/50 active:scale-[0.98]"
                >
                  Call {contact.phone}
                </a>
              </div>

              <dl className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
                {t.facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-[12px] uppercase tracking-wider text-white/45">
                      {f.label}
                    </dt>
                    <dd className="mt-1.5 text-[15px] font-medium text-white">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="relative order-1 lg:order-2">
              {/* Glow + offset panel behind the photo for depth */}
              {/* <div
                aria-hidden
                className="absolute -right-6 top-6 h-2/3 w-2/3 rounded-full bg-caramel/25 blur-[90px]"
              /> */}
              {/* <div
                aria-hidden
                className="absolute bottom-2 left-2 right-8 top-10 rounded-3xl border border-white/10 bg-linear-to-br from-caramel/25 via-walnut/20 to-transparent"
              /> */}

              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)] lg:aspect-[4/3.75]">
                <Image
                  src={t.image}
                  alt={`${t.title} session by Positive Impact`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-ink/50 via-transparent to-transparent" />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/15" />
                {/* <span className="absolute right-4 top-4 inline-flex items-center gap-2 rounded-full bg-ink/50 px-3 py-1.5 text-[12px] font-medium text-white backdrop-blur-md">
                  <span className="size-1.5 rounded-full bg-caramel" />
                  {t.formats[0]}
                </span> */}
              </div>

              {/* Floating card overlapping the photo's corner */}
              {/* <div className="absolute bottom-0 left-0 hidden max-w-[17rem] rounded-2xl sm:block border border-white/15 bg-ink/70 p-4 shadow-2xl backdrop-blur-xl sm:max-w-xs sm:p-5">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-caramel text-white">
                    <svg
                      viewBox="0 0 24 24"
                      className="size-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      aria-hidden
                    >
                      <path
                        d="M5 12.5l4.5 4.5L19 7.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-white/50">
                      {t.skills ? "Objective" : "What you get"}
                    </p>
                    <p className="mt-1 text-[14px] leading-snug text-white">
                      {t.highlights[0]}
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* Overview + highlights */}
        <section
          aria-labelledby="overview-heading"
          className="bg-white py-20 md:py-28"
        >
          <div className={`${wrap} grid gap-14 lg:grid-cols-2 lg:gap-24`}>
            <div>
              <p className={eyebrow}>About the program</p>
              <h2 id="overview-heading" className={h2}>
                What this program is about
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-[1.8] text-walnut md:text-base">
                {t.intro.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
              <div className="mt-10 rounded-2xl bg-cream p-6">
                <p className="text-[13px] font-medium uppercase tracking-wider text-walnut/70">
                  Who it&apos;s for
                </p>
                <p className="mt-2 text-[15px] leading-relaxed text-espresso">
                  {t.audience}
                </p>
              </div>
            </div>

            <div className="lg:pt-10">
              <div className="rounded-3xl border border-sand p-7 sm:p-10">
                <h3 className="text-xl font-medium tracking-tight text-espresso">
                  {t.skills ? "Training objectives" : "What your team gets"}
                </h3>
                <ul className="mt-7 space-y-5">
                  {t.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-4 text-[15px] leading-relaxed text-espresso"
                    >
                      <Check />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-sand pt-6">
                  <p className="text-[13px] font-medium uppercase tracking-wider text-walnut/70">
                    Formats
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {t.formats.map((f) => (
                      <li
                        key={f}
                        className="rounded-full bg-cream px-3.5 py-1.5 text-[13px] text-espresso"
                      >
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills (outdoor programs) */}
        {t.skills && (
          <section
            aria-labelledby="skills-heading"
            className="bg-cream py-20 md:py-28"
          >
            <div className={wrap}>
              <p className={eyebrow}>Core skills</p>
              <h2 id="skills-heading" className={h2}>
                Leadership skills your team builds
              </h2>
              <ul className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-4">
                {t.skills.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-baseline gap-4 bg-white p-6 sm:p-7"
                  >
                    <span className="text-[13px] font-medium tabular-nums text-caramel">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] font-medium text-espresso">
                      {s}
                    </span>
                  </li>
                ))}
                {/* Blank cells so the last row never shows the grid's gap colour. */}
                {Array.from({ length: 3 }, (_, k) => {
                  const n = t.skills!.length;
                  const smFill = n % 2;
                  const lgFill = (4 - (n % 4)) % 4;
                  if (k >= Math.max(smFill, lgFill)) return null;
                  return (
                    <li
                      key={`fill-${k}`}
                      aria-hidden
                      className={`hidden bg-white ${k < smFill ? "sm:block" : ""} ${k < lgFill ? "lg:block" : "lg:hidden"}`}
                    />
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        {/* Courses */}
        {t.courses && (
          <section
            aria-labelledby="courses-heading"
            className="bg-cream py-20 md:py-28"
          >
            <div className={wrap}>
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className={eyebrow}>Courses</p>
                  <h2 id="courses-heading" className={h2}>
                    {t.courses.length} courses in {t.title}
                  </h2>
                </div>
                <p className="max-w-sm text-[15px] leading-relaxed text-walnut">
                  Each course is tailored to your team. Pick one, or combine
                  several into a longer program.
                </p>
              </div>
              <ul className="mt-12 grid gap-x-10 border-t border-sand sm:grid-cols-2 lg:grid-cols-3">
                {t.courses.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 border-b border-sand py-4 text-[15px] text-espresso"
                  >
                    <span
                      className="size-1.5 shrink-0 rounded-full bg-caramel"
                      aria-hidden
                    />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* How it runs */}
        <section
          aria-labelledby="process-heading"
          className={`${processTone} py-20 md:py-28`}
        >
          <div className={wrap}>
            <div className="max-w-2xl">
              <p className={eyebrow}>How it runs</p>
              <h2 id="process-heading" className={h2}>
                Learning that moves from inside out
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-walnut md:text-base">
                We shift how people think before we build how they act. Every
                session follows the same four-step experiential process.
              </p>
            </div>
            <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {learningProcess.map((step, i) => (
                <li
                  key={step.title}
                  className="border-t border-espresso/15 pt-6"
                >
                  <span className="text-[13px] font-medium tabular-nums text-caramel">
                    Step {i + 1}
                  </span>
                  <h3 className="mt-3 text-lg font-medium tracking-tight text-espresso">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-walnut">
                    {step.text}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Quote */}
        {t.quote && (
          <section className="bg-ink py-20 text-white md:py-28">
            <figure className={`${wrap} max-w-4xl text-center`}>
              <blockquote className="text-2xl font-light leading-snug tracking-tight md:text-[2rem]">
                &ldquo;{t.quote.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-sand/70">
                {t.quote.author}
              </figcaption>
            </figure>
          </section>
        )}

        <EnquirySection training={t.title} tone={enquiryTone} />

        {/* Other trainings */}
        <section
          aria-labelledby="more-heading"
          className={`${moreTone} py-20 md:py-28`}
        >
          <div className={wrap}>
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className={eyebrow}>Explore more</p>
                <h2 id="more-heading" className={h2}>
                  Other training specialities
                </h2>
              </div>
              <Link
                href="/training"
                className="hidden shrink-0 text-sm font-medium text-espresso underline-offset-4 hover:underline sm:inline"
              >
                View all trainings →
              </Link>
            </div>
            <ul className="mt-12 grid gap-8 md:grid-cols-3">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/training/${o.slug}`} className="group block">
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                      <Image
                        src={o.image}
                        alt=""
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="mt-5 text-lg font-medium tracking-tight text-espresso">
                      {o.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-walnut">
                      {o.summary}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/training"
              className="mt-10 inline-block text-sm font-medium text-espresso underline underline-offset-4 sm:hidden"
            >
              View all trainings →
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
