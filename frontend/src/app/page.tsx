import type { Metadata } from "next";
import Hero from "../../components/home/hero";
import TrainingSpeciality from "../../components/home/training-speciality";
import BestSellers from "../../components/home/best-sellers";
import GalleryShowcase from "../../components/home/gallery-showcase";
import Founder from "../../components/home/founder";
import QuoteSection from "../../components/home/quote-section";
import Testimonials from "../../components/home/testimonials";
import FAQ from "../../components/home/faq";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Leadership Training & Coaching in Bengaluru | Positive Impact",
  description:
    "Customized leadership and managerial workshops for corporate teams, from first-time managers to CXOs. 23,000+ lives touched. In-person, virtual and outdoor programs from Bengaluru.",
  path: "/",
  absoluteTitle: true,
});

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TrainingSpeciality />
      <BestSellers />
      <GalleryShowcase />
      <Founder />
      <QuoteSection />
      <Testimonials />
      <FAQ />
    </main>
  );
}
