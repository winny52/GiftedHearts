import type { NavLink } from "@/lib/types";

/**
 * Primary navigation links used in the navbar and footer.
 * Each link maps to a top-level route defined in the router.
 */
export const NAV_LINKS: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Story", to: "/our-story" },
  { label: "Projects", to: "/projects" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Contact", to: "/contact" },
];
