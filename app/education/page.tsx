"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { educationData } from "@/constants/education";
import { EducationCard } from "@/components/page/education";

export default function EducationPage() {
  return (
    <motion.div
      className="min-h-screen p-2 md:p-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <motion.h1 className="text-4xl font-mono mb-8" variants={fadeInUp}>
          Education
        </motion.h1>

        <div className="relative border-l-2 border-divider pl-8 space-y-12">
          {educationData.map((entry) => (
            <EducationCard key={entry.title} entry={entry} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
