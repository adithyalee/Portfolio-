"use client";

import { motion } from "framer-motion";
import { siteConfig, clients } from "@/lib/data/config";
import { fadeUp, scrollTrigger } from "@/lib/utils/animations";
import Image from "next/image";

export function Intro() {
    return (
        <section
            id="about"
            style={{
                background: "var(--bg)",
                paddingTop: "var(--section-pad)",
                paddingBottom: "var(--section-pad)",
            }}
        >
            <div
                className="container-main"
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(12, 1fr)",
                    gap: "clamp(24px, 3vw, 48px)",
                }}
            >
                {/* ═══ LEFT: Client logos staggered grid (like Valentin's) ═══ */}
                <div className="col-span-12 lg:col-span-4">
                    {/* Label */}
                    <motion.p
                        className="font-sans italic text-[12px] mb-8"
                        style={{ color: "var(--muted)" }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={scrollTrigger}
                        variants={fadeUp}
                    >
                        Industry leaders I worked for
                    </motion.p>

                    {/* Staggered logo grid — exactly like Valentin */}
                    <motion.div
                        className="grid grid-cols-3 gap-[1px]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={scrollTrigger}
                        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
                    >
                        {clients.map((client, i) => (
                            <motion.div
                                key={client.name}
                                variants={fadeUp}
                                className="flex items-center justify-center aspect-square transition-all duration-300 hover:bg-[#1a1a1a]"
                                style={{
                                    background: "var(--surface)",
                                    // Staggered offset: each row shifts right
                                    gridColumn: `${(Math.floor(i / 2) % 3) + 1} / span 1`,
                                }}
                            >
                                <span className="font-sans text-[11px] font-medium text-center px-2" style={{ color: "var(--muted)" }}>
                                    {client.name}
                                </span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* ═══ RIGHT: Philosophy text + CTA + photo ═══ */}
                <div className="col-span-12 lg:col-span-8 flex flex-col justify-between">
                    {/* Large philosophy text */}
                    <div>
                        <motion.p
                            className="font-sans font-semibold leading-[1.35] mb-6 text-balance"
                            style={{
                                fontSize: "clamp(22px, 3vw, 36px)",
                                color: "var(--text)",
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={scrollTrigger}
                            variants={fadeUp}
                        >
                            At TCS, I contributed to Java microservices handling 2M+ daily transactions. I apply system design thinking, containerization, and AI tooling to help ship products that perform under real pressure.
                        </motion.p>

                        <motion.p
                            className="font-sans font-semibold leading-[1.35] text-balance"
                            style={{
                                fontSize: "clamp(22px, 3vw, 36px)",
                                color: "var(--text)",
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={scrollTrigger}
                            variants={fadeUp}
                        >
                            My goal is to build software systems that are not only scalable but also elegant. I believe engineering should be a force multiplier for every team.
                        </motion.p>
                    </div>

                    {/* Bottom row: CTA circle + photo */}
                    <div className="flex items-end justify-between mt-16">
                        {/* Orange arrow circle CTA */}
                        <motion.a
                            href={`mailto:${siteConfig.email}`}
                            className="w-16 h-16 rounded-full border flex items-center justify-center transition-all duration-300 hover:bg-[var(--accent)] hover:border-[var(--accent)] group"
                            style={{ borderColor: "var(--border)" }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={scrollTrigger}
                            variants={fadeUp}
                        >
                            <span className="text-[20px] transition-colors duration-200 group-hover:text-white" style={{ color: "var(--accent)" }}>
                                ↗
                            </span>
                        </motion.a>

                        {/* Small photo */}
                        <motion.div
                            className="relative w-[140px] h-[180px] overflow-hidden hidden md:block"
                            initial="hidden"
                            whileInView="visible"
                            viewport={scrollTrigger}
                            variants={fadeUp}
                        >
                            <Image
                                src={siteConfig.images.portraitPrimary}
                                alt={siteConfig.name}
                                fill
                                sizes="140px"
                                style={{
                                    objectFit: "cover",
                                    objectPosition: "top",
                                    filter: "brightness(0.8) contrast(1.05)",
                                }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
