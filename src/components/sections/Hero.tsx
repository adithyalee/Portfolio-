"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/data/config";
import { EASE_OUT_EXPO } from "@/lib/utils/animations";
import Image from "next/image";
import { scrollToTarget } from "@/lib/utils/lenis";

export function Hero() {
    const reduce = useReducedMotion();
    const proof = siteConfig.stats.slice(0, 3);

    return (
        <section className="relative overflow-hidden" style={{ minHeight: "92vh" }}>
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 grid-fade" />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                    background:
                        "radial-gradient(900px 500px at 80% 15%, rgba(255,77,0,0.18), transparent 60%)",
                }}
            />

            <div className="container-main" style={{ paddingTop: "clamp(72px, 12vh, 120px)", paddingBottom: "clamp(48px, 8vh, 96px)" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(12, 1fr)",
                        gap: "clamp(20px, 3vw, 42px)",
                        alignItems: "center",
                    }}
                >
                    {/* Left: message */}
                    <motion.div
                        className="col-span-12 lg:col-span-7"
                        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
                        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: EASE_OUT_EXPO }}
                    >
                        <div className="flex items-center gap-3">
                            <span className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>
                                {siteConfig.subtitle}
                            </span>
                            <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                                /
                            </span>
                            <span className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>
                                {siteConfig.location}
                            </span>
                        </div>

                        <h1
                            className="font-sans tracking-[-0.04em] mt-6"
                            style={{
                                fontSize: "var(--text-h1)",
                                lineHeight: 0.95,
                                color: "var(--text)",
                            }}
                        >
                            Full‑stack engineer building AI‑powered systems that scale.
                        </h1>

                        <p
                            className="mt-6 text-balance"
                            style={{
                                fontSize: "clamp(16px, 1.7vw, 20px)",
                                lineHeight: 1.6,
                                color: "color-mix(in oklab, var(--text) 70%, transparent)",
                                maxWidth: "62ch",
                            }}
                        >
                            I ship production-grade web apps, event-driven backends, and ML-enabled pipelines —
                            with clean UX, observability, and deployment discipline.
                        </p>

                        <div className="mt-8 flex flex-col gap-3">
                            {proof.map((line) => (
                                <div key={line} className="flex items-start gap-3">
                                    <span
                                        aria-hidden="true"
                                        className="mt-[7px] inline-block h-[6px] w-[6px] rounded-full"
                                        style={{ background: "var(--accent)" }}
                                    />
                                    <span className="font-sans text-[14px]" style={{ color: "var(--muted)" }}>
                                        {line}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 flex flex-wrap items-center gap-3">
                            <button
                                type="button"
                                onClick={() => scrollToTarget("#projects", { offset: -84, duration: 1.1 })}
                                className="px-5 py-3 border font-sans text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-white hover:text-black focus-ring"
                                style={{ borderColor: "var(--border)", color: "var(--text)" }}
                            >
                                View projects
                            </button>
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="px-5 py-3 border font-sans text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white focus-ring"
                                style={{ borderColor: "var(--border)", color: "var(--text)" }}
                            >
                                Contact
                            </a>
                            {siteConfig.availability && (
                                <span className="ml-2 font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                                    {siteConfig.availabilityText}
                                </span>
                            )}
                        </div>
                    </motion.div>

                    {/* Right: portrait */}
                    <motion.div
                        className="col-span-12 lg:col-span-5"
                        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
                        animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, ease: EASE_OUT_EXPO, delay: reduce ? 0 : 0.08 }}
                    >
                        <div
                            className="relative holo-frame"
                            style={{
                                borderRadius: 18,
                                border: "1px solid var(--border)",
                                overflow: "hidden",
                                height: "clamp(360px, 58vh, 560px)",
                                background: "var(--surface)",
                            }}
                        >
                            <Image
                                src={siteConfig.images.heroPortrait}
                                alt={siteConfig.name}
                                fill
                                priority
                                sizes="(max-width: 1024px) 100vw, 40vw"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "top",
                                    filter: "brightness(0.75) contrast(1.1) saturate(1.05)",
                                }}
                            />
                            <div
                                className="absolute inset-0"
                                style={{
                                    background:
                                        "linear-gradient(to top, rgba(7,7,8,0.75) 0%, rgba(7,7,8,0.2) 55%, transparent 100%)",
                                }}
                            />
                            <div className="absolute bottom-5 left-5 right-5">
                                <div className="flex items-center justify-between gap-4">
                                    <span className="font-sans text-[14px] font-semibold" style={{ color: "var(--text)" }}>
                                        {siteConfig.name}
                                    </span>
                                    <span className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.45)" }}>
                                        {siteConfig.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
