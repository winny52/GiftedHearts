import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges class names using clsx and tailwind-merge.
 * Handles conditional classes and resolves Tailwind CSS conflicts.
 *
 * @example
 * ```ts
 * cn("px-4 py-2", isActive && "bg-primary-600", className)
 * // Properly merges and deduplicates Tailwind classes
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
