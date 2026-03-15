import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { fadeInUp } from "@/lib/animations";
import { portfolioInfo } from "@/constants/data";

export default function HeroSection() {
  return (
    <motion.section
      className="min-h-[500px] h-[calc(100vh-160px)] w-full flex flex-col justify-center items-center text-center -mt-12 md:-mt-16"
      variants={fadeInUp}
    >
      <div className="space-y-10 md:space-y-12 w-full px-4">
        <motion.h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
          Crafting Digital{" "}
          {/* <span className="text-transparent bg-clip-text bg-linear-to-r from-default-800 to-default-500 dark:from-default-300 dark:to-default-600">
            Solutions
          </span> */}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-rose-600 to-red-400 dark:from-rose-400 dark:to-red-600">
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
