import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import ContactHero from "../../../components/contact/contact-hero";
import ContactMain from "../../../components/contact/contact-main";
import ContactMap from "../../../components/contact/contact-map";

export const metadata: Metadata = pageMeta({
  title: "Contact Us: Leadership Training in Bengaluru",
  description: "Contact Positive Impact for customized leadership training and coaching. Call +91 99805 14510, email enquiries@positiveimpact.net.in or visit us in Indiranagar, Bengaluru.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main id="main">
      <ContactHero />
      <ContactMain tone="bg-white" />
      <ContactMap tone="bg-cream" />
    </main>
  );
}
