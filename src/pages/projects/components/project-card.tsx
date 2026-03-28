import { Link } from "react-router";
import { IconArrowRight } from "@tabler/icons-react";
import { Card } from "@/components/ui/card";
import type { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
}

/**
 * Card component for displaying a project in the grid.
 * Shows image, title, description, and a "Learn more" link.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
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
  );
}
