import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  allowedDevOrigins: ["192.168.1.101"],
  partialPrefetching: true,
  // Old site URLs that moved.
  async redirects() {
    return [
      { source: "/team", destination: "/about#team", permanent: true },
      { source: "/approach", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/best-sellers", destination: "/courses", permanent: true },
      { source: "/trainings", destination: "/training", permanent: true },
      // PoSH Sensitization has no content yet; send to the course list.
      { source: "/posh-awareness", destination: "/courses", permanent: false },
      { source: "/certified-positive-impact-trainer", destination: "/courses/certified-positive-impact-trainer", permanent: true },
      { source: "/certification-course", destination: "/courses/certified-positive-impact-trainer", permanent: true },
      // Old course pages -> /courses/<slug> (note the old "copy-of" and swapped slugs).
      { source: "/high-impact-leadership", destination: "/courses/high-impact-leadership", permanent: true },
      { source: "/copy-of-high-impact-leadership", destination: "/courses/accelerating-women-leadership", permanent: true },
      { source: "/mindful-leadership", destination: "/courses/mindful-leadership", permanent: true },
      { source: "/first-time-managers", destination: "/courses/first-time-managers", permanent: true },
      { source: "/emotional-intelligence-at-work", destination: "/courses/emotional-intelligence-at-work", permanent: true },
      { source: "/influencing-stakeholders", destination: "/courses/influencing-stakeholders", permanent: true },
      { source: "/building-high-performance-teams", destination: "/courses/building-high-performance-teams", permanent: true },
      { source: "/time-management", destination: "/courses/time-management", permanent: true },
      { source: "/coaching-skills-for-managers-leaders", destination: "/courses/coaching-skills-for-managers-and-leaders", permanent: true },
      { source: "/impactful-facilitation-skills", destination: "/courses/impactful-facilitation-skills", permanent: true },
      { source: "/effective-business-communication", destination: "/courses/effective-business-communication", permanent: true },
      { source: "/the-art-of-business-storytelling", destination: "/courses/the-art-of-business-storytelling", permanent: true },
      { source: "/presenting-with-impact", destination: "/courses/presenting-with-impact", permanent: true },
      { source: "/cross-cultural-communication", destination: "/courses/sales-excellence", permanent: true },
      { source: "/copy-of-cross-cultural-communication", destination: "/courses/cross-cultural-communication", permanent: true },
      // Old training pages -> /training/<slug>.
      { source: "/managerial-skills", destination: "/training/managerial-skills", permanent: true },
      { source: "/leadership-impact", destination: "/training/leadership-impact", permanent: true },
      { source: "/communication-excellence", destination: "/training/communication-excellence", permanent: true },
      { source: "/sports-based-leadership-program", destination: "/training/sports-based-leadership-program", permanent: true },
      { source: "/book-based-leadership-programs", destination: "/training/book-based-leadership-programs", permanent: true },
      { source: "/leadership-with-horses", destination: "/training/leadership-with-horses", permanent: true },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
