"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { TechStack } from "@/components/tech-stack";
import { MusicPlayer } from "@/components/music-player";
import { portfolioInfo } from "@/constants/data";
import { featuredProjects } from "@/constants/projects";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const scaleUp = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.23, 1, 0.32, 1],
    },
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen p-1 md:p-8">
      <motion.div
        className="space-y-24"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Hero Section */}
        <motion.section
          className="min-h-[80vh] flex flex-col justify-center"
          variants={fadeInUp}
        >
          <div className="space-y-8 ">
            <motion.h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Crafting Digital{" "}
              <motion.span
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 inline-block"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              >
                Solutions
              </motion.span>
              <br />
              with Code
            </motion.h1>
            <motion.p className="text-xl text-gray-400 max-w-2xl">
              {portfolioInfo.portfolioHomeHeaderDescription}
            </motion.p>
            <motion.div className="flex gap-4">
              <Button
                size="lg"
                className="rounded-full group relative overflow-hidden bg-white hover:bg-gray-100 text-black"
                asChild
              >
                <Link href="/projects">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.2 }}
                  />
                  <span className="relative font-medium">View Projects</span>
                </Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-full "
                asChild
              >
                <Link href="/about">About Me</Link>
              </Button>
            </motion.div>
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section className="space-y-8" variants={fadeInUp}>
          <div className="flex justify-between items-center">
            <motion.h2 className="text-2xl font-mono">Featured Work</motion.h2>
            <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                className="text-white hover:text-black"
                asChild
              >
                <Link href="/projects" className="flex items-center gap-2">
                  View All <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <Link key={project.title} href={`/projects/${project.slug}`}>
                <motion.div
                  variants={scaleUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={index}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative aspect-video bg-gray-900 rounded-xl overflow-hidden cursor-pointer"
                >
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-gray-300 mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-black/50 rounded-full text-xs backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Technical Expertise */}
        <motion.section variants={fadeInUp} viewport={{ once: true }}>
          <TechStack />
        </motion.section>

        {/* Call to Action */}
        <motion.section
          variants={fadeInUp}
          className="text-center space-y-6 py-12"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl font-bold">
            Ready to Start a Project?
          </motion.h2>
          <motion.p className="text-gray-400 max-w-xl mx-auto">
            Let's collaborate to bring your ideas to life with cutting-edge
            technology and elegant design.
          </motion.p>
          <motion.div
            variants={scaleUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="rounded-full group relative overflow-hidden bg-white hover:bg-gray-100 text-black"
              asChild
            >
              <Link href={portfolioInfo.getInTouch}>
                <motion.span
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.2 }}
                />
                <span className="relative font-medium">Get in Touch</span>
              </Link>
            </Button>
          </motion.div>
        </motion.section>
      </motion.div>

      <MusicPlayer />
    </div>
  );
}
