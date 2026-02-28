"use client";

import { motion } from "framer-motion";
import { techStack } from "@/constants/tachStack";
import { useIsMobile } from "@/hooks/use-mobile";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function TechStack() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <section className="space-y-6">
        <h2 className="text-2xl font-mono">Technical Expertise</h2>
        <div className="grid grid-cols-1 gap-4">
          {techStack.map((category) => (
            <div
              key={category.title}
              style={{
                backgroundImage: `linear-gradient(to bottom right, ${category.color.split(",")[0]}, ${category.color.split(",")[0]})`,
              }}
              className="rounded-xl p-6 backdrop-blur-xs hover:shadow-lg"
            >
              <div className="flex items-center gap-2 mb-4">
                <category.icon className="w-5 h-5" />
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-full text-sm bg-background/20 backdrop-blur-xs hover:bg-background/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <motion.section
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
    >
      <motion.h2 className="text-2xl font-mono" variants={item}>
        Technical Expertise
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {techStack.map((category) => (
          <motion.div
            key={category.title}
            variants={item}
            whileHover={{ scale: 1.02 }}
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${category.color.split(",")[0]}, ${category.color.split(",")[0]})`,
            }}
            className="rounded-xl p-6 backdrop-blur-xs transition-all duration-300 hover:shadow-lg"
          >
            <motion.div
              className="flex items-center gap-2 mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <category.icon className="w-5 h-5" />
              <h3 className="font-semibold">{category.title}</h3>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
            >
              {category.items.map((tech) => (
                <motion.span
                  key={tech}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="px-2 py-1 rounded-full text-sm bg-background/20 backdrop-blur-xs hover:bg-background/30 transition-colors"
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
