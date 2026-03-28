interface GlitchTextProps {
  /** The text to display with the glitch effect. */
  text: string;
  className?: string;
  /** HTML tag to render. Defaults to "span". */
  as?: "h1" | "h2" | "h3" | "span" | "div";
}

/**
 * Renders text with a CSS-driven chromatic aberration / glitch effect.
 * Uses `data-text` attribute and pseudo-elements defined in `index.css`.
 *
 * The effect is automatically disabled when the user prefers reduced motion.
 *
 * @example
 * ```tsx
 * <GlitchText
 *   as="h1"
 *   text="GIFTED HEARTS"
 *   className="text-6xl font-extrabold text-white"
 * />
 * ```
 */
export function GlitchText({ text, className = "", as: Tag = "span" }: GlitchTextProps) {
  return (
    <Tag className={`glitch-text font-display ${className}`} data-text={text}>
      {text}
    </Tag>
  );
}
