import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Link from "next/link";
import { liveCourses as courses } from "@/lib/courses";
import HeroBackdrop from "../../../components/training/hero-backdrop";
import { EnquireButton } from "../../../components/training/enquiry-dialog";
import EnquirySection from "../../../components/training/enquiry-section";
import CourseGrid from "../../../components/courses/course-grid";
import { wrap } from "../../../components/founder/styles";

export const metadata: Metadata = pageMeta({
  title: "Leadership, Management & Communication Courses",
  description: "Bestseller corporate courses in leadership, management and communication: High Impact Leadership, First Time Managers, Business Storytelling and more. In-person, virtual or blended.",
  path: "/courses",
});

export default function CoursesPage() {
  return (
    <main id="main">
      <section className="relative isolate overflow-hidden bg-ink pb-16 pt-32 text-white md:pb-24 md:pt-40">
        <HeroBackdrop />
        <div className={`${wrap} grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20`}>
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
                  Courses
                </li>
              </ol>
            </nav>
            <h1 className="mt-6 text-4xl font-medium leading-[1.08] tracking-[-0.025em] text-balance md:text-5xl lg:text-[3.5rem]">
              Our Courses
            </h1>
            <p className="mt-5 max-w-xl text-base font-light leading-relaxed text-white/70 md:text-lg">
              {courses.length} field-tested courses in leadership, management,
              communication and trainer certification. Each one is tailored to
              your team and delivered in person, live online or blended.
            </p>
          </div>
          <div className="lg:pb-2">
            <p className="max-w-sm text-[15px] leading-relaxed text-white/70">
              Not sure which course fits? Tell us about your team and we&apos;ll
              recommend one, or combine several into a program.
            </p>
            <EnquireButton className="mt-6 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-medium text-ink transition hover:-translate-y-px hover:bg-sand active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel">
              Get a customized workshop
            </EnquireButton>
          </div>
        </div>
      </section>

      <section aria-label="All courses" className="bg-cream py-16 md:py-24">
        <div className={wrap}>
          <CourseGrid courses={courses} />
        </div>
      </section>

      <EnquirySection heading="Bring a course to your team" tone="bg-white" />
    </main>
  );
}
