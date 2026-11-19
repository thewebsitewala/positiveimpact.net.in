/** Structured data (schema.org JSON-LD) built from the site's own data. */
import { contact, siteUrl, socials } from "./site";
import { SITE_NAME } from "./seo";
import type { Course } from "./courses";
import { founder } from "./founder";

const abs = (path: string) => `${siteUrl}${path}`;

const address = {
  "@type": "PostalAddress",
  streetAddress: "#696, 9th A Main, 1st Stage Indiranagar",
  addressLocality: "Bengaluru",
  addressRegion: "Karnataka",
  postalCode: "560038",
  addressCountry: "IN",
};

const orgRef = { "@type": "Organization", name: SITE_NAME, url: siteUrl };

/** The business: LocalBusiness (ProfessionalService), shown site-wide. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#organization`,
    name: SITE_NAME,
    description:
      "Leadership training and coaching company designing customized corporate workshops for teams from junior staff to CXOs.",
    url: siteUrl,
    logo: abs("/logo.png"),
    image: abs("/hero-flipped.png"),
    telephone: contact.phone.replace(/\s/g, ""),
    email: contact.email,
    address,
    areaServed: "IN",
    founder: { "@type": "Person", name: founder.name },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "14:00" },
    ],
    sameAs: socials.map((s) => s.href),
  };
}

/** A course page: schema.org Course. */
export function courseSchema(course: Course) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.title,
    description: course.summary,
    url: abs(`/courses/${course.slug}`),
    provider: orgRef,
    ...(course.modules.length > 0 && { syllabusSections: course.modules.map((m) => ({ "@type": "Syllabus", name: m })) }),
    ...(course.audience.length > 0 && {
      audience: { "@type": "Audience", audienceType: course.audience.join(", ") },
    }),
    ...(course.formats.length > 0 && {
      hasCourseInstance: course.formats.map((f) => ({
        "@type": "CourseInstance",
        courseMode: /virtual|online/i.test(f) ? "online" : /blend/i.test(f) ? "blended" : "onsite",
        name: f,
      })),
    }),
  };
}

/** The founder page: schema.org Person. */
export function founderSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: founder.name,
    jobTitle: "Founder & Director",
    url: abs("/harshita-varghese"),
    image: abs("/harshita-mankad-varghese.png"),
    worksFor: orgRef,
    sameAs: [founder.linkedin],
  };
}
