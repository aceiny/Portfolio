"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { competitions } from "@/constants/competitions";
import { CompetitionCard } from "@/components/page/competitions";

export default function CompetitionsPage() {
  return (
    <motion.div
      className="min-h-screen p-2 md:p-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <motion.h1 className="text-4xl font-mono mb-8" variants={fadeInUp}>
          Competitions & Achievements
        </motion.h1>

        <motion.div className="grid gap-6" variants={staggerContainer}>
          {competitions.map((competition) => (
            <CompetitionCard
              key={competition.title}
              competition={competition}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
