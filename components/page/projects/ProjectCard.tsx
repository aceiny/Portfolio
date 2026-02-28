import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@heroui/button";
import { fadeInUp } from "@/lib/animations";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative bg-content1 rounded-xl overflow-hidden flex flex-col h-full"
    >
      <Link href={`/projects/${project.slug}`}>
        <div className="aspect-video relative cursor-pointer overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <Link href={`/projects/${project.slug}`}>
          <h2 className="text-xl font-semibold cursor-pointer hover:text-default-600 transition-colors">
            {project.title}
          </h2>
        </Link>
        <p className="text-default-500 mt-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 rounded-full text-sm bg-background/40"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-auto pt-6">
          {project.link && (
            <Button
              as={Link}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-foreground hover:bg-foreground/90 text-background"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              View Live
            </Button>
          )}
          {project.github && (
            <Button
              as={Link}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="flat"
            >
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
