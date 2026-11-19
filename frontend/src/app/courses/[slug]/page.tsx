import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getCourse, liveCourses as courses } from "@/lib/courses";
import CourseHero from "../../../../components/courses/course-hero";
import CourseBody from "../../../../components/courses/course-body";
import CourseRelated from "../../../../components/courses/course-related";
import EnquirySection from "../../../../components/training/enquiry-section";
import JsonLd from "../../../../components/seo/json-ld";
import { pageMeta } from "@/lib/seo";
import { courseSchema } from "@/lib/schema";
import { courseImage } from "@/lib/course-images";

export function generateStaticParams() {
  return courses.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata(props: PageProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const c = getCourse(slug);
  if (!c) return {};
  return pageMeta({
    title: c.duration ? `${c.title}: ${c.duration} Corporate Course` : `${c.title} Corporate Course`,
    description: c.summary,
    path: `/courses/${c.slug}`,
    image: courseImage(c.slug),
    imageAlt: `${c.title} workshop by Positive Impact`,
  });
}

export default async function CoursePage(props: PageProps<"/courses/[slug]">) {
  const { slug } = await props.params;
  const course = getCourse(slug);
  if (!course) notFound();

  return (
    <main id="main">
      <JsonLd data={courseSchema(course)} />
      <CourseHero course={course} />
      <CourseBody course={course} />
      <EnquirySection
        training={course.title}
        heading={`Bring ${course.title} to your team`}
        tone="bg-cream"
      />
      <CourseRelated course={course} tone="bg-white" />
    </main>
  );
}
