"use client";

import { motion } from "framer-motion";
import { awards } from "@/lib/data/config";
import { fadeUp, stagger, scrollTrigger } from "@/lib/utils/animations";

export function Awards() {
    return (
        <section
            style={{
                borderTop: "1px solid var(--border)",
                background: "var(--bg)",
                padding: "64px 0",
            }}
        >
            <div className="container-main">
                {/* Label */}
                <motion.span
                    className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-10"
                    style={{ color: "var(--muted)" }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollTrigger}
                    variants={fadeUp}
                >
                    Awards & Certifications
                </motion.span>

                {/* Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0"
                    initial="hidden"
                    whileInView="visible"
                    viewport={scrollTrigger}
                    variants={stagger(0.1)}
                >
                    {awards.map((award) => (
                        <motion.div
                            key={award.name}
                            variants={fadeUp}
                            className="group p-7 transition-all duration-300 hover:bg-[#161616]"
                            style={{
                                border: "1px solid var(--border)",
                                marginRight: "-1px",
                                marginBottom: "-1px",
                            }}
                        >
                            {/* Award name */}
                            <h4
                                className="font-sans text-[15px] font-semibold mt-3 transition-colors duration-200 group-hover:text-[var(--accent)]"
                                style={{ color: "var(--text)" }}
                            >
                                {award.name}
                            </h4>

                            {/* Year */}
                            <span
                                className="font-mono text-[13px] block mt-2"
                                style={{ color: "var(--muted)" }}
                            >
                                {award.year}
                            </span>

                            {/* Project / Category */}
                            <span
                                className="font-sans text-[13px] block mt-1"
                                style={{ color: "var(--muted)" }}
                            >
                                {award.project}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
