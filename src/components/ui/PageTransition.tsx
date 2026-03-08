"use client";

import { motion } from "framer-motion";
import { EASE_OUT_EXPO } from "@/lib/utils/animations";

export function PageTransition({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
