export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  content: string[];
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
}

export interface NavLink {
  label: string;
  to: string;
}

export interface ImpactStat {
  label: string;
  value: number;
  suffix?: string;
}

export interface TimelineEntry {
  year: string;
  title: string;
  description: string;
  image: string;
}
