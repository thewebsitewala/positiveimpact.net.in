import type { Metadata } from "next";
import AboutHero from "../../../components/about/about-hero";
import AboutApproach from "../../../components/about/about-approach";
import AboutTeam from "../../../components/about/about-team";
import EnquirySection from "../../../components/training/enquiry-section";

export const metadata: Metadata = {
  title: "About Us: Our Approach & Team | Positive Impact",
  description:
    "Positive Impact is a Bengaluru leadership training and coaching company. Our T-BAR model, experiential learning process and the team behind every program.",
};

/** Sections alternate white / cream below the dark hero. */
export default function AboutPage() {
  return (
    <main id="main">
      <AboutHero />
      <AboutApproach tone="bg-white" />
      <AboutTeam tone="bg-cream" />
      <EnquirySection heading="Work with our team" tone="bg-white" />
    </main>
  );
}
