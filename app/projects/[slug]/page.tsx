"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@heroui/button";
import { projects } from "@/constants/projects";
import { staggerContainer, fadeInUpSlow } from "@/lib/animations";
import {
  ProjectSidebar,
  ProjectScreenshots,
  ProjectNext,
} from "@/components/page/project-detail";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug) || projects[0];

  return (
    <div className="min-h-screen p-2 md:p-8">
      <motion.div
        className="w-full max-w-7xl mx-auto space-y-8"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.div variants={fadeInUpSlow} className="flex items-center gap-4">
          <Button as={Link} href="/projects" variant="light" isIconOnly>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-3xl font-mono">{project.title}</h1>
        </motion.div>

        <div className="space-y-8">
          {/* Hero Image */}
          <motion.div
            variants={fadeInUpSlow}
            className="relative aspect-video rounded-xl overflow-hidden"
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
            <motion.div variants={fadeInUpSlow} className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-default-500 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <ul className="list-disc list-inside text-default-500 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Technical Challenges
                </h2>
                <ul className="list-disc list-inside text-default-500 space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <ProjectSidebar project={project} />
          </div>

          <ProjectScreenshots screenshots={project.screenshots} />

          {project.nextProject && (
            <ProjectNext nextProject={project.nextProject} />
          )}
        </div>
      </motion.div>
    </div>
  );
}
