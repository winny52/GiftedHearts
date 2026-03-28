import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Scrolls the window to the top whenever the route pathname changes.
 * Should be used once inside the root layout component.
 */
export function useScrollToTop(): void {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
}
