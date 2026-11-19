import { contact, mapEmbed } from "@/lib/site";
import { wrap, type Tone } from "../founder/styles";

/** Embedded map of the office with an address card. */
const ContactMap = ({ tone = "bg-cream" }: { tone?: Tone }) => (
  <section aria-label="Office location" className={`${tone} py-16 md:py-24`}>
    <div className={wrap}>
      <div className="relative overflow-hidden rounded-3xl border border-sand bg-sand">
        <iframe
          title="Map: Positive Impact office in Indiranagar, Bengaluru"
          src={mapEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-[360px] w-full md:h-[460px]"
        />
        {/* On phones the card sits below the map; from sm up it floats over it. */}
        <div className="sm:pointer-events-none sm:absolute sm:bottom-6 sm:left-6">
          <div className="bg-white p-5 sm:pointer-events-auto sm:max-w-sm sm:rounded-2xl sm:p-6 sm:shadow-xl">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-caramel">Visit us</p>
            <p className="mt-2 text-[15px] leading-relaxed text-espresso">{contact.address}</p>
            <a
              href={contact.mapHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex h-11 items-center gap-2 rounded-full bg-espresso px-5 text-sm font-medium text-white transition hover:-translate-y-px hover:bg-ink"
            >
              Get directions <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactMap;
