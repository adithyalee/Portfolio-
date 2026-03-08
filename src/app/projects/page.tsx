"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/lib/data/config";
import { fadeUp, stagger } from "@/lib/utils/animations";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filtered =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.tags.includes(activeFilter));

    return (
        <>
            <main id="main-content" className="pt-24" style={{ paddingBottom: "var(--section-pad)" }}>
                <div className="container-main">
                    {/* Hero */}
                    <motion.div className="mb-4" initial="hidden" animate="visible" variants={fadeUp}>
                        <span className="font-mono text-[13px]" style={{ color: "var(--muted)" }}>
                            Index / Projects
                        </span>
                    </motion.div>

                    <motion.h1
                        className="font-serif italic leading-[1.05] tracking-[-0.03em] mb-12"
                        style={{ fontSize: "var(--text-h1)", color: "var(--text)" }}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                    >
                        Projects{" "}
                        <span className="font-mono text-[13px] align-top" style={{ color: "var(--muted)" }}>
                            16–24 ® (Portfolio)
                        </span>
                    </motion.h1>

                    {/* Filter pills */}
                    <motion.div
                        className="flex flex-wrap gap-2 mb-16"
                        initial="hidden"
                        animate="visible"
                        variants={stagger(0.05)}
                    >
                        {allTags.map((tag) => (
                            <motion.button
                                key={tag}
                                variants={fadeUp}
                                onClick={() => setActiveFilter(tag)}
                                className="px-4 py-2 font-sans text-[13px] font-medium transition-all duration-200"
                                style={{
                                    background: activeFilter === tag ? "var(--accent)" : "transparent",
                                    color: activeFilter === tag ? "white" : "var(--muted)",
                                    border: `1px solid ${activeFilter === tag ? "var(--accent)" : "var(--border)"}`,
                                }}
                            >
                                {tag}
                            </motion.button>
                        ))}
                    </motion.div>

                    {/* Project grid */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        initial="hidden"
                        animate="visible"
                        variants={stagger(0.1)}
                    >
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project, index) => (
                                <motion.div
                                    key={project.slug}
                                    layout
                                    variants={fadeUp}
                                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                                >
                                    <Link href={`/project/${project.slug}`} data-cursor="view">
                                        <div
                                            className="group relative overflow-hidden"
                                            style={{
                                                height: "clamp(350px, 45vh, 500px)",
                                                background: "var(--surface)",
                                            }}
                                        >
                                            {/* Image */}
                                            <div className="absolute inset-0 overflow-hidden">
                                                <div
                                                    className="w-full h-full transition-all duration-[800ms] ease-out bg-cover bg-center"
                                                    style={{
                                                        backgroundImage: `url(${project.coverImage})`,
                                                        filter: "grayscale(30%) brightness(0.7)",
                                                        transform: "scale(1)",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.filter = "grayscale(0%) brightness(0.85)";
                                                        e.currentTarget.style.transform = "scale(1.06)";
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.filter = "grayscale(30%) brightness(0.7)";
                                                        e.currentTarget.style.transform = "scale(1)";
                                                    }}
                                                />
                                            </div>

                                            {/* Gradient */}
                                            <div
                                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                                                style={{
                                                    background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 50%)",
                                                }}
                                            />

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-8 z-10 transition-transform duration-400 group-hover:-translate-y-2">
                                                <span className="font-mono text-[11px] block mb-2" style={{ color: "var(--muted)" }}>
                                                    {String(index + 1).padStart(2, "0")}
                                                </span>
                                                <h3 className="font-sans text-[22px] font-bold mb-1" style={{ color: "var(--text)" }}>
                                                    {project.title}
                                                </h3>
                                                <p className="font-sans text-[13px]" style={{ color: "var(--muted)" }}>
                                                    {project.role} · {project.year}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </>
    );
}
