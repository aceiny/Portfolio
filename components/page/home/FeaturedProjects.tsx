import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@heroui/button";
import { fadeInUp } from "@/lib/animations";
import { featuredProjects } from "@/constants/projects";

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
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-default-600 mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background/50 rounded-full text-xs backdrop-blur-xs"
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
  );
}
