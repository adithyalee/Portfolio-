"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/data/config";
import { fadeUp, stagger, scrollTrigger } from "@/lib/utils/animations";
import { Footer } from "@/components/sections/Footer";
import Image from "next/image";

const skills = {
    Languages: ["Java", "Python", "TypeScript", "JavaScript", "SQL", "C++", "HTML/CSS"],
    Frameworks: ["Next.js", "React", "Spring Boot", "Node.js", "Express.js", "Tailwind CSS"],
    "AI & ML": ["TensorFlow", "PyTorch", "Gemini API", "Replicate", "Computer Vision", "NLP"],
    "Backend & DB": ["PostgreSQL", "MongoDB", "Redis", "REST APIs", "GraphQL", "Microservices"],
    "DevOps & Cloud": ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Datadog", "Jenkins"],
};

const timeline = [
    { year: "2025", company: "Carleton University", role: "MEng Software Engineering", current: true },
    { year: "2022–2024", company: "Tata Consultancy Services", role: "Assistant Systems Engineer" },
    { year: "2022", company: "CSIR-CEERI", role: "Research Intern" },
];

export default function AboutPage() {
    return (
        <>
            <main id="main-content" className="pt-16">
                {/* Hero image */}
                <div className="relative w-full overflow-hidden" style={{ height: "60vh" }}>
                    <Image
                        src={siteConfig.images.portraitPrimary}
                        alt={siteConfig.name}
                        fill
                        priority
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: "top",
                            filter: "grayscale(20%) contrast(1.08) brightness(0.88)",
                        }}
                    />
                </div>

                {/* Two-column content */}
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
                        <div style={{ gridColumn: "1 / 4" }}>
                            <motion.span
                                className="font-mono text-[11px] uppercase tracking-[0.15em]"
                                style={{ color: "var(--muted)" }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={scrollTrigger}
                                variants={fadeUp}
                            >
                                About me
                            </motion.span>
                        </div>

                        <div style={{ gridColumn: "4 / 13" }}>
                            <motion.h1
                                className="font-sans text-[clamp(24px,3vw,36px)] font-semibold leading-[1.3] mb-12"
                                style={{ color: "var(--text)" }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={scrollTrigger}
                                variants={fadeUp}
                            >
                                Software engineer building things that scale.
                            </motion.h1>

                            <motion.div
                                className="space-y-6 font-sans text-[18px] leading-[1.7] mb-16"
                                style={{ color: "var(--muted)" }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={scrollTrigger}
                                variants={fadeUp}
                            >
                                <p>
                                    I&apos;m Adithya — a software engineer and MEng student at Carleton
                                    University (CGPA: 3.65/4.0), available for co-op from May 2026.
                                </p>
                                <p>
                                    At Tata Consultancy Services I built Java microservices for global
                                    airline and transit platforms handling 2M+ daily transactions.
                                    At CSIR-CEERI I published peer-reviewed ML research achieving
                                    91% detection accuracy on 10,000+ image samples.
                                </p>
                                <p>
                                    I build full-stack products, architect AI pipelines, containerize
                                    with Docker, and monitor distributed systems with Datadog.
                                    Whatever the role needs — I figure it out and ship it.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Skills Grid */}
                <section style={{ borderTop: "1px solid var(--border)", padding: "64px 0" }}>
                    <div className="container-main">
                        <motion.span
                            className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-10"
                            style={{ color: "var(--muted)" }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={scrollTrigger}
                            variants={fadeUp}
                        >
                            Skills & Technologies
                        </motion.span>

                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0"
                            initial="hidden"
                            whileInView="visible"
                            viewport={scrollTrigger}
                            variants={stagger(0.08)}
                        >
                            {Object.entries(skills).map(([category, items]) => (
                                <motion.div
                                    key={category}
                                    variants={fadeUp}
                                    className="p-6"
                                    style={{ border: "1px solid var(--border)", marginRight: "-1px", marginBottom: "-1px" }}
                                >
                                    <h3
                                        className="font-mono text-[11px] uppercase tracking-[0.15em] mb-4"
                                        style={{ color: "var(--accent)" }}
                                    >
                                        {category}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {items.map((item) => (
                                            <span
                                                key={item}
                                                className="font-sans text-[13px]"
                                                style={{ color: "var(--muted)" }}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Timeline */}
                <section style={{ borderTop: "1px solid var(--border)", padding: "64px 0" }}>
                    <div className="container-main">
                        <motion.span
                            className="font-mono text-[11px] uppercase tracking-[0.15em] block mb-10"
                            style={{ color: "var(--muted)" }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={scrollTrigger}
                            variants={fadeUp}
                        >
                            Experience
                        </motion.span>

                        <motion.div
                            className="relative pl-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={scrollTrigger}
                            variants={stagger(0.12)}
                        >
                            {/* Vertical line */}
                            <div
                                className="absolute left-0 top-0 bottom-0 w-[1px]"
                                style={{ background: "var(--border)" }}
                            />

                            {timeline.map((entry) => (
                                <motion.div
                                    key={entry.company}
                                    variants={fadeUp}
                                    className="relative pb-12 last:pb-0"
                                >
                                    {/* Dot */}
                                    <div
                                        className="absolute -left-8 top-1 w-[6px] h-[6px] rounded-full -translate-x-[2.5px]"
                                        style={{ background: entry.current ? "var(--accent)" : "var(--muted)" }}
                                    />

                                    <span
                                        className="font-mono text-[13px] block mb-1"
                                        style={{ color: "var(--muted)" }}
                                    >
                                        {entry.year}
                                    </span>
                                    <h4
                                        className="font-sans text-[18px] font-semibold"
                                        style={{ color: "var(--text)" }}
                                    >
                                        {entry.company}
                                    </h4>
                                    <p className="font-sans text-[14px]" style={{ color: "var(--muted)" }}>
                                        {entry.role}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
