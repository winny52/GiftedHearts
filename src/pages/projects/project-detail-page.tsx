import { useParams, Link } from "react-router";
import { IconArrowLeft } from "@tabler/icons-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/data/projects";

/**
 * Dynamic project detail page.
 * Renders project content based on the `:slug` URL parameter.
 * Falls back to a "not found" state if the slug doesn't match any project.
 */
export function Component() {
  const { slug } = useParams<{ slug: string }>();
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="py-20">
        <Container className="text-center">
          <h1 className="font-display text-text-heading mb-4 text-3xl font-bold">
            Project Not Found
          </h1>
          <p className="text-text-muted mb-8">The project you're looking for doesn't exist.</p>
          <Button to="/projects">Back to Projects</Button>
        </Container>
      </section>
    );
  }

  return (
    <>
      {/* Hero with project image */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <img
          src={project.image}
          alt={project.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="from-primary-900/80 to-primary-900/30 absolute inset-0 bg-gradient-to-t" />
        <div className="absolute right-0 bottom-0 left-0 p-8">
          <Container>
            <h1 className="font-display text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              {project.title}
            </h1>
          </Container>
        </div>
      </section>

      {/* Content */}
      <section className="bg-surface py-16">
        <Container>
          <Link
            to="/projects"
            className="text-primary-600 hover:text-primary-700 mb-8 inline-flex items-center gap-2 font-medium transition-colors"
          >
            <IconArrowLeft size={18} />
            Back to Projects
          </Link>

          <div className="max-w-3xl">
            {project.content.map((paragraph, i) => (
              <p key={i} className="text-text-muted mb-6 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12">
            <Button variant="accent" to="/get-involved">
              Support This Project
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
