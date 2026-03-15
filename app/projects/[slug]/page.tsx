"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ZoomIn } from "lucide-react";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

import { projects } from "@/constants/projects";
import { getProjectTypeColor } from "@/lib/project";
import { staggerContainer, fadeInUpSlow } from "@/lib/animations";
import {
  ProjectSidebar,
  ProjectScreenshots,
  ProjectNext,
} from "@/components/page/project-detail";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug) || projects[0];

  const allImages = [
    project.image || "/placeholder.svg",
    ...(project.screenshots || []),
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleImageClick = (src: string | StaticImageData) => {
    const index = allImages.indexOf(src);
    setCurrentIndex(index !== -1 ? index : 0);
    setIsOpen(true);
  };

  const slides = allImages.map((img) => ({
    src: typeof img === "string" ? img : img.src,
  }));

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
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-mono">{project.title}</h1>
            {project.projectType && (
              <Chip
                color={getProjectTypeColor(project.projectType)}
                variant="shadow"
              >
                {project.projectType}
              </Chip>
            )}
          </div>
        </motion.div>

        <div className="space-y-8">
          {/* Hero Image */}
          <motion.div
            variants={fadeInUpSlow}
            className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group"
            onClick={() =>
              handleImageClick(project.image || "/placeholder.svg")
            }
          >
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
              <ZoomIn className="w-12 h-12 text-white drop-shadow-lg" />
            </div>
          </motion.div>

          {/* Project Info */}
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
            <motion.div variants={fadeInUpSlow} className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-default-500 leading-relaxed whitespace-pre-wrap">
                  {project.longDescription?.trim()}
                </p>
              </div>

              {project.features?.length > 0 && (
                <div>
                  <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                  <ul className="list-disc list-inside text-default-500 space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}

              {project.challenges?.length > 0 && (
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
              )}
            </motion.div>

            <ProjectSidebar project={project} />
          </div>

          <ProjectScreenshots
            screenshots={project.screenshots}
            onImageClick={handleImageClick}
          />

          {project.nextProject && (
            <ProjectNext nextProject={project.nextProject} />
          )}
        </div>
      </motion.div>

      {/* Image Viewer Lightbox */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={currentIndex}
        slides={slides}
        plugins={[Zoom]}
        controller={{ closeOnBackdropClick: true }}
        zoom={{
          scrollToZoom: true,
          maxZoomPixelRatio: 5,
        }}
      />
    </div>
  );
}
