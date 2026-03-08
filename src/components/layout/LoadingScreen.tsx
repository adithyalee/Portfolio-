"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE_IN_OUT } from "@/lib/utils/animations";
import { siteConfig } from "@/lib/data/config";

interface LoadingScreenProps {
    onComplete?: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
    // Always start with "doors" so server and client first paint match (avoids hydration error)
    const [phase, setPhase] = useState<"doors" | "opening" | "done">("doors");
    const [currentTime, setCurrentTime] = useState("");
    const [mounted, setMounted] = useState(false);
    const hasCalledComplete = useRef(false);

    const fireComplete = useCallback(() => {
        if (!hasCalledComplete.current) {
            hasCalledComplete.current = true;
            onComplete?.();
        }
    }, [onComplete]);

    useEffect(() => {
        setMounted(true);
        // Skip doors if already visited this session (client-only check after mount)
        try {
            if (sessionStorage.getItem("visited")) {
                setPhase("done");
                fireComplete();
                return;
            }
        } catch {
            // ignore
        }

        document.body.style.overflow = "hidden";

        const updateClock = () =>
            setCurrentTime(
                new Date().toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: true,
                })
            );
        updateClock();
        const clockInterval = setInterval(updateClock, 1000);

        const openTimer = setTimeout(() => setPhase("opening"), 1200);

        return () => {
            clearInterval(clockInterval);
            clearTimeout(openTimer);
        };
    }, [fireComplete]);

    useEffect(() => {
        if (phase === "opening") {
            const timer = setTimeout(() => {
                setPhase("done");
                document.body.style.overflow = "";
                sessionStorage.setItem("visited", "true");
                fireComplete();
            }, 900);
            return () => clearTimeout(timer);
        }
    }, [phase, fireComplete]);

    if (phase === "done") return null;

    return (
        <div className="fixed inset-0 z-[1000] overflow-hidden">
            {/* Base layer */}
            <div
                className="absolute inset-0"
                style={{ background: "var(--bg, #070708)" }}
            />

            {/* Top bar: name */}
            <motion.div
                className="absolute top-8 z-10 left-[var(--gutter)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.35 }}
            >
                <span
                    className="font-sans text-[13px] font-medium uppercase tracking-[0.1em]"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                >
                    {siteConfig.name}
                </span>
            </motion.div>

            {/* Top bar: time — only after mount to avoid hydration mismatch with locale time */}
                <motion.div
                    className="absolute top-8 z-10 right-[var(--gutter)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.35 }}
                >
                    <span
                        className="font-mono text-[13px] tracking-[0.05em]"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                        {mounted ? currentTime : "—"}
                    </span>
                </motion.div>

            {/* Center: thin tech line (vertical) */}
            <motion.div
                className="absolute top-1/2 left-1/2 w-px -translate-x-1/2 -translate-y-1/2 h-24 opacity-60"
                style={{
                    background: `linear-gradient(to bottom, transparent, var(--accent, #ff4d00), transparent)`,
                }}
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 0.6 }}
                transition={{ delay: 0.4, duration: 0.5, ease: EASE_IN_OUT }}
            />

            {/* Bottom label */}
            <motion.div
                className="absolute bottom-8 z-10 left-[var(--gutter)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3 }}
            >
                <span
                    className="font-sans text-[12px]"
                    style={{ color: "rgba(255,255,255,0.25)" }}
                >
                    Entering portfolio
                </span>
            </motion.div>

            {/* Two "doors" — left and right panels */}
            <AnimatePresence>
                {(phase === "doors" || phase === "opening") && (
                    <>
                        <motion.div
                            className="absolute top-0 left-0 bottom-0 w-1/2 z-[2]"
                            style={{
                                background: "var(--bg, #070708)",
                                boxShadow: "4px 0 24px rgba(0,0,0,0.4)",
                            }}
                            initial={{ x: 0 }}
                            animate={{
                                x: phase === "opening" ? "-100%" : 0,
                            }}
                            transition={{
                                duration: 0.85,
                                ease: EASE_IN_OUT,
                            }}
                        />
                        <motion.div
                            className="absolute top-0 right-0 bottom-0 w-1/2 z-[2]"
                            style={{
                                background: "var(--bg, #070708)",
                                boxShadow: "-4px 0 24px rgba(0,0,0,0.4)",
                            }}
                            initial={{ x: 0 }}
                            animate={{
                                x: phase === "opening" ? "100%" : 0,
                            }}
                            transition={{
                                duration: 0.85,
                                ease: EASE_IN_OUT,
                            }}
                        />
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
