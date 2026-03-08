"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const [isTouchDevice, setIsTouchDevice] = useState(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia?.("(pointer: coarse)").matches ?? false;
    });
    const [cursorState, setCursorState] = useState<"default" | "hover" | "view">("default");
    const mousePos = useRef({ x: -100, y: -100 });
    const dotPos = useRef({ x: -100, y: -100 });
    const ringPos = useRef({ x: -100, y: -100 });

    useEffect(() => {
        // If the user ever touches, disable custom cursor for this session.
        const onTouch = () => setIsTouchDevice(true);
        window.addEventListener("touchstart", onTouch, { once: true, passive: true });
        return () => window.removeEventListener("touchstart", onTouch);
    }, []);

    useEffect(() => {
        if (isTouchDevice) return;

        // Hide default cursor globally
        const style = document.createElement("style");
        style.textContent = `
            *, *::before, *::after {
                cursor: none !important;
            }
        `;
        document.head.appendChild(style);

        const handleMouseMove = (e: MouseEvent) => {
            mousePos.current = { x: e.clientX, y: e.clientY };
        };

        // rAF loop for smooth lerp
        let animId: number;
        const animate = () => {
            const mx = mousePos.current.x;
            const my = mousePos.current.y;

            // Dot: near-instant (0.85 lerp)
            dotPos.current.x += (mx - dotPos.current.x) * 0.85;
            dotPos.current.y += (my - dotPos.current.y) * 0.85;

            // Ring: smooth lag (0.12 lerp)
            ringPos.current.x += (mx - ringPos.current.x) * 0.12;
            ringPos.current.y += (my - ringPos.current.y) * 0.12;

            if (dotRef.current) {
                dotRef.current.style.left = `${dotPos.current.x}px`;
                dotRef.current.style.top = `${dotPos.current.y}px`;
            }
            if (ringRef.current) {
                ringRef.current.style.left = `${ringPos.current.x}px`;
                ringRef.current.style.top = `${ringPos.current.y}px`;
            }

            animId = requestAnimationFrame(animate);
        };
        animId = requestAnimationFrame(animate);

        window.addEventListener("mousemove", handleMouseMove);

        // Hover detection
        const onEnter = (e: Event) => {
            const target = e.target as HTMLElement;
            const c = target.closest("[data-cursor]")?.getAttribute("data-cursor");
            setCursorState(c === "view" ? "view" : "hover");
        };
        const onLeave = () => setCursorState("default");

        const observe = () => {
            document.querySelectorAll('a, button, [role="button"], [data-cursor], input, textarea, select')
                .forEach((el) => {
                    el.addEventListener("mouseenter", onEnter);
                    el.addEventListener("mouseleave", onLeave);
                });
        };
        observe();
        const obs = new MutationObserver(observe);
        obs.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animId);
            obs.disconnect();
            style.remove();
        };
    }, [isTouchDevice]);

    if (isTouchDevice) return null;

    const dotSize = cursorState === "view" ? 0 : cursorState === "hover" ? 5 : 8;
    const ringSize = cursorState === "view" ? 80 : cursorState === "hover" ? 50 : 40;

    return (
        <>
            {/* DOT */}
            <div
                ref={dotRef}
                style={{
                    position: "fixed",
                    top: -100,
                    left: -100,
                    width: dotSize,
                    height: dotSize,
                    backgroundColor: "#FF3D00",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 99999,
                    transform: "translate(-50%, -50%)",
                    transition: "width 0.15s, height 0.15s",
                    willChange: "left, top",
                }}
            />

            {/* RING */}
            <div
                ref={ringRef}
                style={{
                    position: "fixed",
                    top: -100,
                    left: -100,
                    width: ringSize,
                    height: ringSize,
                    border: cursorState === "hover"
                        ? "2px solid rgba(255, 61, 0, 1)"
                        : "2px solid rgba(255, 61, 0, 0.5)",
                    backgroundColor: cursorState === "view"
                        ? "rgba(255, 61, 0, 0.1)"
                        : cursorState === "hover"
                            ? "rgba(255, 61, 0, 0.06)"
                            : "transparent",
                    borderRadius: "50%",
                    pointerEvents: "none",
                    zIndex: 99998,
                    transform: "translate(-50%, -50%)",
                    transition: "width 0.2s, height 0.2s, border 0.2s, background-color 0.2s",
                    willChange: "left, top",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {cursorState === "view" && (
                    <span style={{ color: "#FF3D00", fontSize: 10, fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                        View
                    </span>
                )}
            </div>
        </>
    );
}
