"use client";

import { useState } from "react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: "customization",
    question: "How are Positive Impact workshops customized for our company?",
    answer:
      "Every program begins with a diagnostic Training Needs Analysis (TNA). We baseline competencies, interview key stakeholders, and design situational case studies, role plays, and live simulations directly tailored to your industry, team dynamics, and business objectives.",
  },
  {
    id: "delivery-formats",
    question: "What delivery formats do you support?",
    answer:
      "We deliver in-person classroom workshops, studio-grade Virtual Live Online sessions for global teams, outdoor experiential Out-Bound programs, and specialized equine-assisted leadership interventions at accredited academies.",
  },
  {
    id: "leadership-levels",
    question: "What levels of employees do you train?",
    answer:
      "Our 16 flagship programs and bespoke curricula cover all corporate tiers: individual contributors transitioning to First-Time Managers, mid-level team leaders, functional heads, directors, and C-suite executives.",
  },
  {
    id: "tbar-methodology",
    question: "What is the T-BAR methodology?",
    answer:
      "T-BAR is our foundational philosophy: Thoughts → Behaviour → Action → Results. Lasting leadership shift begins by altering internal mindsets and attitudes (the 'will') before installing specific behavioral techniques (the 'skill') to drive measurable performance.",
  },
  {
    id: "program-duration",
    question: "What is the typical duration of a leadership intervention?",
    answer:
      "Workshops range from intensive 1-day sessions (7 hours) to comprehensive 2-to-3 day deep immersions (14–21 hours). We also design multi-month time-spaced Leadership Journeys that integrate practical workplace application and coaching.",
  },
  {
    id: "locations-coverage",
    question: "Where are workshops conducted?",
    answer:
      "We conduct in-house corporate workshops pan-India and internationally, as well as offsite outbound retreats and experiential learning sessions in Bengaluru and other key metropolitan hubs.",
  },
  {
    id: "pilot-programs",
    question: "Can we arrange a pilot workshop for our leadership team?",
    answer:
      "Yes. We regularly partner with HR and L&D leaders to facilitate pilot workshops. This allows your leadership team to directly evaluate our experiential facilitation style and participant feedback before enterprise-wide rollout.",
  },
];

const FAQ = () => {
  const [openId, setOpenId] = useState<string | null>("customization");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="border-t border-sand/40 bg-white py-14 md:py-20 lg:py-28 text-espresso"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Heading & Contact Note (4 cols on lg) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 self-start text-center lg:text-left">
            <span className="text-[11px] md:text-[12px] font-semibold tracking-wider text-caramel uppercase">
              Frequently Asked Questions
            </span>

            <h2
              id="faq-heading"
              className="mt-3 text-[28px] font-medium tracking-tight text-espresso sm:text-4xl lg:text-4xl leading-[1.15]"
            >
              Everything You Need to Know
            </h2>

            <p className="mt-4 text-xs font-normal leading-relaxed text-walnut/80 sm:text-sm max-w-xl mx-auto lg:max-w-none lg:mx-0">
              Clear answers on how we design, customize, and deliver high-impact
              leadership training for corporate enterprises.
            </p>

            {/* <div className="mt-8 rounded-2xl border border-sand/70 bg-[#FAF5EF] p-5 sm:p-6">
              <h3 className="text-sm font-semibold text-espresso">
                Have a specific question?
              </h3>
              <p className="mt-1.5 text-xs text-walnut/80 leading-relaxed">
                Our program design team is ready to discuss your organization&apos;s
                unique training requirements.
              </p>
              <Link
                href="/contact"
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-espresso transition hover:text-caramel"
              >
                Talk to a Consultant
                <span aria-hidden="true">→</span>
              </Link>
            </div> */}
          </div>

          {/* Right Column: Accordion Items (8 cols on lg) */}
          <div className="lg:col-span-8">
            <div className="divide-y divide-sand/70 border-y border-sand/70">
              {faqs.map((faq) => {
                const isOpen = openId === faq.id;

                return (
                  <div key={faq.id} className="py-5 sm:py-6">
                    <button
                      type="button"
                      onClick={() => toggleItem(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${faq.id}`}
                      className="flex w-full items-start justify-between gap-4 text-left cursor-pointer group"
                    >
                      <span className="text-base sm:text-lg font-medium text-espresso transition-colors group-hover:text-caramel">
                        {faq.question}
                      </span>
                      <span
                        className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-sand text-espresso transition-transform duration-300 ${
                          isOpen
                            ? "rotate-180 bg-espresso text-white border-espresso"
                            : "bg-cream text-espresso group-hover:border-caramel"
                        }`}
                        aria-hidden="true"
                      >
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>

                    <div
                      id={`faq-answer-${faq.id}`}
                      hidden={!isOpen}
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen
                          ? "mt-3 sm:mt-4 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="text-xs sm:text-sm leading-relaxed text-walnut/85 pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
