import type { TimelineEntry } from "@/lib/types";

import timeline2019 from "@/assets/images/timeline-2019.jpg";
import timeline2020 from "@/assets/images/timeline-2020.jpg";
import timeline2021 from "@/assets/images/timeline-2021.jpg";
import timeline2022 from "@/assets/images/timeline-2022.jpg";
import image01 from "@/assets/images/image-01.jpg";
import image02 from "@/assets/images/image-02.jpg";
import image03 from "@/assets/images/image-03.jpg";

/**
 * Timeline entries for the "Our Story" page.
 * Each entry represents a milestone year in the foundation's history.
 */
export const TIMELINE: TimelineEntry[] = [
  {
    year: "2018",
    title: "The Beginning",
    description:
      "In December 2018, four compassionate individuals — Emmanuel Agwanda, Brigid Aroko, Steve Bradley, and Rickens Walter — came together with a shared vision to make a difference. United by their faith and a deep desire to serve vulnerable communities, they founded the Gifted Hearts Kenya Foundation.",
    image: image01,
  },
  {
    year: "2019",
    title: "First Steps",
    description:
      "The foundation carried out its first orphanage visit, bringing food, clothing, and joy to children in need. This marked the beginning of a journey of love and service that would touch hundreds of lives.",
    image: timeline2019,
  },
  {
    year: "2020",
    title: "Pandemic Response",
    description:
      "When COVID-19 struck, the foundation mobilized to provide emergency relief — distributing food, masks, and sanitizers to vulnerable families across multiple communities.",
    image: timeline2020,
  },
  {
    year: "2021",
    title: "Building Homes & Hope",
    description:
      "The foundation launched its home construction program, building safe, dignified homes for widows and vulnerable families. Education sponsorship programs also expanded significantly.",
    image: timeline2021,
  },
  {
    year: "2022",
    title: "Mental Health Awareness",
    description:
      "Recognizing the importance of emotional well-being, the foundation launched mental health campaigns offering free counseling, workshops, and community outreach events.",
    image: timeline2022,
  },
  {
    year: "2023",
    title: "Growing Impact",
    description:
      "The foundation expanded its reach, serving more communities with youth mentorship programs, environmental conservation initiatives, and expanded education sponsorships.",
    image: image02,
  },
  {
    year: "2024",
    title: "Stronger Together",
    description:
      "With a growing network of volunteers and donors, the foundation deepened its impact across all program areas — continuing to touch lives with love, compassion, and hope.",
    image: image03,
  },
];
