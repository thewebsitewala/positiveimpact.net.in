/**
 * Warm gradient backdrop for the dark page heroes on /training and
 * /training/[slug]. Place inside a `relative isolate overflow-hidden` section.
 */
const HeroBackdrop = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
    {/* Caramel glow, top right */}
    <div className="absolute -right-[10%] -top-[30%] h-[80%] w-[60%] rounded-full bg-caramel/30 blur-[140px]" />
    {/* Walnut glow, bottom left */}
    {/* <div className="absolute -bottom-[35%] -left-[10%] h-[75%] w-[55%] rounded-full bg-walnut/50 blur-[140px]" /> */}
    {/* Small warm highlight behind the headline */}
    {/* <div className="absolute left-[8%] top-[20%] h-[40%] w-[35%] rounded-full bg-caramel/10 blur-[120px]" /> */}
    {/* Faint grid, fading out from the top */}
    {/* <div
      className="absolute inset-0 opacity-[0.07]"
      style={{
        backgroundImage:
          "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        maskImage: "radial-gradient(ellipse 80% 70% at 50% 0%, #000 30%, transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 70% at 50% 0%, #000 30%, transparent 75%)",
      }}
    /> */}
    {/* Soft fade into the section below */}
    <div className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-b from-transparent to-ink/60" />
  </div>
);

export default HeroBackdrop;
