import type { Metadata } from "next";
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

const testLengths = ["5", "10", "20", "30"] as const;

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

            <aside className="interactive-card overflow-hidden p-6 md:p-7">
              <div className="rounded-[1.5rem] border border-cyan-300/18 bg-slate-950/72 p-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                      Tryb testu
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">PAE Practice</p>
                  </div>
                  <div className="rounded-full border border-cyan-300/28 bg-cyan-300/10 px-3 py-1 font-mono text-xs text-cyan-100">
                    WEB
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm leading-6 text-slate-300">Pytanie 12 / 30</p>
                    <p className="mt-2 text-lg font-semibold text-white">
                      Wybierz prawidłowe odpowiedzi zgodnie z kluczem egzaminacyjnym.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    {["odpowiedź jednokrotna", "odpowiedź wielokrotna", "wynik i omówienie"].map(
                      (item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3"
                        >
                          <span className="h-3 w-3 rounded-full border border-cyan-200 bg-cyan-300/20" />
                          <span className="text-sm text-slate-200">{item}</span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-4 gap-2">
                  {testLengths.map((length) => (
                    <div
                      key={length}
                      className="rounded-2xl border border-cyan-300/16 bg-cyan-300/8 px-3 py-4 text-center"
                    >
                      <p className="text-2xl font-semibold text-white">{length}</p>
                      <p className="mt-1 text-xs text-slate-300">pytań</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl border border-cyan-300/16 bg-cyan-300/8 p-4">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100">
                    Podsumowanie
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    Wynik końcowy pozwala szybko sprawdzić skuteczność powtórki i wrócić do materiału,
                    który wymaga jeszcze utrwalenia.
                  </p>
                </div>
              </div>
            </aside>
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
