"use client";

import { motion } from "framer-motion";
import { scrollTrigger, fadeUp } from "@/lib/utils/animations";
import { siteConfig } from "@/lib/data/config";
import Image from "next/image";

export function Footer() {
    return (
        <footer className="relative w-full overflow-hidden">
            {/* ═══ WARM GRADIENT SECTION ═══ */}
            <div
                className="relative w-full"
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(to bottom, #0B0B0B 0%, #1a0800 20%, #3d1400 40%, #c44a00 65%, #e87b30 80%, #f4c89a 95%, #f5dcb8 100%)",
                }}
            >
                {/* Content: Socials left, Philosophy right */}
                <div
                    className="relative z-[2] flex flex-col lg:flex-row justify-between pt-[15vh]"
                    style={{ paddingLeft: "var(--gutter)", paddingRight: "var(--gutter)" }}
                >
                    {/* LEFT: Socials + Contact */}
                    <motion.div
                        className="flex flex-col gap-6 mb-10 lg:mb-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={scrollTrigger}
                        variants={fadeUp}
                    >
                        <div>
                            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] mb-3 text-white">
                                Socials
                            </p>
                            <div className="flex flex-col gap-1">
                                <a
                                    href={siteConfig.socials.linkedin}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-sans text-[14px] hover:underline transition-colors"
                                    style={{ color: "var(--accent)" }}
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href={siteConfig.socials.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="font-sans text-[14px] hover:underline transition-colors"
                                    style={{ color: "var(--accent)" }}
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>

                        <div>
                            <p className="font-sans text-[12px] font-semibold uppercase tracking-[0.1em] mb-2 text-white">
                                Contact me
                            </p>
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="font-sans text-[14px] transition-colors hover:underline block"
                                style={{ color: "var(--accent)" }}
                            >
                                {siteConfig.email}
                            </a>
                            <a
                                href={`tel:${siteConfig.phone}`}
                                className="font-sans text-[14px] transition-colors hover:underline block mt-1"
                                style={{ color: "var(--accent)" }}
                            >
                                {siteConfig.phone}
                            </a>
                        </div>
                    </motion.div>

                    {/* RIGHT: Philosophy quote */}
                    <motion.div
                        className="max-w-[600px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={scrollTrigger}
                        variants={fadeUp}
                    >
                        <p
                            className="font-serif italic leading-[1.35]"
                            style={{
                                fontSize: "clamp(28px, 4vw, 48px)",
                                color: "rgba(11,11,11,0.85)",
                            }}
                        >
                            As an engineer, I believe in shipping products that don&apos;t break at 2AM.
                            <br />
                            <span style={{ color: "rgba(11,11,11,0.5)" }}>
                                Being an engineer is about building systems that serve millions — reliability is not optional.
                            </span>
                        </p>
                    </motion.div>
                </div>

                {/* ═══ FOOTER AVATAR — close-up photo peeking from bottom (like Valentin's) ═══ */}
                <div
                    className="relative z-[1] flex justify-center"
                    style={{ marginTop: "clamp(40px, 8vh, 100px)" }}
                >
                    <div
                        className="relative overflow-hidden"
                        style={{
                            width: "clamp(250px, 30vw, 400px)",
                            height: "clamp(200px, 25vw, 350px)",
                        }}
                    >
                        <Image
                            src={siteConfig.images.portraitSecondary}
                            alt={`${siteConfig.name} — close-up`}
                            fill
                            sizes="(max-width: 1024px) 80vw, 400px"
                            style={{
                                objectFit: "cover",
                                objectPosition: "top",
                                filter: "brightness(0.8) contrast(1.1) saturate(1.1)",
                            }}
                        />
                    </div>
                </div>

                {/* ═══ BOTTOM BAR ═══ */}
                <div
                    className="relative z-[2] flex justify-between items-end pb-6 pt-4"
                    style={{
                        paddingLeft: "var(--gutter)",
                        paddingRight: "var(--gutter)",
                    }}
                >
                    <span className="font-sans text-[11px]" style={{ color: "rgba(11,11,11,0.5)" }}>
                        © {new Date().getFullYear()} {siteConfig.name}
                    </span>
                    <span className="font-sans text-[11px]" style={{ color: "rgba(11,11,11,0.5)" }}>
                        Designed & Built by Adithya · Ottawa, Canada
                    </span>
                </div>
            </div>
        </footer>
    );
}
