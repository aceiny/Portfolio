"use client";

import { motion } from "framer-motion";
import { techStack } from "@/constants/tachStack";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { Chip } from "@heroui/chip";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

export function TechStack() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-mono">Technical Expertise</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
      >
        {techStack.map((category) => {
          const bgColors = category.color.split(",");
          const iconBg = bgColors[0];

          return (
            <motion.div key={category.title} variants={item}>
              <Card className="h-full bg-content1/40 hover:bg-content1/60 transition-colors border border-white/5 shadow-sm">
                <CardHeader className="flex gap-3 px-6 pt-6 pb-2">
                  <div
                    className="p-2 rounded-lg flex items-center justify-center backdrop-blur-md"
                    style={{ backgroundColor: iconBg }}
                  >
                    <category.icon className="w-5 h-5 text-foreground drop-shadow-md" />
                  </div>
                  <h3 className="font-semibold text-lg">{category.title}</h3>
                </CardHeader>
                <CardBody className="px-6 pb-6 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((tech) => (
                      <Chip
                        key={tech}
                        variant="flat"
                        color="default"
                        size="sm"
                        className="cursor-default bg-content2 hover:bg-content3 transition-colors"
                      >
                        {tech}
                      </Chip>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
