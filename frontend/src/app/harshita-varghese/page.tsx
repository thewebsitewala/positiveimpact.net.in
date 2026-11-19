import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { founderSchema } from "@/lib/schema";
import JsonLd from "../../../components/seo/json-ld";
import FounderHero from "../../../components/founder/founder-hero";
import FounderStory from "../../../components/founder/founder-story";
import FounderApproach from "../../../components/founder/founder-approach";
import FounderKeynotes from "../../../components/founder/founder-keynotes";
import FounderWorkshops from "../../../components/founder/founder-workshops";
import FounderClients from "../../../components/founder/founder-clients";
import FounderBooking from "../../../components/founder/founder-booking";

export const metadata: Metadata = pageMeta({
  title: "Harshita Mankad Varghese: Founder, Leadership Coach & Speaker",
  description: "Harshita Mankad Varghese, founder of Positive Impact: leadership coach and keynote speaker. 23,000+ lives touched, 12,500+ hours of facilitation, Dale Carnegie certified senior trainer.",
  path: "/harshita-varghese",
  type: "profile",
});

/** Sections alternate white / cream below the dark hero; set tones here when reordering. */
export default function FounderPage() {
  return (
    <main id="main">
      <JsonLd data={founderSchema()} />
      <FounderHero />
      <FounderStory tone="bg-white" />
      <FounderApproach tone="bg-cream" />
      <FounderKeynotes tone="bg-white" />
      <FounderWorkshops tone="bg-cream" />
      <FounderClients tone="bg-white" />
      <FounderBooking tone="bg-cream" />
    </main>
  );
}
