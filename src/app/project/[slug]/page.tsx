"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { projects } from "@/lib/data/config";
import { fadeUp, stagger, EASE_OUT_EXPO, scrollTrigger } from "@/lib/utils/animations";
import { Footer } from "@/components/sections/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const project = projects.find((p) => p.slug === slug);
    if (!project) return notFound();

    const currentIndex = projects.findIndex((p) => p.slug === slug);
    const nextProject = projects[(currentIndex + 1) % projects.length];

    return (
        <>
            <main id="main-content">
                {/* Hero image */}
                <div
                    className="relative w-full overflow-hidden"
                    style={{ height: "100svh" }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${project.coverImage})`,
                            filter: "brightness(0.5)",
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 50%)",
                        }}
                    />

                    {/* Back link */}
                    <motion.div
                        className="absolute top-24 left-0 z-10"
                        style={{ paddingLeft: "var(--gutter)" }}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Link
                            href="/projects"
                            className="font-mono text-[13px] transition-colors duration-200 hover:text-[var(--accent)]"
                            style={{ color: "var(--muted)" }}
                        >
                            ← Back to projects
                        </Link>
                    </motion.div>

                    {/* Title */}
                    <div
                        className="absolute bottom-16 left-0 right-0 z-10"
                        style={{ paddingLeft: "var(--gutter)", paddingRight: "var(--gutter)" }}
                    >
                        <motion.h1
                            className="font-serif italic leading-[0.95] tracking-[-0.03em]"
                            style={{ fontSize: "var(--text-h1)", color: "var(--text)" }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6, ease: EASE_OUT_EXPO }}
                        >
                            {project.title}
                        </motion.h1>
                    </div>
                </div>

                {/* Content */}
                <section
                    style={{
                        paddingTop: "var(--section-pad)",
                        paddingBottom: "var(--section-pad)",
                    }}
                >
                    <div
                        className="container-main"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(12, 1fr)",
                            gap: "clamp(32px, 4vw, 64px)",
                        }}
                    >
                        {/* Sidebar — sticky */}
                        <div className="col-span-12 lg:col-span-3 lg:sticky lg:top-24 lg:self-start">
                            <motion.div
                                className="space-y-6"
                                initial="hidden"
                                whileInView="visible"
                                viewport={scrollTrigger}
                                variants={stagger(0.08)}
                            >
                                <motion.div variants={fadeUp}>
                                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-1" style={{ color: "var(--muted)" }}>
                                        Role
                                    </span>
                                    <span className="font-sans text-[14px]" style={{ color: "var(--text)" }}>
                                        {project.role}
                                    </span>
                                </motion.div>

                                <motion.div variants={fadeUp}>
                                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-1" style={{ color: "var(--muted)" }}>
                                        Year
                                    </span>
                                    <span className="font-sans text-[14px]" style={{ color: "var(--text)" }}>
                                        {project.year}
                                    </span>
                                </motion.div>

                                <motion.div variants={fadeUp}>
                                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-1" style={{ color: "var(--muted)" }}>
                                        Services
                                    </span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="font-sans text-[12px] px-2 py-0.5 border"
                                                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>

                                {project.link && (
                                    <motion.div variants={fadeUp}>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-block font-sans text-[13px] font-semibold uppercase tracking-[0.08em] px-5 py-2.5 border transition-all duration-200 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white mt-2"
                                            style={{ borderColor: "var(--border)", color: "var(--text)" }}
                                        >
                                            View Project ↗
                                        </a>
                                    </motion.div>
                                )}
                            </motion.div>
                        </div>

                        {/* Main content */}
                        <div className="col-span-12 lg:col-span-9 space-y-16">
                            {/* Overview */}
                            {project.overview && (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={scrollTrigger}
                                    variants={fadeUp}
                                >
                                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-4" style={{ color: "var(--muted)" }}>
                                        Overview
                                    </span>
                                    <p className="font-sans text-[18px] leading-[1.7]" style={{ color: "var(--text)" }}>
                                        {project.overview}
                                    </p>
                                </motion.div>
                            )}

                            {/* Challenge */}
                            {project.challenge && (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={scrollTrigger}
                                    variants={fadeUp}
                                >
                                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-4" style={{ color: "var(--muted)" }}>
                                        Challenge
                                    </span>
                                    <p className="font-sans text-[18px] leading-[1.7]" style={{ color: "var(--muted)" }}>
                                        {project.challenge}
                                    </p>
                                </motion.div>
                            )}

                            {/* Solution */}
                            {project.solution && (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={scrollTrigger}
                                    variants={fadeUp}
                                >
                                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-4" style={{ color: "var(--muted)" }}>
                                        Solution
                                    </span>
                                    <p className="font-sans text-[18px] leading-[1.7]" style={{ color: "var(--muted)" }}>
                                        {project.solution}
                                    </p>
                                </motion.div>
                            )}

                            {/* Outcomes */}
                            {project.outcomes && (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={scrollTrigger}
                                    variants={fadeUp}
                                >
                                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-4" style={{ color: "var(--muted)" }}>
                                        Outcomes
                                    </span>
                                    <ol className="space-y-3">
                                        {project.outcomes.map((outcome, i) => (
                                            <li key={i} className="flex gap-4 font-sans text-[16px] leading-[1.7]">
                                                <span className="font-mono text-[13px] font-bold shrink-0" style={{ color: "var(--accent)" }}>
                                                    {String(i + 1).padStart(2, "0")}
                                                </span>
                                                <span style={{ color: "var(--text)" }}>{outcome}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </motion.div>
                            )}

                            {/* Stack */}
                            {project.stack && (
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={scrollTrigger}
                                    variants={fadeUp}
                                >
                                    <span className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-4" style={{ color: "var(--muted)" }}>
                                        Stack
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="font-sans text-[13px] px-3 py-1 border"
                                                style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </div>
                </section>

                {/* Next project teaser */}
                <section
                    style={{
                        borderTop: "1px solid var(--border)",
                        padding: "64px 0",
                    }}
                >
                    <div className="container-main">
                        <Link href={`/project/${nextProject.slug}`} className="group block">
                            <span className="font-mono text-[13px] block mb-4" style={{ color: "var(--muted)" }}>
                                Next Project →
                            </span>
                            <h2
                                className="font-serif italic leading-[1.05] tracking-[-0.03em] transition-colors duration-200 group-hover:text-[var(--accent)]"
                                style={{ fontSize: "var(--text-h2)", color: "var(--text)" }}
                            >
                                {nextProject.title}
                            </h2>
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
