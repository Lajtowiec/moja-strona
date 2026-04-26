import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ServicesSection } from "@/components/home/services-section";
import { SiteFooter } from "@/components/home/site-footer";
import { SiteHeader } from "@/components/home/site-header";
import { homeContent } from "@/data/home-content";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(51,163,255,0.2),_transparent_30%),radial-gradient(circle_at_85%_15%,_rgba(96,165,250,0.16),_transparent_24%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.12),_transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 -z-10 grid-pattern opacity-60" />

      <SiteHeader />

      <main>
        <HeroSection hero={homeContent.hero} stats={homeContent.stats} />
        <AboutSection about={homeContent.about} highlights={homeContent.highlights} />
        <ProjectsSection projects={homeContent.projects} />
        <ServicesSection services={homeContent.services} competencies={homeContent.competencies} />
        <ContactSection contact={homeContent.contact} />
      </main>

      <SiteFooter />
    </div>
  );
}
