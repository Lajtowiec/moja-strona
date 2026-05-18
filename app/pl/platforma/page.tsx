import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/home/site-footer";

export const metadata: Metadata = {
  title: "Platforma Edukacyjna PAE | Symulator egzaminu",
  description:
    "Platforma Edukacyjna PAE to webowy symulator egzaminu z bazą zweryfikowanych pytań, konfiguracją testu i czytelnym podsumowaniem wyniku.",
  openGraph: {
    title: "Platforma Edukacyjna PAE",
    description:
      "Symulator egzaminu przygotowany dla studentów: realistyczne pytania, tryb jedno- i wielokrotnego wyboru oraz praktyczne podsumowanie testu.",
    locale: "pl_PL",
    type: "website",
  },
};

const features = [
  {
    title: "Zweryfikowana baza",
    description:
      "Dwa zestawy finalnych pytań egzaminacyjnych przygotowane pod realną naukę przed zaliczeniem.",
  },
  {
    title: "Prawdziwa logika testu",
    description:
      "Obsługa pytań jednokrotnego i wielokrotnego wyboru zgodnie z kluczem odpowiedzi.",
  },
  {
    title: "Długość pod kontrolą",
    description:
      "Tryby 5, 10, 20 i 30 pytań pozwalają zrobić szybką powtórkę albo pełniejszy trening.",
  },
  {
    title: "Przejrzysty wynik",
    description:
      "Po zakończeniu testu użytkownik otrzymuje jasne podsumowanie, które pomaga ocenić gotowość do zaliczenia.",
  },
] as const;

const platformScreens = [
  {
    src: "/pae/screens/subject.jpg",
    label: "Wybór przedmiotu",
    description: "Panel startowy z wyborem zestawu pytań egzaminacyjnych.",
  },
  {
    src: "/pae/screens/question.jpg",
    label: "Tryb testu",
    description: "Pytanie, odpowiedzi, wyjaśnienie i kontrola postępu.",
  },
  {
    src: "/pae/screens/result.jpg",
    label: "Wynik egzaminu",
    description: "Czytelne podsumowanie poprawnych i błędnych odpowiedzi.",
  },
  {
    src: "/pae/screens/history.jpg",
    label: "Historia wyników",
    description: "Trend ostatnich testów oraz lista poprzednich podejść.",
  },
] as const;

export default function PlatformaPage() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(51,163,255,0.2),_transparent_30%),radial-gradient(circle_at_85%_15%,_rgba(96,165,250,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-60" />

      <header className="section-shell pt-5">
        <div className="section-card flex items-center justify-between gap-4 px-5 py-4 md:px-7">
          <Link href="/pl" className="group flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-400/10 font-mono text-sm text-cyan-100 group-hover:scale-105 group-hover:bg-cyan-400/14">
              TG
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.24em] text-white uppercase">
                Tomasz Gzella
              </p>
              <p className="text-sm text-slate-300">Platforma Edukacyjna PAE</p>
            </div>
          </Link>

          <Link href="/pl#aplikacje" className="button-secondary min-h-10 px-4 py-2 text-sm">
            Wróć do projektów
          </Link>
        </div>
      </header>

      <main>
        <section className="section-shell py-10 md:py-14">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1.02fr)_minmax(24rem,0.98fr)] xl:items-center">
            <article className="hero-panel section-card overflow-hidden px-7 py-10 md:px-10 md:py-14">
              <div className="relative z-10">
                <div className="hero-kicker">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  <span className="font-mono text-[0.72rem] uppercase tracking-[0.28em] text-cyan-100">
                    Flutter Web
                  </span>
                </div>

                <h1 className="hero-title mt-8 max-w-4xl text-4xl font-semibold text-white sm:text-5xl md:text-6xl">
                  Platforma Edukacyjna PAE
                </h1>
                <p className="mt-7 max-w-3xl text-base leading-8 text-slate-200 md:text-[1.15rem]">
                  Webowy symulator egzaminu stworzony z myślą o wspólnej nauce przed zaliczeniem.
                  Łączy zweryfikowane pytania, elastyczny tryb testowy i czytelny interfejs, który
                  pomaga trenować wiedzę bez przekopywania się przez rozproszone materiały.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a href="/pae" className="button-primary hero-glow">
                    Uruchom platformę
                  </a>
                  <Link href="/pl#kontakt" className="button-secondary">
                    Kontakt
                  </Link>
                </div>
              </div>
            </article>

            <aside className="interactive-card overflow-hidden p-5 md:p-6">
              <div className="relative overflow-hidden rounded-[1.5rem] border border-cyan-300/18 bg-slate-950/60 p-3">
                <div className="h-[34rem] overflow-y-auto rounded-[1.15rem] bg-white [scrollbar-color:rgba(98,220,255,0.5)_rgba(15,23,42,0.6)] [scrollbar-width:thin]">
                  <Image
                    src="/pae/screens/question.jpg"
                    alt="Platforma Edukacyjna PAE - ekran pytania"
                    width={720}
                    height={1303}
                    priority
                    sizes="(max-width: 768px) 100vw, 40vw"
                    className="h-auto w-full"
                  />
                </div>
                <div className="pointer-events-none absolute inset-x-3 bottom-3 h-24 rounded-b-[1.15rem] bg-gradient-to-t from-slate-950/82 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100">
                    Podgląd aplikacji
                  </p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    Tryb testu z wyjaśnieniem odpowiedzi.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section-shell pb-12">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {platformScreens.map((screen) => (
              <article key={screen.src} className="interactive-card overflow-hidden p-4">
                <div className="overflow-hidden rounded-[1.35rem] border border-white/12 bg-white">
                  <Image
                    src={screen.src}
                    alt={`Platforma Edukacyjna PAE - ${screen.label}`}
                    width={720}
                    height={1303}
                    sizes="(max-width: 768px) 100vw, 24vw"
                    className="h-96 w-full object-cover object-top"
                  />
                </div>
                <div className="px-2 pt-5">
                  <h2 className="text-xl font-semibold tracking-tight text-white">{screen.label}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-200">{screen.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell pb-12">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article key={feature.title} className="interactive-card p-6">
                <h2 className="text-xl font-semibold tracking-tight text-white">{feature.title}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-200">{feature.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
