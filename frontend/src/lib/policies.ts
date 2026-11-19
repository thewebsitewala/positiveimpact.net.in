/**
 * Policy pages. Wording is taken verbatim from the client's policy PDFs;
 * only obvious typos in the email ("enquries@") are corrected.
 * "{site}" is replaced with the site address from NEXT_PUBLIC_BASE_URL when
 * the page renders (see components/legal/policy-page.tsx).
 */

export type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: (string | { text: string; items: string[] })[] };

export interface PolicySection {
  id: string;
  heading: string;
  blocks: Block[];
}

export interface Policy {
  slug: string;
  title: string;
  /** Short label for footer and cross-links. */
  label: string;
  intro: string;
  description: string;
  sections: PolicySection[];
  closing: string;
}

const p = (text: string): Block => ({ type: "p", text });
const ul = (...items: (string | { text: string; items: string[] })[]): Block => ({
  type: "ul",
  items,
});

export const policies: Policy[] = [
  {
    slug: "terms-and-conditions",
    title: "Terms of Service",
    label: "Terms & Conditions",
    intro: "Terms of Service for Positive Impact Training Services.",
    description:
      "Terms of Service for Positive Impact corporate training services: bookings, payment, intellectual property, confidentiality and liability.",
    sections: [
      {
        id: "acceptance",
        heading: "1. Acceptance of Terms",
        blocks: [
          p(
            "By accessing or using the services provided by Positive Impact ({site}), including in-person and virtual training sessions, you agree to be bound by these Terms of Service.",
          ),
        ],
      },
      {
        id: "services",
        heading: "2. Services",
        blocks: [
          p("Positive Impact provides corporate training services, including but not limited to:"),
          ul(
            "In-person training sessions",
            "Virtual training sessions",
            "Training materials and resources as agreed with our clients.",
          ),
        ],
      },
      {
        id: "booking",
        heading: "3. Booking and Payment",
        blocks: [
          p("3.1 All bookings are subject to availability and confirmation by Positive Impact."),
          p("3.2 Payment terms will be specified in the service agreement or invoice provided to the client."),
        ],
      },
      {
        id: "rescheduling",
        heading: "4. Rescheduling and Cancellation",
        blocks: [p("4.1 Please refer to Refund and Cancellation document uploaded on our website.")],
      },
      {
        id: "intellectual-property",
        heading: "5. Intellectual Property",
        blocks: [
          p(
            "5.1 All training materials, including but not limited to presentations, handouts, and digital resources, are the intellectual property of Positive Impact.",
          ),
          p(
            "5.2 Clients are granted a non-exclusive, non-transferable license to use the materials for internal purposes only for members who have participated in the Positive Impact workshops.",
          ),
          p(
            "5.3 Recording, reproduction, or distribution of training materials without prior written consent is strictly prohibited.",
          ),
        ],
      },
      {
        id: "confidentiality",
        heading: "6. Confidentiality",
        blocks: [
          p(
            "6.1 Positive Impact will maintain the confidentiality of any sensitive information shared by clients during the training process.",
          ),
          p("6.2 Clients agree to keep confidential any proprietary information disclosed during training sessions."),
        ],
      },
      {
        id: "liability",
        heading: "7. Liability",
        blocks: [
          p(
            "7.1 Positive Impact's total liability arising from or related to the services provided shall not exceed the fees paid for the specific training service in question.",
          ),
          p(
            "7.2 Positive Impact is not liable for any indirect, consequential, or incidental damages arising from the use of our services.",
          ),
        ],
      },
      {
        id: "global-services",
        heading: "8. Global Services",
        blocks: [
          p(
            "8.1 Positive Impact offers services to global customers. Clients are responsible for ensuring compliance with local laws and regulations.",
          ),
          p("8.2 All services are provided in English unless otherwise specified in the service agreement."),
        ],
      },
      {
        id: "online-platforms",
        heading: "9. Use of Online Platforms",
        blocks: [
          p("For virtual training sessions:"),
          p(
            "9.1 Clients are responsible for ensuring they have the necessary technology and internet access to participate.",
          ),
          p("9.2 Clients agree to use the online platforms solely for the purpose of receiving training services."),
        ],
      },
      {
        id: "modifications",
        heading: "10. Modifications to Terms",
        blocks: [
          p(
            "Positive Impact reserves the right to modify these Terms of Service at any time. Continued use of our services after such modifications constitutes acceptance of the updated terms.",
          ),
        ],
      },
      {
        id: "governing-law",
        heading: "11. Governing Law",
        blocks: [
          p(
            "These Terms of Service shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
          ),
        ],
      },
    ],
    closing:
      "By engaging our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.",
  },
  {
    slug: "privacy-policy",
    title: "Privacy Policy",
    label: "Privacy Policy",
    intro:
      "At Positive Impact, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you interact with our website ({site}) or participate in our in-person and virtual training sessions.",
    description:
      "How Positive Impact collects, uses, shares and safeguards your personal information on our website and in our training sessions.",
    sections: [
      {
        id: "information-we-collect",
        heading: "Information We Collect",
        blocks: [
          p("We collect the following types of personal information:"),
          ul(
            "Name",
            "Email address",
            "Contact number",
            "Postal address",
            "Company/organization details",
            "Course preferences and history",
            "Payment received information (for paid courses)",
            "Technical data (IP address, browser type, device information)",
          ),
        ],
      },
      {
        id: "how-we-use",
        heading: "How We Use Your Information",
        blocks: [
          p("We use your personal data for the following purposes:"),
          ul(
            "To provide and manage our training services",
            "To communicate with you about courses and updates",
            "To process payments and confirm participant seat for the program",
            "To improve our services and develop new offerings",
            "To comply with legal obligations",
          ),
        ],
      },
      {
        id: "sharing",
        heading: "Data Sharing and Disclosure",
        blocks: [
          p("We do not sell your personal information to third parties. We may share your data with:"),
          ul(
            "Service providers who assist in delivering our training services",
            "Payment processors for secure transactions",
            "Legal authorities when required by law",
          ),
        ],
      },
      {
        id: "changes",
        heading: "Changes to This Policy",
        blocks: [
          p(
            "We may update this Privacy Policy periodically. Any significant change will be notified by posting a notice on our website.",
          ),
        ],
      },
      {
        id: "contact",
        heading: "Contact Us",
        blocks: [
          p("If you have any questions or concerns about this Privacy Policy, please contact us at:"),
          p("Email: enquiries@positiveimpact.net.in"),
          p("Address: #696, 9th A Main, 1st Stage Indiranagar, Bangalore - 560038, India"),
        ],
      },
    ],
    closing:
      "By using our website or participating in our training sessions, you consent to the practices described in this Privacy Policy.",
  },
  {
    slug: "refund-and-cancellation-policy",
    title: "Refund and Cancellation Policy",
    label: "Refund & Cancellation Policy",
    intro: "Refund and Cancellation Policy for Positive Impact Training and Coaching.",
    description:
      "Refund and cancellation terms for Positive Impact virtual and in-person training programs, booking transfers and cancellations.",
    sections: [
      {
        id: "general-policy",
        heading: "General Policy",
        blocks: [
          p(
            "We at Positive Impact ({site}) strive to provide high-quality training services to our global customers. Our workshop planning starts almost immediately on program confirmation. This involves investments pertaining to content curation and preparing for logistical requirements such as program material, trainer assist requirements (if required) etc. Dates once confirmed for a client is not offered for other clients. They are exclusive time blocks on our calendar. Hence our refund and cancellation policy are designed as follows:",
          ),
        ],
      },
      {
        id: "virtual-programs",
        heading: "Virtual Programs",
        blocks: [
          ul(
            "Payment for virtual programs is non-refundable once received.",
            "Clients are permitted a one-time transfer of their booking to the next available event. These booking transfer requests must be made at least 30 days prior to the original program date by writing to us at enquiries@positiveimpact.net.in",
            "Transfer requests made less than 30 days before the program date will not be accommodated.",
          ),
        ],
      },
      {
        id: "in-person-programs",
        heading: "In-Person Programs",
        blocks: [
          ul(
            {
              text: "For clients without preferred vendor status for Positive Impact:",
              items: [
                "100% advance payment is required to confirm program registration.",
                "This payment secures your spot in the chosen in-person program.",
              ],
            },
            {
              text: "For clients with preferred vendor status:",
              items: ["Payment and service terms will align with the existing service and payment agreements."],
            },
          ),
        ],
      },
      {
        id: "general-terms",
        heading: "General Terms",
        blocks: [
          ul(
            "This policy applies to all global customers participating in our programs.",
            "All payments are to be made in the currency specified at the time of booking.",
            "Positive Impact reserves the right to modify this policy at any time. Any changes will be communicated to clients and posted on our official website.",
          ),
        ],
      },
      {
        id: "cancellation-by-us",
        heading: "Cancellation by Positive Impact",
        blocks: [
          ul(
            "In the rare event that Positive Impact needs to cancel a program, all paid fees will be fully refunded or, at the client's discretion can be applied to a future program in near date.",
            "Positive Impact is not responsible for any additional expenses incurred by clients due to program cancellations (e.g., travel, accommodation).",
          ),
        ],
      },
      {
        id: "contact",
        heading: "Contact Information",
        blocks: [
          p(
            "For any questions or to request a transfer, please contact our customer service team at the email or phone number provided on our website: {site}.",
          ),
        ],
      },
    ],
    closing:
      "By registering for our programs, clients acknowledge that they have read, understood, and agreed to this Refund and Cancellation Policy.",
  },
];

export function getPolicy(slug: string): Policy {
  const policy = policies.find((x) => x.slug === slug);
  if (!policy) throw new Error(`Unknown policy: ${slug}`);
  return policy;
}
