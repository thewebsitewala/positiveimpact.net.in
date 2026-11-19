import { contact, KEYNOTE } from "@/lib/site";
import { EnquireButton } from "../training/enquiry-dialog";
import { eyebrow, h2, wrap, type Tone } from "./styles";

const link =
  "font-medium text-espresso underline decoration-sand underline-offset-4 hover:decoration-caramel";

/** Keynote booking call to action (light, so it doesn't merge with the dark footer CTA). */
const FounderBooking = ({ tone = "bg-cream" }: { tone?: Tone }) => (
  <section className={`${tone} py-20 md:py-28`}>
    <div className={`${wrap} flex flex-col items-start gap-8 lg:flex-row lg:items-end lg:justify-between`}>
      <div className="max-w-2xl">
        <p className={eyebrow}>Keynotes & events</p>
        <h2 className={h2}>Interested in booking Harshita for a keynote?</h2>
        <p className="mt-4 text-[15px] leading-relaxed text-walnut md:text-base">
          Tell us about your event, audience and date. Or write to{" "}
          <a href={contact.emailHref} className={link}>
            {contact.email}
          </a>{" "}
          or call{" "}
          <a href={contact.phoneHref} className={link}>
            {contact.phone}
          </a>
          .
        </p>
      </div>
      <EnquireButton
        training={KEYNOTE}
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-espresso px-7 text-sm font-medium text-white transition hover:-translate-y-px hover:bg-ink active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-caramel"
      >
        Send a keynote request <span aria-hidden>→</span>
      </EnquireButton>
    </div>
  </section>
);

export default FounderBooking;
