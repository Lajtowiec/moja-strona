const navigation = [
  { label: "O mnie", href: "#o-mnie" },
  { label: "Aplikacje", href: "#aplikacje" },
  { label: "Zakres pracy", href: "#czym-sie-zajmuje" },
  { label: "Kontakt", href: "#kontakt" },
];

export function SiteHeader() {
  return (
    <header className="section-shell sticky top-0 z-30 pt-5">
      <div className="section-card flex items-center justify-between px-5 py-4 md:px-7">
        <a href="#start" className="group flex items-center gap-4">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-300/25 bg-cyan-400/10 font-mono text-sm text-cyan-100 group-hover:scale-105 group-hover:bg-cyan-400/14">
            TG
          </div>
          <div>
            <p className="text-sm font-semibold tracking-[0.24em] text-white uppercase">Tomasz Gzella</p>
            <p className="text-sm text-slate-300">Inżynier środowiska i twórca aplikacji</p>
          </div>
        </a>

        <nav className="hidden items-center gap-2 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm text-slate-200 hover:-translate-y-0.5 hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
