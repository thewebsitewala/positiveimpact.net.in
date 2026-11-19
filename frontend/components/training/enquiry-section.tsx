import { contact } from "@/lib/site";
import EnquiryForm from "./enquiry-form";

const Icon = ({ d }: { d: string }) => (
  <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-sand bg-white text-caramel">
    <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const icons = {
  phone:
    "M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  pin: "M12 21s-7-6.2-7-11.5A7 7 0 0112 2.5a7 7 0 017 7C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
  clock: "M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3 2",
};

interface Props {
  training?: string;
  heading?: string;
  /** Section background, so pages can keep cream / white alternating. */
  tone?: "bg-cream" | "bg-white";
}

/** Contact details beside the enquiry form. Used on /training and each program page. */
const EnquirySection = ({
  training,
  heading = "Plan this program for your team",
  tone = "bg-cream",
}: Props) => {
  return (
    <section
      id="enquire"
      aria-labelledby="enquire-heading"
      className={`scroll-mt-24 ${tone} py-20 md:py-28`}
    >
      <div className="mx-auto grid max-w-[1600px] gap-14 px-6 md:px-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:px-20">
        <div>
          <p className="text-[12px] font-semibold uppercase tracking-wider text-caramel">
            Enquire
          </p>
          <h2
            id="enquire-heading"
            className="mt-3 text-3xl font-medium leading-[1.15] tracking-tight text-espresso md:text-4xl"
          >
            {heading}
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-walnut md:text-base">
            Every program starts with a conversation about your team, its level
            and what you want to change. Tell us a little, and we&apos;ll come back
            with a plan.
          </p>

          <ul className="mt-10 space-y-6">
            <li className="flex gap-4">
              <Icon d={icons.phone} />
              <div>
                <p className="text-[13px] text-walnut/70">Call or WhatsApp</p>
                <a href={contact.phoneHref} className="mt-0.5 inline-block text-[15px] font-medium text-espresso underline-offset-4 hover:underline">
                  {contact.phone}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Icon d={icons.mail} />
              <div>
                <p className="text-[13px] text-walnut/70">Email</p>
                <a href={contact.emailHref} className="mt-0.5 inline-block break-all text-[15px] font-medium text-espresso underline-offset-4 hover:underline">
                  {contact.email}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Icon d={icons.pin} />
              <div>
                <p className="text-[13px] text-walnut/70">Office</p>
                <a href={contact.mapHref} target="_blank" rel="noopener noreferrer" className="mt-0.5 inline-block max-w-xs text-[15px] font-medium leading-relaxed text-espresso underline-offset-4 hover:underline">
                  {contact.address}
                </a>
              </div>
            </li>
            <li className="flex gap-4">
              <Icon d={icons.clock} />
              <div>
                <p className="text-[13px] text-walnut/70">Working hours</p>
                <dl className="mt-1 grid grid-cols-[auto_auto] gap-x-6 gap-y-1 text-[15px]">
                  {contact.hours.map((h) => (
                    <div key={h.days} className="contents">
                      <dt className="text-walnut">{h.days}</dt>
                      <dd className="font-medium text-espresso">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-sand bg-white p-6 sm:p-10">
          <h3 className="text-xl font-medium tracking-tight text-espresso">
            Send us an enquiry
          </h3>
          <p className="mt-1.5 text-[14px] text-walnut/80">
            Fields marked <span className="text-caramel">*</span> are required.
          </p>
          <div className="mt-7">
            <EnquiryForm defaultTraining={training} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
