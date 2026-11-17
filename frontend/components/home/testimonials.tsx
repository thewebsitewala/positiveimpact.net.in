"use client";

import { useCallback, useEffect, useState, type FC } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface Testimonial {
  id: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Learning environment is friendly and encourages us to share our doubts without hesitation.",
  },
  {
    id: 2,
    quote:
      "In-program simulations, demos and exercises enabled us to grasp the new content well.",
  },
  {
    id: 3,
    quote:
      "Active coaching during practise sessions helped me to understand where I could improve. It brought in instant realisations that enhanced my perspective.",
  },
  {
    id: 4,
    quote:
      "Positive Impact facilitators role model what they teach, which makes learning of concepts easy.",
  },
  {
    id: 5,
    quote:
      "Positive Impact's concepts and framework helped me understand leadership like never before. Their approach to leadership aims at building powerful relationships and helps in reducing distortion in communication for stronger impact.",
  },
  {
    id: 6,
    quote:
      "The workshop was well structured and the facilitator kept the learning momentum high by demonstrating concepts adequately.",
  },
  {
    id: 7,
    quote:
      "We have achieved real time business impact through trainings delivered by POSITIVE IMPACT.",
  },
];

const Testimonials: FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: true,
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

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
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="border-t border-sand/40 bg-[#FAF5EF] py-14 md:py-20 lg:py-28 text-espresso overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        {/* Section Header with Navigation Controls */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end">
          <div className="text-center md:text-left">
            <span className="text-[11px] md:text-[12px] font-semibold tracking-wider text-caramel uppercase">
              Participant Endorsements
            </span>

            <h2
              id="testimonials-heading"
              className="mt-3 text-[28px] font-medium tracking-tight text-espresso sm:text-4xl lg:text-4xl leading-[1.15]"
            >
              Voice of Participants
            </h2>
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={!canScrollPrev}
              aria-label="Previous testimonials"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
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
              aria-label="Next testimonials"
              className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
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

        {/* Testimonials Carousel Track */}
        <div className="mt-10 sm:mt-14 w-full">
          <div ref={emblaRef} className="cursor-grab active:cursor-grabbing overflow-hidden">
            <div className="flex gap-5 sm:gap-6">
              {testimonials.map((item) => (
                <div
                  key={item.id}
                  className="flex-[0_0_88%] sm:flex-[0_0_58%] lg:flex-[0_0_40%] xl:flex-[0_0_32%] min-w-0"
                >
                  <div className="group flex h-full min-h-[250px] sm:min-h-[270px] flex-col justify-between overflow-hidden rounded-3xl border border-sand/80 bg-white p-7 sm:p-8 transition-all duration-300 hover:border-caramel/70 hover:shadow-xl hover:shadow-caramel/5">
                    <div>
                      {/* Subtle Caramel Quote Icon */}
                      <div
                        aria-hidden="true"
                        className="mb-4 text-3xl font-serif leading-none text-caramel/40 select-none sm:text-4xl"
                      >
                        “
                      </div>

                      {/* Quote Body */}
                      <p className="text-sm sm:text-[15px] leading-relaxed text-espresso font-normal">
                        {item.quote}
                      </p>
                    </div>

                    {/* Footer Tag */}
                    <div className="mt-6 pt-5 border-t border-sand/50 flex items-center justify-between">
                      <span className="text-[11px] font-medium tracking-wider text-walnut/60 uppercase">
                        Participant Feedback
                      </span>
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-caramel/60"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
