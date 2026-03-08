"use client";

interface MarqueeProps {
    items: string[];
    direction?: "left" | "right";
    speed?: number;
    separator?: string;
    className?: string;
}

export function Marquee({
    items,
    direction = "left",
    speed = 30,
    separator = "✦",
    className = "",
}: MarqueeProps) {
    const animationName = direction === "left" ? "marquee-ltr" : "marquee-rtl";

    return (
        <div
            className={`group relative flex overflow-hidden whitespace-nowrap ${className}`}
            style={{
                borderTop: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                background: "var(--surface)",
            }}
        >
            <div
                className="flex items-center group-hover:[animation-play-state:paused]"
                style={{
                    animation: `${animationName} ${speed}s linear infinite`,
                }}
            >
                {/* Two copies for seamless loop */}
                {[0, 1].map((copy) => (
                    <div key={copy} className="flex items-center shrink-0">
                        {items.map((item, i) => (
                            <span key={`${copy}-${i}`} className="flex items-center">
                                <span
                                    className="font-sans text-[12px] font-medium uppercase tracking-[0.12em] px-5 shrink-0"
                                    style={{ color: "var(--muted)" }}
                                >
                                    {item}
                                </span>
                                <span
                                    className="text-[12px] shrink-0"
                                    style={{ color: "var(--accent)" }}
                                >
                                    {separator}
                                </span>
                            </span>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
