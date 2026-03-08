"use client";

import { motion } from "framer-motion";
import { scrollTrigger, fadeUp } from "@/lib/utils/animations";

const items = [
    "Product Design",
    "specializing in",
    "Full-Stack",
    "AI Systems",
    "Cloud",
    "SaaS",
];

export function ExpertiseTicker() {
    const text = items.join(" · ");
    const repeatedText = `${text} · ${text} · ${text} · `;

    return (
        <motion.section
            className="relative overflow-hidden"
            style={{
                background: "var(--bg)",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                padding: "clamp(20px, 4vw, 40px) 0",
            }}
            initial="hidden"
            whileInView="visible"
            viewport={scrollTrigger}
            variants={fadeUp}
        >
            <div className="marquee-wrap whitespace-nowrap">
                <div className="marquee-track" style={{ animationDuration: "25s" }}>
                    <span
                        className="font-sans font-extrabold uppercase tracking-[-0.02em]"
                        style={{
                            fontSize: "clamp(32px, 5vw, 64px)",
                            color: "var(--accent)",
                        }}
                    >
                        {repeatedText}
                    </span>
                </div>
            </div>
        </motion.section>
    );
}
