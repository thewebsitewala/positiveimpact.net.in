"use client";

import { useState } from "react";
import type { Course, CourseCategory } from "@/lib/courses";
import CourseCard from "./course-card";

const CATEGORIES: CourseCategory[] = [
  "Leadership Impact",
  "Managerial Skills",
  "Communication Excellence",
  "Certification",
];

/** Category filter + course grid for /courses. */
const CourseGrid = ({ courses }: { courses: Course[] }) => {
  const [active, setActive] = useState<CourseCategory | "All">("All");
  const shown = active === "All" ? courses : courses.filter((c) => c.category === active);

  const pill = (label: CourseCategory | "All", count: number) => {
    const on = active === label;
    return (
      <button
        key={label}
        type="button"
        onClick={() => setActive(label)}
        aria-pressed={on}
        className={`inline-flex h-11 shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-5 text-sm font-medium transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel ${
          on
            ? "border-espresso bg-espresso text-white"
            : "border-sand bg-white text-espresso hover:border-walnut/40"
        }`}
      >
        {label}
        <span className={`text-[12px] tabular-nums ${on ? "text-white/60" : "text-walnut/60"}`}>{count}</span>
      </button>
    );
  };

  return (
    <>
      <div role="group" aria-label="Filter courses by category" className="no-scrollbar -mx-6 flex gap-2.5 overflow-x-auto px-6 md:mx-0 md:flex-wrap md:px-0">
        {pill("All", courses.length)}
        {CATEGORIES.filter((c) => courses.some((x) => x.category === c)).map((c) =>
          pill(c, courses.filter((x) => x.category === c).length),
        )}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {shown.length} courses
      </p>

      <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {shown.map((c, i) => (
          <li key={c.slug}>
            <CourseCard course={c} priority={i < 3} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGrid;
