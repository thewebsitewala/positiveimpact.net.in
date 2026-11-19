import Link from "next/link";
import type { ReactNode } from "react";
import { policies, type Block, type Policy } from "@/lib/policies";
import { contact, siteHost, siteUrl } from "@/lib/site";
import HeroBackdrop from "../training/hero-backdrop";

const wrap = "mx-auto max-w-[1600px] px-6 md:px-12 lg:px-20";

const linkStyle =
  "font-medium text-espresso underline decoration-sand underline-offset-4 hover:decoration-caramel";

/**
 * Turns emails into mailto links and the "{site}" placeholder into a link to
 * the site address from NEXT_PUBLIC_BASE_URL.
 */
function linkify(text: string, className = linkStyle): ReactNode[] {
  const parts = text.split(/(\S+@\S+\.[a-z.]+|\{site\})/gi);
  return parts.map((part, i) => {
    if (part === "{site}") {
      return (
        <a key={i} href={siteUrl} className={className}>
          {siteHost}
        </a>
      );
    }
    if (/^\S+@\S+\.[a-z.]+$/i.test(part)) {
      return (
        <a key={i} href={`mailto:${part}`} className={className}>
          {part}
        </a>
      );
    }
    return part;
  });
}

const Bullet = () => (
  <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-full bg-caramel" />
);

function renderBlock(block: Block, key: number) {
  if (block.type === "p") {
    return <p key={key}>{linkify(block.text)}</p>;
  }
  return (
    <ul key={key} className="space-y-3">
      {block.items.map((item) =>
        typeof item === "string" ? (
          <li key={item} className="flex gap-3.5">
            <Bullet />
            <span>{linkify(item)}</span>
          </li>
        ) : (
          <li key={item.text}>
            <div className="flex gap-3.5">
              <Bullet />
              <span>{linkify(item.text)}</span>
            </div>
            <ul className="mt-3 space-y-2.5 border-l border-sand pl-5 ml-[3px]">
              {item.items.map((sub) => (
                <li key={sub}>{linkify(sub)}</li>
              ))}
            </ul>
          </li>
        ),
      )}
    </ul>
  );
}

const PolicyPage = ({ policy }: { policy: Policy }) => {
  const others = policies.filter((p) => p.slug !== policy.slug);

  return (
    <main id="main">
      {/* Intro */}
      <section className="relative isolate overflow-hidden bg-ink pb-14 pt-32 text-white md:pb-20 md:pt-40">
        <HeroBackdrop />
        <div className={wrap}>
          <nav aria-label="Breadcrumb" className="text-[13px] text-white/50">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li aria-current="page" className="text-white/80">
                {policy.label}
              </li>
            </ol>
          </nav>
          <h1 className="mt-6 max-w-3xl text-4xl font-medium leading-[1.08] tracking-[-0.025em] md:text-5xl">
            {policy.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-white/70 md:text-lg">
            {linkify(
              policy.intro,
              "font-medium text-white underline decoration-white/30 underline-offset-4 hover:decoration-white",
            )}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="bg-white py-16 md:py-24">
        <div className={`${wrap} grid gap-12 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-20`}>
          {/* On this page */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[12px] font-semibold uppercase tracking-wider text-caramel">
              On this page
            </p>
            <ol className="mt-4 space-y-1 border-l border-sand">
              {policy.sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="-ml-px block border-l border-transparent py-1.5 pl-4 text-[14px] leading-snug text-walnut transition-colors hover:border-caramel hover:text-espresso"
                  >
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </aside>

          <article className="max-w-3xl">
            <div className="space-y-12">
              {policy.sections.map((s) => (
                <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="scroll-mt-28">
                  <h2 id={`${s.id}-h`} className="text-xl font-medium tracking-tight text-espresso md:text-[22px]">
                    {s.heading}
                  </h2>
                  <div className="mt-4 space-y-4 text-[15px] leading-[1.8] text-walnut md:text-base">
                    {s.blocks.map(renderBlock)}
                  </div>
                </section>
              ))}
            </div>

            <p className="mt-14 rounded-2xl bg-cream p-6 text-[15px] leading-relaxed text-espresso md:p-7">
              {policy.closing}
            </p>

            <div className="mt-14 border-t border-sand pt-8">
              <p className="text-[15px] text-walnut">
                Questions about this policy? Email{" "}
                <a href={contact.emailHref} className="font-medium text-espresso underline decoration-sand underline-offset-4 hover:decoration-caramel">
                  {contact.email}
                </a>{" "}
                or call{" "}
                <a href={contact.phoneHref} className="font-medium text-espresso underline decoration-sand underline-offset-4 hover:decoration-caramel">
                  {contact.phone}
                </a>
                .
              </p>
              <ul className="mt-6 flex flex-wrap gap-3">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      href={`/${o.slug}`}
                      className="inline-flex h-11 items-center gap-2 rounded-full border border-sand px-5 text-sm font-medium text-espresso transition hover:-translate-y-px hover:border-walnut/40 active:translate-y-0"
                    >
                      {o.label}
                      <span aria-hidden>→</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default PolicyPage;
