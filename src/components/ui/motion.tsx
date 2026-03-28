/* eslint-disable react-refresh/only-export-components */
import { motion, type Variants, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/* ==========================================
   Shared animation variants
   ========================================== */

/** Fade up from below — the default reveal animation. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/** Fade in without vertical movement. */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/** Scale up from slightly smaller. */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

/** Slide in from the left. */
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

/** Slide in from the right. */
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

/** Stagger container — wraps children that each animate individually. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

/* ==========================================
   Reusable motion wrapper components
   ========================================== */

interface MotionSectionProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  /** Animation variant to use. Defaults to fadeUp. */
  variants?: Variants;
  /** Viewport trigger amount (0–1). Defaults to 0.15. */
  viewportAmount?: number;
}

/**
 * Scroll-triggered reveal wrapper.
 * Fades in when the element enters the viewport.
 * Uses `whileInView` so it only triggers once.
 *
 * @example
 * ```tsx
 * <Reveal>
 *   <h2>This fades up on scroll</h2>
 * </Reveal>
 *
 * <Reveal variants={slideLeft}>
 *   <p>Slides in from left</p>
 * </Reveal>
 * ```
 */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  viewportAmount = 0.15,
  ...props
}: MotionSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      variants={variants}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container that reveals children one by one.
 * Each direct child should use a `motion` element with a variant.
 *
 * @example
 * ```tsx
 * <StaggerReveal className="grid grid-cols-3 gap-8">
 *   {items.map(item => (
 *     <motion.div key={item.id} variants={fadeUp}>
 *       <Card>{item.title}</Card>
 *     </motion.div>
 *   ))}
 * </StaggerReveal>
 * ```
 */
export function StaggerReveal({
  children,
  className,
  viewportAmount = 0.1,
  ...props
}: Omit<MotionSectionProps, "variants">) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      variants={staggerContainer}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  /** Scale amount on hover. Defaults to 1.03. */
  scale?: number;
}

/**
 * Wrapper that subtly scales up on hover with spring physics.
 *
 * @example
 * ```tsx
 * <HoverScale>
 *   <Card>Hoverable card</Card>
 * </HoverScale>
 * ```
 */
export function HoverScale({ children, className, scale = 1.03 }: HoverScaleProps) {
  return (
    <motion.div
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn("will-change-transform", className)}
    >
      {children}
    </motion.div>
  );
}
