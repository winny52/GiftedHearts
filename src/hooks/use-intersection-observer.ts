import { useEffect, useRef, useState } from "react";

interface UseIntersectionObserverOptions {
  /** Intersection threshold (0-1). Defaults to 0.1. */
  threshold?: number;
  /** Root margin string. Defaults to "0px". */
  rootMargin?: string;
  /** If true, only triggers once. Defaults to true. */
  triggerOnce?: boolean;
}

/**
 * Observes when an element enters the viewport.
 * Useful for scroll-triggered animations like fade-ins and slide-ups.
 *
 * @example
 * ```tsx
 * const { ref, isVisible } = useIntersectionObserver();
 * return (
 *   <div ref={ref} className={isVisible ? "opacity-100" : "opacity-0"}>
 *     Content
 *   </div>
 * );
 * ```
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {},
) {
  const { threshold = 0.1, rootMargin = "0px", triggerOnce = true } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}
