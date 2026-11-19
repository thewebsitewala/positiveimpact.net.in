import type { Metadata } from "next";
import Link from "next/link";
import { gallerySessions } from "@/lib/gallery";
import SessionGallery from "../../../components/gallery/session-gallery";
import HeroBackdrop from "../../../components/training/hero-backdrop";
import {
  EnquireButton,
} from "../../../components/training/enquiry-dialog";
import EnquirySection from "../../../components/training/enquiry-section";

export const metadata: Metadata = {
  title: "Gallery: Glimpses of Our Sessions | Positive Impact",
  description:
    "Photos from Positive Impact leadership workshops, team bonding and communication programs run for corporate teams.",
};

const wrap = "mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20";

export default function GalleryPage() {
  // Sessions alternate white / cream; the enquiry block takes the other tone.
  const lastIsWhite = gallerySessions.length % 2 === 1;

  return (
    <>
      <main id="main">
        {/* Intro */}
        <section className="relative isolate overflow-hidden bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-40">
          <HeroBackdrop />
          <div className={wrap}>
            <nav aria-label="Breadcrumb" className="text-[13px] text-white/50">
              <ol className="flex items-center gap-2">
                <li>
                  <Link href="/" className="transition-colors hover:text-white">
                    Home
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li aria-current="page" className="text-white/80">
                  Gallery
                </li>
              </ol>
            </nav>
            <h1 className="mt-6 text-4xl font-medium leading-[1.08] tracking-[-0.025em] md:text-5xl lg:text-[3.5rem]">
              Glimpses of our sessions
            </h1>
            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
              Moments from the workshops and team programs we&apos;ve run with
              organisations, in the room and out in the field.
            </p>
          </div>
        </section>

        {/* Sessions */}
        {gallerySessions.map((s, i) => (
          <article
            key={s.id}
            aria-labelledby={`${s.id}-title`}
            className={`${i % 2 === 0 ? "bg-white" : "bg-cream"} py-20 md:py-28`}
          >
            <div
              className={`${wrap} grid gap-10 lg:gap-16 ${
                i % 2 === 0
                  ? "lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.65fr)]"
                  : "lg:grid-cols-[minmax(0,1.65fr)_minmax(0,0.75fr)]"
              }`}
            >
              {/* Odd sessions mirror on desktop: photos left, details right. */}
              <div className={`flex flex-col ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <p className="text-[13px] font-medium tabular-nums text-caramel">
                  {String(i + 1).padStart(2, "0")} · Program
                </p>
                <h2
                  id={`${s.id}-title`}
                  className="mt-3 text-2xl font-medium leading-[1.2] tracking-tight text-espresso md:text-[1.75rem]"
                >
                  {s.program}
                </h2>

                <dl className="mt-8 border-t border-sand">
                  {[
                    { label: "Client", value: s.client },
                    { label: "Team", value: s.team },
                  ].map((row) => (
                    <div
                      key={row.label}
                      className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-sand py-4"
                    >
                      <dt className="text-[13px] uppercase tracking-wider text-walnut/70">
                        {row.label}
                      </dt>
                      <dd className="text-[15px] font-medium leading-snug text-espresso">
                        {row.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-8 lg:mt-auto lg:pt-8">
                  <EnquireButton className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-espresso px-6 text-sm font-medium text-white transition hover:-translate-y-px hover:bg-ink active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel">
                    Plan a session like this
                    <span aria-hidden>→</span>
                  </EnquireButton>
                </div>
              </div>

              <SessionGallery images={s.images} label={s.program} />
            </div>
          </article>
        ))}

        <EnquirySection
          heading="Bring a session like this to your team"
          tone={lastIsWhite ? "bg-cream" : "bg-white"}
        />
      </main>
    </>
  );
}
