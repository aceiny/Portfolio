"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ExternalLink,
  Github,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug) || projects[0];

  return (
    <div className="min-h-screen p-8">
      <motion.div
        className="max-w-4xl mx-auto space-y-8"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.div variants={item} className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/projects">
              <ChevronLeft className="w-6 h-6" />
            </Link>
          </Button>
          <h1 className="text-3xl font-mono">{project.title}</h1>
        </motion.div>

        <div className="space-y-8">
          {/* Hero Image */}
          <motion.div
            variants={item}
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
            <motion.div variants={item} className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-2">Overview</h2>
                <p className="text-gray-400 leading-relaxed">
                  {project.longDescription}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">
                  Technical Challenges
                </h2>
                <ul className="list-disc list-inside text-gray-400 space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-6">
              <div className="bg-gray-900/50 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {project.date}
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-sm bg-gray-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Button className="w-full" asChild>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.link}
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Demo
                    </Link>
                  </Button>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={project.github}
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Source Code
                    </Link>
                  </Button>
                </div>
              </div>

              {project.testimonial && (
                <div className="bg-gray-900/50 rounded-xl p-6 space-y-4">
                  <h3 className="text-xl font-semibold">Client Feedback</h3>
                  <blockquote className="text-gray-400 italic">
                    "{project.testimonial.quote}"
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
                      <p className="text-sm text-gray-400">
                        {project.testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Screenshots */}
          <motion.div variants={item}>
            <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.screenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="relative aspect-video rounded-lg overflow-hidden"
                >
                  <Image
                    src={screenshot || "/placeholder.svg"}
                    alt={`Screenshot ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Next Project */}
          {project.nextProject && (
            <motion.div
              variants={item}
              className="mt-16 pt-8 border-t border-gray-800"
            >
              <Link
                href={`/projects/${project.nextProject.slug}`}
                className="group block bg-gray-900/50 rounded-xl p-6 hover:bg-gray-900/75 transition-colors"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-400">Next Project</p>
                    <h3 className="text-xl font-semibold mt-1">
                      {project.nextProject.title}
                    </h3>
                  </div>
                  <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
