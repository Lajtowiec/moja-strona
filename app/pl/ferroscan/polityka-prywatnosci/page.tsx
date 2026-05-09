import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/home/site-footer";
import { contactProfile } from "@/data/contact-profile";

const privacyEmail = "kontakt@tomaszgzella.pl";

export const metadata: Metadata = {
  title: "Polityka prywatności FerroScan | Tomasz Gzella",
  description:
    "Polityka prywatności aplikacji FerroScan: informacje o danych, Firebase, Google Auth, celu przetwarzania i usuwaniu konta.",
  openGraph: {
    title: "Polityka prywatności aplikacji FerroScan",
    description:
      "Zasady przetwarzania danych w aplikacji FerroScan oraz kontakt w sprawach prywatności.",
    locale: "pl_PL",
    type: "article",
  },
};

const dataCategories = [
  {
    title: "Dane konta",
    body: "Adres e-mail, imię i nazwisko oraz zdjęcie profilowe, jeżeli zostaną przekazane przez Google Auth, Firebase Authentication albo formularz rejestracji.",
  },
  {
    title: "Dane techniczne",
    body: "Parametry wody, dane projektowe i informacje wpisywane przez użytkownika w celu wykonania analizy, wygenerowania rekomendacji lub przygotowania raportu.",
  },
  {
    title: "Pliki użytkownika",
    body: "Logo firmy lub inne materiały dodane przez użytkownika do personalizacji raportu, przechowywane lokalnie albo w przypisanej przestrzeni użytkownika.",
  },
  {
    title: "Dane eksploatacyjne",
    body: "Podstawowe informacje techniczne konieczne do działania usługi, bezpieczeństwa logowania, synchronizacji oraz diagnostyki błędów.",
  },
] as const;

const purposes = [
  "utworzenia i zabezpieczenia konta użytkownika",
  "synchronizacji projektów oraz danych między urządzeniami",
  "wykonania obliczeń, analiz i rekomendacji technicznych w aplikacji",
  "wygenerowania raportu PDF z danymi przekazanymi przez użytkownika",
  "obsługi zgłoszeń, pytań i próśb dotyczących konta lub danych",
  "utrzymania stabilności, bezpieczeństwa i rozwoju aplikacji",
] as const;

const rights = [
  "dostępu do swoich danych",
  "sprostowania lub uzupełnienia danych",
  "usunięcia konta i danych powiązanych z kontem",
  "ograniczenia przetwarzania w przypadkach przewidzianych prawem",
  "wniesienia sprzeciwu wobec przetwarzania",
  "otrzymania kopii danych w możliwym do odczytu formacie",
] as const;

function Section({
  id,
  title,
  children,
}: Readonly<{
  id: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-white/12 pt-8">
      <h2 className="text-2xl font-semibold tracking-tight text-white">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-8 text-slate-200">{children}</div>
    </section>
  );
}

export default function FerroScanPrivacyPolicyPage() {
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
              <p className="text-sm text-slate-300">FerroScan</p>
            </div>
          </Link>

          <Link href="/pl#aplikacje" className="button-secondary min-h-10 px-4 py-2 text-sm">
            Wróć do aplikacji
          </Link>
        </div>
      </header>

      <main className="section-shell py-10 md:py-14">
        <article className="section-card overflow-hidden">
          <div className="relative border-b border-white/12 px-6 py-10 md:px-10 md:py-14">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative max-w-4xl">
              <p className="eyebrow">Prywatność</p>
              <h1 className="hero-title max-w-4xl text-4xl font-semibold text-white md:text-6xl">
                Polityka prywatności aplikacji FerroScan
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
                Ten dokument opisuje, jakie dane mogą być przetwarzane w aplikacji FerroScan,
                w jakim celu są wykorzystywane oraz jak użytkownik może zarządzać swoim kontem
                i danymi.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="chip">Ostatnia aktualizacja: 5 maja 2026 r.</span>
                <span className="chip">Aplikacja mobilna FerroScan</span>
              </div>
            </div>
          </div>

          <div className="grid gap-10 px-6 py-10 md:px-10 lg:grid-cols-[16rem_1fr]">
            <aside className="lg:sticky lg:top-8 lg:self-start">
              <nav className="rounded-3xl border border-white/12 bg-slate-950/42 p-5 text-sm text-slate-300">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                  Spis treści
                </p>
                <div className="mt-4 grid gap-3">
                  <a href="#administrator" className="hover:text-white">
                    Administrator
                  </a>
                  <a href="#dane" className="hover:text-white">
                    Zakres danych
                  </a>
                  <a href="#cele" className="hover:text-white">
                    Cele przetwarzania
                  </a>
                  <a href="#firebase" className="hover:text-white">
                    Firebase i Google
                  </a>
                  <a href="#usuwanie" className="hover:text-white">
                    Usuwanie konta
                  </a>
                  <a href="#prawa" className="hover:text-white">
                    Prawa użytkownika
                  </a>
                  <a href="#kontakt" className="hover:text-white">
                    Kontakt
                  </a>
                </div>
              </nav>
            </aside>

            <div className="space-y-8">
              <Section id="administrator" title="1. Administrator danych">
                <p>
                  Administratorem danych osobowych przetwarzanych w związku z korzystaniem
                  z aplikacji FerroScan jest Tomasz Gzella.
                </p>
                <p>
                  Kontakt w sprawach prywatności:{" "}
                  <a href={`mailto:${privacyEmail}`} className="text-cyan-100 underline-offset-4 hover:underline">
                    {privacyEmail}
                  </a>
                  .
                </p>
              </Section>

              <Section id="dane" title="2. Jakie dane mogą być przetwarzane">
                <div className="grid gap-4 md:grid-cols-2">
                  {dataCategories.map((category) => (
                    <div key={category.title} className="rounded-3xl border border-white/12 bg-slate-950/36 p-5">
                      <h3 className="font-semibold text-white">{category.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-slate-300">{category.body}</p>
                    </div>
                  ))}
                </div>
              </Section>

              <Section id="cele" title="3. Cele i podstawa przetwarzania">
                <p>Dane są wykorzystywane wyłącznie w zakresie potrzebnym do działania aplikacji, w tym do:</p>
                <ul className="grid gap-3">
                  {purposes.map((purpose) => (
                    <li key={purpose} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      {purpose}
                    </li>
                  ))}
                </ul>
                <p>
                  Podstawą przetwarzania jest przede wszystkim wykonanie usługi świadczonej
                  użytkownikowi, prawnie uzasadniony interes administratora związany z bezpieczeństwem
                  i rozwojem aplikacji oraz, w odpowiednich przypadkach, zgoda użytkownika.
                </p>
              </Section>

              <Section id="firebase" title="4. Firebase, Google Auth i usługi techniczne">
                <p>
                  FerroScan może korzystać z usług Firebase oraz Google, w szczególności do logowania,
                  uwierzytelniania, synchronizacji danych, przechowywania danych użytkownika i obsługi
                  infrastruktury technicznej aplikacji.
                </p>
                <p>
                  Dane mogą być przetwarzane przez dostawców usług technicznych zgodnie z ich zasadami
                  bezpieczeństwa i prywatności. Administrator dobiera usługi w sposób ograniczający
                  zakres przetwarzania do funkcji niezbędnych dla działania aplikacji.
                </p>
              </Section>

              <Section id="przechowywanie" title="5. Czas przechowywania danych">
                <p>
                  Dane konta i projekty są przechowywane tak długo, jak użytkownik korzysta z aplikacji
                  lub do czasu usunięcia konta. Dane niezbędne do obsługi zgłoszeń mogą być
                  przechowywane przez czas potrzebny do wyjaśnienia sprawy.
                </p>
                <p>
                  Po usunięciu konta dane powiązane z użytkownikiem są usuwane z aktywnych baz,
                  chyba że obowiązujące przepisy wymagają dłuższego przechowywania wybranych informacji.
                </p>
              </Section>

              <Section id="usuwanie" title="6. Usuwanie konta i danych">
                <p>
                  Użytkownik może usunąć konto bezpośrednio w aplikacji, korzystając ze ścieżki:
                  <span className="mx-2 rounded-full border border-cyan-300/24 bg-cyan-300/10 px-3 py-1 text-sm text-cyan-100">
                    Ustawienia - Usuń moje konto
                  </span>
                  lub wysyłając prośbę na adres administratora.
                </p>
                <p>
                  Po usunięciu konta dane powiązane z kontem są trwale usuwane z serwerów Firebase
                  w zakresie możliwym technicznie i organizacyjnie.
                </p>
              </Section>

              <Section id="prawa" title="7. Prawa użytkownika">
                <p>Użytkownik ma prawo zwrócić się do administratora w sprawie:</p>
                <ul className="grid gap-3 md:grid-cols-2">
                  {rights.map((right) => (
                    <li key={right} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      {right}
                    </li>
                  ))}
                </ul>
                <p>
                  Użytkownik ma również prawo złożyć skargę do właściwego organu nadzorczego,
                  jeżeli uzna, że dane są przetwarzane niezgodnie z przepisami.
                </p>
              </Section>

              <Section id="kontakt" title="8. Kontakt w sprawach prywatności">
                <div className="rounded-3xl border border-cyan-300/18 bg-cyan-300/8 p-5">
                  <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-100">
                    Dane kontaktowe
                  </p>
                  <p className="mt-4 text-xl font-semibold text-white">{contactProfile.name}</p>
                  <p className="mt-2 text-slate-300">{contactProfile.role}</p>
                  <a
                    href={`mailto:${privacyEmail}`}
                    className="mt-5 inline-flex text-cyan-100 underline-offset-4 hover:underline"
                  >
                    {privacyEmail}
                  </a>
                </div>
              </Section>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
