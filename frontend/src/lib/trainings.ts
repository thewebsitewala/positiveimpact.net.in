/**
 * The six training specialities. Content is taken from the client's current
 * pages on the old website (one page per speciality). Slugs match the
 * old URLs so redirects stay simple: /managerial-skills -> /training/managerial-skills.
 */

export interface Fact {
  label: string;
  value: string;
}

export interface Quote {
  text: string;
  author: string;
}

export interface Training {
  slug: string;
  title: string;
  /** Short line for cards (home section and /training). */
  summary: string;
  /** One-sentence promise under the title on the detail page. */
  tagline: string;
  intro: string[];
  image: string;
  facts: Fact[];
  /** "What you'll get" / training objectives. */
  highlights: string[];
  /** Core skills the program builds (outdoor programs). */
  skills?: string[];
  /** Courses offered in this track. */
  courses?: string[];
  audience: string;
  formats: string[];
  quote?: Quote;
  seoDescription: string;
}

export const trainings: Training[] = [
  {
    slug: "managerial-skills",
    title: "Managerial Skills",
    summary:
      "Practical frameworks in problem solving, delegation, and building high-performance team accountability.",
    tagline:
      "Experiential courses for people who lead teams and work with them, tailored to their role and experience.",
    intro: [
      "Our managerial skills courses run for corporates as in-person workshops or live online training. Every course is experiential, and the content is shaped around your learners: who they are, what their role is and what they are responsible for.",
      "Participants learn by doing, through activities, role plays, case studies and simulations of real work. Positive Impact coaches guide them throughout, so new skills are tried, tested and taken back to the job.",
    ],
    image: "/specialities/managerial-skills.jpg",
    facts: [
      { label: "Duration", value: "1–3 days" },
      { label: "Levels", value: "Junior · Mid · Senior" },
      { label: "Courses", value: "28 courses" },
    ],
    highlights: [
      "Content tailored to your learners' roles, responsibilities and experience",
      "Every course is experiential: activities, role plays, case studies and simulations",
      "Active coaching from Positive Impact coaches during the program",
      "Half-day, full-day or time-spaced sessions to suit your team",
    ],
    courses: [
      "Analytical Skills",
      "Blue Sky Thinking",
      "Building Accountability & Ownership",
      "Building High Performance Teams",
      "Building Innovation Mindset",
      "Conflict to Collaboration",
      "Critical Thinking",
      "Consistent Results Focus",
      "Decision Making at Workplace",
      "Designing Individual Development Plans",
      "Design Thinking Fundamentals",
      "Effective Problem Solving",
      "Effective Remote Working",
      "Enhancing Professional Demeanor",
      "Entrepreneurship Essentials",
      "Excellence in Business Execution",
      "Execution Excellence in Remote Working",
      "Empathy & Respect",
      "First Time Managers",
      "Interpersonal Skills",
      "Lateral Thinking",
      "Managing Teams",
      "Managing Virtual Teams Successfully",
      "Planning & Prioritizing",
      "Stakeholder Management",
      "Setting Goals and Giving Feedback",
      "Strong Work Relationships and Networking",
      "Time Management",
    ],
    audience:
      "Leads, supervisors, managers, senior managers and individual contributors who work in teams and with teams.",
    formats: ["In-person workshop", "Virtual live online", "Blended"],
    seoDescription:
      "28 experiential managerial skills courses for corporate teams, from first-time managers to senior managers. 1–3 days, in-person, virtual or blended.",
  },
  {
    slug: "leadership-impact",
    title: "Leadership Impact",
    summary:
      "Elevating strategic poise, emotional intelligence, and executive presence to lead high-stakes change.",
    tagline:
      "Courses and leadership journeys that build the capabilities organisations need to grow steadily and smartly.",
    intro: [
      "Organisations grow when their people can lead. Our Leadership Impact courses build those capabilities in working professionals, from team leads to directors, VPs and CXOs leading small or large teams.",
      "Skill-based programs run from one to three days. For deeper change, we design leadership journeys of three to twelve months, with learning spaced over time and coaching between sessions.",
    ],
    image: "/specialities/leadership-impact.jpg",
    facts: [
      { label: "Duration", value: "1–3 days" },
      { label: "Journeys", value: "3–12 months" },
      { label: "Levels", value: "Junior · Mid · Senior" },
    ],
    highlights: [
      "Programs for every level, from team leads to the CXO suite",
      "Learning through observation, reflection and active experimentation",
      "Role plays, case studies and simulations of real work scenarios",
      "Long-form leadership journeys of 3 to 12 months",
    ],
    courses: [
      "High Impact Leadership Program",
      "Agile Leadership",
      "Servant Leadership",
      "Transformational Leadership",
      "Personal Leadership",
      "Resilient Leadership",
      "Leading at the Speed of Trust",
      "Building Executive Presence",
      "Exercising Influence",
      "Strategic Thinking",
      "Building Trust and Rapport",
      "Emotional Intelligence at Work",
      "Appreciative Inquiry for Leaders",
      "Coaching Skills for Leaders",
      "Managing Unconscious Bias",
      "Managing Change Effectively",
      "Women in Leadership",
    ],
    audience:
      "Team leads, supervisors, managers, senior managers, individual contributors, directors, VPs and CXOs who lead small or large teams.",
    formats: ["In-person workshop", "Virtual live online", "Blended"],
    seoDescription:
      "17 leadership courses and 3–12 month leadership journeys for team leads, managers, directors and CXOs. In-person, virtual or blended.",
  },
  {
    slug: "communication-excellence",
    title: "Communication Excellence",
    summary:
      "Persuasive business storytelling and executive pitching to articulate vision and influence stakeholders.",
    tagline:
      "Courses that help managers and leaders use communication to make their workplace work better.",
    intro: [
      "Our communication courses are built on thousands of stakeholder interactions and a working understanding of group dynamics. They prepare managers and leaders to speak, write, present and listen in ways that move work forward.",
      "From difficult conversations to data storytelling and public speaking, every course is practised live, with feedback and coaching from Positive Impact facilitators.",
    ],
    image: "/specialities/communication-excellence.jpg",
    facts: [
      { label: "Duration", value: "1–3 days" },
      { label: "Levels", value: "Junior · Mid · Senior" },
      { label: "Courses", value: "19 courses" },
    ],
    highlights: [
      "Built on thousands of real stakeholder interactions",
      "Practised live through role plays, presentations and simulations",
      "Covers conversations, presentations, facilitation and storytelling",
      "Content tailored to your team's experience and roles",
    ],
    courses: [
      "Assertive Communication",
      "Effective Business Communication",
      "Presenting with Impact",
      "Cross Cultural Communication",
      "Consultative Selling",
      "Transformational Communication",
      "Effective Stakeholder Communication",
      "Interviewing Skills for Hiring Team",
      "Critical Conversations When Stakes Are High",
      "The Art of Fine Questioning",
      "The Art of Business Storytelling",
      "Data Storytelling",
      "Fierce Conversations in Workplace",
      "Effective Appraisal Conversations",
      "Persuasive Communication",
      "Public Speaking",
      "Excellence in Virtual Facilitation",
      "High Impact Facilitation Skills",
      "Conversational English for Professionals",
    ],
    audience:
      "Leads, supervisors, managers, senior managers, individual contributors, directors, VPs and CXO teams who work in and with teams.",
    formats: ["In-person workshop", "Virtual live online", "Blended"],
    seoDescription:
      "19 communication courses for corporate teams: storytelling, presenting, stakeholder and critical conversations, facilitation. In-person, virtual or blended.",
  },
  {
    slug: "sports-based-leadership-program",
    title: "Sports Based Leadership Program",
    summary:
      "Action-oriented outdoor sporting challenges to break comfort zones and forge unbreakable team trust.",
    tagline:
      "An outdoor team event, led by trained experts, where leadership is practised on the field, not just discussed.",
    intro: [
      "This is an outdoor program led by trained experts in sports-based leadership. Teams play, plan and recover together, and the game becomes a live mirror of how they lead, decide and communicate under pressure.",
      "It suits any team that wants to work together more effectively and strengthen the connections between its people.",
    ],
    image: "/specialities/sports-leadership.jpg",
    facts: [
      { label: "Duration", value: "6, 8, 12 or 16 hours" },
      { label: "Format", value: "Outdoor" },
      { label: "Group", value: "In-house teams" },
    ],
    highlights: [
      "Build team bonding and trust",
      "Expand comfort zones",
      "Develop critical thinking and decision-making",
      "Strengthen strategic communication",
      "Lead well in challenging situations",
    ],
    skills: [
      "Teamwork",
      "Strategy",
      "Critical & crisis communication",
      "Resilience",
      "Flexibility",
      "Stepping out of the comfort zone",
      "Collaboration",
      "Trust & rapport",
      "Decision-making",
      "Creative thinking",
    ],
    audience:
      "Teams that want to work together more effectively and strengthen their connections.",
    formats: ["Outdoor event"],
    quote: {
      text: "One man practicing sportsmanship is far better than 50 preaching it.",
      author: "Knute Rockne",
    },
    seoDescription:
      "Sports-based outbound leadership training for corporate teams in Bengaluru: trust, decision-making and crisis communication. 6, 8, 12 or 16 hours.",
  },
  {
    slug: "book-based-leadership-programs",
    title: "Book Based Leadership Workshops",
    summary:
      "Deconstructing seminal leadership literature to translate timeless wisdom into daily managerial habits.",
    tagline:
      "Workshops built on the ideas in books that change minds, shaped to what your team needs.",
    intro: [
      "We run workshops on the core leadership and communication ideas set out in books that change minds. Each one is contextualised to the specific needs of your team, so the ideas turn into everyday habits.",
      "We can turn any bestselling book into a leadership workshop. The length is set around your requirements.",
    ],
    image: "/specialities/book-workshops.jpg",
    facts: [
      { label: "Duration", value: "Customised" },
      { label: "Format", value: "In-person or virtual" },
      { label: "Books", value: "Any bestseller" },
    ],
    highlights: [
      "Any bestselling book can be turned into a workshop",
      "Contextualised to your organisation's specific needs",
      "Duration customised to your requirements",
      "Delivered in person or as live online sessions",
    ],
    audience:
      "Teams and leaders who want to turn the ideas in leadership books into everyday practice.",
    formats: ["In-person workshop", "Virtual live online"],
    seoDescription:
      "Leadership workshops built on bestselling books, contextualised to your team. Any book, any duration, in-person or live online.",
  },
  {
    slug: "leadership-with-horses",
    title: "Leadership with Horses",
    summary:
      "Equine-assisted experiential learning providing instant, unfiltered feedback on authentic presence and trust.",
    tagline:
      "Next Level Leadership with Horses: outdoor training where horses give honest, instant feedback on how you lead.",
    intro: [
      "This outdoor program is held at horse training academies and led by EAHAE Horse Dream Certified Educators and Certified Leadership Coaches.",
      "Horses respond to presence, not position. Working with them shows managers and leaders their own leadership strategy in action, and gives immediate feedback on what earns trust and what doesn't.",
    ],
    image: "/specialities/leadership-with-horses.jpg",
    facts: [
      { label: "Duration", value: "6, 8, 12 or 16 hours" },
      { label: "Venue", value: "Horse training academies" },
      { label: "Led by", value: "EAHAE certified educators" },
    ],
    highlights: [
      "See your own leadership strategy in action",
      "Get immediate feedback on your leadership outcomes",
      "Reflect deeply on your leadership style",
      "Build an emotional connection with your team",
      "Learn how to win trust",
      "Practise leading in challenging situations",
    ],
    skills: [
      "Situational leadership",
      "Winning trust",
      "Leading with confidence",
      "Resilience",
      "Flexibility",
      "Stepping out of the comfort zone",
      "Emotional intelligence",
    ],
    audience:
      "Managers and leaders who want to lead with more impact and influence.",
    formats: ["Outdoor, at horse training academies"],
    quote: {
      text: "Flaming enthusiasm, backed by horse-sense and persistence, is the quality that most frequently makes for success.",
      author: "Dale Carnegie",
    },
    seoDescription:
      "Equine-assisted leadership training at horse academies, led by EAHAE Horse Dream certified educators. Trust, presence and situational leadership.",
  },
];

/** The experiential learning process (CLAUDE.md §2), shared by all programs. */
export const learningProcess = [
  {
    title: "Observation",
    text: "Participants see the skill in action through demonstrations and live examples.",
  },
  {
    title: "Reflection",
    text: "They look inward at their own habits and how they lead today.",
  },
  {
    title: "Active experimentation",
    text: "Case studies, simulations, activities and exercises put the skill to work.",
  },
  {
    title: "New learning installed",
    text: "Coaching helps them carry the change back into their daily work.",
  },
];

export function getTraining(slug: string): Training | undefined {
  return trainings.find((t) => t.slug === slug);
}
