import type Lenis from "lenis";

let _lenis: Lenis | null = null;

export function setLenisInstance(instance: Lenis | null) {
  _lenis = instance;
}

export function getLenisInstance() {
  return _lenis;
}

export function scrollToTarget(
  target: string | Element,
  opts?: { offset?: number; duration?: number }
) {
  const offset = opts?.offset ?? -80;
  const duration = opts?.duration ?? 1.1;

  const el =
    typeof target === "string"
      ? (document.querySelector(target) as Element | null)
      : target;

  if (!el) return;

  const lenis = getLenisInstance();
  if (lenis) {
    // @ts-expect-error lenis types vary by version; scrollTo is stable.
    lenis.scrollTo(el, { offset, duration });
    return;
  }

  // Fallback: native smooth scroll
  const top =
    (el as HTMLElement).getBoundingClientRect().top + window.scrollY + offset;
  window.scrollTo({ top, behavior: "smooth" });
}

