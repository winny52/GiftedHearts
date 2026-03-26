import type { ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Card variants defined with class-variance-authority.
 */
const cardVariants = cva(
  "bg-white dark:bg-zinc-900 rounded-[var(--radius-card)] shadow-[var(--shadow-card)] overflow-hidden",
  {
    variants: {
      hoverable: {
        true: "transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1",
        false: "",
      },
    },
    defaultVariants: {
      hoverable: true,
    },
  },
);

interface CardProps extends VariantProps<typeof cardVariants> {
  children: ReactNode;
  className?: string;
}

/**
 * A styled card container with optional hover shadow elevation.
 * Used for project cards, feature cards, and content blocks.
 *
 * @example
 * ```tsx
 * <Card hoverable className="p-6">Content here</Card>
 * <Card hoverable={false}>Static card</Card>
 * ```
 */
export function Card({ children, className, hoverable }: CardProps) {
  return <div className={cn(cardVariants({ hoverable }), className)}>{children}</div>;
}
