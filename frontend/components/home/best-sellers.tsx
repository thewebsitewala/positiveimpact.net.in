"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { liveCourses } from "@/lib/courses";
import { courseImage } from "@/lib/course-images";

interface BestSeller {
  id: string;
  title: string;
  category: string;
  duration: string;
  audience: string;
  image: string;
  description: string;
}

/**
 * Home Best Sellers: every course flagged `bestseller` in src/lib/courses.ts,
 * so durations and details always match the course pages.
 */
const bestSellers: BestSeller[] = liveCourses
  .filter((c) => c.bestseller)
  .map((c) => ({
    id: c.slug,
    title: c.title,
    category: c.category,
    duration: c.duration,
    audience: c.audience.slice(0, 2).join(", "),
    image: courseImage(c.slug),
    description: c.summary,
  }));

const BestSellers = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const [selectedProgram, setSelectedProgram] = useState<BestSeller | null>(
    null,
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const closeModal = useCallback(() => {
    setSelectedProgram(null);
    setIsSubmitted(false);
    setFormData({ name: "", email: "", phone: "" });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };
    if (selectedProgram) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProgram, closeModal]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    queueMicrotask(onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section
      id="best-sellers"
      aria-labelledby="best-sellers-heading"
      className="bg-[#FAF5EF] py-12  md:py-14 text-espresso lg:py-20"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14">
          {/* Left Column: Heading & Content (25% on desktop - preserved) */}
          <div className="flex flex-col justify-between text-center lg:text-left lg:w-[25%] lg:shrink-0 lg:sticky lg:top-28">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-none">
              <span className="text-[11px] font-semibold tracking-wider text-caramel uppercase">
                Featured Programs
              </span>

              <h2
                id="best-sellers-heading"
                className="mt-3 text-[28px] font-medium tracking-tight text-espresso sm:text-4xl lg:text-4xl leading-[1.15]"
              >
                Our Best Sellers
              </h2>

              <p className="mt-4 text-xs font-normal leading-relaxed text-walnut/80 sm:text-sm">
                Our most requested leadership and managerial workshops,
                field-tested across 90+ corporate enterprises to alter thinking
                and drive measurable impact.
              </p>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="mt-6 flex items-center justify-center lg:justify-start lg:mt-8">
              {/* Arrow Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={scrollPrev}
                  disabled={!canScrollPrev}
                  aria-label="Previous programs"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                    canScrollPrev
                      ? "border-sand/80 bg-white text-espresso hover:border-caramel hover:bg-cream active:scale-95 shadow-2xs cursor-pointer"
                      : "border-sand/40 bg-white/40 text-walnut/30 cursor-not-allowed"
                  }`}
                >
                  <span aria-hidden="true" className="text-base font-medium">
                    ←
                  </span>
                </button>

                <button
                  type="button"
                  onClick={scrollNext}
                  disabled={!canScrollNext}
                  aria-label="Next programs"
                  className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
                    canScrollNext
                      ? "border-sand/80 bg-white text-espresso hover:border-caramel hover:bg-cream active:scale-95 shadow-2xs cursor-pointer"
                      : "border-sand/40 bg-white/40 text-walnut/30 cursor-not-allowed"
                  }`}
                >
                  <span aria-hidden="true" className="text-base font-medium">
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Embla Carousel (75% on desktop - preserved xl:flex-[0_0_35%]) */}
          <div className="min-w-0 flex-1 select-none overflow-hidden">
            <div ref={emblaRef} className="cursor-grab active:cursor-grabbing">
              <div className="flex gap-3 md:gap-4">
                {bestSellers.map((course) => (
                  <div
                    key={course.id}
                    className="flex-[0_0_90%] sm:flex-[0_0_48%] lg:flex-[0_0_40%] xl:flex-[0_0_37%] min-w-0"
                  >
                    <div className="group flex  flex-col justify-between overflow-hidden rounded-3xl border border-sand/80 bg-white transition-all duration-300 hover:border-caramel/70 hover:shadow-xl hover:shadow-caramel/10">
                      {/* Top: Framed Editorial Image */}
                      <div className="p-2.5 sm:p-3.5 ">
                        <div className="relative aspect-[4/2.75] w-full overflow-hidden rounded-2xl bg-sand/30">
                          <Image
                            src={course.image}
                            alt={course.title}
                            fill
                            sizes="(max-width: 640px) 85vw, (max-width: 1024px) 48vw, 35vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                          {/* Floating Category Badge */}
                          <div className="absolute top-2.5 left-2.5">
                            <span className="rounded-lg border border-white/20 bg-black/55  px-3 py-1 text-[10px] font-semibold tracking-wider text-white uppercase line-clamp-1">
                              {course.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="flex flex-1 flex-col justify-between p-5 sm:p-6 pt-3.5 sm:pt-4">
                        <div>
                          {/* Duration Badge & Audience */}
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="inline-flex items-center gap-1.5 rounded-md border border-sand/70 bg-cream px-2.5 py-1 text-[12px] font-medium text-espresso/85">
                              <svg
                                className="h-4 w-4 text-caramel shrink-0"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25a.75.75 0 0 0-1.5 0v3.5c0 .2.08.39.22.53l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.75 7.94V4.75Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {course.duration}
                            </span>
                            {/* <span className="text-[11px] text-walnut/60 line-clamp-1">
                              • {course.audience}
                            </span> */}
                          </div>

                          {/* Title in Refined Small Font */}
                          <h3 className="mt-3 text-[16px] sm:text-[17px] font-medium tracking-tight text-espresso transition-colors group-hover:text-caramel leading-snug line-clamp-1">
                            {course.title}
                          </h3>

                          {/* Content in Refined Small Font */}
                          <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-walnut/80 line-clamp-2">
                            {course.description}
                          </p>
                        </div>

                        {/* Bottom CTA Row: View detail & Book now */}
                        <div className="border-t border-sand/50 pt-3.5 mt-3 flex items-center justify-between gap-2">
                          <Link
                            href={`/courses/${course.id}`}
                            className="inline-flex items-center text-[13px] hover:underline underline-offset-4 font-semibold text-espresso transition-colors hover:text-caramel"
                          >
                            View detail
                          </Link>
                          <button
                            type="button"
                            onClick={() => setSelectedProgram(course)}
                            className="inline-flex items-center justify-center rounded-md bg-espresso px-5 py-2 text-xs font-medium text-white transition-all hover:bg-caramel active:scale-95 cursor-pointer shadow-2xs"
                          >
                            Book now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clean Booking Modal */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="booking-modal-title"
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={closeModal}
            aria-hidden="true"
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-sand bg-white p-6 sm:p-8 shadow-2xl z-10 transition-all">
            {/* Close Button */}
            <button
              type="button"
              onClick={closeModal}
              aria-label="Close dialog"
              className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full border border-sand/80 bg-cream/70 text-espresso transition hover:bg-cream hover:border-espresso/40 cursor-pointer"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {isSubmitted ? (
              <div className="py-8 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cream border border-sand text-caramel">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-xl font-medium text-espresso">
                  Request Received
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-walnut/80 max-w-sm mx-auto">
                  Thank you, {formData.name || "there"}. We have received your
                  booking request for{" "}
                  <span className="font-medium text-espresso">
                    {selectedProgram.title}
                  </span>
                  . Our team will contact you shortly.
                </p>
                <button
                  type="button"
                  onClick={closeModal}
                  className="mt-6 inline-flex items-center justify-center rounded-full bg-espresso px-6 py-2.5 text-xs font-semibold text-white transition hover:bg-caramel cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                {/* Selected Program Header */}
                <div className="pr-8">
                  <span className="text-[10px] font-semibold tracking-wider text-caramel uppercase">
                    {selectedProgram.category}
                  </span>
                  <h3
                    id="booking-modal-title"
                    className="mt-1 text-xl font-medium tracking-tight text-espresso sm:text-2xl leading-snug"
                  >
                    {selectedProgram.title}
                  </h3>
                  <div className="mt-2.5 flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-sand/70 bg-cream px-2.5 py-1 text-[11px] font-medium text-espresso/85">
                      <svg
                        className="h-3.5 w-3.5 text-caramel shrink-0"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm.75-10.25a.75.75 0 0 0-1.5 0v3.5c0 .2.08.39.22.53l2.25 2.25a.75.75 0 1 0 1.06-1.06L8.75 7.94V4.75Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {selectedProgram.duration}
                    </span>
                    {/* <span className="text-xs text-walnut/70">
                      • {selectedProgram.audience}
                    </span> */}
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-walnut/80">
                    {selectedProgram.description}
                  </p>
                </div>

                <div className="my-6 border-t border-sand/60" />

                {/* Booking Form: Name, Email, Number */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setIsSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label
                      htmlFor="booking-name"
                      className="block text-xs font-medium text-espresso/80 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="booking-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-sand/80 bg-cream/30 px-4 py-2.5 text-sm text-espresso placeholder:text-walnut/40 transition focus:border-caramel focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-email"
                      className="block text-xs font-medium text-espresso/80 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="booking-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      className="w-full rounded-xl border border-sand/80 bg-cream/30 px-4 py-2.5 text-sm text-espresso placeholder:text-walnut/40 transition focus:border-caramel focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="booking-phone"
                      className="block text-xs font-medium text-espresso/80 mb-1.5"
                    >
                      Phone Number
                    </label>
                    <input
                      id="booking-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-sand/80 bg-cream/30 px-4 py-2.5 text-sm text-espresso placeholder:text-walnut/40 transition focus:border-caramel focus:bg-white focus:outline-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-espresso py-3 text-xs font-semibold text-white transition-all hover:bg-caramel active:scale-[0.99] cursor-pointer shadow-sm"
                    >
                      Book Now
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default BestSellers;
