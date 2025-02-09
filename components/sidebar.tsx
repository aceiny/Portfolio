"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cvUrl, navigation, personalInfo, socialLinks } from "@/constants/data";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 h-screen w-[400px] border-r border-gray-800 p-8 overflow-y-auto"
    >
      <div className="space-y-8">
        {/* Profile */}
        <motion.div
          className="flex items-center gap-4"
          whileHover={{ scale: 1.02 }}
        >
          <Image
            src={personalInfo.avatar}
            alt="Profile"
            width={60}
            height={60}
            className="rounded-full"
          />
          <div>
            <h1 className="text-2xl font-mono">{personalInfo.name}.</h1>
            <p className="text-gray-400">{personalInfo.role}</p>
          </div>
        </motion.div>

        {/* Navigation */}
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <motion.div
                key={item.name}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                    isActive
                      ? "bg-gray-800 text-white"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Quick Stats */}
        <motion.div
          className="grid grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="bg-gray-900/50 p-4 rounded-xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-2xl font-bold">2000+</div>
            <div className="text-sm text-gray-400">Github Commits</div>
          </motion.div>
          <motion.div
            className="bg-gray-900/50 p-4 rounded-xl"
            whileHover={{ scale: 1.02 }}
          >
            <div className="text-2xl font-bold">17+</div>
            <div className="text-sm text-gray-400">Day Streak</div>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {socialLinks.map((link) => (
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              key={link.name}
              href={link.href}
              className="p-3 rounded-full bg-gray-900/50 text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <link.icon className="w-5 h-5" />
              <span className="sr-only">{link.name}</span>
            </motion.a>
          ))}
        </motion.div>

        {/* Download CV */}
        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
          <Button
            className="w-full justify-start gap-2 bg-white hover:bg-gray-100 text-black"
            asChild
          >
            <Link target="_blank" rel="noopener noreferrer" href={cvUrl}>
              <Download className="w-4 h-4" />
              Download CV
            </Link>
          </Button>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p>
            © {personalInfo.year} {personalInfo.developer}. All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
