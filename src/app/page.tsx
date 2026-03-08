export default function Home() {
  return (
    <>
      <main id="main-content" className="pt-16">
        <section id="index">
          <Hero />
        </section>

        <section aria-label="Proof" style={{ borderTop: "1px solid var(--border)" }}>
          <StatsTicker />
          <ClientLogos />
        </section>

        <section id="about">
          <Intro />
        </section>

        <section aria-label="Awards">
          <Awards />
        </section>

        <section id="projects">
          <ProjectsSlider />
        </section>

        <section id="testimonials">
          <Testimonials />
        </section>

        <section id="contact">
          <ContactSection />
        </section>

        <section aria-label="Expertise">
          <ExpertiseTicker />
        </section>
      </main>
      <Footer />
    </>
  );
}

import { Hero } from "@/components/sections/Hero";
import { StatsTicker } from "@/components/sections/StatsTicker";
import { Intro } from "@/components/sections/Intro";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Awards } from "@/components/sections/Awards";
import { ProjectsSlider } from "@/components/sections/ProjectsSlider";
import { Testimonials } from "@/components/sections/Testimonials";
import { ContactSection } from "@/components/sections/Contact";
import { ExpertiseTicker } from "@/components/sections/ExpertiseTicker";
import { Footer } from "@/components/sections/Footer";
