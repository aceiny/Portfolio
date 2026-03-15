import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import { fadeInUp } from "@/lib/animations";
import { featuredProjects } from "@/constants/projects";
import { getProjectTypeColor } from "@/lib/project";

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function FeaturedProjects() {
  return (
    <motion.section className="space-y-8" variants={fadeInUp}>
      <div className="flex justify-between items-center">
        <motion.h2 className="text-2xl font-mono">Featured Work</motion.h2>
        <motion.div whileHover={{ x: 3 }}>
          <Button
            as={Link}
            href="/projects"
            variant="light"
            className="flex items-center gap-2"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProjects.map((project, index) => (
          <Link key={project.title} href={`/projects/${project.slug}`}>
            <motion.div
              variants={itemVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="group relative aspect-video bg-content1 rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:bg-black/60 group-hover:backdrop-blur-[2px] z-0" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10 overflow-hidden">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-400 ease-out flex flex-col gap-2">
                  <div className="flex justify-between items-start gap-4">
                    <h3 className="text-xl font-bold text-white drop-shadow-md">
                      {project.title}
                    </h3>
                    {project.projectType && (
                      <Chip
                        color={getProjectTypeColor(project.projectType)}
                        variant="flat"
                        size="sm"
                        className="shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        {project.projectType}
                      </Chip>
                    )}
                  </div>

                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-400 ease-out">
                    <div className="overflow-hidden">
                      <div className="max-h-[100px] overflow-y-auto custom-scrollbar flex flex-col gap-3 pb-1 mt-1 pr-1">
                        <p className="text-default-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                          {project.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 bg-white/10 text-white/90 rounded-full text-[10px] backdrop-blur-md border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.section>
  );
}
