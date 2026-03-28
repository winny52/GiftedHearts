import { IconSun, IconMoon } from "@tabler/icons-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

/**
 * Light/dark theme toggle button.
 * Shows a sun icon in dark mode (click to go light) and a moon icon
 * in light mode (click to go dark).
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "cursor-pointer rounded-(--radius-button) p-2 text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white",
        className,
      )}
    >
      {isDark ? <IconSun size={20} /> : <IconMoon size={20} />}
    </button>
  );
}
