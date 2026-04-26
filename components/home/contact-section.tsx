import { Reveal } from "@/components/home/reveal";
import { SectionHeading } from "@/components/home/section-heading";
import { contactProfile } from "@/data/contact-profile";

type ContactSectionProps = {
  contact: unknown;
};

const contactCards = [
  {
    label: "E-mail",
    value: contactProfile.email,
    href: `mailto:${contactProfile.email}`,
    description: contactProfile.emailDescription,
  },
  {
    label: "Telefon",
    value: contactProfile.phoneDisplay,
    href: `tel:${contactProfile.phone}`,
    description: contactProfile.phoneDescription,
  },
  {
    label: "LinkedIn",
    value: "Profil zawodowy",
    href: contactProfile.linkedin,
    description: contactProfile.linkedinDescription,
  },
  {
    label: "Lokalizacja",
    value: contactProfile.location,
    description: contactProfile.locationDescription,
  },
] as const;

export function ContactSection({ contact }: ContactSectionProps) {
  void contact;

  return (
    <section id="kontakt" className="section-shell py-8 md:py-12">
      <Reveal className="section-card relative overflow-hidden px-7 py-10 md:px-10 md:py-12">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading
              eyebrow="Kontakt"
              title={contactProfile.title}
              description={contactProfile.description}
            />

            <div className="mt-8 rounded-3xl border border-white/14 bg-slate-950/42 px-5 py-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                Dane kontaktowe
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-white">{contactProfile.name}</p>
              <p className="mt-2 text-sm leading-7 text-slate-200">{contactProfile.role}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                Region działania: {contactProfile.areaServed}
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {contactCards.map((card) => {
              const content = (
                <>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">
                      {card.label}
                    </p>
                    <p className="mt-4 text-xl font-semibold text-white">{card.value}</p>
                  </div>
                  <p className="mt-6 text-sm leading-7 text-slate-200">{card.description}</p>
                </>
              );

              if ("href" in card) {
                return (
                  <a
                    key={card.label}
                    href={card.href}
                    target={card.label === "LinkedIn" ? "_blank" : undefined}
                    rel={card.label === "LinkedIn" ? "noreferrer" : undefined}
                    className="interactive-card flex flex-col justify-between p-6"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <div key={card.label} className="interactive-card flex flex-col justify-between p-6">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-8 text-sm leading-7 text-slate-300">{contactProfile.note}</p>
      </Reveal>
    </section>
  );
}
