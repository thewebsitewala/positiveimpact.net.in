/**
 * About page content, from the client's current "Our Approach" and "Team"
 * pages and the client brief.
 */

export const philosophy = {
  quote:
    "Excellence is enabled when there is a shift in ‘will to do things’ followed by ‘the skill to do it efficiently’.",
  line: "The ultimate transformation happens when people alter their thinking.",
};

export const tbar = [
  { letter: "T", title: "Alter Thoughts", text: "Change how people see themselves, their role and their work." },
  { letter: "B", title: "Modify Behaviour", text: "New thinking shows up as new everyday behaviour." },
  { letter: "A", title: "Change Action", text: "Behaviour turns into different choices and actions at work." },
  { letter: "R", title: "Enhance Results", text: "Better actions produce better, lasting results." },
];

export const learningSteps = [
  { title: "Learning by Observation", text: "Participants see a skill in action through demonstrations and live examples." },
  { title: "Learning by Reflection", text: "They look inward at their own habits, assumptions and ways of working." },
  {
    title: "Learning by Active Experimentation",
    text: "They test new concepts, tools and techniques through case studies, live simulations, activities and exercises, and see first-hand how these improve their work.",
  },
  { title: "Installation of New Learning", text: "Coaching helps the new way of working stick back on the job." },
];

export interface TeamMember {
  name: string;
  role: string;
  photo: string;
  bio: string[];
  stats: { value: string; label: string }[];
  /** Link to a full profile page, if there is one. */
  profile?: string;
}

export const team: TeamMember[] = [
  {
    name: "Harshita Mankad Varghese",
    role: "Founder & Director · Chief Program Designer & Principal Facilitator",
    photo: "/harshita-mankad-varghese.png",
    bio: [
      "A certified leadership coach with 23 years of experience, Harshita uses varied learning techniques to meet changing learner behaviours, habits and preferences.",
      "She helps people grow their leadership impact, take on new challenges, deliver results and develop new leaders. The Be-Do-Have model is the foundation of her coaching.",
    ],
    stats: [
      { value: "23,000+", label: "Lives touched" },
      { value: "12,500+", label: "Hours facilitated" },
      { value: "23", label: "Years of experience" },
    ],
    profile: "/harshita-varghese",
  },
  {
    name: "Darshita Khanna",
    role: "Head – Academy & Senior Consultant",
    photo: "/team/darshita-khanna.jpg",
    bio: [
      "Darshita spent 18 years as a teacher, building students' life skills alongside academic knowledge, before moving into training and development to support continuous learning for young adults and professionals.",
      "Trained in Multiple Intelligences, storytelling and activity-based learning, she is known for creating a safe space where participants explore ideas without hesitation. She heads the Academy for faculty development programs and certification courses.",
    ],
    stats: [
      { value: "1,800+", label: "Lives touched" },
      { value: "800+", label: "Hours facilitated" },
      { value: "18", label: "Years in academics" },
    ],
  },
  {
    name: "Meera Gautama",
    role: "Head Client Partner & Senior Consultant",
    photo: "/team/meera-gautama.jpg",
    bio: [
      "Meera brings 34 years of experience in sales, business development, relationship management and customer service across aviation, hospitality, automobile and garments.",
      "Known for client advocacy, speed, responsiveness and quality delivery, she encourages participants to step out of their comfort zones, and grows Positive Impact's network of clients and fans.",
    ],
    stats: [{ value: "34", label: "Years of experience" }],
  },
];
