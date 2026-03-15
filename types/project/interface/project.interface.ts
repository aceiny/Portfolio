import { StaticImageData } from "next/image";
import { ProjectType } from "../enum/project-type.enum";

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
  projectType?: ProjectType;
}

export interface Project extends FeaturedProject {
  longDescription: string;
  date: string;
  link: string | null;
  github: string | null;
  features: string[];
  challenges: string[];
  screenshots: (string | StaticImageData)[];
  testimonial: ProjectTestimonial | null;
  nextProject: ProjectNextLink | null;
}
