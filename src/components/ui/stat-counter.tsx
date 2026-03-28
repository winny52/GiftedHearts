import { useEffect, useState } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface StatCounterProps {
  /** The target number to count up to. */
  value: number;
  /** Text label displayed below the number. */
  label: string;
  /** Optional suffix appended to the number (e.g. "+"). */
  suffix?: string;
  /** Animation duration in milliseconds. Defaults to 2000. */
  duration?: number;
}

/**
 * Animated counter that counts up from 0 to the target value
 * when the element scrolls into view.
 */
export function StatCounter({ value, label, suffix = "", duration = 2000 }: StatCounterProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.3,
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-primary-600 text-4xl font-extrabold md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="text-text-muted mt-2 font-medium">{label}</div>
    </div>
  );
}
