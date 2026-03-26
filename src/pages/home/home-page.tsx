import { HeroSection } from "./components/hero-section";
import { ImpactStatsSection } from "./components/impact-stats-section";
import { AboutPreviewSection } from "./components/about-preview-section";
import { MissionVisionValuesSection } from "./components/mission-vision-values-section";
import { ProjectsPreviewSection } from "./components/projects-preview-section";
import { GetInvolvedSection } from "./components/get-involved-section";

/**
 * Homepage composed of multiple sections.
 * Each section is a self-contained component for maintainability.
 */
export function Component() {
  return (
    <>
      <HeroSection />
      <ImpactStatsSection />
      <AboutPreviewSection />
      <MissionVisionValuesSection />
      <ProjectsPreviewSection />
      <GetInvolvedSection />
    </>
  );
}
