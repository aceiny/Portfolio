import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar } from "lucide-react";
import { Button } from "@heroui/button";
import { fadeInUp } from "@/lib/animations";
import { Project } from "@/types/project";

interface ProjectSidebarProps {
  project: Pick<Project, "date" | "tech" | "link" | "github" | "testimonial">;
}

export default function ProjectSidebar({ project }: ProjectSidebarProps) {
  return (
    <motion.div variants={fadeInUp} className="space-y-6">
      <div className="bg-content1 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-2 text-default-500">
          <Calendar className="w-4 h-4" />
          {project.date}
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Technologies Used</h3>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-sm bg-content2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Button
            as={Link}
            href={project.link}
            target="_blank"
            variant="ghost"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View Live Demo
          </Button>
          <Button
            as={Link}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            variant="solid"
            className="w-full flex items-center gap-2"
          >
            <Github className="w-4 h-4" />
            View Source Code
          </Button>
        </div>
      </div>

      {project.testimonial && (
        <div className="bg-content1 rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-semibold">Client Feedback</h3>
          <blockquote className="text-default-500 italic">
            &ldquo;{project.testimonial.quote}&rdquo;
          </blockquote>
          <div className="flex items-center gap-3">
            <Image
              src={project.testimonial.avatar || "/placeholder.svg"}
              alt={project.testimonial.name}
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-medium">{project.testimonial.name}</p>
              <p className="text-sm text-default-500">
                {project.testimonial.role}
              </p>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
