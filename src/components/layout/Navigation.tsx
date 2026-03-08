"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import * as Dialog from "@radix-ui/react-dialog";
import { siteConfig } from "@/lib/data/config";
import { EASE_IN_OUT, EASE_OUT_EXPO } from "@/lib/utils/animations";
import { scrollToTarget } from "@/lib/utils/lenis";

const navLinks = [
    { label: "Index", href: "#index" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
];

const socialLinks = [
    { label: "li", href: siteConfig.socials.linkedin },
    { label: "gh", href: siteConfig.socials.github },
];

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        // Radix handles focus trap; keep body scroll locked for safety.
        document.body.style.overflow = isOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const onNavClick = (href: string) => (e: React.MouseEvent) => {
        if (!href.startsWith("#")) return;
        e.preventDefault();
        setIsOpen(false);
        scrollToTarget(href, { offset: -84, duration: 1.15 });
    };

    return (
        <>
            <a
                href="#index"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-[999] rounded-full border px-4 py-2 bg-black/80 text-white focus-ring"
                style={{ borderColor: "var(--border)" }}
                onClick={onNavClick("#index")}
            >
                Skip to content
            </a>

            {/* ═══ FIXED NAV BAR ═══ */}
            <nav
                className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between transition-all duration-300"
                style={{
                    paddingLeft: "var(--gutter)",
                    paddingRight: "var(--gutter)",
                    height: "60px",
                    background: scrolled
                        ? "rgba(11,11,11,0.85)"
                        : "transparent",
                    backdropFilter: scrolled ? "blur(12px)" : "none",
                    WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
                }}
            >
                {/* LEFT: Name */}
                <a
                    href="#index"
                    onClick={onNavClick("#index")}
                    className="flex items-baseline gap-[4px] focus-ring"
                >
                    <span className="font-sans text-[14px] font-bold text-white">
                        {siteConfig.firstName}
                    </span>
                    <span className="font-sans text-[14px] font-light" style={{ color: "rgba(255,255,255,0.5)" }}>
                        {siteConfig.lastName}
                    </span>
                </a>

                {/* CENTER: Socials */}
                <div className="hidden md:flex items-center gap-[6px]">
                    <span className="font-sans text-[12px] font-medium underline underline-offset-4 mr-2 text-white">
                        Socials
                    </span>
                    {socialLinks.map((link) => (
                        <span key={link.label} className="flex items-center gap-[6px]">
                            <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>/</span>
                            <a
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="font-sans text-[12px] transition-colors hover:text-white"
                                style={{ color: "rgba(255,255,255,0.5)" }}
                            >
                                {link.label}
                            </a>
                        </span>
                    ))}
                </div>

                {/* RIGHT: Nav links + Let's talk */}
                <div className="hidden md:flex items-center gap-[6px]">
                    {navLinks.map((link, i) => (
                        <span key={link.href} className="flex items-center gap-[6px]">
                            <a
                                href={link.href}
                                onClick={onNavClick(link.href)}
                                className="font-sans text-[12px] transition-colors hover:text-white focus-ring"
                                style={{ color: i === 0 ? "white" : "rgba(255,255,255,0.5)" }}
                            >
                                {link.label}
                            </a>
                            {i < navLinks.length - 1 && (
                                <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>/</span>
                            )}
                        </span>
                    ))}
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="ml-4 font-sans text-[12px] font-medium underline underline-offset-4 text-white hover:text-[var(--accent)] transition-colors"
                    >
                        Let&apos;s talk!
                    </a>
                </div>

                {/* Mobile hamburger */}
                <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
                    <Dialog.Trigger asChild>
                        <button
                            className="flex md:hidden flex-col items-end gap-[5px] p-2 focus-ring"
                            aria-label="Open menu"
                        >
                            <span className="block h-[1.5px] w-6 bg-white" />
                            <span className="block h-[1.5px] w-[14px] bg-white" />
                        </button>
                    </Dialog.Trigger>

                    <AnimatePresence>
                        {isOpen && (
                            <Dialog.Portal forceMount>
                                <Dialog.Overlay asChild>
                                    <motion.div
                                        className="fixed inset-0 z-[200]"
                                        style={{ background: "rgba(11,11,11,0.92)" }}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.2 }}
                                    />
                                </Dialog.Overlay>

                                <Dialog.Content asChild>
                                    <motion.div
                                        className="fixed inset-0 z-[210] outline-none"
                                        initial={{ clipPath: "inset(0 0 100% 0)" }}
                                        animate={{ clipPath: "inset(0 0 0% 0)" }}
                                        exit={{ clipPath: "inset(0 0 100% 0)" }}
                                        transition={{ duration: 0.5, ease: EASE_IN_OUT }}
                                    >
                                        <Dialog.Close asChild>
                                            <button
                                                className="absolute top-5 text-white text-[24px] z-10 p-2 focus-ring"
                                                style={{ right: "var(--gutter)" }}
                                                aria-label="Close menu"
                                            >
                                                ✕
                                            </button>
                                        </Dialog.Close>

                                        <motion.div
                                            className="flex flex-col justify-center h-full"
                                            style={{ padding: "var(--gutter)" }}
                                            initial="hidden"
                                            animate="visible"
                                            exit="hidden"
                                            variants={{
                                                hidden: {},
                                                visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
                                            }}
                                        >
                                            <span
                                                className="font-mono text-[10px] uppercase tracking-[0.15em] mb-6"
                                                style={{ color: "rgba(255,255,255,0.35)" }}
                                            >
                                                Navigation
                                            </span>
                                            {navLinks.map((link) => (
                                                <div key={link.href} className="overflow-hidden">
                                                    <motion.div
                                                        variants={{
                                                            hidden: { y: 50, opacity: 0 },
                                                            visible: {
                                                                y: 0,
                                                                opacity: 1,
                                                                transition: { duration: 0.5, ease: EASE_OUT_EXPO },
                                                            },
                                                        }}
                                                    >
                                                        <a
                                                            href={link.href}
                                                            onClick={onNavClick(link.href)}
                                                            className="block font-sans font-extrabold uppercase leading-none tracking-[-0.03em] text-white hover:text-[var(--accent)] transition-colors py-2 focus-ring"
                                                            style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
                                                        >
                                                            {link.label}
                                                        </a>
                                                    </motion.div>
                                                </div>
                                            ))}
                                        </motion.div>
                                    </motion.div>
                                </Dialog.Content>
                            </Dialog.Portal>
                        )}
                    </AnimatePresence>
                </Dialog.Root>
            </nav>
        </>
    );
}
