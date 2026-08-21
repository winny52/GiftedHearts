import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { MissionVisionValues } from "./components/mission-vision-values";
import image01 from "@/assets/images/image-01.jpg";
import image02 from "@/assets/images/image-02.jpg";
import image03 from "@/assets/images/image-03.jpg";
import image04 from "@/assets/images/image-04.jpg";
import image05 from "@/assets/images/image-05.jpg";

const GALLERY_IMAGES = [image01, image02, image03, image04, image05];

/**
 * Full "About Us" page with introduction, image gallery,
 * and detailed mission/vision/values section.
 */
export function Component() {
  return (
    <>
      {/* Hero banner */}
      <section className="bg-surface py-10">
        <Container>
          <h1 className="font-display text-text-heading text-center text-4xl font-extrabold tracking-tight md:text-5xl">
            About Us
          </h1>
          <p className="text-text-muted mx-auto mt-4 max-w-2xl text-center text-lg">
            Touching the Untouched with Love, Spreading Hope
          </p>
        </Container>
      </section>

      {/* Introduction */}
      <section className="bg-surface py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Who We Are" />
            <p className="text-text-muted mb-6 leading-relaxed">
              The Gifted Hearts Kenya Foundation is a faith-based organization founded in December
              2018 by Emmanuel Agwanda, Brigid Aroko, Steve Bradley, and Rickens Walter. United by
              their Christian faith and a deep desire to serve, they created an organization
              dedicated to reaching the most vulnerable members of society.
            </p>
            <p className="text-text-muted leading-relaxed">
              What began as small acts of kindness has grown into a movement that touches hundreds
              of lives through orphanage visits, home construction for widows, education
              sponsorship, mental health campaigns, and community outreach across Kenya.
            </p>
          </div>
        </Container>
      </section>

      {/* Image gallery */}
      <section className="bg-surface-alt py-16">
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {GALLERY_IMAGES.map((img, i) => (
              <div key={i} className="aspect-square overflow-hidden">
                <img
                  src={img}
                  alt={`Foundation activity ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-surface py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <MissionVisionValues />
          </div>
        </Container>
      </section>
    </>
  );
}
