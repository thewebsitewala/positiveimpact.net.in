import Image from "next/image";
import Link from "next/link";
import type { Course } from "@/lib/courses";
import { courseImage } from "@/lib/course-images";
import { EnquireButton } from "../training/enquiry-dialog";

/**
 * Course card, matching the home Best Sellers card: framed photo with a
 * category badge, duration badge, title, two-line summary, and
 * "View detail" / "Book now" actions. "Book now" opens the enquiry popup.
 */
const CourseCard = ({ course, priority = false }: { course: Course; priority?: boolean }) => {
  const href = `/courses/${course.slug}`;

  return (
    <div className="group flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-sand/80 bg-white transition-all duration-300 hover:border-caramel/70 hover:shadow-xl hover:shadow-caramel/10">
      {/* Framed photo */}
      <Link href={href} tabIndex={-1} aria-hidden className="block p-2.5 sm:p-3.5">
        <div className="relative aspect-[4/2.75] w-full overflow-hidden rounded-2xl bg-sand/30">
          <Image
            src={courseImage(course.slug)}
            alt=""
            fill
            priority={priority}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 48vw, 32vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          {course.bestseller && (
            <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-lg bg-caramel px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white shadow-sm">
              <svg viewBox="0 0 20 20" className="size-3" fill="currentColor" aria-hidden>
                <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L10 14.9l-5.2 2.7 1-5.8L1.5 7.7l5.9-.9z" />
              </svg>
              Bestseller
            </span>
          )}
          <div className="absolute left-2.5 top-2.5">
            <span className="line-clamp-1 rounded-lg border border-white/20 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">
              {course.category}
            </span>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-5 pt-3.5 sm:p-6 sm:pt-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-md border border-sand/70 bg-cream px-2.5 py-1 text-[12px] font-medium text-espresso/85">
              <svg className="h-4 w-4 shrink-0 text-caramel" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25a.75.75 0 0 0-1.5 0v3.5c0 .2.08.39.22.53l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.75 7.94V4.75Z"
                  clipRule="evenodd"
                />
              </svg>
              {course.duration || "Customized duration"}
            </span>
          </div>

          <h3 className="mt-3 line-clamp-1 text-[16px] font-medium leading-snug tracking-tight text-espresso transition-colors group-hover:text-caramel sm:text-[17px]">
            <Link href={href} className="focus-visible:outline-none">
              {course.title}
            </Link>
          </h3>

          <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-walnut/80 sm:text-[13px]">{course.summary}</p>
        </div>

        <div className="mt-3 flex items-center justify-between gap-2 border-t border-sand/50 pt-3.5">
          <Link
            href={href}
            className="inline-flex min-h-11 items-center text-[13px] font-semibold text-espresso underline-offset-4 transition-colors hover:text-caramel hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
          >
            View detail
          </Link>
          <EnquireButton
            training={course.title}
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-espresso px-5 text-xs font-medium text-white shadow-2xs transition-all hover:bg-caramel active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel sm:min-h-9"
          >
            Book now
          </EnquireButton>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
