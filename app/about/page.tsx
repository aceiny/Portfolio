"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@heroui/button";
import { personalInfo } from "@/constants/data";
import { aboutMe, quickStats } from "@/constants/about";
import { CVDownload } from "@/components/common/cv-download";
import { socialLinks } from "@/constants/contact";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function AboutPage() {
  return (
    <motion.div
      className="min-h-screen p-2 md:p-6"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <div className="w-full max-w-7xl mx-auto space-y-8">
        <motion.div className="flex items-center gap-4" variants={fadeInUp}>
          <Button as={Link} href="/" variant="light" isIconOnly>
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <h1 className="text-3xl font-mono">About Me</h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8">
          <motion.div className="space-y-6" variants={fadeInUp}>
            <p className="text-lg text-default-600 leading-relaxed">
              {aboutMe.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                className="bg-content1 rounded-xl p-6"
                variants={fadeInUp}
              >
                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <Button
                      key={link.name}
                      as={Link}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="light"
                      className="w-full flex items-center gap-2"
                    >
                      <link.icon className="w-4 h-4" />
                      {link.name}
                    </Button>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="bg-content1 rounded-xl p-6"
                variants={fadeInUp}
              >
                <h2 className="text-xl font-semibold mb-4">Resume</h2>
                <CVDownload />
              </motion.div>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={fadeInUp}>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <Image
                src={personalInfo.avatar}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>

            <div className="bg-content1 rounded-xl p-6 space-y-4">
              <h2 className="text-xl font-semibold">Quick Stats</h2>
              <div className="grid grid-cols-2 gap-4">
                {quickStats.map((stat) => (
                  <motion.div
                    key={stat.label}
                    variants={fadeInUp}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold">{stat.value}</div>
                    <div className="text-default-500">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
