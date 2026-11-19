import type { Metadata } from "next";
import ContactHero from "../../../components/contact/contact-hero";
import ContactMain from "../../../components/contact/contact-main";
import ContactMap from "../../../components/contact/contact-map";

export const metadata: Metadata = {
  title: "Contact Us | Positive Impact | Bengaluru",
  description:
    "Contact Positive Impact for customized leadership training and coaching. Call +91 99805 14510, email enquiries@positiveimpact.net.in or visit us in Indiranagar, Bengaluru.",
};

export default function ContactPage() {
  return (
    <main id="main">
      <ContactHero />
      <ContactMain tone="bg-white" />
      <ContactMap tone="bg-cream" />
    </main>
  );
}
