interface SectionHeadingProps {
  /** The main heading text. */
  title: string;
  /** Optional subtitle displayed below the heading. */
  subtitle?: string;
  /** Text alignment. Defaults to "center". */
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent section heading with optional subtitle.
 * Uses the display font (Syne) for the title.
 */
export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <div
      className={["mb-12", align === "center" ? "text-center" : "text-left", className].join(" ")}
    >
      <h2 className="font-display text-text-heading text-3xl font-bold tracking-tight md:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="text-text-muted mx-auto mt-4 max-w-2xl text-lg">{subtitle}</p>}
      <div
        className={[
          "bg-accent-500 mt-4 h-1 w-16 rounded-full",
          align === "center" ? "mx-auto" : "",
        ].join(" ")}
      />
    </div>
  );
}
