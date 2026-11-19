import Link from "next/link";
import { philosophy } from "@/lib/about";
import HeroBackdrop from "../training/hero-backdrop";
import { EnquireButton } from "../training/enquiry-dialog";
import { wrap } from "../founder/styles";

const AboutHero = () => (
  <section className="relative isolate overflow-hidden bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-40">
    <HeroBackdrop />
    <div className={`${wrap} grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20`}>
      <div>
        <nav aria-label="Breadcrumb" className="text-[13px] text-white/50">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="transition-colors hover:text-white">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li aria-current="page" className="text-white/80">
              About
            </li>
          </ol>
        </nav>
        <h1 className="mt-6 max-w-2xl text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-balance md:text-5xl lg:text-[3.25rem]">
          We change how people think, so they change how they lead
        </h1>
        <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
          Positive Impact is a leadership training and coaching company in
          Bengaluru. We design and run customized workshops for corporate
          teams, from junior staff to the CXO suite.
        </p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <EnquireButton className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-ink transition hover:-translate-y-px hover:bg-sand active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel">
            Get a customized workshop
          </EnquireButton>
          <a
            href="#team"
            className="inline-flex h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white transition hover:border-white/50 active:scale-[0.98]"
          >
            Meet the team
          </a>
        </div>
      </div>

      <figure className="border-l-2 border-caramel pl-6">
        <blockquote className="text-lg font-light italic leading-relaxed text-white/90 md:text-xl">
          &ldquo;{philosophy.quote}&rdquo;
        </blockquote>
        <figcaption className="mt-4 text-[13px] text-sand/70">Our philosophy of success</figcaption>
      </figure>
    </div>
  </section>
);

export default AboutHero;
