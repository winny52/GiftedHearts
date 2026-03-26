import { Link } from "react-router";
import { motion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Reveal, StaggerReveal, fadeUp } from "@/components/ui/motion";
import { PROJECTS } from "@/data/projects";

/**
 * Grid preview of foundation projects on the homepage.
 * Shows the first 3 projects with staggered reveal animation.
 */
export function ProjectsPreviewSection() {
  const previewProjects = PROJECTS.slice(0, 3);

  return (
    <section className="bg-surface py-20">
      <Container>
        <Reveal>
          <SectionHeading
            title="Our Projects"
            subtitle="Making a difference through compassionate action in communities across Kenya."
          />
        </Reveal>

        <StaggerReveal className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {previewProjects.map((project) => (
            <motion.div key={project.slug} variants={fadeUp}>
              <Link to={`/projects/${project.slug}`}>
                <Card className="group h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-text-heading group-hover:text-primary-600 mb-2 text-lg font-bold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">{project.description}</p>
                    <span className="text-primary-600 mt-4 inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2">
                      Learn more <IconArrowRight size={16} />
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </StaggerReveal>

        <Reveal className="mt-12 text-center">
          <Button variant="outline" to="/projects">
            View All Projects
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
