import { Reveal } from "@/components/home/reveal";
import { SectionHeading } from "@/components/home/section-heading";

type Service = {
  title: string;
  description: string;
};

type Competency = {
  title: string;
  details: string;
};

type ServicesSectionProps = {
  services: readonly Service[];
  competencies: readonly Competency[];
};

export function ServicesSection({ services, competencies }: ServicesSectionProps) {
  return (
    <section id="czym-sie-zajmuje" className="section-shell py-8 md:py-12">
      <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="section-card px-7 py-10 md:px-10 md:py-12">
          <SectionHeading
            eyebrow="Czym się zajmuję"
            title="Łączę kompetencje inżynierskie z projektowaniem użytecznych narzędzi"
            description="Pracuję na styku środowiska, danych, procesów i oprogramowania. Dzięki temu mogę projektować rozwiązania, które są jednocześnie praktyczne, techniczne i wiarygodne."
          />
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 80}>
              <article className="interactive-card p-6">
                <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-200">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {competencies.map((competency, index) => (
          <Reveal key={competency.title} delay={140 + index * 80}>
            <article className="interactive-card p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">Kompetencja</p>
              <h3 className="mt-4 text-lg font-semibold text-white">{competency.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-200">{competency.details}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
