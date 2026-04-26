import { Reveal } from "@/components/home/reveal";
import { SectionHeading } from "@/components/home/section-heading";

type AboutSectionItem = {
  label: string;
  title: string;
  body: readonly string[];
};

type About = {
  eyebrow: string;
  title: string;
  description: string;
  intro: readonly string[];
  sections: readonly AboutSectionItem[];
};

type Highlight = {
  title: string;
  description: string;
};

type AboutSectionProps = {
  about: About;
  highlights: readonly Highlight[];
};

export function AboutSection({ about, highlights }: AboutSectionProps) {
  return (
    <section id="o-mnie" className="section-shell py-8 md:py-12">
      <div className="section-card grid gap-10 px-7 py-10 md:grid-cols-[0.92fr_1.08fr] md:px-10 md:py-12">
        <SectionHeading
          eyebrow={about.eyebrow}
          title={about.title}
          description={about.description}
        />

        <div className="space-y-8">
          <div className="space-y-4 text-base leading-8 text-slate-200">
            {about.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="grid gap-4">
            {about.sections.map((section, index) => (
              <Reveal key={section.title} delay={index * 70}>
                <article className="interactive-card p-5 md:p-6">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                    {section.label}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-white">{section.title}</h3>
                  <div className="mt-4 space-y-3 text-sm leading-7 text-slate-200 md:text-[0.96rem] md:leading-8">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((highlight, index) => (
              <Reveal key={highlight.title} delay={index * 80}>
                <article className="interactive-card p-5">
                  <p className="font-semibold text-white">{highlight.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{highlight.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
