import Image from "next/image";
import Link from "next/link";

const credentials = [
  { value: "18+", label: "Years Corporate Leadership" },
  { value: "23,000+", label: "Corporate Lives Touched" },
  { value: "12,500+", label: "Facilitation Hours" },
];

const credentialsPills = [
  "Strategic Leadership (Wharton Online)",
  "Dale Carnegie Certified Senior Trainer",
  "Double Master's (Management & Applied Psychology)",
  "PhD Scholar in Leadership Studies (IIT Madras)",
];

const Founder = () => {
  return (
    <section
      id="meet-founder"
      aria-labelledby="founder-heading"
      className=" bg-[#FAF5EF] py-16 md:py-20 lg:py-24 text-espresso"
    >
      <div className="mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-20">
          {/* Left Column: Portrait */}
          <div className="lg:col-span-4">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Outer Framed Container */}
              <div className="relative overflow-hidden rounded-3xl border border-sand/80 bg-[#f4e0c7] shadow-xl shadow-caramel/5">
                <div className="relative aspect-[4/4] md:aspect-[4/4.75] w-full overflow-hidden rounded-2xl bg-sand/30">
                  <Image
                    src="/harshita-mankad-varghese.png"
                    alt="Harshita Mankad Varghese - Founder & Director, Positive Impact"
                    fill
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    className="object-cover object-top"
                    priority
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
              </div>

              {/* Decorative Accent Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-6 -right-6 -z-10 h-64 w-64 rounded-full bg-caramel/15 blur-3xl"
              />
            </div>
          </div>

          {/* Right Column: Founder Narrative */}
          <div className="flex flex-col justify-center lg:col-span-8">
            {/* Eyebrow */}
            <span className="text-[11px] md:text-[12px] font-semibold tracking-wider text-caramel uppercase">
              Meet our Founder and Director Program Design &amp; Facilitation
            </span>

            {/* Name */}
            <h2
              id="founder-heading"
              className="mt-3 text-2xl font-medium tracking-tight text-espresso sm:text-4xl lg:text-[42px] leading-[1.15]"
            >
              Harshita Mankad Varghese
            </h2>

            {/* Bio Content */}
            <div className="space-y-4 mt-4 text-sm sm:text-base leading-relaxed text-walnut/85">
              <p>
                A mid career change after working in the corporate arena for 18
                years, fuelled by an intense desire to help individuals and
                teams to achieve leadership skills to drive performance and
                culture of meritocracy, Harshita forayed into the training
                industry in 2016.
              </p>
              <p className="font-medium text-espresso">
                Now she heads program design and delivery at Positive Impact.
              </p>
            </div>

            {/* Key Impact Stats */}
            <div className="mt-6 grid grid-cols-3 gap-4 border-t border-sand/60 py-6 sm:gap-6">
              {credentials.map((item) => (
                <div key={item.label}>
                  <div className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-espresso">
                    {item.value}
                  </div>
                  <div className="mt-1 text-[11px] sm:text-xs leading-snug text-walnut/70">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Certification Badges */}
            {/* <div className="mt-6 flex flex-wrap items-center gap-2">
              {credentialsPills.map((pill) => (
                <span
                  key={pill}
                  className="inline-flex items-center rounded-full border border-sand/80 bg-white px-3 py-1 text-[11px] font-medium text-espresso/80"
                >
                  {pill}
                </span>
              ))}
            </div> */}

            {/* CTA */}
            <div className="mt-6 flex items-center gap-4">
              <Link
                href="#best-sellers"
                className="group inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-caramel active:scale-95 shadow-sm"
              >
                Schedule a consultation
                <span
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
