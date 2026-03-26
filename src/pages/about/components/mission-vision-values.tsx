import { motion } from "framer-motion";
import { StaggerReveal, fadeUp } from "@/components/ui/motion";

const VALUES = ["Compassion", "Integrity", "Faith", "Service", "Community"];

/**
 * Detailed mission, vision, and core values display for the About page.
 * Each block staggers in on scroll using framer-motion.
 */
export function MissionVisionValues() {
  return (
    <StaggerReveal className="space-y-16">
      {/* Mission */}
      <motion.div variants={fadeUp}>
        <h3 className="font-display text-text-heading mb-4 text-2xl font-bold">Our Mission</h3>
        <p className="text-text-muted leading-relaxed">
          To serve vulnerable communities through compassionate outreach, providing essential
          resources, education, and spiritual guidance to those in need. We strive to uplift every
          individual we encounter, empowering them to lead dignified and fulfilling lives.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div variants={fadeUp}>
        <h3 className="font-display text-text-heading mb-4 text-2xl font-bold">Our Vision</h3>
        <p className="text-text-muted leading-relaxed">
          A world where every individual, regardless of their circumstances, has access to the
          support and opportunities needed to live a dignified and fulfilling life. We envision
          communities united by love, compassion, and shared purpose.
        </p>
      </motion.div>

      {/* Core Values */}
      <motion.div variants={fadeUp}>
        <h3 className="font-display text-text-heading mb-4 text-2xl font-bold">Core Values</h3>
        <div className="flex flex-wrap gap-3">
          {VALUES.map((value) => (
            <span
              key={value}
              className="bg-primary-50 dark:bg-primary-950 text-primary-700 dark:text-primary-300 rounded-full px-4 py-2 text-sm font-medium"
            >
              {value}
            </span>
          ))}
        </div>
      </motion.div>
    </StaggerReveal>
  );
}
