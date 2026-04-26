import { Reveal } from "@/components/home/reveal";
import { SectionHeading } from "@/components/home/section-heading";

type Project = {
  name: string;
  category: string;
  description: string;
  tags: readonly string[];
  outcome: string;
};

type ProjectsSectionProps = {
  projects: readonly Project[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="aplikacje" className="section-shell py-8 md:py-12">
      <div className="space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Aplikacje"
            title="Projekty cyfrowe zaprojektowane pod realne potrzeby techniczne"
            description="Ta sekcja jest przygotowana tak, aby łatwo rozwijać ją o kolejne wdrożenia, studia przypadków, zrzuty ekranu i szczegółowe opisy funkcjonalności."
          />
        </Reveal>

        <div className="grid gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 90}>
              <article className="interactive-card grid gap-6 p-5 md:p-7 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
                <div className="product-preview p-5">
                  <div className="product-screen overflow-hidden">
                    <div className="flex items-center justify-between border-b border-white/12 px-4 py-3">
                      <div className="flex gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-rose-300/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/80" />
                      </div>
                      <span className="font-mono text-[0.68rem] uppercase tracking-[0.24em] text-slate-400">
                        Preview 0{index + 1}
                      </span>
                    </div>

                    <div className="product-screen-grid grid h-[calc(100%-53px)] grid-cols-[1.2fr_0.8fr] gap-4 p-4">
                      <div className="rounded-2xl border border-white/12 bg-cyan-300/8 p-4">
                        <div className="h-3 w-28 rounded-full bg-white/16" />
                        <div className="mt-4 grid gap-3">
                          <div className="h-20 rounded-2xl bg-white/8" />
                          <div className="grid grid-cols-2 gap-3">
                            <div className="h-14 rounded-2xl bg-white/8" />
                            <div className="h-14 rounded-2xl bg-cyan-300/14" />
                          </div>
                          <div className="h-24 rounded-2xl bg-white/8" />
                        </div>
                      </div>

                      <div className="grid gap-3">
                        <div className="rounded-2xl border border-white/12 bg-white/8 p-4">
                          <div className="h-3 w-16 rounded-full bg-white/16" />
                          <div className="mt-4 h-20 rounded-2xl bg-gradient-to-br from-cyan-300/26 to-blue-400/14" />
                        </div>
                        <div className="rounded-2xl border border-white/12 bg-white/8 p-4">
                          <div className="h-3 w-20 rounded-full bg-white/16" />
                          <div className="mt-4 space-y-2">
                            <div className="h-2 rounded-full bg-white/14" />
                            <div className="h-2 w-5/6 rounded-full bg-white/14" />
                            <div className="h-2 w-3/4 rounded-full bg-white/14" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                        {project.category}
                      </span>
                      <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-[2rem]">
                        {project.name}
                      </h3>
                    </div>
                    <span className="rounded-2xl border border-white/14 px-3 py-2 font-mono text-xs text-slate-200">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">{project.description}</p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 rounded-3xl border border-cyan-300/18 bg-cyan-300/8 px-5 py-5">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100">Efekt</p>
                    <p className="mt-3 text-sm leading-7 text-slate-200">{project.outcome}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
