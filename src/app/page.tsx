import { Reveal } from "@/components/animations/Reveal";
import { AboutSection } from "@/components/sections/About";
import { WorkSection } from "@/components/sections/Work";
import { ContactSection } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-black text-white relative flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen pt-32 flex flex-col justify-center px-6 md:px-12 lg:px-24">
        <Reveal>
          <h1 className="text-6xl md:text-8xl lg:text-[10vw] font-bold tracking-tighter leading-[0.9] text-balance">
            SOFTWARE<br />
            ENGINEER.
          </h1>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 md:mt-12 flex flex-col md:flex-row gap-4 md:gap-12 md:items-end w-full max-w-4xl">
          <p className="text-lg md:text-xl text-zinc-400 max-w-xl text-balance flex-1 relative z-10 selection:bg-white selection:text-black">
            DevOps, AI & Full Stack Developer. Master's Student at Carleton University. Available for Co-op opportunities.
          </p>
          <div className="flex flex-col gap-2 lowercase text-sm text-zinc-500 tracking-widest font-mono">
            <span>[ Based in Canada ]</span>
            <span>[ Open to Work ]</span>
          </div>
        </Reveal>
      </section>

      {/* Main Content Sections */}
      <AboutSection />
      <WorkSection />
      <ContactSection />
    </main>
  );
}
