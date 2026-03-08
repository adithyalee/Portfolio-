"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/utils/animations";

interface SplitTextProps {
    text: string;
    delay?: number;
    className?: string;
}

export function SplitText({ text, delay = 0, className = "" }: SplitTextProps) {
    const chars = text.split("");

    return (
        <span className={`inline-flex ${className}`} aria-label={text}>
            {chars.map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.5,
                        ease: EASE_OUT_EXPO,
                        delay: delay + i * 0.03,
                    }}
                    className="inline-block"
                    aria-hidden="true"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}
