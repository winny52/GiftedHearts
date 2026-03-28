import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const INPUT_BASE =
  "w-full px-4 py-3 rounded-[var(--radius-button)] border border-border bg-white dark:bg-zinc-900 dark:border-zinc-700 text-text placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors";

/**
 * Styled text input with dark mode support.
 */
export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(INPUT_BASE, className)} {...props} />;
}

/**
 * Styled textarea with dark mode support.
 */
export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(INPUT_BASE, "resize-none", className)} {...props} />;
}
