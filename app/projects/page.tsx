"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projects } from "@/constants/projects";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function ProjectsPage() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white p-1 md:p-6"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div className="flex items-center gap-4" variants={item}>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ChevronLeft className="w-6 h-6" />
            </Link>
          </Button>
          <h1 className="text-3xl font-mono">Projects</h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={item}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
              className="group relative bg-gray-900 rounded-xl overflow-hidden"
            >
              <Link href={`/projects/${project.slug}`} className="block">
                <div className="aspect-video relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <motion.div
                  className="p-6 space-y-4"
                  initial={{ opacity: 0.8, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                >
                  <h2 className="text-xl font-semibold">{project.title}</h2>
                  <p className="text-gray-400">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-full text-sm bg-black/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link href={project.link}>
                      <Button className="bg-white hover:bg-gray-100 text-black">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </Button>
                    </Link>
                    <Link href={project.github}>
                      <Button variant="secondary">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
