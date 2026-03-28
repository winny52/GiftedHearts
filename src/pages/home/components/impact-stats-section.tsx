import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { StatCounter } from "@/components/ui/stat-counter";
import { StaggerReveal, fadeUp } from "@/components/ui/motion";
import { IMPACT_STATS } from "@/data/impact-stats";

/**
 * Horizontal row of animated impact statistics.
 * Numbers count up from 0 and stagger in on scroll.
 */
export function ImpactStatsSection() {
  return (
    <section className="bg-primary-50 dark:bg-primary-950 py-16">
      <Container>
        <StaggerReveal className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {IMPACT_STATS.map((stat) => (
            <motion.div key={stat.label} variants={fadeUp}>
              <StatCounter value={stat.value} label={stat.label} suffix={stat.suffix} />
            </motion.div>
          ))}
        </StaggerReveal>
      </Container>
    </section>
  );
}
