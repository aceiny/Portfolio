"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, Book } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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

export default function EducationPage() {
  return (
    <motion.div
      className="min-h-screen p-8"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="max-w-4xl space-y-8">
        <motion.h1 className="text-4xl font-mono mb-8" variants={item}>
          Education
        </motion.h1>

        <div className="relative border-l-2 border-gray-800 pl-8 space-y-12">
          {/* Current Education */}
          <motion.div
            className="relative"
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute -left-11 p-2 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="w-5 h-5" />
            </motion.div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">
                  Advanced Studies in Computer Science
                </h2>
                <p className="text-gray-400">
                  Higher School of Computer Science and Digital Technologies -
                  ESTIN
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Sep. 2024 – Present
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Bejaia, Algeria
                  </span>
                </div>
              </div>
              <motion.div
                className="bg-gray-900/50 rounded-xl p-6 space-y-4"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="flex items-center gap-2 font-medium">
                  <Book className="w-4 h-4" />
                  Key Courses
                </h3>
                <motion.div
                  className="grid grid-cols-2 gap-3"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {[
                    "Software Engineering",
                    "Databases (DB)",
                    "Networks",
                    "Theory of Languages",
                  ].map((course) => (
                    <motion.div
                      key={course}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-800/50 px-3 py-2 rounded-lg text-sm"
                    >
                      {course}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Preparatory Classes */}
          <motion.div
            className="relative"
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute -left-11 p-2 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="w-5 h-5" />
            </motion.div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">
                  Preparatory Classes in Computer Science
                </h2>
                <p className="text-gray-400">
                  Higher School of Computer Science and Digital Technologies -
                  ESTIN
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Sep. 2022 – June 2024
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Bejaia, Algeria
                  </span>
                </div>
              </div>
              <motion.div
                className="bg-gray-900/50 rounded-xl p-6 space-y-4"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="flex items-center gap-2 font-medium">
                  <Book className="w-4 h-4" />
                  Key Courses
                </h3>
                <motion.div
                  className="grid grid-cols-2 gap-3"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {[
                    "Algorithms & Data Structures",
                    "Operating Systems (Linux)",
                    "Computer Architectures",
                    "Assembly Programming",
                    "Object-Oriented Programming",
                    "Analysis & Algebra",
                    "Probability & Statistics",
                    "Mathematical Logic",
                  ].map((course) => (
                    <motion.div
                      key={course}
                      variants={{
                        hidden: { opacity: 0, scale: 0.8 },
                        visible: { opacity: 1, scale: 1 },
                      }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-800/50 px-3 py-2 rounded-lg text-sm"
                    >
                      {course}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* High School */}
          <motion.div
            className="relative"
            variants={item}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="absolute -left-11 p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-full"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <GraduationCap className="w-5 h-5" />
            </motion.div>
            <div className="space-y-4">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold">
                  Baccalaureate Diploma - Experimental Sciences
                </h2>
                <p className="text-gray-400">
                  Ammar Boudjellal Mebarek High School
                </p>
                <div className="flex gap-4 text-sm text-gray-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    Sep. 2021 – June 2022
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    Bordj Bou Arreridj, Algeria
                  </span>
                </div>
              </div>
              <motion.div
                className="bg-gray-900/50 rounded-xl p-6 space-y-4"
                whileHover={{ scale: 1.01 }}
              >
                <h3 className="flex items-center gap-2 font-medium">
                  <Award className="w-4 h-4" />
                  Achievements
                </h3>
                <motion.div
                  className="grid gap-3"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-4 py-3 rounded-lg"
                  >
                    <div className="font-semibold">Bac: 16.58</div>
                    <div className="text-sm text-gray-400">
                      High Distinction
                    </div>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8 },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-4 py-3 rounded-lg"
                  >
                    <div className="font-semibold">Mathematics: 19.5/20</div>
                    <div className="text-sm text-gray-400">
                      Outstanding Performance
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
