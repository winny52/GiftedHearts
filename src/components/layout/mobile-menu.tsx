import { NavLink } from "react-router";
import { IconX } from "@tabler/icons-react";
import { NAV_LINKS } from "@/data/navigation";

interface MobileMenuProps {
  /** Whether the menu is currently open. */
  isOpen: boolean;
  /** Callback to close the menu. */
  onClose: () => void;
}

/**
 * Full-screen mobile navigation overlay.
 * Slides in from the right and closes on link click or X button.
 */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <div
      className={[
        "bg-primary-900/95 fixed inset-0 z-50 backdrop-blur-sm transition-transform duration-300 lg:hidden",
        isOpen ? "translate-x-0" : "translate-x-full",
      ].join(" ")}
    >
      <div className="flex justify-end p-6">
        <button
          onClick={onClose}
          className="hover:text-secondary-400 cursor-pointer text-white transition-colors"
          aria-label="Close menu"
        >
          <IconX size={28} />
        </button>
      </div>

      <nav className="mt-12 flex flex-col items-center gap-8">
        {NAV_LINKS.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            onClick={onClose}
            className={({ isActive }) =>
              [
                "font-display text-2xl font-semibold transition-colors duration-300",
                isActive ? "text-secondary-400" : "hover:text-secondary-400 text-white",
              ].join(" ")
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
