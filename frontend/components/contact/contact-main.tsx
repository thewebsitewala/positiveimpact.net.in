import { contact, socials } from "@/lib/site";
import EnquiryForm from "../training/enquiry-form";
import { eyebrow, h2, wrap, type Tone } from "../founder/styles";

const steps = [
  { title: "We reply within 24 hours", text: "On working days, from the team that will design your program." },
  { title: "A short discovery call", text: "We learn about your team, its level and what you want to change." },
  { title: "A customized proposal", text: "A program shaped around your goals: format, duration and content." },
];

/** "What happens next", office details and the enquiry form. */
const ContactMain = ({ tone = "bg-white" }: { tone?: Tone }) => (
  <section aria-labelledby="contact-form-heading" className={`${tone} py-20 md:py-28`}>
    <div className={`${wrap} grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20`}>
      <div>
        <p className={eyebrow}>Get in touch</p>
        <h2 id="contact-form-heading" className={h2}>
          Tell us about your team
        </h2>

        <ol className="mt-10 space-y-6">
          {steps.map((s, i) => (
            <li key={s.title} className="flex gap-4">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-sand text-[13px] font-medium tabular-nums text-caramel">
                {i + 1}
              </span>
              <div>
                <p className="text-[15px] font-medium text-espresso">{s.title}</p>
                <p className="mt-1 text-[14px] leading-relaxed text-walnut">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12 grid gap-8 border-t border-sand pt-10 sm:grid-cols-2">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-wider text-walnut/70">Office</p>
            <a
              href={contact.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-[15px] leading-relaxed text-espresso underline-offset-4 hover:underline"
            >
              {contact.address}
            </a>
          </div>
          <div>
            <p className="text-[12px] font-medium uppercase tracking-wider text-walnut/70">Working hours</p>
            <dl className="mt-2 grid grid-cols-[auto_1fr] gap-x-5 gap-y-1 text-[15px]">
              {contact.hours.map((h) => (
                <div key={h.days} className="contents">
                  <dt className="text-walnut">{h.days}</dt>
                  <dd className="font-medium text-espresso">{h.time}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-[12px] font-medium uppercase tracking-wider text-walnut/70">Follow us</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center rounded-full border border-sand px-4 text-[13px] font-medium text-espresso transition hover:border-walnut/40 hover:bg-cream"
                >
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-3xl border border-sand bg-cream/50 p-6 sm:p-10">
        <h3 className="text-xl font-medium tracking-tight text-espresso">Send us an enquiry</h3>
        <p className="mt-1.5 text-[14px] text-walnut/80">
          Fields marked <span className="text-caramel">*</span> are required.
        </p>
        <div className="mt-7">
          <EnquiryForm />
        </div>
      </div>
    </div>
  </section>
);

export default ContactMain;
