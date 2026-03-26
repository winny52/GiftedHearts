import { useState } from "react";
import { NavLink } from "react-router";
import { IconMenu2 } from "@tabler/icons-react";
import { NAV_LINKS } from "@/data/navigation";
import { Logo } from "./logo";
import { MobileMenu } from "./mobile-menu";
import { ThemeToggle } from "./theme-toggle";
import { Container } from "@/components/ui/container";

/**
 * Sticky top navigation bar with responsive mobile menu.
 * Uses NavLink for active state styling and the Syne display font for brand.
 */
export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-primary-900 sticky top-0 z-40 shadow-[var(--shadow-nav)]">
        <Container>
          <div className="flex h-16 items-center justify-between md:h-20">
            <Logo />

            {/* Desktop navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    [
                      "rounded-[var(--radius-button)] px-4 py-2 text-sm font-medium transition-all duration-300",
                      isActive
                        ? "text-secondary-400 bg-white/15"
                        : "text-white/80 hover:bg-white/10 hover:text-white",
                    ].join(" ")
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Mobile menu toggle */}
              <button
                className="hover:text-secondary-400 cursor-pointer text-white transition-colors lg:hidden"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
              >
                <IconMenu2 size={24} />
              </button>
            </div>
          </div>
        </Container>
      </nav>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
