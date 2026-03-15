import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { fadeInUp } from "@/lib/animations";
import { Project } from "@/types/project";
import { getProjectTypeColor } from "@/lib/project";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div variants={fadeInUp} className="h-full flex">
      <Card
        radius="lg"
        className="bg-content1 rounded-2xl border-divider h-full hover:bg-content2 hover:border-default-400 transition-all duration-300 backdrop-blur-xs group flex flex-col overflow-hidden w-full max-w-full"
      >
        <CardHeader className="p-5 sm:p-6 pb-3 sm:pb-4 flex flex-col items-start w-full gap-4">
          <Link href={`/projects/${project.slug}`} className="w-full">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </Link>
          <Link
            href={`/projects/${project.slug}`}
            className="flex justify-between items-start gap-4 w-full"
          >
            <h2 className="text-xl sm:text-2xl font-semibold cursor-pointer group-hover:text-default-600 transition-colors truncate whitespace-normal line-clamp-2 text-left">
              {project.title}
            </h2>
            {project.projectType && (
              <Chip
                color={getProjectTypeColor(project.projectType)}
                variant="dot"
                size="sm"
                className="shrink-0"
              >
                {project.projectType}
              </Chip>
            )}
          </Link>
        </CardHeader>
        <CardBody className="flex-1 px-5 sm:px-6 pb-0 overflow-hidden w-full">
          <div className="max-h-[140px] overflow-y-auto custom-scrollbar pr-2">
            <p className="text-sm sm:text-base text-default-500 mb-4 sm:mb-5 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pb-2">
              {project.tech.map((tech) => (
                <Chip
                  key={tech}
                  variant="flat"
                  size="sm"
                  className="bg-default-100 text-default-600 hover:bg-default-200 transition-colors text-xs"
                >
                  {tech}
                </Chip>
              ))}
            </div>
          </div>
        </CardBody>
        <CardFooter className="mt-auto p-5 sm:p-6 pt-5 sm:pt-6 w-full flex gap-3 sm:gap-4">
          {project.link && (
            <Button
              as={Link}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              radius="md"
              className="bg-foreground hover:bg-foreground/90 text-background flex-1 font-medium"
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Live
            </Button>
          )}
          {project.github && (
            <Button
              as={Link}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="bordered"
              radius="md"
              className="flex-1 font-medium border-default-200 hover:bg-default-100"
            >
              <Github className="w-4 h-4 mr-2" />
              Code
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
