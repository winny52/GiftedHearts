import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "winnie-theme";

/**
 * Reads the initial theme from localStorage, falling back to OS preference.
 */
function getInitialTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored) return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/**
 * Applies or removes the `.dark` class on `<html>`.
 */
function applyTheme(theme: Theme) {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

/**
 * Hook for toggling between light and dark themes.
 *
 * Persists the user's choice to localStorage and syncs the `.dark` class
 * on the `<html>` element. Initial value is read from localStorage,
 * falling back to the OS preference.
 *
 * @example
 * ```tsx
 * const { theme, toggle } = useTheme();
 * ```
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function setTheme(next: Theme) {
    setThemeState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  function toggle() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return { theme, isDark: theme === "dark", setTheme, toggle };
}
