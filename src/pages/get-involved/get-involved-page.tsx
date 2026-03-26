import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import {
  IconHeartHandshake,
  IconSchool,
  IconHome,
  IconBrain,
  IconBook,
  IconSeedling,
} from "@tabler/icons-react";

const VOLUNTEER_OPPORTUNITIES = [
  { icon: IconHeartHandshake, label: "Community Outreach" },
  { icon: IconSchool, label: "Education & Mentoring" },
  { icon: IconHome, label: "Home Construction" },
  { icon: IconBrain, label: "Mental Health Support" },
  { icon: IconBook, label: "Gospel Outreach" },
  { icon: IconSeedling, label: "Environmental Projects" },
];

/**
 * "Get Involved" page with donation info and volunteer signup form.
 */
export function Component() {
  return (
    <>
      {/* Hero banner */}
      <section className="from-primary-900 to-accent-800 bg-linear-to-br py-20">
        <Container>
          <h1 className="font-display text-center text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Get Involved
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/80">
            Your support makes a world of difference
          </p>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-5">
            {/* Donate section */}
            <div className="lg:col-span-2">
              <Card
                hoverable={false}
                className="from-accent-50 bg-linear-to-br to-white p-8 dark:bg-zinc-800/50 dark:bg-none"
              >
                <SectionHeading title="Support Our Mission" align="left" />
                <p className="text-text-muted mb-6 leading-relaxed">
                  Your donations help us provide essential resources, education, and care to
                  vulnerable communities across Kenya. Every contribution, no matter the size,
                  creates a ripple of positive change.
                </p>
                <div className="space-y-4">
                  <Button variant="accent" className="w-full">
                    Donate Now
                  </Button>
                  <Button variant="outline" className="w-full" to="/contact">
                    Contact Us to Give
                  </Button>
                </div>
              </Card>
            </div>

            {/* Volunteer section */}
            <div className="lg:col-span-3">
              <SectionHeading title="Volunteer With Us" align="left" />
              <p className="text-text-muted mb-8 leading-relaxed">
                Join our team of dedicated volunteers and make a hands-on difference. Whether you
                have a few hours or a few days, your time and skills are invaluable to our mission.
              </p>

              {/* Opportunities grid */}
              <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-3">
                {VOLUNTEER_OPPORTUNITIES.map((opp) => (
                  <div
                    key={opp.label}
                    className="bg-surface-alt flex items-center gap-3 rounded-lg p-3"
                  >
                    <opp.icon size={20} className="text-primary-600 shrink-0" />
                    <span className="text-text text-sm font-medium">{opp.label}</span>
                  </div>
                ))}
              </div>

              {/* Volunteer form */}
              <form className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <Input type="text" placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                </div>
                <Textarea placeholder="Tell us how you'd like to help..." rows={4} />
                <Button variant="primary" type="submit">
                  Sign Up to Volunteer
                </Button>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
