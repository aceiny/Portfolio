"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { competitions } from "@/constants/competitions";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function CompetitionsPage() {
  return (
    <motion.div
      className="min-h-screen p-1 md:p-8"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="max-w-4xl space-y-8">
        <motion.h1 className="text-4xl font-mono mb-8" variants={item}>
          Competitions & Achievements
        </motion.h1>

        <motion.div className="grid gap-6" variants={container}>
          {competitions.map((competition) => (
            <motion.div
              key={competition.title}
              variants={item}
              initial={{
                backgroundImage: `linear-gradient(to bottom right, ${competition.color.split(",")[0]}, ${competition.color.split(",")[1]})`,
                opacity: 1,
              }}
              whileHover={{
                scale: 1.02,
                backgroundImage: `linear-gradient(to bottom right, ${competition.color.split(",")[1]}, ${competition.color.split(",")[0]})`,
              }}
              transition={{ duration: 0.3 }}
              className="rounded-xl overflow-hidden transition-all duration-300"
            >
              <motion.div
                className="p-6 backdrop-blur-sm"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-4">
                    <div>
                      <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ x: 5 }}
                      >
                        <Trophy className="w-6 h-6 text-yellow-500" />
                        <h2 className="text-2xl font-semibold">
                          {competition.title}
                        </h2>
                      </motion.div>
                      <p className="text-gray-400 mt-1">
                        Organized by {competition.organizer}
                      </p>
                    </div>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {competition.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {competition.location}
                      </span>
                    </div>
                    <p className="text-gray-300">{competition.description}</p>
                  </div>
                  <div className="flex flex-col items-end gap-4">
                    <motion.div
                      className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Award className="w-5 h-5 text-yellow-500" />
                      <span className="font-medium">
                        {competition.achievement}
                      </span>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="secondary"
                        size="sm"
                        className="rounded-full text-black"
                        asChild
                      >
                        <a
                          href={competition.link}
                          className="flex items-center gap-2"
                        >
                          Learn More
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
