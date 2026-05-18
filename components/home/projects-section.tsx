"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
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

const ferroscanScreens = [
  {
    src: "/ferroscan/ferroscan-analysis.png",
    label: "Nowa analiza",
    description: "Wprowadzanie parametrów wody i danych do raportu.",
  },
  {
    src: "/ferroscan/ferroscan-results.png",
    label: "Wyniki",
    description: "Kalkulacje, tabela ocen i interpretacja parametrów.",
  },
  {
    src: "/ferroscan/ferroscan-alerts.png",
    label: "Rekomendacje",
    description: "Alerty techniczne i proponowany ciąg technologiczny.",
  },
  {
    src: "/ferroscan/ferroscan-ranking.png",
    label: "Dobór złóż",
    description: "Ranking złóż filtracyjnych i dopasowanie hydrauliczne.",
  },
  {
    src: "/ferroscan/ferroscan-report.png",
    label: "Raport PDF",
    description: "Podgląd wydruku z anonimizowanymi danymi raportu.",
  },
] as const;

const ferroscanHighlights = [
  "formularz analizy parametrów wody",
  "ocena przekroczeń i statusów",
  "alerty inżynierskie",
  "rekomendowany ciąg technologiczny",
  "ranking złóż filtracyjnych",
  "generowanie raportu PDF",
] as const;

const platformHighlights = [
  "dwa zestawy pytań egzaminacyjnych",
  "jedno- i wielokrotny wybór",
  "testy 5 / 10 / 20 / 30 pytań",
  "tryb webowy Flutter",
  "podsumowanie wyniku",
] as const;

const platformScreens = [
  {
    src: "/pae/screens/subject.jpg",
    label: "Wybór przedmiotu",
    description: "Start nauki i wybór zestawu egzaminacyjnego.",
  },
  {
    src: "/pae/screens/question.jpg",
    label: "Pytanie",
    description: "Tryb testu z odpowiedzią i wyjaśnieniem.",
  },
  {
    src: "/pae/screens/result.jpg",
    label: "Wynik",
    description: "Podsumowanie wyniku po zakończeniu testu.",
  },
  {
    src: "/pae/screens/history.jpg",
    label: "Historia",
    description: "Lista poprzednich podejść i trend wyników.",
  },
] as const;

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [activeScreenIndex, setActiveScreenIndex] = useState(1);
  const [activePlatformScreenIndex, setActivePlatformScreenIndex] = useState(0);
  const screenViewportRef = useRef<HTMLDivElement | null>(null);
  const activeScreen = ferroscanScreens[activeScreenIndex] ?? ferroscanScreens[0];
  const activePlatformScreen = platformScreens[activePlatformScreenIndex] ?? platformScreens[0];

  useEffect(() => {
    screenViewportRef.current?.scrollTo({ top: 0, behavior: "instant" });
  }, [activeScreenIndex]);

  return (
    <section id="aplikacje" className="section-shell py-8 md:py-12">
      <div className="space-y-8">
        <Reveal>
          <SectionHeading
            eyebrow="Aplikacje"
            title="Projekty cyfrowe zaprojektowane pod realne potrzeby techniczne"
            description="Przykłady narzędzi, które porządkują dane, wspierają analizę techniczną i pomagają szybciej przejść od parametrów wejściowych do czytelnej rekomendacji."
          />
        </Reveal>

        <Reveal>
          <article className="interactive-card grid gap-8 p-5 md:p-7 xl:grid-cols-[1.08fr_0.92fr] xl:items-center">
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-300/18 bg-slate-950/60 p-3 shadow-[0_22px_60px_rgba(0,0,0,0.25)]">
                <div
                  ref={screenViewportRef}
                  className="h-[30rem] overflow-y-auto overscroll-contain rounded-[1.35rem] [scrollbar-color:rgba(98,220,255,0.5)_rgba(15,23,42,0.6)] [scrollbar-width:thin] md:h-[34rem]"
                >
                  <Image
                    key={activeScreen.src}
                    src={activeScreen.src}
                    alt={`FerroScan - ${activeScreen.label}`}
                    width={1080}
                    height={2138}
                    sizes="(max-width: 768px) 100vw, 48vw"
                    className="h-auto w-full"
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-3 bottom-3 h-28 rounded-b-[1.35rem] bg-gradient-to-t from-slate-950/88 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100">
                    FerroScan
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">{activeScreen.description}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {ferroscanScreens.map((screen, index) => {
                  const isActive = index === activeScreenIndex;

                  return (
                    <button
                      key={screen.src}
                      type="button"
                      onClick={() => setActiveScreenIndex(index)}
                      aria-pressed={isActive}
                      className={`overflow-hidden rounded-[1.25rem] border bg-slate-950/44 text-left ${
                        isActive
                          ? "border-cyan-300/55 shadow-[0_0_0_1px_rgba(98,220,255,0.18),0_18px_38px_rgba(8,145,178,0.16)]"
                          : "border-white/12 hover:border-cyan-300/30"
                      }`}
                    >
                      <Image
                        src={screen.src}
                        alt={`FerroScan - ${screen.label}`}
                        width={1080}
                        height={2138}
                        sizes="(max-width: 768px) 50vw, 16vw"
                        className="h-48 w-full object-cover object-top sm:h-56 lg:h-44"
                      />
                      <span className="block border-t border-white/10 px-3 py-3">
                        <p className="text-sm font-semibold text-white">{screen.label}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-300">{screen.description}</p>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex h-full flex-col">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                  Aplikacja mobilna
                </span>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-[2rem]">
                  FerroScan
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                  Narzędzie wspierające analizę parametrów wody i porządkowanie decyzji technicznych:
                  od danych wejściowych, przez ocenę przekroczeń, po rekomendacje technologiczne i
                  raport PDF.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {ferroscanHighlights.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-cyan-300/18 bg-cyan-300/8 px-5 py-5">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100">Zakres</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  Projekt pokazuje praktyczne połączenie wiedzy branżowej, logiki obliczeniowej,
                  czytelnego interfejsu i generowania dokumentu, który może być dalej omówiony lub
                  uzupełniony przez specjalistę.
                </p>
              </div>

              <div className="mt-6">
                <Link href="/pl/ferroscan/polityka-prywatnosci" className="button-secondary">
                  Polityka prywatności FerroScan
                </Link>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal>
          <article className="interactive-card grid gap-8 p-5 md:p-7 xl:grid-cols-[0.92fr_1.08fr] xl:items-center">
            <div className="grid gap-4">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-cyan-300/18 bg-slate-950/60 p-3 shadow-[0_22px_60px_rgba(0,0,0,0.25)]">
                <div className="h-[30rem] overflow-y-auto overscroll-contain rounded-[1.35rem] bg-white [scrollbar-color:rgba(98,220,255,0.5)_rgba(15,23,42,0.6)] [scrollbar-width:thin] md:h-[34rem]">
                  <Image
                    key={activePlatformScreen.src}
                    src={activePlatformScreen.src}
                    alt={`Platforma Edukacyjna PAE - ${activePlatformScreen.label}`}
                    width={720}
                    height={1303}
                    sizes="(max-width: 768px) 100vw, 42vw"
                    className="h-auto w-full"
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-3 bottom-3 h-24 rounded-b-[1.35rem] bg-gradient-to-t from-slate-950/82 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100">
                    Platforma PAE
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {activePlatformScreen.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
                {platformScreens.map((screen, index) => {
                  const isActive = index === activePlatformScreenIndex;

                  return (
                    <button
                      key={screen.src}
                      type="button"
                      onClick={() => setActivePlatformScreenIndex(index)}
                      aria-pressed={isActive}
                      className={`overflow-hidden rounded-[1.25rem] border bg-slate-950/44 text-left ${
                        isActive
                          ? "border-cyan-300/55 shadow-[0_0_0_1px_rgba(98,220,255,0.18),0_18px_38px_rgba(8,145,178,0.16)]"
                          : "border-white/12 hover:border-cyan-300/30"
                      }`}
                    >
                      <Image
                        src={screen.src}
                        alt={`Platforma Edukacyjna PAE - ${screen.label}`}
                        width={720}
                        height={1303}
                        sizes="(max-width: 768px) 50vw, 16vw"
                        className="h-48 w-full object-cover object-top sm:h-56 lg:h-44"
                      />
                      <span className="block border-t border-white/10 px-3 py-3">
                        <p className="text-sm font-semibold text-white">{screen.label}</p>
                        <p className="mt-1 text-xs leading-5 text-slate-300">{screen.description}</p>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex h-full flex-col">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                  Aplikacja webowa
                </span>
                <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-[2rem]">
                  Platforma Edukacyjna PAE
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-200">
                  Symulator egzaminu przygotowany dla mnie i grupy znajomych studentów, którzy wspólnie
                  szykują się do zaliczenia. Projekt porządkuje zweryfikowane pytania, obsługuje różne
                  typy odpowiedzi i pozwala szybko przećwiczyć materiał w trybie dopasowanym do czasu.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {platformHighlights.map((tag) => (
                  <span key={tag} className="chip">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-3xl border border-cyan-300/18 bg-cyan-300/8 px-5 py-5">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100">Cel</p>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  To narzędzie do praktycznej powtórki przed egzaminem: bez logowania, bez zbędnej
                  administracji, z naciskiem na sprawne ćwiczenie pytań i jasny wynik końcowy.
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="/pae" className="button-primary hero-glow">
                  Uruchom platformę
                </a>
                <Link href="/pl/platforma" className="button-secondary">
                  Zobacz opis projektu
                </Link>
              </div>
            </div>
          </article>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 90}>
              <article className="interactive-card flex h-full flex-col p-6">
                <span className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                  {project.category}
                </span>
                <h3 className="mt-4 text-xl font-semibold tracking-tight text-white">{project.name}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-200">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="chip">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="mt-5 border-t border-white/10 pt-5 text-sm leading-7 text-slate-300">
                  {project.outcome}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
