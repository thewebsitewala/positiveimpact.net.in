/**
 * Gallery sessions, taken from the client's current gallery page. Add one entry per session; the page lays
 * them out in order. Photos live in /public/gallery/<id>/ and the first photo
 * is shown largest.
 */

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GallerySession {
  id: string;
  client: string;
  team: string;
  program: string;
  images: GalleryImage[];
}

const photos = (id: string, alts: string[]): GalleryImage[] =>
  alts.map((alt, i) => ({
    src: `/gallery/${id}/${String(i + 1).padStart(2, "0")}.jpg`,
    alt,
  }));

export const gallerySessions: GallerySession[] = [
  {
    id: "edtech-team-bonding",
    client: "Multinational Educational Technology Company",
    team: "India",
    program: "Team Bonding & Communication Excellence",
    images: photos("edtech-team-bonding", [
      "Group photo of the team after the session",
      "Group presentation debrief",
      "The team celebrating a completed mission",
    ]),
  },
  {
    id: "vehicle-crucial-conversations",
    client: "World's Largest Commercial Vehicle Manufacturer",
    team: "India",
    program: "Crucial Conversations at Workplace",
    images: photos("vehicle-crucial-conversations", [
      "Participants in a Crucial Conversations workshop",
      "Small group practising a workplace conversation",
      "Facilitator guiding the group discussion",
    ]),
  },
  {
    id: "ecommerce-team-bonding",
    client: "An E-Commerce Company",
    team: "India",
    program: "Team Bonding & Self Awareness",
    images: photos("ecommerce-team-bonding", [
      "Team members getting to know each other",
      "A participant sharing about themselves",
      "The team presenting their vision of success",
    ]),
  },
  {
    id: "wealth-team-building",
    client: "Wealth Advisory and Family Office Solutions Firm",
    team: "India",
    program: "Team Building & Collaboration",
    images: photos("wealth-team-building", [
      "Team building activity in progress",
      "Team collaborating during the program",
    ]),
  },
  {
    id: "mental-health-empathetic-conversations",
    client: "A World-Renowned Centre for Mental Health, Neurosciences and Allied Fields",
    team: "India",
    program: "Empathetic Conversations",
    images: photos("mental-health-empathetic-conversations", [
      "Demonstrating empathy in communication",
      "Participants practising empathetic conversations",
      "Group photo after the session",
    ]),
  },
  {
    id: "pharma-problem-solving",
    client: "An Integrated Global Pharmaceutical Company",
    team: "India",
    program: "Effective Problem Solving",
    images: photos("pharma-problem-solving", [
      "Group problem-solving exercise",
      "Team discussion during the workshop",
      "Group photo of the participants",
    ]),
  },
];
