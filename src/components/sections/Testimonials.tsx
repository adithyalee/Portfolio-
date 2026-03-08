"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data/config";
import { fadeUp, stagger, scrollTrigger } from "@/lib/utils/animations";

export function Testimonials() {
    if (testimonials.length === 0) return null;

    return (
        <section
            className="relative"
            style={{
                borderTop: "1px solid var(--border)",
                background: "var(--bg)",
                paddingTop: "var(--section-pad)",
                paddingBottom: "var(--section-pad)",
            }}
        >
            <div className="container-main">
                {/* ═══ Giant faint outline text in background ═══ */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
                    <span
                        className="font-sans font-extrabold uppercase leading-none tracking-[-0.04em] select-none whitespace-nowrap"
                        style={{
                            fontSize: "clamp(80px, 15vw, 200px)",
                            WebkitTextStroke: "1px rgba(255,255,255,0.04)",
                            color: "transparent",
                        }}
                    >
                        About me
                    </span>
                </div>

                {/* ═══ LABEL ═══ */}
                <motion.span
                    className="font-sans text-[14px] font-semibold block mb-16 relative z-10"
                    style={{ color: "var(--text)" }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollTrigger}
                    variants={fadeUp}
                >
                    What people say about me{" "}
                    <span className="font-mono text-[11px]" style={{ color: "var(--muted)" }}>
                        ® (Testimonials)
                    </span>
                </motion.span>

                {/* ═══ TESTIMONIAL ROWS — horizontal lines, like Valentin ═══ */}
                <motion.div
                    className="relative z-10"
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollTrigger}
                    variants={stagger(0.1)}
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            variants={fadeUp}
                            className="grid grid-cols-12 gap-4 py-8 group transition-colors duration-300 hover:bg-[rgba(255,255,255,0.02)]"
                            style={{
                                borderTop: "1px solid var(--border)",
                            }}
                        >
                            {/* Number */}
                            <div className="col-span-1">
                                <span className="font-sans text-[14px]" style={{ color: "var(--muted)" }}>
                                    {String(i + 1).padStart(2, "0")}.
                                </span>
                            </div>

                            {/* Name + Title */}
                            <div className="col-span-3">
                                <h4 className="font-sans text-[16px] font-semibold mb-1" style={{ color: "var(--text)" }}>
                                    {t.name}
                                </h4>
                                <p className="font-sans text-[12px] leading-[1.5]" style={{ color: "var(--muted)" }}>
                                    {t.title} · {t.company}
                                </p>
                            </div>

                            {/* Quote */}
                            <div className="col-span-8">
                                <p className="font-sans text-[14px] leading-[1.7]" style={{ color: "var(--muted)" }}>
                                    {t.quote.length > 200 ? t.quote.slice(0, 200) + "..." : t.quote}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    {/* Bottom border */}
                    <div className="h-[1px]" style={{ background: "var(--border)" }} />
                </motion.div>
            </div>
        </section>
    );
}
