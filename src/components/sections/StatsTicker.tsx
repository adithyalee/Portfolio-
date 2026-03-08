"use client";

const stats = [
    "2M+ Daily Transactions",
    "91% Model Accuracy",
    "4-Stage AI Pipeline",
    "3+ Years Engineering",
    "5 Certifications",
    "MEng · Carleton University",
    "Available May 2026",
];

export function StatsTicker() {
    return (
        <div
            className="relative flex overflow-hidden whitespace-nowrap group"
            style={{
                height: "56px",
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                background: "var(--bg)",
            }}
        >
            {/* Desktop: static row */}
            <div className="hidden lg:flex items-center justify-center w-full gap-0">
                {stats.map((stat, i) => (
                    <span key={stat} className="flex items-center shrink-0">
                        <span
                            className="font-sans text-[15px] font-medium px-8"
                            style={{ color: "var(--text)" }}
                        >
                            {stat}
                        </span>
                        {i < stats.length - 1 && (
                            <span className="text-[12px]" style={{ color: "var(--accent)" }}>
                                ✦
                            </span>
                        )}
                    </span>
                ))}
            </div>

            {/* Mobile: scrolling ticker */}
            <div
                className="flex items-center lg:hidden group-hover:[animation-play-state:paused]"
                style={{ animation: "marquee-ltr 40s linear infinite" }}
            >
                {[0, 1].map((copy) => (
                    <div key={copy} className="flex items-center shrink-0">
                        {stats.map((stat, i) => (
                            <span key={`${copy}-${i}`} className="flex items-center shrink-0">
                                <span
                                    className="font-sans text-[14px] font-medium px-6"
                                    style={{ color: "var(--text)" }}
                                >
                                    {stat}
                                </span>
                                <span className="text-[12px]" style={{ color: "var(--accent)" }}>
                                    ✦
                                </span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
