"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@heroui/button";
import { Select, SelectItem } from "@heroui/select";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { useProjectSort, sortOptions } from "@/hooks/use-project-sort.hook";
import { ProjectCard } from "@/components/page/projects";

export default function ProjectsPage() {
  const { sortBy, setSortBy, sortedProjects, totalCount } = useProjectSort();

  return (
    <motion.div
      className="min-h-screen p-2 md:p-6"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          variants={fadeInUp}
        >
          <div className="flex items-center gap-4">
            <Button as={Link} href="/" variant="light" isIconOnly>
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <h1 className="text-3xl font-mono">Projects</h1>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-default-400">
              {totalCount} projects
            </span>
            <Select
              aria-label="Sort projects"
              selectedKeys={[sortBy]}
              onChange={(e) => setSortBy(e.target.value)}
              className="w-full sm:w-44"
              size="md"
              variant="bordered"
              defaultSelectedKeys={["newest"]}
            >
              {sortOptions.map((option) => (
                <SelectItem key={option.key}>{option.label}</SelectItem>
              ))}
            </Select>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6"
          variants={staggerContainer}
        >
          {sortedProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
