/**
 * Photo per course. The first eight are the existing bestseller photos; the
 * rest reuse the client's own session photos from /public/gallery until each
 * course has a dedicated image.
 */
const images: Record<string, string> = {
  "certified-positive-impact-trainer":
    "/bestsellers/certified-positive-impact-trainer.jpg",
  "high-impact-leadership": "/bestsellers/high-impact-leadership.jpg",
  "accelerating-women-leadership":
    "/bestsellers/accelerating-women-leadership.jpg",
  "first-time-managers": "/bestsellers/first-time-managers.jpg",
  "emotional-intelligence-at-work": "/bestsellers/emotional-intelligence.jpg",
  "influencing-stakeholders": "/bestsellers/influencing-stakeholders.jpg",
  "building-high-performance-teams": "/bestsellers/high-performance-teams.jpg",
  "coaching-skills-for-managers-and-leaders":
    "/bestsellers/coaching-skills.jpg",
  "the-art-of-business-storytelling": "/bestsellers/business-storytelling.jpg",
  // Stand-ins from real sessions (replace with course photos when available).
  "mindful-leadership": "/bestsellers/mindful-leadership.jpg",
  "time-management": "/bestsellers/time-management.jpg",
  "impactful-facilitation-skills":
    "/bestsellers/impactful-facilitation-skills.jpg",
  "effective-business-communication":
    "/bestsellers/effective-business-communication.jpg",
  "presenting-with-impact": "/specialities/communication-excellence.jpg",
  "sales-excellence": "/bestsellers/sales-excellence.jpg",
  "cross-cultural-communication":
    "/bestsellers/cross-cultural-communication.jpg",
  "posh-sensitization":
    "/gallery/mental-health-empathetic-conversations/03.jpg",
};

export function courseImage(slug: string): string {
  return images[slug] ?? "/gallery/edtech-team-bonding/01.jpg";
}
