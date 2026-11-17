"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Speciality {
  id: string;
  title: string;
  image: string;
  description: string;
}

const specialities: Speciality[] = [
  {
    id: "managerial-skills",
    title: "Managerial Skills",
    image: "/specialities/managerial-skills.jpg",
    description:
      "Practical frameworks in problem solving, delegation, and building high-performance team accountability.",
  },
  {
    id: "leadership-impact",
    title: "Leadership Impact",
    image: "/specialities/leadership-impact.jpg",
    description:
      "Elevating strategic poise, emotional intelligence, and executive presence to lead high-stakes change.",
  },
  {
    id: "communication-excellence",
    title: "Communication Excellence",
    image: "/specialities/communication-excellence.jpg",
    description:
      "Persuasive business storytelling and executive pitching to articulate vision and influence stakeholders.",
  },
  {
    id: "sports-based-leadership",
    title: "Sports Based Leadership Program",
    image: "/specialities/sports-leadership.jpg",
    description:
      "Action-oriented outdoor sporting challenges to break comfort zones and forge unbreakable team trust.",
  },
  {
    id: "book-based-leadership",
    title: "Book Based Leadership Workshops",
    image: "/specialities/book-workshops.jpg",
    description:
      "Deconstructing seminal leadership literature to translate timeless wisdom into daily managerial habits.",
  },
  {
    id: "leadership-with-horses",
    title: "Leadership with Horses",
    image: "/specialities/leadership-with-horses.jpg",
    description:
      "Equine-assisted experiential learning providing instant, unfiltered feedback on authentic presence and trust.",
  },
];

const TrainingSpeciality = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="training-speciality"
      aria-labelledby="speciality-heading"
      className=" bg-white py-12 md:py-14 text-espresso lg:py-20"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        {/* Section Header (Centered) */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] md:text-[12px] font-semibold tracking-wider text-caramel uppercase">
            Leadership Development Training &amp; Coaching
          </span>

          <h2
            id="speciality-heading"
            className="mt-3 text-[28px] font-medium tracking-tight text-espresso sm:text-4xl lg:text-4xl leading-[1.15]"
          >
            Our Training Speciality
          </h2>

          {/* Delivery Formats Pill */}
          {/* <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-walnut">
            <span className="rounded-full bg-cream border border-sand px-3 py-1">
              In - Person
            </span>
            <span className="text-caramel/60">•</span>
            <span className="rounded-full bg-cream border border-sand px-3 py-1">
              Virtual Live Online
            </span>
            <span className="text-caramel/60">•</span>
            <span className="rounded-full bg-cream border border-sand px-3 py-1">
              Out Bound Sessions
            </span>
          </div> */}
        </div>

        {/* Desktop: Single Row Slim Expanding Accordion (lg:flex) */}
        <div
          className="mt-14 hidden h-[560px] w-full flex-row gap-3.5 lg:flex"
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {specialities.map((item, index) => {
            const isHovered = hoveredIndex === index;
            const hasOtherHovered = hoveredIndex !== null && !isHovered;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setHoveredIndex(index)}
                className={`group relative flex h-full flex-col justify-end overflow-hidden rounded-2xl border transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer select-none ${
                  isHovered
                    ? "flex-[4] border-caramel/80 shadow-2xl opacity-100"
                    : hasOtherHovered
                      ? "flex-1 border-black/10 opacity-40 hover:opacity-80"
                      : "flex-1 border-black/15 opacity-100 hover:border-caramel/50"
                }`}
              >
                {/* Full Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="40vw"
                  className={`object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    isHovered ? "scale-105" : "scale-100"
                  }`}
                />

                {/* Dark Gradient Overlay for Contrast */}
                <div
                  aria-hidden="true"
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isHovered
                      ? "bg-gradient-to-t from-black/95 via-black/55 to-black/30"
                      : "bg-gradient-to-t from-black/85 via-black/55 to-black/40"
                  }`}
                />

                {/* Closed State View: Heading at the Bottom */}
                <div
                  className={`absolute inset-x-0 bottom-0 pb-10 flex flex-col items-center justify-end z-10 transition-all duration-300 ${
                    isHovered
                      ? "opacity-0 pointer-events-none translate-y-4"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <span className="[writing-mode:vertical-rl] rotate-180 text-sm sm:text-base font-semibold tracking-wider text-white uppercase whitespace-nowrap drop-shadow-md group-hover:text-sand transition-colors">
                    {item.title}
                  </span>
                </div>

                {/* Expanded State View: Strictly Heading, Content, and CTA */}
                <div
                  className={`relative z-10 p-8 sm:p-10 flex flex-col justify-end w-full transition-all duration-500 ease-out ${
                    isHovered
                      ? "opacity-100 translate-y-0 delay-100"
                      : "opacity-0 pointer-events-none translate-y-6"
                  }`}
                >
                  {/* Heading */}
                  <h3 className="text-2xl sm:text-3xl lg:text-[28px] font-medium tracking-tight text-white leading-tight drop-shadow-md">
                    {item.title}
                  </h3>

                  {/* Content */}
                  <p className="mt-3 text-sm text-white/90 leading-relaxed font-normal tracking-wide max-w-lg drop-shadow-sm">
                    {item.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-6">
                    <Link
                      href="#best-sellers"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-ink shadow-md transition hover:bg-sand active:scale-[0.98]"
                    >
                      Customise for your team
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile & Tablet: Cards with aspect-[4/5.5] & Increased Text (lg:hidden) */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
          {specialities.map((item) => (
            <div
              key={item.id}
              className="relative aspect-[4/3.5] w-full overflow-hidden rounded-2xl border border-black/15 shadow-md flex flex-col justify-end"
            >
              {/* Full Background Image */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover"
              />

              {/* Dark Gradient Overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
              />

              {/* Bottom Content: Increased Text Size */}
              <div className="relative z-10 p-5 sm:p-8 flex flex-col justify-end">
                {/* Heading (Increased Text) */}
                <h3 className="text-[18px] sm:text-3xl font-medium tracking-tight text-white leading-tight drop-shadow-md">
                  {item.title}
                </h3>

                {/* Content (Increased Text) */}
                <p className="mt-2 text-[11px] sm:text-lg text-white/95 leading-relaxed drop-shadow-sm">
                  {item.description}
                </p>

                {/* CTA */}
                <div className="mt-4">
                  <Link
                    href="#best-sellers"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-normal text-ink shadow-md transition hover:bg-sand active:scale-[0.98]"
                  >
                    Customise for your team
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSpeciality;
