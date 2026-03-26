import { Link } from "react-router";
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandFacebook,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { NAV_LINKS } from "@/data/navigation";
import { SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from "@/lib/constants";
import { Container } from "@/components/ui/container";

/**
 * Site footer with navigation links, contact info, and social media links.
 * Divided into three columns on desktop, stacked on mobile.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white/80">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Brand & mission */}
          <div>
            <h3 className="font-display mb-4 text-xl font-bold text-white">{SITE_NAME}</h3>
            <p className="text-sm leading-relaxed">
              Touching the Untouched with Love, Spreading Hope. We are a faith-based organization
              dedicated to serving vulnerable communities across Kenya.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-secondary-400 text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & socials */}
          <div>
            <h4 className="mb-4 font-semibold text-white">Get In Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <IconMail size={16} />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-secondary-400 transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <IconPhone size={16} />
                <a
                  href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                  className="hover:text-secondary-400 transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
            </ul>

            {/* Social icons */}
            <div className="mt-6 flex gap-4">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-secondary-400 transition-colors"
              >
                <IconBrandInstagram size={22} />
              </a>
              <a
                href={SOCIAL_LINKS.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="hover:text-secondary-400 transition-colors"
              >
                <IconBrandTiktok size={22} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-secondary-400 transition-colors"
              >
                <IconBrandFacebook size={22} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/50">
          &copy; {currentYear} {SITE_NAME}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
