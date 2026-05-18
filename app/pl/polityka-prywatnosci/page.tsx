import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/home/site-footer";
import { contactProfile } from "@/data/contact-profile";

export const metadata: Metadata = {
  title: "Polityka prywatności | Tomasz Gzella",
  description:
    "Polityka prywatności strony tomaszgzella.pl: informacje o kontakcie, danych osobowych, cookies i prawach użytkownika.",
  openGraph: {
    title: "Polityka prywatności | Tomasz Gzella",
    description:
      "Informacje o zasadach przetwarzania danych osobowych na stronie tomaszgzella.pl.",
    locale: "pl_PL",
    type: "article",
  },
};

const processingPurposes = [
  "udzielenia odpowiedzi na wiadomość lub zapytanie",
  "prowadzenia korespondencji technicznej, projektowej lub zawodowej",
  "ustalenia szczegółów ewentualnej współpracy",
  "zapewnienia bezpieczeństwa i prawidłowego działania strony",
  "prowadzenia anonimowych statystyk odwiedzin i pomiaru wydajności strony",
] as const;

const userRights = [
  "dostępu do danych",
  "sprostowania danych",
  "usunięcia danych",
  "ograniczenia przetwarzania",
  "wniesienia sprzeciwu",
  "przenoszenia danych, jeżeli ma to zastosowanie",
  "wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych",
] as const;

function PolicySection({
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

export default function PrivacyPolicyPage() {
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
              <p className="text-sm text-slate-300">Polityka prywatności</p>
            </div>
          </Link>

          <Link href="/pl" className="button-secondary min-h-10 px-4 py-2 text-sm">
            Wróć na stronę główną
          </Link>
        </div>
      </header>

      <main className="section-shell py-10 md:py-14">
        <article className="section-card overflow-hidden">
          <div className="relative border-b border-white/12 px-6 py-10 md:px-10 md:py-14">
            <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
            <div className="relative max-w-4xl">
              <p className="eyebrow">RODO i prywatność</p>
              <h1 className="hero-title max-w-4xl text-4xl font-semibold text-white md:text-6xl">
                Polityka prywatności strony tomaszgzella.pl
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 md:text-lg">
                Ten dokument wyjaśnia, jakie dane mogą być przetwarzane podczas korzystania
                ze strony oraz podczas kontaktu z administratorem.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="chip">Ostatnia aktualizacja: 18 maja 2026 r.</span>
                <span className="chip">Strona informacyjna</span>
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
                    Cele i podstawy
                  </a>
                  <a href="#cookies" className="hover:text-white">
                    Cookies
                  </a>
                  <a href="#odbiorcy" className="hover:text-white">
                    Odbiorcy danych
                  </a>
                  <a href="#prawa" className="hover:text-white">
                    Prawa użytkownika
                  </a>
                  <a href="#ferroscan" className="hover:text-white">
                    FerroScan
                  </a>
                </div>
              </nav>
            </aside>

            <div className="space-y-8">
              <PolicySection id="administrator" title="1. Administrator danych">
                <p>
                  Administratorem danych osobowych jest {contactProfile.name}, {contactProfile.role}.
                </p>
                <p>
                  Kontakt w sprawach prywatności:{" "}
                  <a
                    href={`mailto:${contactProfile.email}`}
                    className="text-cyan-100 underline-offset-4 hover:underline"
                  >
                    {contactProfile.email}
                  </a>
                  .
                </p>
              </PolicySection>

              <PolicySection id="dane" title="2. Jakie dane mogą być przetwarzane">
                <p>
                  Strona ma charakter informacyjny. Nie zawiera formularza kontaktowego, kont użytkowników,
                  newslettera ani systemu logowania.
                </p>
                <p>
                  Jeżeli skontaktujesz się mailowo, telefonicznie lub przez LinkedIn, przetwarzane mogą być
                  dane podane dobrowolnie w wiadomości, w szczególności imię, nazwisko, adres e-mail,
                  numer telefonu, nazwa firmy, treść korespondencji oraz inne informacje potrzebne do
                  udzielenia odpowiedzi.
                </p>
              </PolicySection>

              <PolicySection id="cele" title="3. Cele i podstawy przetwarzania">
                <p>Dane mogą być przetwarzane w następujących celach:</p>
                <ul className="grid gap-3">
                  {processingPurposes.map((purpose) => (
                    <li key={purpose} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      {purpose}
                    </li>
                  ))}
                </ul>
                <p>
                  Podstawą przetwarzania jest prawnie uzasadniony interes administratora, polegający
                  na obsłudze korespondencji i zapewnieniu bezpieczeństwa strony, a w razie rozmów
                  o współpracy także podjęcie działań przed zawarciem umowy. W wybranych sytuacjach
                  podstawą mogą być obowiązki wynikające z przepisów prawa.
                </p>
              </PolicySection>

              <PolicySection id="cookies" title="4. Cookies i podobne technologie">
                <div className="rounded-3xl border border-cyan-300/18 bg-cyan-300/8 p-5">
                  <p className="font-semibold text-white">Strona korzysta z Vercel Web Analytics oraz Vercel Speed Insights.</p>
                  <p className="mt-3 text-sm leading-7 text-slate-200">
                    Narzędzia te służą do anonimowego pomiaru odwiedzin, popularności podstron oraz
                    podstawowych parametrów wydajnościowych, takich jak czas ładowania, stabilność
                    układu i responsywność strony.
                  </p>
                </div>
                <p>
                  Według informacji dostawcy, Vercel Web Analytics nie używa plików cookies i opiera się
                  na zagregowanych danych, które nie służą do identyfikowania konkretnego użytkownika.
                  Speed Insights również służy do anonimowego pomiaru wydajności i nie jest wykorzystywany
                  do profilowania marketingowego.
                </p>
                <p>
                  Dostawca hostingu lub infrastruktury może dodatkowo przetwarzać standardowe logi techniczne,
                  takie jak adres IP, data i czas żądania, typ przeglądarki albo informacje diagnostyczne.
                  Takie dane służą utrzymaniu bezpieczeństwa, stabilności i prawidłowego działania strony.
                </p>
                <p>
                  Strona nie korzysta obecnie z Google Analytics, Meta Pixel, Hotjar, Clarity ani narzędzi
                  reklamowych. Jeżeli w przyszłości zostaną dodane narzędzia marketingowe lub elementy
                  korzystające z cookies niewymaganych technicznie, polityka zostanie zaktualizowana,
                  a użytkownik otrzyma odpowiedni komunikat i możliwość wyboru.
                </p>
              </PolicySection>

              <PolicySection id="odbiorcy" title="5. Odbiorcy danych i przekazywanie danych">
                <p>
                  Dane mogą być przetwarzane przez dostawców usług technicznych, takich jak hosting,
                  obsługa poczty elektronicznej, repozytorium kodu, narzędzia służące do publikacji strony
                  oraz usługi statystyk i pomiaru wydajności dostarczane przez Vercel. Dostęp do danych
                  jest ograniczony do zakresu koniecznego do świadczenia tych usług.
                </p>
                <p>
                  Administrator nie sprzedaje danych osobowych i nie wykorzystuje ich do profilowania
                  marketingowego. Dane mogą zostać udostępnione innym podmiotom wyłącznie wtedy, gdy
                  wynika to z przepisów prawa albo jest niezbędne do ochrony praw administratora.
                </p>
              </PolicySection>

              <PolicySection id="przechowywanie" title="6. Czas przechowywania danych">
                <p>
                  Dane z korespondencji są przechowywane przez okres potrzebny do obsługi sprawy,
                  utrzymania historii kontaktu oraz zabezpieczenia ewentualnych roszczeń. Dane techniczne
                  i logi serwerowe są przechowywane przez okres wynikający z konfiguracji dostawcy hostingu
                  lub potrzeb bezpieczeństwa.
                </p>
              </PolicySection>

              <PolicySection id="prawa" title="7. Prawa osoby, której dane dotyczą">
                <p>Masz prawo zwrócić się do administratora w sprawie:</p>
                <ul className="grid gap-3 md:grid-cols-2">
                  {userRights.map((right) => (
                    <li key={right} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                      {right}
                    </li>
                  ))}
                </ul>
                <p>
                  W celu realizacji praw napisz na adres{" "}
                  <a
                    href={`mailto:${contactProfile.email}`}
                    className="text-cyan-100 underline-offset-4 hover:underline"
                  >
                    {contactProfile.email}
                  </a>
                  . Administrator może poprosić o dodatkowe informacje potrzebne do potwierdzenia
                  tożsamości lub obsługi żądania.
                </p>
              </PolicySection>

              <PolicySection id="ferroscan" title="8. Aplikacja FerroScan">
                <p>
                  Aplikacja FerroScan ma osobną politykę prywatności, ponieważ może korzystać z innych
                  funkcji technicznych, takich jak logowanie, synchronizacja projektów lub Firebase.
                </p>
                <Link href="/pl/ferroscan/polityka-prywatnosci" className="button-secondary">
                  Polityka prywatności FerroScan
                </Link>
              </PolicySection>
            </div>
          </div>
        </article>
      </main>

      <SiteFooter />
    </div>
  );
}
