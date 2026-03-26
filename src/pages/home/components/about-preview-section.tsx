import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/motion";

/**
 * Brief "About Us" preview section on the homepage.
 * Links to the full About page for more details.
 */
export function AboutPreviewSection() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <Reveal className="mx-auto max-w-3xl">
          <SectionHeading
            title="Serving with Love & Compassion"
            subtitle="Since 2018, we have been dedicated to uplifting vulnerable communities across Kenya through faith, service, and unwavering love."
          />
          <p className="text-text-muted text-center leading-relaxed">
            The Gifted Hearts Kenya Foundation was born from the hearts of four individuals united
            by compassion and faith. What started as a small act of kindness has grown into a
            movement that touches lives through orphanage visits, home construction, education
            sponsorship, mental health campaigns, and community outreach.
          </p>
          <div className="mt-8 text-center">
            <Button variant="primary" to="/about">
              Read Our Story
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
