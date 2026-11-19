/**
 * Bestseller courses, extracted from the client's current course pages on the
 * old website (one page per course). Facts (durations, modules, quotes) are
 * kept exact; wording is lightly edited for clarity. Do not invent content.
 */

export type CourseCategory =
  | "Leadership Impact"
  | "Managerial Skills"
  | "Communication Excellence"
  | "Certification";

export interface Course {
  slug: string;
  /** Old site path, for 301 redirects, e.g. "/copy-of-high-impact-leadership". */
  oldPath: string;
  title: string;
  category: CourseCategory;
  /** One sentence (max ~25 words) for cards, from the page's own overview. */
  summary: string;
  /** Exactly as the page states it, e.g. "3 Days (21 Hours)". Empty string if not stated. */
  duration: string;
  quote?: { text: string; author: string };
  /** 1-3 short paragraphs of overview. */
  intro: string[];
  /** Who should attend, one role/group per item. */
  audience: string[];
  /** Learning objectives / outcomes, one per item, short. */
  objectives: string[];
  /** Modules/topics in order, one per item, short title only. */
  modules: string[];
  /** Methods used, e.g. "Simulations", "Role plays", "Case reviews". */
  methods: string[];
  /** Delivery formats, e.g. "In-person", "Virtual live online", "Blended". */
  formats: string[];
  /** Other facts worth showing (time-spaced option, customizable, assessments, certificate). */
  notes: string[];
  /** Shows a "Bestseller" badge and lists the course in the home Best Sellers section. */
  bestseller?: boolean;
  /** Steps to earn the certificate (certification courses). */
  certification?: string[];
}

const standardFormats = ["In-person workshop", "Virtual live online training", "Blended"];

const tailoredNote =
  "Content is curated to the audience's work experience and tailored to each learner's role and responsibilities.";

export const courses: Course[] = [
  {
    // Signature program (old page /certified-positive-impact-trainer).
    slug: "certified-positive-impact-trainer",
    oldPath: "/certified-positive-impact-trainer",
    title: "Certified Positive Impact Master Trainer",
    category: "Certification",
    summary:
      "Harshita Mankad Varghese's signature program that prepares trainers and facilitators to deliver engaging, results-driven sessions.",
    duration: "5 Days (40 Hours)",
    intro: [
      "This certification prepares trainers and facilitators to run sessions that deliver valuable insights, relevant content and results. It is the signature program of founder Harshita Mankad Varghese.",
      "It suits soft skills trainers, product or technical trainers, and managers or leaders who want an effective training format for the sessions they run.",
    ],
    audience: [
      "Freelance soft skills trainers",
      "Freelance leadership training consultants",
      "In-house technical and product trainers",
      "Managers who facilitate learning sessions",
      "Subject matter experts who run knowledge sessions",
    ],
    objectives: [
      "Deliver experiential learning that engages small and large groups",
      "Use presentation techniques suited to diverse learners",
      "Organise content with impact and present ideas clearly",
      "Create an open, inclusive and stimulating learning environment",
      "Design relevant activities and exercises for concept delivery",
      "Handle difficult participants and situations confidently",
    ],
    modules: [
      "Adult Learning Principles",
      "Instructional Design Framework",
      "Content Planning Methods",
      "Content Presentation Style",
      "Seeking & Retaining Audience Engagement",
      "Training & Facilitation Methodology",
      "In-Person, Outbound & Virtual Live Online Sessions",
      "Interpersonal Skills for Trainers",
      "Training Facilitation Tools & Techniques",
      "Managing Difficult Participants",
      "Coaching Participants for Active Learning",
      "Training Evaluation Methods",
      "Measuring Success of the Intervention",
    ],
    methods: ["Simulations", "Games", "Activities", "Short role plays", "Scenario evaluation", "Demonstrations"],
    formats: ["In-person workshop", "Virtual live online training", "Blended"],
    notes: [
      "Virtual option: 40 hours of session time in 2–3 hour blocks over several days",
      "Available as an in-house program for your organisation",
      "Content tailored to participants' work experience, roles and responsibilities",
    ],
    certification: [
      "Complete all modules",
      "Complete the in-built assessments, used for feedback and improvement during the program",
      "Deliver a live training demo at the end of the program and reach the minimum qualifying score on all trainer competencies",
    ],
  },
  {
    slug: "high-impact-leadership",
    bestseller: true,
    oldPath: "/high-impact-leadership",
    title: "High Impact Leadership",
    category: "Leadership Impact",
    summary:
      "A leadership pathway that helps leaders build team commitment and turn strategy into effective action.",
    duration: "3 Days (21 Hours)",
    quote: {
      text: "A leader is one who knows the way, goes the way, and shows the way.",
      author: "John C. Maxwell",
    },
    intro: [
      "Great leaders have a clear vision, lead by example, uplift others and rally their teams. It starts with the ability to challenge assumptions, empower people to reach a higher version of their capability, and help them expand their comfort zones.",
      "This program is a learning pathway that brings together the elements of strong leadership, helping participants build team commitment and turn strategy into effective action.",
    ],
    audience: [
      "Managers and Senior Managers",
      "Group Heads, Functional Heads and Directors",
      "Subject Matter Experts",
      "C-Suite Members",
    ],
    objectives: [
      "Learn the attributes of personal leadership",
      "Strengthen interpersonal skills with team members",
      "Model resilience while leading a team in crisis",
      "Inspire teams to willingly take on more responsibility",
      "Communicate with impact",
      "Build a superior team by coaching it effectively",
    ],
    modules: [
      "Developing Personal Leadership",
      "Building Resilient Leadership",
      "Demonstrating Collaborative Leadership",
      "Developing Powerful Vision",
      "Result Oriented Communication",
      "Leading with Emotional Intelligence",
      "Build High Performance Teams",
      "Team Empowerment",
      "Growing Commitment & Accountability",
      "Giving Impactful Feedback",
      "Coaching & Mentoring Skills",
    ],
    methods: [
      "Simulations",
      "Games",
      "Activities",
      "Short role plays",
      "Case reviews",
      "Scenario evaluations",
      "Demonstrations",
    ],
    formats: standardFormats,
    notes: [
      "Can be delivered in a time-spaced format",
      "Customization available on request",
      tailoredNote,
    ],
  },
  {
    slug: "accelerating-women-leadership",
    bestseller: true,
    oldPath: "/copy-of-high-impact-leadership",
    title: "Accelerating Women Leadership",
    category: "Leadership Impact",
    summary:
      "A 15-session acceleration program that helps women leaders lead with authenticity, presence and strategic influence.",
    duration: "30 Hours",
    quote: {
      text: "Behind every progressive society are women who dared to lead differently, with empathy, resilience, and relentless vision.",
      author: "",
    },
    intro: [
      "A 15-session leadership acceleration program for women leaders. It bridges theory and practice, combining research-backed frameworks with practical strategies for authentic, impactful and adaptive leadership.",
      "It addresses barriers women leaders often face, such as stereotype threat, limited networks and the demands of emotional labor, through structured behavioral interventions.",
      "The program moves through three phases: reframing self-perception (sessions 1-4), enhancing leadership presence (sessions 5-9) and mastering strategic influence (sessions 10-15).",
    ],
    audience: [
      "Women Managers and Senior Managers",
      "Women Group Heads, Functional Heads and Directors",
      "Women Subject Matter Experts",
      "Women C-Suite Members",
    ],
    objectives: [
      "Understand the attributes of personal leadership",
      "Strengthen interpersonal skills with team members",
      "Show resilience while leading a team through a crisis",
      "Encourage teams to take on responsibility willingly",
      "Communicate with impact",
      "Build a strong team through effective coaching",
    ],
    modules: [
      "Nurturing a Powerful Concept of Self",
      "Developing Leadership Vision",
      "Demonstrating Growth Mindset",
      "Unbuckling Limiting Beliefs & Habits",
      "Power Your Leadership Brand",
      "Managing Emotions at Workplace",
      "Leading with Compassion & Authenticity",
      "Building Strategic Orientation",
      "Communicate with Purpose and Power",
      "Leadership Decision Making Mastery",
      "The Art of High-Stakes Negotiation",
      "AI Fundamentals for Leaders",
      "Growing and Leveraging High Impact Network",
      "Building Influence & Impact with Stakeholders",
      "Mindfulness for Balancing Work & Life",
    ],
    methods: [
      "Simulations",
      "Scenario-based learning",
      "Role plays",
      "Case reviews",
      "Interactive demonstrations",
      "Games",
      "Peer feedback",
      "Facilitated debriefs",
    ],
    formats: ["Virtual (time-spaced)", "In-person workshop"],
    notes: [
      "Standard format is virtual: 30 hours, time-spaced across 15 sessions",
      "Can be run as an in-person workshop, with duration adjusted to the content chosen",
      "Sessions are reflection-driven, with an emphasis on hands-on application",
      "Customization available on request",
    ],
  },
  {
    slug: "mindful-leadership",
    oldPath: "/mindful-leadership",
    title: "Mindful Leadership",
    category: "Leadership Impact",
    summary:
      "Builds resilience, empathy and calm under pressure through the principles and practice of mindfulness at work.",
    duration: "2 Days (14 Hours)",
    quote: {
      text: "The mind is like water. When it is turbulent, it is difficult to see. When it is calm, everything becomes clearer.",
      author: "Buddha",
    },
    intro: [
      "Mindfulness is central to leadership. Drawing on Jon Kabat-Zinn's view, it means moment-by-moment awareness of our thoughts, feelings, bodily sensations and surroundings.",
      "Clinical and neuroscience research links regular mindfulness practice to lower stress and anxiety and to better attention and memory.",
    ],
    audience: ["All employees"],
    objectives: [
      "Build a deeper understanding of mindfulness at work",
      "Strengthen resilience and empathy through mindfulness practice",
      "Understand the process and principles of mindfulness",
      "Learn skills for reducing workplace stress",
    ],
    modules: [
      "Basic Elements of Mindfulness",
      "Attention, Presence, Intention and Openness",
      "Reducing Distractions",
      "Aligning Mind, Body and Spirit",
      "Mind Time Practices",
      "Building Personal Resilience",
      "Emotional Control in Communication",
      "From Impulsive Reactions to Thoughtful Responses",
      "Breath Awareness",
      "Working with Thoughts and Emotions",
      "Awareness of the Senses",
      "Regulating Self-Talk Patterns",
    ],
    methods: [
      "Simulations",
      "Games",
      "Activities",
      "Short role plays",
      "Case reviews",
      "Scenario evaluations",
      "Demonstrations",
    ],
    formats: standardFormats,
    notes: [
      "Can be delivered in a time-spaced format",
      "Customization available on request",
      tailoredNote,
    ],
  },
  {
    slug: "first-time-managers",
    bestseller: true,
    oldPath: "/first-time-managers",
    title: "First Time Managers",
    category: "Managerial Skills",
    summary:
      "A structured learning journey that prepares new managers for the shift from individual contributor to leading a team.",
    duration: "3 Days (21 Hours)",
    // Quote dropped: it is cut off mid-sentence on the old page
    // ("...who can get their teams"). Restore once the client confirms it.
    intro: [
      "Moving from individual contributor to manager doubles your responsibilities: you are accountable for your own performance and your team's. The shift can be dramatic and unsettling, and harder still when leadership is expected from day one.",
      "This program is a structured learning journey that prepares new managers for their new role.",
    ],
    audience: ["First Time Managers", "Emerging Leads"],
    objectives: [
      "Build trust and credibility with team members",
      "Plan well and execute robustly",
      "Communicate to influence others with ease",
      "Manage all stakeholders effectively",
      "Demonstrate time leadership in business execution",
    ],
    modules: [
      "Drivers of Managerial Success",
      "Planning & SMART Goal Setting",
      "Creative Problem Solving & Decision Making",
      "Interpersonal Relationships",
      "Building Trust & Rapport",
      "Stakeholder Management",
      "Team Building",
      "Prioritizing & Time Management",
      "Effective Delegation",
      "Managing Up and Down",
      "Giving Constructive Feedback",
      "Appraisal Conversations",
    ],
    methods: [
      "Simulations",
      "Games",
      "Activities",
      "Short role plays",
      "Case reviews",
      "Scenario evaluations",
      "Demonstrations",
    ],
    formats: standardFormats,
    notes: [
      "Can be delivered in a time-spaced format",
      "Customization available on request",
      tailoredNote,
    ],
  },
  {
    slug: "emotional-intelligence-at-work",
    bestseller: true,
    oldPath: "/emotional-intelligence-at-work",
    title: "Emotional Intelligence at Work",
    category: "Leadership Impact",
    summary:
      "Helps people identify, understand and manage their own emotions and others', reducing stress and strengthening professional connections.",
    duration: "2 Days (14 Hours)",
    quote: {
      text: "Emotional aptitude is a 'meta-ability'",
      author: "Daniel Goleman",
    },
    intro: [
      "Emotional intelligence is the ability to identify, understand, control and assess our own emotions and those of others. It means responding to emotions well, overcoming present stress and staying aware of how our words and actions affect others.",
      "Leaders need strong emotional intelligence, especially under pressure, and they must first relate well to themselves before they can relate well to others.",
    ],
    audience: [
      "Team Leads",
      "Managers and Senior Managers",
      "Directors and Functional Heads",
      "C-Level Members",
      "Individual Contributors",
    ],
    objectives: [
      "Understand your own emotional intelligence capabilities",
      "Develop emotional control to create professional connections",
      "Strengthen people engagement skills",
      "Learn how to build emotional intelligence",
      "Reduce stress at work and improve productivity",
      "Build mental health for yourself and your team",
    ],
    modules: [
      "Understand Human Motivation",
      "Know Your Emotional Triggers",
      "Pillars of Emotional Intelligence",
      "Increasing Mental Wellness at Workplace",
      "Practising Self Care",
      "Building Psychological Safety for Teams",
      "Communicate with Empathy",
      "Growing Resiliency",
      "Working with Emotional Intelligence",
      "Handling Stress Effectively",
      "Achieving Work Life Balance",
    ],
    methods: [
      "Simulations",
      "Games",
      "Activities",
      "Short role plays",
      "Case reviews",
      "Scenario evaluations",
      "Demonstrations",
    ],
    formats: standardFormats,
    notes: [
      "Can be delivered in a time-spaced format",
      "Customization available on request",
      tailoredNote,
    ],
  },
  {
    slug: "influencing-stakeholders",
    bestseller: true,
    oldPath: "/influencing-stakeholders",
    title: "Influencing Stakeholders",
    category: "Managerial Skills",
    summary:
      "Build trust, gain buy-in and manage expectations with stakeholders at every level, especially through change and transition.",
    duration: "2 Days (14 Hours)",
    quote: {
      text: "The key to successful leadership is influence, not authority.",
      author: "Ken Blanchard",
    },
    intro: [
      "This program covers building strong relationships at every level of the organization: earning trust and cooperation, gaining buy-in and managing expectations through meaningful contribution.",
      "Participants learn influencing techniques and how to adapt them to different stakeholder situations, especially during change and transition. It suits anyone whose role involves frequent internal or external stakeholder interaction.",
    ],
    audience: [
      "Supervisors and Team Leads",
      "Members of Cross-Functional Teams",
      "Managers and Senior Managers",
      "Directors and Functional Heads",
      "Subject Matter Experts",
    ],
    objectives: [
      "Manage stakeholder expectations effectively",
      "Increase influence while working in teams",
      "Establish trust and credibility",
      "Recognize and overcome resistance",
      "Use persuasion to move others to action",
      "Handle difficult conversations with diplomacy and tact",
    ],
    modules: [
      "Build Trust with Stakeholders",
      "Enhancing Assertiveness Quotient",
      "Managing Critical Communication",
      "Asking Questions, Clarifying Doubts",
      "Influencing Tools",
      "The Art of Persuasion",
      "Managing Stakeholder Expectations",
      "Influencing without Authority",
      "Networking with Stakeholders",
      "Conflict to Collaboration",
    ],
    methods: [
      "Simulations",
      "Activities",
      "Short role plays",
      "Case reviews",
      "Scenario evaluations",
      "Demonstrations",
    ],
    formats: standardFormats,
    notes: [
      "Can be delivered in a time-spaced format",
      "Customization available on request",
      tailoredNote,
    ],
  },
  {
    slug: "building-high-performance-teams",
    bestseller: true,
    oldPath: "/building-high-performance-teams",
    title: "Building High Performance Teams",
    category: "Managerial Skills",
    summary:
      "Frameworks and tools for managers to build high-performance teams and turn individual strengths into strong collaborative results.",
    duration: "2 Days (14 Hours)",
    quote: {
      text: "What great individuals cannot achieve on their own, can be achieved by high performance teams.",
      author: "",
    },
    intro: [
      "Forming and leading high-performance teams is one of the most complex challenges leaders face. This workshop examines what high-performing teams look like and the practical steps to build and sustain a collaborative climate that delivers consistent results.",
      "Managers in organizations of any size or type get strategic frameworks and tools to build such teams and draw on each member's strengths.",
    ],
    audience: [
      "Managers and Senior Managers",
      "Directors and Functional Heads",
      "C-Level Members",
    ],
    objectives: [
      "Understand the pillars of a high-performing team",
      "Move from managing to leading",
      "Become an effective team coach",
      "Set goals well",
      "Energize teams to do more and be more",
      "Build trust within teams",
      "Delegate effectively",
      "Collaborate and build synergy in teams",
    ],
    modules: [
      "Enhancing Self Awareness",
      "Becoming an Emotionally Intelligent Leader",
      "Demonstrating Team Leadership",
      "Building Trust & Rapport",
      "Engaging in Result-Oriented Communication",
      "Planning & Goal Setting",
      "Performance Management",
      "Effective Delegation",
      "Giving Constructive Feedback",
      "Coaching & Mentoring Skills",
      "Managing Change Effectively",
      "Influence for Collaboration",
      "Leading Effective Team Meetings",
      "Conflict Management",
    ],
    methods: [
      "Simulations",
      "Games",
      "Activities",
      "Short role plays",
      "Case reviews",
      "Scenario evaluations",
      "Demonstrations",
    ],
    formats: standardFormats,
    notes: [
      "Can be delivered in a time-spaced format",
      "Customization available on request",
      tailoredNote,
    ],
  },
  {
    slug: "time-management",
    oldPath: "/time-management",
    title: "Time Management",
    category: "Managerial Skills",
    summary:
      "Spot the thinking patterns and work habits that eat into your time, and build the skills to lead your time well.",
    duration: "1 Day (7 Hours)",
    quote: {
      text: "Take care of the minutes and the hours will take care of themselves.",
      author: "Lord Chesterfield",
    },
    intro: [
      "Conflicting goals, shifting priorities and weak communication derail work plans, delay deliveries and create a chaotic workplace that drains motivation. Stress adds emotional reactions that make it even harder to keep pace.",
      "This course helps participants spot the thinking patterns and work habits that undermine their ability to stay ahead, and build the skills to demonstrate time leadership.",
    ],
    audience: [],
    objectives: [
      "Understand the emotional impact of stress on time management",
      "Understand how people perceive and use time",
      "Recognize and overcome barriers to managing time",
      "Tell productive work from unproductive work",
      "Pace work through planning and prioritization",
      "Identify the patterns of common time robbers",
    ],
    modules: [
      "Understanding Time Leakage",
      "Enhancing Personal Productivity",
      "Time Management Tools",
      "Lining Up Your Ducks: Prioritize!",
      "Avoiding Procrastination",
      "Methods to Manage Self with Time Effectively",
    ],
    methods: [],
    formats: [],
    notes: ["Can be organized in-house", "Customization available on request"],
  },
  {
    slug: "coaching-skills-for-managers-and-leaders",
    bestseller: true,
    oldPath: "/coaching-skills-for-managers-leaders",
    title: "Coaching Skills for Managers & Leaders",
    category: "Managerial Skills",
    summary:
      "Builds a coaching mindset in managers and leaders, using powerful questions to draw out their people's untapped potential.",
    duration: "1 Day (7 Hours)",
    quote: {
      text: "An insightful question can spark a person to see themselves and the world differently and solve their own challenges.",
      author: "Christopher Jones, Forbes",
    },
    intro: [
      "Leaders are expected to develop other leaders, and coaching and mentoring are central to that. Coaching draws out untapped potential through trust and competence: inquiry into the coachee's values and beliefs, joint goal-setting, ownership of outcomes and a concrete action plan.",
      "Coaching favors asking over telling. Through powerful questions, the coach helps the coachee build self-awareness and chart their own learning path. This course builds a coaching mindset and coaching ability in managers and leaders.",
    ],
    audience: [
      "Team Leads",
      "Managers and Senior Managers",
      "Directors and Functional Heads",
      "C-Level Members",
    ],
    objectives: [
      "Build the coaching capability of people managers",
      "Inspire people to seek higher outcomes",
      "Guide teams to build strong business perspectives",
      "Motivate teams to do more and be more",
      "Strengthen trust within the team",
    ],
    modules: [
      "Coaching Fundamentals",
      "Building Trust & Rapport",
      "Being an Inspiring Coach",
      "Asking Questions that Provoke Thought",
      "Result-Oriented Communication",
      "Feedforward and Feedback",
      "Celebrating Success",
    ],
    methods: ["Simulations", "Games", "Activities", "Short role plays", "Demonstrations"],
    formats: standardFormats,
    notes: [
      "Can be delivered in a time-spaced format",
      "Customization available on request",
      tailoredNote,
    ],
  },
  {
    slug: "impactful-facilitation-skills",
    oldPath: "/impactful-facilitation-skills",
    title: "Impactful Facilitation Skills",
    category: "Communication Excellence",
    summary:
      "Helps professionals in any role become effective facilitators who create interactive, engaging learning for their audiences.",
    duration: "1 Day (7 Hours)",
    quote: {
      text: "Facilitation skills are the abilities you use to provide opportunities and resources to a group of people",
      author: "Indeed.com",
    },
    intro: [
      "Facilitation is more than telling people information. It invites participants into the conversation so they can learn, because people don't like to be told; they like to be heard.",
      "This program helps participants, whatever their professional role, become top-notch facilitators who create interactive learning environments, whether they are training a group or a leader updating or consulting their team.",
    ],
    audience: ["Professionals in any role who facilitate learning or discussions"],
    objectives: [
      "Facilitate confidently for a wide range of audiences",
      "Deliver content with high impact",
      "Deliver experiential learning with strong engagement in small and large groups",
      "Structure content delivery for maximum learning",
      "Engage audiences to achieve the required learning impact",
    ],
    modules: [
      "Content Curation Process",
      "Content Structuring & Design",
      "High Impact Facilitation Methods",
      "Acing Audience Engagement",
      "Managing Difficult Audience",
      "Managing Small and Large Groups",
    ],
    methods: [],
    formats: [],
    notes: ["Can be organized in-house", "Customization available on request"],
  },
  {
    slug: "effective-business-communication",
    oldPath: "/effective-business-communication",
    title: "Effective Business Communication",
    category: "Communication Excellence",
    summary:
      "Helps leaders and managers communicate clearly and persuasively, hold attention, build consensus quickly and move teams to act.",
    duration: "2 Days (14 Hours)",
    quote: {
      text: "The art of communication is the language of leadership.",
      author: "",
    },
    intro: [
      "Leadership shows in how we communicate. Communication works when the listener understands the message, and clear, concise, simple messaging is essential to business success.",
      "This program shows how to make everyday communication more compelling, hold audience attention and build consensus quickly. It builds executive conversation skills so leaders and managers can articulate a vision, share ideas persuasively and motivate teams to act.",
    ],
    audience: ["Junior Executives", "Team Leads", "Managers", "Senior Managers"],
    objectives: [
      "Apply the techniques of effective communicators",
      "Build credibility with stakeholders",
      "Handle impromptu communication with confidence",
      "Use frameworks for difficult conversations",
      "Gain buy-in through more objective communication",
      "Balance emotion and logic when persuading",
    ],
    modules: [
      "Communication Fundamentals",
      "The Magic of Structure",
      "Listening & Responding Skills",
      "Navigating Difficult Conversations",
      "Cultural Context in Business Communication",
      "Setting Context Appropriately",
      "Verbal & Non-Verbal Elements",
      "Enhancing Assertiveness Quotient",
      "Acing Virtual Communication",
      "The Art of Persuasion",
      "Objection Handling",
      "Communicating Purposefully",
      "Impactful Business Writing",
    ],
    methods: [
      "Simulations",
      "Games",
      "Activities",
      "Short role plays",
      "Case reviews",
      "Scenario evaluations",
      "Demonstrations",
    ],
    formats: standardFormats,
    notes: [
      "Can be delivered in a time-spaced format",
      "Customization available on request",
      tailoredNote,
    ],
  },
  {
    slug: "the-art-of-business-storytelling",
    bestseller: true,
    oldPath: "/the-art-of-business-storytelling",
    title: "The Art of Business Storytelling",
    category: "Communication Excellence",
    summary:
      "Sell your idea with business storytelling: build emotional connection and trust for faster buy-in and collaboration.",
    duration: "2 Days (14 Hours)",
    quote: {
      text: "We do not know how good the story is, till we hear one!",
      author: "",
    },
    intro: [
      "Research in neuroscience and cognitive psychology suggests stories often persuade more effectively than rational arguments, and that emotion wins attention before logic does.",
      "Storytelling builds emotional connection and trust between speaker and audience, which leads to faster buy-in, better collaboration and more productive leadership.",
    ],
    audience: [
      "Managers and Senior Managers",
      "Directors and Functional Heads",
      "C-Level Members",
      "Subject Matter Experts",
    ],
    objectives: [
      "Build an emotional connection with the audience and hold their attention",
      "Navigate business conversations with impact",
      "Weave thought patterns using narration methods",
      "Learn the structure and style of business storytelling",
      "Use theatre elements to create powerful storylines",
    ],
    modules: [
      "Business Storytelling Elements",
      "Building Dramatic Narratives",
      "Different Types of Stories",
      "Getting Audience Attention",
      "Crafting a Storyline",
      "Data Storytelling",
      "Impactful Delivery",
      "Sharp Storytelling in Presentations",
    ],
    methods: [
      "Intensive practice sessions",
      "Simulations",
      "Scenario evaluations",
      "Demonstrations",
      "Experimentation with concepts",
    ],
    formats: standardFormats,
    notes: [
      "Post-training evaluation options available",
      "Can be delivered in a time-spaced format",
      "Customization available on request",
      tailoredNote,
    ],
  },
  {
    slug: "presenting-with-impact",
    oldPath: "/presenting-with-impact",
    title: "Presenting with Impact",
    category: "Communication Excellence",
    summary:
      "Build persuasive, well-structured presentations and deliver them with confidence to win stakeholder buy-in quickly.",
    duration: "3 Days (21 Hours)",
    quote: {
      text: "If you can't explain it simply, you don't understand it well enough.",
      author: "Albert Einstein",
    },
    intro: [
      "We communicate to convince people of ideas, so presentations need to persuade and influence.",
      "Strong presenters combine a persuasive structure, evidence-based data, likeable delivery and attention-grabbing design with visual aids that support seamless delivery. They use positive body language, a powerful voice, logical flow and a clear storyline, and they handle disruptions and difficult audiences well.",
    ],
    audience: [
      "Individual contributors who make presentations",
      "Managers and Senior Managers",
      "Directors and Functional Heads",
      "C-Level Members",
    ],
    objectives: [
      "Create powerful first impressions",
      "Secure and hold audience attention",
      "Build logical flow into presentations",
      "Create visually effective presentations",
      "Build a persuasive content structure",
      "Make content relevant to the audience",
      "Gain stakeholder buy-in quickly",
    ],
    modules: [
      "First Impressions Matter",
      "Getting Audience Attention",
      "Magic of Structure",
      "Planning your Presentation",
      "Presentation Story Boarding",
      "Designing your Presentation",
      "Logical Flow Framework",
      "Data Visualization",
      "Becoming a Confident Presenter",
      "High Impact Delivery",
      "Building Consensus with Audience",
      "Managing Difficult Situations during Delivery",
    ],
    methods: [
      "Intensive practice sessions",
      "Simulations",
      "Scenario evaluations",
      "Demonstrations",
    ],
    formats: standardFormats,
    notes: [
      "Certification requires completing all modules",
      "In-built assessments are video recorded and used for feedback",
      "End-of-program assessment: a live presentation demo with a minimum qualifying score on all trainer competencies",
      "Can be delivered in a time-spaced format",
      "Customization available for in-house teams",
    ],
  },
  {
    slug: "sales-excellence",
    oldPath: "/cross-cultural-communication",
    title: "Sales Excellence",
    category: "Communication Excellence",
    summary:
      "Equips sales professionals to plan with the SPANCO process and move from transactional to consultative selling as trusted advisors.",
    duration: "2 Days (14 Hours)",
    intro: [
      "This program gives sales professionals the knowledge, techniques and strategies to improve sales performance and meet targets. Participants learn to plan and organize their sales efforts using the SPANCO sales process, with the aim of stronger team performance, revenue and profitability.",
      "The program moves participants from transactional to consultative selling: understanding the customer's business, challenges and objectives before proposing a tailored solution, so the salesperson becomes a trusted advisor rather than a product vendor. Its core principles are customer focus, active listening and empathy, problem solving and personalization.",
    ],
    audience: ["Sales Executives", "Sales Leads", "Sales Managers", "Consultants"],
    objectives: [
      "Identify client needs accurately",
      "Build a network of stakeholders and reduce dependence on individual salespeople",
      "Strengthen active listening, rapport building and persuasive communication",
      "Turn objections and concerns into opportunities",
      "Use consultative selling throughout the sales process",
      "Balance sales capability with strong client relationships",
    ],
    modules: [
      "Understanding the SPANCO Process in Sales",
      "Pre-call Planning in Consultative Selling",
      "Key Skills in Consultative Selling",
      "SPIN Selling",
      "Value-Based Selling",
      "Insights Selling",
      "Challenger Sales Framework",
      "Conversations that Win",
      "Managing Difficult Conversations in Sales",
      "Decision-Making Conversations in Different Cultures",
    ],
    methods: [
      "Simulations",
      "Games",
      "Activities",
      "Short role plays",
      "Scenario evaluations",
      "Demonstrations",
    ],
    formats: standardFormats,
    notes: [
      "Can be delivered in a time-spaced format",
      "Customization available on request",
      tailoredNote,
    ],
  },
  {
    slug: "cross-cultural-communication",
    oldPath: "/copy-of-cross-cultural-communication",
    title: "Cross Cultural Communication",
    category: "Communication Excellence",
    summary:
      "Frameworks and cultural awareness to communicate, build consensus and make decisions effectively with colleagues of any nationality.",
    duration: "1 Day (7 Hours)",
    quote: {
      text: "The stranger sees only what he knows.",
      author: "African Proverb",
    },
    intro: [
      "Most teams now include people of many nationalities. Shared norms, language and policies create common ground, but differences remain in how people think, collaborate, lead, perceive time, make decisions, show courtesy and view age, experience and power.",
      "These differences make consensus and communication across cultures difficult. This program offers frameworks and cultural awareness to help participants communicate effectively with colleagues of any nationality.",
    ],
    audience: [
      "Team Leads",
      "Managers and Senior Managers",
      "Directors and Functional Heads",
      "C-Level Members",
      "Individual Contributors working in cross-cultural environments",
    ],
    objectives: [
      "Understand cultural dynamics across countries",
      "Learn the cultural specifics of the countries you work with",
      "Understand power distance and hierarchy across cultures",
      "Recognize work behavior and professional orientation across cultures",
      "Communicate effectively with global colleagues and clients",
    ],
    modules: [
      "Understanding Cultural Nuances in Communication",
      "Communication Patterns",
      "Running Effective Cross-Cultural Meetings",
      "Decision-Making Conversations across Cultures",
    ],
    methods: [
      "Simulations",
      "Games",
      "Activities",
      "Short role plays",
      "Scenario evaluations",
      "Demonstrations",
    ],
    formats: standardFormats,
    notes: [
      "All participants should work in a cross-cultural environment",
      "Can be delivered in a time-spaced format",
      "Customization available on request",
      tailoredNote,
    ],
  },
  {
    // The old page (/posh-awareness) currently redirects to a 404, so no
    // course content could be extracted. Fill in once the client supplies it.
    slug: "posh-sensitization",
    oldPath: "/posh-awareness",
    title: "PoSH Sensitization",
    category: "Leadership Impact",
    summary: "",
    duration: "",
    intro: [],
    audience: [],
    objectives: [],
    modules: [],
    methods: [],
    formats: [],
    notes: [],
  },
];

/**
 * Courses with content, shown on the site. A course with nothing extracted yet
 * (e.g. PoSH Sensitization) stays hidden until the client supplies its content.
 */
export const liveCourses: Course[] = courses.filter(
  (c) => c.intro.length > 0 || c.modules.length > 0 || c.objectives.length > 0,
);

export function getCourse(slug: string): Course | undefined {
  return liveCourses.find((c) => c.slug === slug);
}
