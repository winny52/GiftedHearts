import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, slideLeft, slideRight } from "@/components/ui/motion";
import { TIMELINE } from "@/data/timeline";
import logoImg from "@/assets/images/logo.jpg";
import type { TimelineEntry } from "@/lib/types";

/**
 * Individual timeline entry with image and text.
 * Alternates layout direction on desktop (even/odd).
 * Even entries slide in from the left, odd from the right.
 */
function TimelineItem({ entry, index }: { entry: TimelineEntry; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <Reveal
      variants={isEven ? slideLeft : slideRight}
      className={`flex flex-col items-center gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
    >
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="overflow-hidden rounded-2xl">
          <img
            src={entry.image}
            alt={`${entry.year} — ${entry.title}`}
            className="] w-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <span className="bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 mb-3 inline-block rounded-full px-3 py-1 text-sm font-bold">
          {entry.year}
        </span>
        <h3 className="font-display text-text-heading mb-3 text-2xl font-bold">{entry.title}</h3>
        <p className="text-text-muted leading-relaxed">{entry.description}</p>
      </div>
    </Reveal>
  );
}

/**
 * "Our Story" page with a timeline of the foundation's history.
 * Each milestone year is displayed with alternating slide-in animations.
 */
export function Component() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-surface py-20">
        <Container>
          <h1 className="font-display text-text-heading text-center text-4xl font-extrabold tracking-tight md:text-5xl">
            Our Story
          </h1>
          <p className="text-text-muted mx-auto mt-4 max-w-2xl text-center text-lg">
            A journey of love, faith, and service .
          </p>
        </Container>
      </section>

      {/* Intro with logo */}
      <section className="bg-surface py-16">
        <Container>
          <Reveal className="mx-auto flex max-w-4xl flex-col items-center gap-8 md:flex-row">
            <img
              src={logoImg}
              alt="Gifted Hearts Kenya Foundation logo"
              className="h-32 w-32 rounded-full object-cover shadow-lg"
            />
            <div>
              <SectionHeading title="How It All Began" align="left" />
              <p className="text-text-muted leading-relaxed">
                The Gifted Hearts Kenya Foundation was born from the hearts of four compassionate
                individuals who believed that love and service could transform communities. Here is
                our journey through the years.
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-surface-alt py-20">
        <Container>
          <div className="mx-auto max-w-5xl space-y-16">
            {TIMELINE.map((entry, index) => (
              <TimelineItem key={entry.year} entry={entry} index={index} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
