"use client";

import { Reveal } from "@/components/animations/Reveal";

export function AboutSection() {
    return (
        <section className="min-h-screen py-32 px-6 md:px-12 lg:px-24 flex flex-col justify-center border-t border-zinc-900 border-dashed">
            <div className="max-w-5xl">
                <Reveal>
                    <h2 className="text-sm font-mono tracking-widest text-zinc-500 uppercase mb-12">
                        [ About Me ]
                    </h2>
                </Reveal>

                <Reveal delay={0.1}>
                    <p className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white !leading-[1.1] mb-12">
                        I ENGINEER <span className="text-zinc-600">ROBUST SYSTEMS</span>,
                        AUTOMATE <span className="text-zinc-600">COMPLEX PIPELINES</span>, AND
                        INTEGRATE <span className="text-zinc-600">SMART AI</span> SOLUTIONS.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 mt-24">
                    <Reveal delay={0.2} className="flex flex-col gap-6">
                        <h3 className="text-xl font-medium">Background</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed text-balance">
                            Currently pursuing my Master's degree at Carleton University. I specialize in bridging the gap between development and operations, leveraging Full Stack, DevOps, and AI to build scalable applications.
                        </p>
                    </Reveal>
                    <Reveal delay={0.3} className="flex flex-col gap-6">
                        <h3 className="text-xl font-medium">Focus</h3>
                        <p className="text-zinc-400 text-lg leading-relaxed text-balance">
                            Currently seeking Co-op opportunities where I can contribute my interdisciplinary skills in software engineering, CI/CD pipelining, cloud architecture, and modern full-stack frameworks.
                        </p>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
