// ═══════════════════════════════════════════════════════
// ANIMATION SYSTEM — Editorial Portfolio
// All variants, easings, and transitions in one place
// ═══════════════════════════════════════════════════════

// Custom easing curves
export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const;
export const EASE_IN_OUT = [0.76, 0, 0.24, 1] as const;
export const EASE_OUT_CUBIC = [0.33, 1, 0.68, 1] as const;

// ═══ FADE UP ═══
// Used for: paragraphs, cards, any generic block
export const fadeUp = {
    hidden: { opacity: 0, y: 48 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: EASE_OUT_EXPO },
    },
};

// ═══ CLIP REVEAL — LEFT → RIGHT ═══
// Used for: horizontal lines, images, section borders
export const clipRevealX = {
    hidden: { clipPath: "inset(0 100% 0 0)" },
    visible: {
        clipPath: "inset(0 0% 0 0)",
        transition: { duration: 0.9, ease: EASE_IN_OUT },
    },
};

// ═══ CLIP REVEAL — BOTTOM → TOP ═══
// Used for: hero text words appearing from below
export const clipRevealY = {
    hidden: { clipPath: "inset(0 0 100% 0)", y: 20 },
    visible: {
        clipPath: "inset(0 0 0% 0)",
        y: 0,
        transition: { duration: 0.8, ease: EASE_OUT_EXPO },
    },
};

// ═══ STAGGER CONTAINER ═══
// Wrap any list/group of items for staggered child animations
export const stagger = (delay = 0.08) => ({
    hidden: {},
    visible: {
        transition: { staggerChildren: delay, delayChildren: 0.1 },
    },
});

// ═══ SCALE IN ═══
// Used for: project images, cards, photos
export const scaleIn = {
    hidden: { opacity: 0, scale: 0.94 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.7, ease: EASE_OUT_EXPO },
    },
};

// ═══ FADE IN ═══
// Simple opacity fade — used as fallback for reduced motion
export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 },
    },
};

// ═══ SLIDE UP ═══
// Used for: menu items, stacked elements
export const slideUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay },
    },
});

// ═══ PAGE TRANSITIONS ═══
export const pageTransition = {
    initial: { opacity: 0, y: 40 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: EASE_OUT_EXPO, delay: 0.1 },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.4 },
    },
};

// ═══ SCROLL TRIGGER DEFAULTS ═══
export const scrollTrigger = {
    once: true,
    amount: 0.15,
};
