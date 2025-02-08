"use client";

import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin, Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const competitions = [
  {
    title: "NASA Space Apps Challenge",
    organizer: "Sirius",
    date: "October 2023",
    location: "Béjaïa",
    achievement: "First Place",
    description: "Created an innovative solution addressing a space challenge.",
    color: "from-blue-500/20 to-blue-600/20",
    link: "#",
  },
  {
    title: "Nextrace CTF",
    organizer: "Nexus",
    date: "November 2023",
    location: "Online",
    achievement: "Second Place",
    description:
      "Secured 2nd place in an intense and competitive cybersecurity challenge.",
    color: "from-purple-500/20 to-purple-600/20",
    link: "#",
  },
  {
    title: "Innobyte Hackathon",
    organizer: "Bytecraft",
    date: "December 2023",
    location: "Syphax Hotel",
    achievement: "First Place",
    description:
      "First-place winning team among 18 teams for developing an innovative solution.",
    color: "from-green-500/20 to-green-600/20",
    link: "#",
  },
  {
    title: "TrainIT Datathon",
    organizer: "SOAI",
    date: "March 2024",
    location: "Online",
    achievement: "6th Place",
    description:
      "Ranked 6th for data analysis and visualization in a competitive setting.",
    color: "from-yellow-500/20 to-yellow-600/20",
    link: "#",
  },
  {
    title: "MicroHack Hackathon",
    organizer: "Microclub",
    date: "April 2024",
    location: "Online",
    achievement: "Participant",
    description:
      "Participated in developing a technical solution in collaboration with a dynamic team.",
    color: "from-red-500/20 to-red-600/20",
    link: "#",
  },
];

export default function CompetitionsPage() {
  return (
    <motion.div
      className="min-h-screen p-8"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="max-w-4xl space-y-8">
        <motion.h1 className="text-4xl font-mono mb-8" variants={item}>
          Competitions & Achievements
        </motion.h1>

        <motion.div className="grid gap-6" variants={container}>
          {competitions.map((competition, index) => (
            <motion.div
              key={competition.title}
              variants={item}
              whileHover={{ scale: 1.02 }}
              className={`rounded-xl overflow-hidden bg-gradient-to-br ${competition.color}`}
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
