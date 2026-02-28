"use client";

import { motion } from "framer-motion";
import { TechStack } from "@/components/common/tech-stack";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import {
  HeroSection,
  FeaturedProjects,
  LatestArticles,
  CTASection,
} from "@/components/page/home";

export default function HomePage() {
  return (
    <div className="min-h-screen p-2 md:p-8">
      <motion.div
        className="w-full max-w-7xl mx-auto space-y-24"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <HeroSection />
        <FeaturedProjects />
        <LatestArticles />

        <motion.section variants={fadeInUp} viewport={{ once: true }}>
          <TechStack />
        </motion.section>

        <CTASection />
      </motion.div>
    </div>
  );
}
