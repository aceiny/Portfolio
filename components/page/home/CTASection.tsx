import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { fadeInUp } from "@/lib/animations";
import { portfolioInfo } from "@/constants/data";

export default function CTASection() {
  return (
    <motion.section
      variants={fadeInUp}
      className="text-center space-y-6 py-12"
      viewport={{ once: true }}
    >
      <motion.h2 className="text-3xl font-bold">
        Ready to Start a Project?
      </motion.h2>
      <motion.p className="text-default-500 max-w-xl mx-auto">
        Let's collaborate to bring your ideas to life with cutting-edge
        technology and elegant design.
      </motion.p>
      <div>
        <Button
          as={Link}
          href={portfolioInfo.getInTouch}
          size="lg"
          className="rounded-full bg-foreground hover:bg-foreground/90 text-background font-medium"
        >
          Get in Touch
        </Button>
      </div>
    </motion.section>
  );
}
