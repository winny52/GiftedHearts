import {
  IconMail,
  IconPhone,
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandFacebook,
} from "@tabler/icons-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { SITE_NAME, CONTACT_EMAIL, CONTACT_PHONE, SOCIAL_LINKS } from "@/lib/constants";

const SOCIAL_ITEMS = [
  { icon: IconBrandInstagram, label: "Instagram", href: SOCIAL_LINKS.instagram },
  { icon: IconBrandTiktok, label: "TikTok", href: SOCIAL_LINKS.tiktok },
  { icon: IconBrandFacebook, label: "Facebook", href: SOCIAL_LINKS.facebook },
];

/**
 * Contact page with organization info, social links, and a contact form.
 */
export function Component() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-surface py-20">
        <Container>
          <h1 className="font-display text-text-heading text-center text-4xl font-extrabold tracking-tight md:text-5xl">
            Contact Us
          </h1>
          <p className="text-text-muted mx-auto mt-4 max-w-2xl text-center text-lg">
            We'd love to hear from you
          </p>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <SectionHeading title="Get In Touch" align="left" />
              <p className="text-text-muted mb-8 leading-relaxed">
                Whether you have questions about our work, want to partner with us, or simply want
                to say hello — we're here for you. Reach out through any of the channels below or
                fill out the form.
              </p>

              <Card hoverable={false} className="mb-6 p-6">
                <h3 className="text-text-heading mb-4 font-semibold">{SITE_NAME}</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <IconMail size={20} className="text-primary-600 shrink-0" />
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="text-text-muted hover:text-primary-600 transition-colors"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <IconPhone size={20} className="text-primary-600 shrink-0" />
                    <a
                      href={`tel:${CONTACT_PHONE.replace(/\s/g, "")}`}
                      className="text-text-muted hover:text-primary-600 transition-colors"
                    >
                      {CONTACT_PHONE}
                    </a>
                  </li>
                </ul>
              </Card>

              {/* Social links */}
              <h4 className="text-text-heading mb-4 font-semibold">Follow Us</h4>
              <div className="flex gap-4">
                {SOCIAL_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="bg-primary-50 dark:bg-primary-950 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-primary-900 flex h-12 w-12 items-center justify-center rounded-full transition-colors"
                  >
                    <item.icon size={22} />
                  </a>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div>
              <SectionHeading title="Send Us a Message" align="left" />
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" />
                <Input type="email" placeholder="Your Email" />
                <Textarea placeholder="Your Message" rows={6} />
                <Button variant="primary" type="submit">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
