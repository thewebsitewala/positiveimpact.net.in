import Hero from "../../components/home/hero";
import TrainingSpeciality from "../../components/home/training-speciality";
import BestSellers from "../../components/home/best-sellers";
import GalleryShowcase from "../../components/home/gallery-showcase";
import Founder from "../../components/home/founder";
import QuoteSection from "../../components/home/quote-section";
import Testimonials from "../../components/home/testimonials";
import FAQ from "../../components/home/faq";

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
