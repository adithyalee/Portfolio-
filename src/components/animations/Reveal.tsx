"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export const Reveal = ({
    children,
    delay = 0,
    className = "",
    y = 50,
}: {
    children: React.ReactNode;
    delay?: number;
    className?: string;
    y?: number;
}) => {
    const reduce = useReducedMotion();
    return (
        <motion.div
            initial={reduce ? { opacity: 1 } : { y, opacity: 0 }}
            whileInView={reduce ? { opacity: 1 } : { y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
                duration: reduce ? 0 : 0.8,
                delay,
                ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className={cn(className)}
        >
            {children}
        </motion.div>
    );
};
