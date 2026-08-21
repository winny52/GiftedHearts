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
      <nav className="bg-accent-300 ] sticky top-0 z-40">
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
                      "px-4 py-2 text-sm font-medium transition-all duration-300",
                      isActive ? "bg-white/15 text-black" : "text-black",
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
                className="hover:text-primary-400 cursor-pointer text-black transition-colors lg:hidden"
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
