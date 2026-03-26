import { Link } from "react-router";

/**
 * Foundation logo/brand mark linking to the homepage.
 * Uses the Syne display font for a distinctive look.
 */
export function Logo() {
  return (
    <Link to="/" className="group flex items-center gap-2">
      <span className="font-display group-hover:text-secondary-400 text-xl font-bold text-white transition-colors duration-300 md:text-2xl">
        Gifted Hearts
      </span>
    </Link>
  );
}
