"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

interface GalleryItem {
  id: string;
  title: string;
  image: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Experiential Class Room Training",
    image: "/showcase/1.jpg",
  },
  {
    id: "2",
    title: "Virtual Live Online Training",
    image: "/showcase/2.jpg",
  },
  {
    id: "3",
    title: "Out-Bound Leadership Training",
    image: "/showcase/3.jpg",
  },
  {
    id: "4",
    title: "Out-Bound Leadership Training",
    image: "/showcase/4.jpg",
  },
  {
    id: "5",
    title: "Leadership with Horses",
    image: "/showcase/5.jpg",
  },
  {
    id: "6",
    title: "Leadership with Horses",
    image: "/showcase/6.jpg",
  },
  {
    id: "7",
    title: "Leadership with Horses",
    image: "/showcase/7.jpg",
  },
  {
    id: "8",
    title: "Leadership with Horses",
    image: "/showcase/5.jpg",
  },
];

const GalleryShowcase = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
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

  // Autoplay loop with 3s interval, pause on interaction / hover
  useEffect(() => {
    if (!emblaApi || isPaused) return;

    const timer = setInterval(() => {
      emblaApi.scrollNext();
    }, 3000);

    return () => clearInterval(timer);
  }, [emblaApi, isPaused]);

  useEffect(() => {
    if (!emblaApi) return;

    const onPointerDown = () => setIsPaused(true);
    const onPointerUp = () => setIsPaused(false);

    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("pointerUp", onPointerUp);

    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("pointerUp", onPointerUp);
    };
  }, [emblaApi]);

  return (
    <section
      id="gallery-showcase"
      aria-labelledby="gallery-showcase-heading"
      className="border-t border-sand/40 bg-white py-12 md:py-14 text-espresso lg:py-20 overflow-hidden"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        {/* Section Header (Centered - matching Training Section structure) */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[11px] md:text-[12px] font-semibold tracking-wider text-caramel uppercase">
            Learning in Action
          </span>

          <h2
            id="gallery-showcase-heading"
            className="mt-3 text-[28px] font-medium tracking-tight text-espresso sm:text-4xl lg:text-4xl leading-[1.15]"
          >
            Inside Our Workshops
          </h2>
        </div>
      </div>

      {/* Centered Big-Scale Highlighted Carousel - Pure Images Only */}
      <div className="mt-10 sm:mt-14 w-full">
        <div
          ref={emblaRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="cursor-grab active:cursor-grabbing overflow-hidden"
        >
          <div className="flex items-center -ml-0 sm:-ml-4">
            {galleryItems.map((item, index) => {
              const isActive = selectedIndex === index;

              return (
                <div
                  key={item.id}
                  onClick={() => scrollTo(index)}
                  className="flex-[0_0_85%] sm:flex-[0_0_75%] md:flex-[0_0_66%] lg:flex-[0_0_58%] xl:flex-[0_0_54%] min-w-0 pl-0 sm:pl-4"
                >
                  <div
                    className={`group relative aspect-[16/10] sm:aspect-[16/9.5] w-full overflow-hidden rounded-3xl transition-all duration-700 ease-out ${
                      isActive
                        ? "scale-100 opacity-100 shadow-2xl ring-1 ring-sand/90 z-10"
                        : "scale-[0.92] sm:scale-[0.92] opacity-40 hover:opacity-75 cursor-pointer z-0"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 60vw"
                      className={`object-cover transition-transform duration-1000 ease-out ${
                        isActive
                          ? "scale-100 group-hover:scale-105"
                          : "scale-105"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* View Gallery Button */}
        <div className="mt-10 sm:mt-12 text-center">
          <Link
            href="#gallery-showcase"
            className="group inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-caramel active:scale-95 shadow-xs"
          >
            View gallery
            <span
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryShowcase;
