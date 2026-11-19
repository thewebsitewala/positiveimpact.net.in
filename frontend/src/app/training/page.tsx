import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { trainings } from "@/lib/trainings";
import {
  EnquireButton,
} from "../../../components/training/enquiry-dialog";
import EnquirySection from "../../../components/training/enquiry-section";
import HeroBackdrop from "../../../components/training/hero-backdrop";

export const metadata: Metadata = {
  title: "Corporate Leadership Trainings | Positive Impact | India",
  description:
    "Six training specialities for corporate teams: managerial skills, leadership impact, communication excellence, sports-based, book-based and equine-assisted leadership programs.",
};

const formats = ["In-person", "Virtual live online", "Outbound", "Blended"];

export default function TrainingsPage() {
  return (
    <>
      <main id="main">
        {/* Intro */}
        <section className="relative isolate overflow-hidden bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-40">
          <HeroBackdrop />
          <div className="mx-auto grid max-w-[1600px] gap-10 px-6 md:px-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20 lg:px-20">
            <div>
              <nav
                aria-label="Breadcrumb"
                className="text-[13px] text-white/50"
              >
                <ol className="flex items-center gap-2">
                  <li>
                    <Link
                      href="/"
                      className="transition-colors hover:text-white"
                    >
                      Home
                    </Link>
                  </li>
                  <li aria-hidden>/</li>
                  <li aria-current="page" className="text-white/80">
                    Trainings
                  </li>
                </ol>
              </nav>
              <h1 className="mt-6 text-4xl font-medium leading-[1.08] tracking-[-0.025em] md:text-5xl lg:text-[3.5rem]">
                Six ways we build
                <br className="hidden sm:block" /> better leaders
              </h1>
              <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
                Every workshop starts from a training needs analysis and is
                designed around your team, from junior staff to the CXO suite.
              </p>
            </div>
            <div className="lg:pb-2">
              <p className="text-[12px] uppercase tracking-wider text-white/45">
                Formats
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {formats.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-white/15 px-3.5 py-1.5 text-[13px] text-white/85"
                  >
                    {f}
                  </li>
                ))}
              </ul>
              <EnquireButton className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-ink transition hover:-translate-y-px hover:bg-sand active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel">
                Get a customized workshop
              </EnquireButton>
            </div>
          </div>
        </section>

        {/* All trainings */}
        <section
          aria-labelledby="all-heading"
          className="bg-cream py-20 md:py-28"
        >
          <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
            <h2 id="all-heading" className="sr-only">
              All trainings
            </h2>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
              {trainings.map((t, i) => (
                <li key={t.slug}>
                  <Link
                    href={`/training/${t.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-sand bg-white p-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-caramel/40 hover:shadow-[0_24px_48px_-24px_rgba(59,42,32,0.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-caramel"
                  >
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[18px]">
                      <Image
                        src={t.image}
                        alt=""
                        fill
                        priority={i < 3}
                        sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-ink/45 via-transparent to-transparent" />
                      {/* <span className="absolute left-3.5 top-3.5 rounded-full bg-white/90 px-3 py-1 text-[12px] font-medium tabular-nums text-espresso backdrop-blur-sm">
                        {String(i + 1).padStart(2, "0")} /{" "}
                        {String(trainings.length).padStart(2, "0")}
                      </span> */}
                      <span className="absolute bottom-3.5 left-3.5 rounded-full bg-ink/55 px-3 py-1 text-[12px] font-medium text-white backdrop-blur-sm">
                        {t.facts[0].value}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col px-4 pb-4 pt-6 sm:px-4">
                      <h3 className="text-xl font-medium tracking-tight text-espresso">
                        {t.title}
                      </h3>
                      <p className="mt-2.5 text-[14px] leading-relaxed text-walnut">
                        {t.summary}
                      </p>
                      <ul className="mt-5 flex flex-wrap gap-2">
                        {t.formats.map((f) => (
                          <li
                            key={f}
                            className="rounded-md px-3 py-1.5 border border-walnut/50 text-[11px] bg-cream text-walnut"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex items-center justify-between  pt-3 [margin-top:max(1.5rem,auto)]">
                        <span className="text-sm font-medium text-espresso">
                          View program
                        </span>
                        <span
                          aria-hidden
                          className="flex size-10 items-center justify-center rounded-full border border-sand text-espresso transition duration-300 group-hover:border-caramel group-hover:bg-caramel group-hover:text-white"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                          >
                            <path
                              d="M5 12h14M13 6l6 6-6 6"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <EnquirySection
          heading="Not sure which training fits your team?"
          tone="bg-white"
        />
      </main>
    </>
  );
}
