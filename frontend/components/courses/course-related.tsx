import Link from "next/link";
import { liveCourses as courses, type Course } from "@/lib/courses";
import CourseCard from "./course-card";
import { eyebrow, h2, wrap, type Tone } from "../founder/styles";

/** Three related courses: same category first, then others. */
const CourseRelated = ({ course, tone = "bg-cream" }: { course: Course; tone?: Tone }) => {
  const same = courses.filter((c) => c.slug !== course.slug && c.category === course.category);
  const rest = courses.filter((c) => c.slug !== course.slug && c.category !== course.category);
  const related = [...same, ...rest].slice(0, 3);

  return (
    <section aria-labelledby="related-heading" className={`${tone} py-20 md:py-28`}>
      <div className={wrap}>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className={eyebrow}>Keep exploring</p>
            <h2 id="related-heading" className={h2}>
              Related courses
            </h2>
          </div>
          <Link
            href="/courses"
            className="hidden shrink-0 text-sm font-medium text-espresso underline-offset-4 hover:underline sm:inline"
          >
            View all courses →
          </Link>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {related.map((c) => (
            <li key={c.slug}>
              <CourseCard course={c} />
            </li>
          ))}
        </ul>
        <Link
          href="/courses"
          className="mt-10 inline-block text-sm font-medium text-espresso underline underline-offset-4 sm:hidden"
        >
          View all courses →
        </Link>
      </div>
    </section>
  );
};

export default CourseRelated;
