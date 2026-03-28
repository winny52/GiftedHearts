import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "./components/project-card";
import { PROJECTS } from "@/data/projects";

/**
 * Projects listing page showing all foundation projects in a responsive grid.
 */
export function Component() {
  return (
    <>
      {/* Hero banner */}
      <section className="from-primary-900 to-primary-700 bg-linear-to-br py-20">
        <Container>
          <h1 className="font-display text-center text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Our Projects
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-white/80">
            Making a lasting impact through compassionate action
          </p>
        </Container>
      </section>

      {/* Projects grid */}
      <section className="bg-surface py-20">
        <Container>
          <SectionHeading
            title="What We Do"
            subtitle="Each project represents our commitment to serving vulnerable communities with love and dedication."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
