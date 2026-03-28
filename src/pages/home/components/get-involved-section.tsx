import { motion } from "framer-motion";
import { IconHandStop, IconHeartHandshake, IconUsers } from "@tabler/icons-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerReveal, fadeUp } from "@/components/ui/motion";

const INVOLVEMENT_OPTIONS = [
  {
    icon: IconHandStop,
    title: "Volunteer",
    description:
      "Join our team of dedicated volunteers and make a hands-on difference in the lives of those we serve.",
    cta: "Join Us",
    to: "/get-involved",
  },
  {
    icon: IconHeartHandshake,
    title: "Donate",
    description:
      "Your generous contributions help us provide essential resources, education, and support to vulnerable communities.",
    cta: "Give Now",
    to: "/get-involved",
  },
  {
    icon: IconUsers,
    title: "Partner",
    description:
      "Collaborate with us to expand our reach and create lasting impact through strategic partnerships.",
    cta: "Learn More",
    to: "/contact",
  },
];

/**
 * Call-to-action section with three ways to get involved.
 * Cards stagger in on scroll using framer-motion.
 */
export function GetInvolvedSection() {
  return (
    <section className="from-primary-900 via-primary-800 to-accent-900 bg-linear-to-br py-20">
      <Container>
        <Reveal className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Get Involved
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/80">
            There are many ways you can make a difference. Choose how you'd like to support our
            mission.
          </p>
          <div className="bg-secondary-400 mx-auto mt-4 h-1 w-16 rounded-full" />
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {INVOLVEMENT_OPTIONS.map((option) => (
            <motion.div key={option.title} variants={fadeUp}>
              <Card className="h-full p-8 text-center">
                <div className="bg-primary-50 dark:bg-primary-950 text-primary-600 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full">
                  <option.icon size={28} />
                </div>
                <h3 className="font-display text-text-heading mb-3 text-xl font-bold">
                  {option.title}
                </h3>
                <p className="text-text-muted mb-6 leading-relaxed">{option.description}</p>
                <Button variant="primary" size="sm" to={option.to}>
                  {option.cta}
                </Button>
              </Card>
            </motion.div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
