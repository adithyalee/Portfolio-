"use client";

import { Reveal } from "@/components/animations/Reveal";
import { ArrowUpRight } from "lucide-react";
import { portfolio } from "@/content/portfolio";

export function WorkSection() {
    return (
        <section className="py-32 px-6 md:px-12 lg:px-24 min-h-screen flex flex-col justify-center border-t border-zinc-900 border-dashed">
            <Reveal>
                <h2 className="text-sm font-mono tracking-widest text-zinc-500 uppercase mb-24">
                    [ Selected Work ]
                </h2>
            </Reveal>

            <div className="flex flex-col">
                {portfolio.projects.map((project, index) => (
                    <Reveal key={index} delay={index * 0.1}>
                        <div className="group relative border-b border-zinc-800 py-12 md:py-16 flex flex-col md:flex-row md:items-center justify-between gap-6 cursor-pointer transition-colors hover:bg-zinc-900/50">
                            <div className="flex flex-col gap-2 relative z-10 px-4">
                                <h3 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight group-hover:pl-4 transition-all duration-500 text-balance">
                                    {project.title}
                                </h3>
                                <span className="text-zinc-500 text-sm md:text-base font-mono uppercase tracking-wider group-hover:pl-4 transition-all duration-500 delay-75 text-balance">
                                    {project.role} / {project.subtitle}
                                </span>
                            </div>
                            <div className="flex items-center justify-between md:justify-end gap-12 w-full md:w-auto px-4 relative z-10">
                                <span className="text-zinc-600 font-mono">{project.year}</span>
                                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-300">
                                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
