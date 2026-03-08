"use client";

import { useMemo, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/lib/data/config";
import { fadeUp, EASE_OUT_EXPO, scrollTrigger } from "@/lib/utils/animations";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/data/config";

export function ProjectsSlider() {
    type Project = (typeof projects)[number];
    const featured = useMemo(() => {
        return [...projects]
            .filter((p) => p.featured)
            .sort((a, b) => (a.order ?? 999) - (b.order ?? 999))
            .slice(0, 3);
    }, []);

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState<Project>(featured[0] ?? projects[0]);

    return (
        <section
            id="projects"
            className="relative"
            style={{
                background: "var(--bg)",
                paddingTop: "var(--section-pad)",
                paddingBottom: "var(--section-pad)",
            }}
        >
            <motion.div
                className="container-main"
                initial="hidden"
                whileInView="visible"
                viewport={scrollTrigger}
                variants={fadeUp}
            >
                <div className="flex items-end justify-between gap-10">
                    <div>
                        <span className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>
                            Featured projects
                        </span>
                        <h2
                            className="font-sans tracking-[-0.03em] mt-3"
                            style={{ fontSize: "var(--text-h2)", lineHeight: 1.05, color: "var(--text)" }}
                        >
                            Proof that I ship.
                        </h2>
                    </div>
                    <Link
                        href="/projects"
                        className="hidden md:inline-flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] px-5 py-3 border transition-all duration-200 hover:bg-white hover:text-black"
                        style={{ borderColor: "var(--border)", color: "var(--text)" }}
                    >
                        All projects <span>↗</span>
                    </Link>
                </div>
            </motion.div>

            <div className="container-main mt-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {featured.map((p) => (
                        <button
                            key={p.slug}
                            type="button"
                            onClick={() => {
                                setActive(p);
                                setOpen(true);
                            }}
                            className="text-left rounded-[18px] border overflow-hidden bg-[var(--surface)] hover:bg-[var(--surface-2)] transition-colors focus-ring"
                            style={{ borderColor: "var(--border)" }}
                            data-cursor="view"
                        >
                            <div className="relative h-[220px]">
                                <Image
                                    src={p.coverImage}
                                    alt={`${p.title} cover`}
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 33vw"
                                    style={{
                                        objectFit: "cover",
                                        filter: "brightness(0.8) contrast(1.08) saturate(1.05)",
                                    }}
                                />
                                <div
                                    className="absolute inset-0"
                                    style={{
                                        background:
                                            "linear-gradient(to top, rgba(7,7,8,0.85) 0%, rgba(7,7,8,0.35) 50%, transparent 80%)",
                                    }}
                                />
                                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-4">
                                    <div className="min-w-0">
                                        <div className="font-sans text-[16px] font-semibold truncate" style={{ color: "var(--text)" }}>
                                            {p.title}
                                        </div>
                                        <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.12em] truncate" style={{ color: "rgba(255,255,255,0.55)" }}>
                                            {p.role} · {p.year}
                                        </div>
                                    </div>
                                    <span className="font-mono text-[11px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                                        Open ↗
                                    </span>
                                </div>
                            </div>

                            <div className="p-5">
                                <p className="font-sans text-[13px] leading-[1.65]" style={{ color: "var(--muted)" }}>
                                    {p.description}
                                </p>

                                {p.outcomes?.length ? (
                                    <ul className="mt-4 space-y-2">
                                        {p.outcomes.slice(0, 3).map((o) => (
                                            <li key={o} className="flex gap-3">
                                                <span aria-hidden="true" className="mt-[7px] h-[6px] w-[6px] rounded-full" style={{ background: "var(--accent)" }} />
                                                <span className="font-sans text-[13px]" style={{ color: "color-mix(in oklab, var(--text) 75%, transparent)" }}>
                                                    {o}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        </button>
                    ))}
                </div>

                <Link
                    href="/projects"
                    className="md:hidden mt-8 inline-flex items-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] px-5 py-3 border transition-all duration-200 hover:bg-white hover:text-black"
                    style={{ borderColor: "var(--border)", color: "var(--text)" }}
                >
                    All projects <span>↗</span>
                </Link>
            </div>

            <Dialog.Root open={open} onOpenChange={setOpen}>
                <AnimatePresence>
                    {open ? (
                        <Dialog.Portal forceMount>
                            <Dialog.Overlay asChild>
                                <motion.div
                                    className="fixed inset-0 z-[300] bg-black/70 backdrop-blur-md"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </Dialog.Overlay>

                            <Dialog.Content asChild>
                                <motion.div
                                    className="fixed left-1/2 top-1/2 z-[310] w-[min(980px,calc(100%-2rem))] -translate-x-1/2 -translate-y-1/2 rounded-[20px] border overflow-hidden bg-[var(--bg)] focus:outline-none"
                                    style={{ borderColor: "var(--border)" }}
                                    initial={{ opacity: 0, y: 16, scale: 0.99 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 16, scale: 0.99 }}
                                    transition={{ duration: 0.28, ease: EASE_OUT_EXPO }}
                                >
                                    <div className="relative h-[260px]">
                                        <Image
                                            src={active.heroImage || active.coverImage}
                                            alt={`${active.title} hero`}
                                            fill
                                            sizes="(max-width: 1024px) 100vw, 980px"
                                            style={{ objectFit: "cover", filter: "brightness(0.75) contrast(1.1)" }}
                                        />
                                        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(7,7,8,0.92) 0%, rgba(7,7,8,0.25) 60%, transparent 100%)" }} />

                                        <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-4">
                                            <Dialog.Title className="font-sans text-[14px] font-semibold" style={{ color: "var(--text)" }}>
                                                {active.title}
                                            </Dialog.Title>
                                            <Dialog.Close asChild>
                                                <button className="h-10 w-10 rounded-full border bg-black/30 hover:bg-black/50 transition-colors focus-ring" style={{ borderColor: "rgba(255,255,255,0.18)" }} aria-label="Close">
                                                    <span className="text-white/80">✕</span>
                                                </button>
                                            </Dialog.Close>
                                        </div>

                                        <div className="absolute bottom-5 left-5 right-5">
                                            <div className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: "rgba(255,255,255,0.55)" }}>
                                                {active.role} · {active.year}
                                            </div>
                                            <div className="mt-2 font-sans font-extrabold uppercase tracking-[-0.03em]" style={{ color: "var(--text)", fontSize: "clamp(26px, 4vw, 44px)", lineHeight: 1.05 }}>
                                                {active.description}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-8">
                                        <div className="md:col-span-8 space-y-8">
                                            {active.overview ? (
                                                <div>
                                                    <div className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>Overview</div>
                                                    <p className="mt-3 font-sans text-[15px] leading-[1.75]" style={{ color: "color-mix(in oklab, var(--text) 78%, transparent)" }}>
                                                        {active.overview}
                                                    </p>
                                                </div>
                                            ) : null}

                                            {active.challenge ? (
                                                <div>
                                                    <div className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>Challenge</div>
                                                    <p className="mt-3 font-sans text-[15px] leading-[1.75]" style={{ color: "var(--muted)" }}>
                                                        {active.challenge}
                                                    </p>
                                                </div>
                                            ) : null}

                                            {active.solution ? (
                                                <div>
                                                    <div className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>Solution</div>
                                                    <p className="mt-3 font-sans text-[15px] leading-[1.75]" style={{ color: "var(--muted)" }}>
                                                        {active.solution}
                                                    </p>
                                                </div>
                                            ) : null}
                                        </div>

                                        <div className="md:col-span-4 space-y-8">
                                            <div>
                                                <div className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>Outcomes</div>
                                                <ul className="mt-3 space-y-2">
                                                    {(active.outcomes ?? []).map((o) => (
                                                        <li key={o} className="flex gap-3">
                                                            <span aria-hidden="true" className="mt-[7px] h-[6px] w-[6px] rounded-full" style={{ background: "var(--accent)" }} />
                                                            <span className="font-sans text-[13px]" style={{ color: "color-mix(in oklab, var(--text) 78%, transparent)" }}>
                                                                {o}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div>
                                                <div className="font-mono text-[11px] uppercase tracking-[0.15em]" style={{ color: "var(--muted)" }}>Tech</div>
                                                <div className="mt-3 flex flex-wrap gap-2">
                                                    {(active.stack ?? []).slice(0, 12).map((t) => (
                                                        <span key={t} className="px-3 py-1 border font-sans text-[12px]" style={{ borderColor: "var(--border)", color: "var(--muted)" }}>
                                                            {t}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-3">
                                                <Link
                                                    href={`/project/${active.slug}`}
                                                    className="inline-flex items-center justify-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] px-5 py-3 border transition-all duration-200 hover:bg-[var(--accent)] hover:border-[var(--accent)] hover:text-white"
                                                    style={{ borderColor: "var(--border)", color: "var(--text)" }}
                                                >
                                                    Open case study <span>↗</span>
                                                </Link>
                                                <a
                                                    href={`mailto:${siteConfig.email}`}
                                                    className="inline-flex items-center justify-center gap-2 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] px-5 py-3 border transition-all duration-200 hover:bg-white hover:text-black"
                                                    style={{ borderColor: "var(--border)", color: "var(--text)" }}
                                                >
                                                    Contact <span>↗</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Dialog.Content>
                        </Dialog.Portal>
                    ) : null}
                </AnimatePresence>
            </Dialog.Root>
        </section>
    );
}
