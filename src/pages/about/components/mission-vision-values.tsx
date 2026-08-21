// import { motion } from "framer-motion";
// import { StaggerReveal, fadeUp } from "@/components/ui/motion";

// /**
//  * Detailed mission, vision, and core values display for the About page.
//  * Each block staggers in on scroll using framer-motion.
//  */
// export function MissionVisionValues() {
//   return (
//     <StaggerReveal className="space-y-16">
//       {/* Mission */}
//       <motion.div variants={fadeUp}>
//         <h3 className="font-display text-text-heading mb-4 text-2xl font-bold">Our Mission</h3>
//         <p className="text-text-muted leading-relaxed">
//           To serve vulnerable communities through compassionate outreach, providing essential
//           resources, education, and spiritual guidance to those in need. We strive to uplift every
//           individual we encounter, empowering them to lead dignified and fulfilling lives.
//         </p>
//       </motion.div>

//       {/* Vision */}
//       <motion.div variants={fadeUp}>
//         <h3 className="font-display text-text-heading mb-4 text-2xl font-bold">Our Vision</h3>
//         <p className="text-text-muted leading-relaxed">
//           A world where every individual, regardless of their circumstances, has access to the
//           support and opportunities needed to live a dignified and fulfilling life. We envision
//           communities united by love, compassion, and shared purpose.
//         </p>
//       </motion.div>

//       {/* Core Values */}
//      {/* Core Values */}
// {/* Core Values */}
// <motion.div variants={fadeUp}>
//   <h3 className="font-display text-text-heading mb-6 text-2xl font-bold">
//     Core Values
//   </h3>

//   <div className="grid gap-5 sm:grid-cols-2">
//     {[
//       {
//         title: "Compassion",
//         description:
//           "We lead with empathy, always seeking to understand the struggles of others before taking action.",
//         color: "bg-accent-50 text-accent-500",
//       },
//       {
//         title: "Integrity",
//         description:
//           "Honesty and transparency form the backbone of every action we take, earning the trust of those we serve.",
//         color: "bg-primary-50 text-primary-600",
//       },
//       {
//         title: "Faith",
//         description:
//           "Our work is deeply rooted in the belief that faith moves mountains, and with faith, we can achieve the impossible.",
//         color: "bg-secondary-50 text-secondary-600",
//       },
//       {
//         title: "Service",
//         description:
//           "We put service above self, going beyond the call of duty to uplift communities and change lives for the better.",
//         color: "bg-accent-50 text-accent-500",
//       },
//       {
//         title: "Community",
//         description:
//           "We believe in the power of connection and unity, knowing that together, we are stronger than we are alone.",
//         color: "bg-primary-50 text-primary-600",
//       },
//     ].map((value) => (
//       <motion.div
//         key={value.title}
//         className="group ] border border-border bg-surface-alt p-5 transition-all duration-300 hover:-translate-y-1 ]"
//         whileHover={{ y: -3 }}
//       >
//         <div
//           className={`mb-4 inline-flex rounded-full px-3 py-1 text-xs font-semibold ${value.color}`}
//         >
//           {value.title}
//         </div>

//         <p className="text-text-muted text-sm leading-relaxed">
//           {value.description}
//         </p>
//       </motion.div>
//     ))}
//   </div>
// </motion.div>
//     </StaggerReveal>
//   );
// }
import { motion } from "framer-motion";
import { StaggerReveal, fadeUp } from "@/components/ui/motion";

/**
 * Detailed mission, vision, and core values display for the About page.
 * Each block staggers in on scroll using framer-motion.
 */
export function MissionVisionValues() {
  const values = [
    {
      title: "Compassion",
      description:
        "We lead with empathy, always seeking to understand the struggles of others before taking action.",
      color: "bg-accent-50 text-accent-500",
    },
    {
      title: "Integrity",
      description:
        "Honesty and transparency form the backbone of every action we take, earning the trust of those we serve.",
      color: "bg-primary-50 text-primary-600",
    },
    {
      title: "Faith",
      description:
        "Our work is deeply rooted in the belief that faith moves mountains, and with faith, we can achieve the impossible.",
      color: "bg-secondary-50 text-secondary-600",
    },
    {
      title: "Service",
      description:
        "We put service above self, going beyond the call of duty to uplift communities and change lives for the better.",
      color: "bg-accent-50 text-accent-500",
    },
    {
      title: "Community",
      description:
        "We believe in the power of connection and unity, knowing that together, we are stronger than we are alone.",
      color: "bg-primary-50 text-primary-600",
    },
  ];

  return (
    <StaggerReveal className="space-y-20">
      {/* Mission */}
      <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
        <h3 className="font-display text-text-heading mb-5 text-3xl font-bold md:text-4xl">
          Our Mission
        </h3>

        <div className="bg-accent-400 mx-auto mb-6 h-1 w-12 rounded-full" />

        <p className="text-text-muted text-base leading-relaxed md:text-lg">
          To serve vulnerable communities through compassionate outreach, providing essential
          resources, education, and spiritual guidance to those in need. We strive to uplift every
          individual we encounter, empowering them to lead dignified and fulfilling lives.
        </p>
      </motion.div>

      {/* Vision */}
      <motion.div variants={fadeUp} className="mx-auto max-w-3xl text-center">
        <h3 className="font-display text-text-heading mb-5 text-3xl font-bold md:text-4xl">
          Our Vision
        </h3>

        <div className="bg-primary-400 mx-auto mb-6 h-1 w-12 rounded-full" />

        <p className="text-text-muted text-base leading-relaxed md:text-lg">
          A world where every individual, regardless of their circumstances, has access to the
          support and opportunities needed to live a dignified and fulfilling life. We envision
          communities united by love, compassion, and shared purpose.
        </p>
      </motion.div>

      {/* Core Values */}
      <motion.div variants={fadeUp}>
        <div className="mb-10 text-center">
          <h3 className="font-display text-text-heading text-3xl font-bold md:text-4xl">
            Our Core Values
          </h3>

          <div className="bg-secondary-400 mx-auto mt-5 h-1 w-12 rounded-full" />

          <p className="text-text-muted mx-auto mt-5 max-w-2xl">
            The principles that guide how we serve, connect, and create meaningful change.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <motion.div
              key={value.title}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="group border-border bg-surface-alt border p-7 text-center transition-shadow duration-300"
            >
              <div
                className={`mx-auto mb-5 inline-flex rounded-full px-4 py-2 text-sm font-semibold ${value.color}`}
              >
                {value.title}
              </div>

              <p className="text-text-muted text-sm leading-relaxed md:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </StaggerReveal>
  );
}
