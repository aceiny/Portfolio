import { StaticImageData } from "next/image";

export interface ProjectTestimonial {
  quote: string;
  name: string;
  role: string;
  avatar: string | StaticImageData;
}

export interface ProjectNextLink {
  slug: string;
  title: string;
}

export interface FeaturedProject {
  title: string;
  slug: string;
  description: string;
  tech: string[];
  image: StaticImageData | null;
}

export interface Project extends FeaturedProject {
  longDescription: string;
  date: string;
  link: string;
  github: string;
  features: string[];
  challenges: string[];
  screenshots: (string | StaticImageData)[];
  testimonial: ProjectTestimonial;
  nextProject: ProjectNextLink;
}
