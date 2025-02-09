"use client";

import { motion } from "framer-motion";
import { techStack } from "@/constants/tachStack";

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
            style={{ backgroundImage: `linear-gradient(to bottom right, ${category.color.split(',')[0]}, ${category.color.split(',')[0]})`,            }}
            className={`rounded-xl p-6  backdrop-blur-sm transition-all duration-300 hover:shadow-lg`}
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
              {category.items.map((item) => (
                <motion.span
                  key={item}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8 },
                    visible: { opacity: 1, scale: 1 },
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="px-2 py-1 rounded-full text-sm bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors"
                >
                  {item}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}