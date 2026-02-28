import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { fadeInUp } from "@/lib/animations";
import { portfolioInfo } from "@/constants/data";

export default function HeroSection() {
  return (
    <motion.section
      className="min-h-[80vh] w-full flex flex-col justify-center items-center text-center py-12 md:py-20"
      variants={fadeInUp}
    >
      <div className="space-y-12 w-full px-4">
        <motion.h1 className="text-6xl md:text-8xl font-bold leading-tight">
          Crafting Digital{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-500">
            Solutions
          </span>
          <br />
          with Code
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-default-500 mx-auto leading-relaxed">
          {portfolioInfo.portfolioHomeHeaderDescription}
        </motion.p>
        <motion.div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
          <Button
            as={Link}
            href="/projects"
            size="lg"
            className="rounded-full bg-foreground hover:bg-foreground/90 text-background h-12 text-base font-medium"
          >
            View Projects
          </Button>
          <Button
            as={Link}
            href="/about"
            size="lg"
            variant="flat"
            className="rounded-full h-12 text-base"
          >
            About Me
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}
