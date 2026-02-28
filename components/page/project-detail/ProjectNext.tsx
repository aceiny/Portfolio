import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import { ProjectNextLink } from "@/types/project";

interface ProjectNextProps {
  nextProject: ProjectNextLink;
}

export default function ProjectNext({ nextProject }: ProjectNextProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="mt-16 pt-8 border-t border-divider"
    >
      <Link
        href={`/projects/${nextProject.slug}`}
        className="group block bg-content1 rounded-xl p-6 hover:bg-content2 transition-colors"
      >
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-default-500">Next Project</p>
            <h3 className="text-xl font-semibold mt-1">{nextProject.title}</h3>
          </div>
          <ArrowRight className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" />
        </div>
      </Link>
    </motion.div>
  );
}
