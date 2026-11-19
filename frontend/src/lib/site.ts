/**
 * Public site URL. Set NEXT_PUBLIC_BASE_URL per environment (.env.local);
 * never hardcode the domain elsewhere, import siteUrl / siteHost instead.
 */
export const siteUrl = (
  process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"
).replace(/\/$/, "");
export const siteHost = new URL(siteUrl).host;

/** Business contact details, from the client brief (CLAUDE.md §10). */
export const contact = {
  phone: "+91 99805 14510",
  phoneHref: "tel:+919980514510",
  whatsappHref: "https://wa.me/919980514510",
  email: "enquiries@positiveimpact.net.in",
  emailHref: "mailto:enquiries@positiveimpact.net.in",
  address: "#696, 9th A Main, 1st Stage Indiranagar, Bengaluru 560038, India",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=696+9th+A+Main+1st+Stage+Indiranagar+Bengaluru+560038",
  hours: [
    { days: "Mon – Fri", time: "9 AM – 6 PM" },
    { days: "Saturday", time: "9 AM – 2 PM" },
    { days: "Sunday", time: "Closed" },
  ],
} as const;

/** Enquiry dropdown option for speaking requests (founder page). */
export const KEYNOTE = "Keynote / speaking engagement";

/** Social profiles (same as the footer). */
export const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/positiveimpactleadership" },
  { name: "Instagram", href: "https://www.instagram.com/positiveimpactleadership" },
  { name: "X (Twitter)", href: "https://twitter.com/harshita_mv" },
  { name: "Facebook", href: "https://www.facebook.com/positiveimpactleadership" },
] as const;

/** Google Maps embed for the office (no API key needed). */
export const mapEmbed =
  "https://www.google.com/maps?q=696+9th+A+Main+1st+Stage+Indiranagar+Bengaluru+560038&z=16&output=embed";
