import { Reveal } from "@/components/home/reveal";
import { SectionHeading } from "@/components/home/section-heading";

type Contact = {
  title: string;
  description: string;
  email: string;
  note: string;
  emailDescription: string;
  placeholderTitle: string;
  placeholderDescription: string;
};

type ContactSectionProps = {
  contact: Contact;
};

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section id="kontakt" className="section-shell py-8 md:py-12">
      <Reveal className="section-card relative overflow-hidden px-7 py-10 md:px-10 md:py-12">
        <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionHeading eyebrow="Kontakt" title={contact.title} description={contact.description} />

          <div className="grid gap-5 md:grid-cols-2">
            <a
              href={`mailto:${contact.email}`}
              className="interactive-card flex flex-col justify-between p-6"
            >
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">E-mail</p>
                <p className="mt-4 text-xl font-semibold text-white">{contact.email}</p>
              </div>
              <p className="mt-6 text-sm leading-7 text-slate-200">{contact.emailDescription}</p>
            </a>

            <div className="interactive-card p-6">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">Do uzupełnienia</p>
              <p className="mt-4 text-xl font-semibold text-white">{contact.placeholderTitle}</p>
              <p className="mt-6 text-sm leading-7 text-slate-200">{contact.placeholderDescription}</p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-sm leading-7 text-slate-300">{contact.note}</p>
      </Reveal>
    </section>
  );
}
