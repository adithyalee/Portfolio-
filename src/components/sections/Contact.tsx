"use client";

import { Reveal } from "@/components/animations/Reveal";
import { MoveRight } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-32 px-6 md:px-12 lg:px-24 min-h-[90vh] flex flex-col justify-center bg-white text-black dark:bg-zinc-100 border-t border-zinc-200">
            <Reveal className="flex-1 flex flex-col justify-center">
                <h2 className="text-sm font-mono tracking-widest text-zinc-500 uppercase mb-16">
                    [ Get In Touch ]
                </h2>

                <div className="flex flex-col gap-6 w-full max-w-4xl">
                    <p className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance !leading-[1.1]">
                        AVAILABLE FOR NEW CO-OP OPPORTUNITIES.
                        <br />
                        <span className="text-zinc-400">LET'S BUILD.</span>
                    </p>

                    <div className="mt-12 md:mt-24 w-full">
                        <a href="mailto:hello@example.com" className="group inline-flex items-center gap-6 text-2xl md:text-4xl lg:text-5xl font-semibold border-b-2 border-black pb-4 hover:pr-8 transition-all duration-300">
                            hello@example.com
                            <MoveRight className="w-8 h-8 md:w-12 md:h-12 group-hover:translate-x-4 transition-transform duration-300" />
                        </a>
                    </div>
                </div>
            </Reveal>

            <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-zinc-300">
                <Reveal delay={0.2}>
                    <p className="text-zinc-500 font-mono text-sm uppercase tracking-wider">© 2026 / All Rights Reserved</p>
                </Reveal>
                <Reveal delay={0.3} className="flex items-center gap-8">
                    <a href="#" className="font-mono text-sm uppercase tracking-wider text-black hover:text-zinc-500 transition-colors">LinkedIn</a>
                    <a href="#" className="font-mono text-sm uppercase tracking-wider text-black hover:text-zinc-500 transition-colors">GitHub</a>
                    <a href="#" className="font-mono text-sm uppercase tracking-wider text-black hover:text-zinc-500 transition-colors">Twitter</a>
                </Reveal>
            </div>
        </section>
    );
}
