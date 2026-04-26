import { Reveal } from "@/components/home/reveal";

type Hero = {
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  badge: string;
};

type Stat = {
  label: string;
  value: string;
};

type HeroSectionProps = {
  hero: Hero;
  stats: readonly Stat[];
};

export function HeroSection({ hero, stats }: HeroSectionProps) {
  return (
    <section id="start" className="section-shell pt-10 pb-16 md:pt-16 md:pb-24">
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1.5fr)_minmax(25rem,1fr)] xl:items-start">
        <Reveal className="hero-panel section-card px-7 py-10 md:px-10 md:py-14">
          <div className="pointer-events-none absolute inset-y-10 right-8 hidden w-40 rounded-full bg-cyan-300/10 blur-3xl md:block" />

          <div className="relative z-10">
            <div className="hero-kicker">
              <span className="h-2 w-2 rounded-full bg-cyan-300" />
              <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-cyan-100">
                {hero.badge}
              </span>
            </div>

            <h1 className="hero-title mt-8 max-w-4xl text-4xl font-semibold text-white sm:text-5xl md:text-6xl xl:text-[4.6rem]">
              {hero.title}
            </h1>
            <p className="mt-7 max-w-[41rem] text-base leading-8 text-slate-200 md:text-[1.15rem] md:leading-8 xl:text-[1.2rem]">
              {hero.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#aplikacje" className="button-primary hero-glow">
                {hero.primaryCta}
              </a>
              <a href="#kontakt" className="button-secondary">
                {hero.secondaryCta}
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal
          delay={120}
          className="interactive-card relative overflow-hidden p-7 md:p-8 xl:min-w-[25rem] xl:px-8 xl:py-9"
        >
          <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent" />
          <div className="floating-orb absolute -right-8 top-10 h-24 w-24 rounded-full bg-cyan-300/10 blur-2xl" />
          <div className="floating-orb-delay absolute bottom-6 left-6 h-20 w-20 rounded-full bg-blue-400/10 blur-2xl" />

          <div className="rounded-3xl border border-white/14 bg-white/7 px-5 py-4 xl:px-6 xl:py-5">
            <div className="max-w-[18rem]">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">Profil</p>
              <p className="mt-2 text-base leading-7 font-semibold text-white xl:text-[1.02rem]">
                Technika, teren i oprogramowanie
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/12 bg-slate-950/42 px-5 py-5 xl:px-6 xl:py-6"
              >
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-slate-300">{stat.label}</p>
                <p className="mt-3 max-w-[21rem] text-[1.65rem] leading-8 font-semibold text-white xl:max-w-[23rem] xl:text-[1.8rem]">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-3xl border border-cyan-300/16 bg-[linear-gradient(135deg,rgba(77,211,255,0.12),rgba(45,140,255,0.06))] px-5 py-5 xl:px-6 xl:py-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100">Podejście</p>
            <p className="mt-3 max-w-[22rem] text-sm leading-8 text-slate-200 xl:max-w-[24rem] xl:text-[0.98rem]">
              Projektuję rozwiązania, które mają sens zarówno od strony danych, jak i realnych warunków pracy w terenie.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
