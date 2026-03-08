"use client";

import { clients } from "@/lib/data/config";

export function ClientLogos() {
    return (
        <section style={{ borderBottom: "1px solid var(--border)" }}>
            <div className="container-main py-4">
                <p
                    className="font-sans italic text-[12px] mb-4"
                    style={{ color: "var(--muted)" }}
                >
                    (Industry leaders & organizations I worked with)
                </p>
            </div>

            {/* Infinite ticker — opposite direction */}
            <div className="relative flex overflow-hidden whitespace-nowrap group pb-6">
                <div
                    className="flex items-center group-hover:[animation-play-state:paused]"
                    style={{ animation: "marquee-rtl 25s linear infinite" }}
                >
                    {[0, 1].map((copy) => (
                        <div key={copy} className="flex items-center shrink-0 gap-16 px-8">
                            {clients.map((client, i) => (
                                <span
                                    key={`${copy}-${i}`}
                                    className="font-sans text-[14px] font-medium uppercase tracking-[0.08em] opacity-45 hover:opacity-100 transition-opacity duration-300 shrink-0"
                                    style={{ color: "var(--text)" }}
                                >
                                    {client.name}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
