"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cvUrl, personalInfo, socialLinks } from "@/constants/data";
import { quickStats } from "@/constants/about";

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

export default function AboutPage() {
  return (
    <motion.div
      className="min-h-screen bg-black text-white p-1 md:p-6"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      <div className="max-w-4xl mx-auto space-y-8">
        <motion.div className="flex items-center gap-4" variants={item}>
          <Button variant="ghost" size="icon" asChild>
            <Link href="/">
              <ChevronLeft className="w-6 h-6" />
            </Link>
          </Button>
          <h1 className="text-3xl font-mono">About Me</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <motion.div className="space-y-6" variants={item}>
            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              whileHover={{ scale: 1.01 }}
            >
              {personalInfo.aboutMe}
            </motion.p>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              <motion.div
                className="bg-gray-900/50 rounded-xl p-6"
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                <div className="space-y-4">
                  {socialLinks.map((item) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="ghost" className="w-full" asChild>
                        <Link
                          target="_blank"
                          rel="noopener noreferrer"
                          href={item.href}
                          className="flex items-center gap-2"
                        >
                          <item.icon className="w-4 h-4" />
                          {item.name}
                        </Link>
                      </Button>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-gray-900/50 rounded-xl p-6"
                variants={item}
                whileHover={{ scale: 1.02 }}
              >
                <h2 className="text-xl font-semibold mb-4">Resume</h2>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button className="w-full">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      href={cvUrl}
                      className="flex items-center gap-2"
                    >
                      <Download className="w-4 h-4" />
                      Download CV
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6" variants={item}>
            <motion.div
              className="relative aspect-square rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={personalInfo.avatar}
                alt="Profile"
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              className="bg-gray-900/50 rounded-xl p-6 space-y-4"
              whileHover={{ scale: 1.02 }}
            >
              <h2 className="text-xl font-semibold">Quick Stats</h2>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {quickStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={item}
                    whileHover={{ scale: 1.05 }}
                    className="text-center"
                  >
                    <motion.div
                      className="text-3xl font-bold"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
