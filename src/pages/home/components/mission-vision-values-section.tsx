import { motion } from "framer-motion";
import { IconTarget, IconEye, IconHeart } from "@tabler/icons-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Reveal, StaggerReveal, fadeUp } from "@/components/ui/motion";

const ITEMS = [
  {
    icon: IconTarget,
    title: "Our Mission",
    description:
      "To serve vulnerable communities through compassionate outreach, providing essential resources, education, and spiritual guidance to those in need.",
    color: "text-primary-600",
    bg: "bg-primary-50 dark:bg-primary-950",
  },
  {
    icon: IconEye,
    title: "Our Vision",
    description:
      "A world where every individual, regardless of their circumstances, has access to the support and opportunities needed to live a dignified and fulfilling life.",
    color: "text-secondary-600",
    bg: "bg-secondary-50 dark:bg-secondary-950",
  },
  {
    icon: IconHeart,
    title: "Our Values",
    description:
      "Compassion, Integrity, Faith, Service, and Community — the pillars that guide everything we do and every life we touch.",
    color: "text-accent-600",
    bg: "bg-accent-50 dark:bg-accent-950",
  },
];

/**
 * Three-card section showcasing the foundation's mission, vision, and values.
 * Cards stagger in on scroll using framer-motion.
 */
export function MissionVisionValuesSection() {
  return (
    <section className="bg-surface-alt py-20">
      <Container>
        <Reveal>
          <SectionHeading title="What Drives Us" />
        </Reveal>
        <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {ITEMS.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <Card className="h-full p-8 text-center">
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-full ${item.bg} ${item.color} mb-6`}
                >
                  <item.icon size={28} />
                </div>
                <h3 className="font-display text-text-heading mb-3 text-xl font-bold">
                  {item.title}
                </h3>
                <p className="text-text-muted leading-relaxed">{item.description}</p>
              </Card>
            </motion.div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
