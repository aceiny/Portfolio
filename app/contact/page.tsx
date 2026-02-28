"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@heroui/button";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { ContactForm } from "@/components/page/contact";
import { ContactInfo } from "@/components/page/contact";

export default function ContactPage() {
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
          <h1 className="text-3xl font-mono">Contact Me</h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>

        <motion.div
          className="text-center text-default-500"
          variants={fadeInUp}
        >
          <p>Based in France • Available for remote work worldwide</p>
        </motion.div>
      </div>
    </motion.div>
  );
}
