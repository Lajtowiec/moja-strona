import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="section-shell py-8">
      <div className="flex flex-col gap-4 border-t border-white/14 py-6 text-sm text-slate-300 md:flex-row md:items-center md:justify-between">
        <p>Tomasz Gzella</p>
        <div className="flex flex-col gap-3 md:items-end">
          <p>Inżynier środowiska • Aplikacje techniczne • Profil zawodowy online</p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <Link href="/pl/polityka-prywatnosci" className="hover:text-white">
              Polityka prywatności
            </Link>
            <Link href="/pl/ferroscan/polityka-prywatnosci" className="hover:text-white">
              Polityka prywatności FerroScan
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
