"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { navigation, personalInfo } from "@/constants/data";
import { CVDownload } from "@/components/cv-download";
import { socialLinks } from "@/constants/contact";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Calculate years of experience
  const yearsOfExperience = new Date().getFullYear() - personalInfo.startYear;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-3 sm:px-6 sm:py-4 md:px-12 lg:px-16 xl:px-24 bg-black/50 backdrop-blur-md">
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {/* Section 1: whoami dropdown */}
        <motion.div
          className="bg-gray-900/80 backdrop-blur-sm px-3 py-2 sm:px-4 rounded-2xl border border-gray-800"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1.5 sm:gap-2 focus:outline-none">
              <Image
                src={personalInfo.avatar}
                alt="Profile"
                width={28}
                height={28}
                className="rounded-full sm:w-8 sm:h-8"
              />
              <span className="font-mono text-xs sm:text-sm">whoami</span>
              <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="bg-gray-900/95 backdrop-blur-sm border-gray-800 text-white min-w-[240px]"
            >
              <DropdownMenuItem className="flex flex-col items-start py-3 focus:bg-gray-800 focus:text-white">
                <span className="text-xs text-gray-400 mb-1">Name</span>
                <span className="font-medium">{personalInfo.name}</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start py-3 focus:bg-gray-800 focus:text-white">
                <span className="text-xs text-gray-400 mb-1">Experience</span>
                <span className="font-medium">{yearsOfExperience}+ years</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex flex-col items-start py-3 focus:bg-gray-800 focus:text-white">
                <span className="text-xs text-gray-400 mb-1">Role</span>
                <span className="font-medium">{personalInfo.role}</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>

        {/* Section 2: Navigation links */}
        <motion.div
          className="hidden lg:flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-4 py-2 rounded-2xl border border-gray-800"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-colors text-sm ${
                  isActive
                    ? "bg-gray-800 text-white"
                    : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </motion.div>

        {/* Mobile Menu Toggle & Section 3 */}
        <div className="flex items-center gap-2">
          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden bg-gray-900/80 backdrop-blur-sm p-2 rounded-2xl border border-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </motion.button>

          {/* Section 3: Contact & CV */}
          <motion.div
            className="flex items-center gap-2 sm:gap-3 bg-gray-900/80 backdrop-blur-sm px-3 py-2 sm:px-4 rounded-2xl border border-gray-800"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {/* Social Links */}
            <div className="hidden sm:flex items-center gap-2">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <link.icon className="w-4 h-4" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden sm:block w-px h-6 bg-gray-800" />

            {/* CV Download */}
            <CVDownload buttonClassName="text-[10px] sm:text-xs px-2 sm:px-3 py-1 h-7 sm:h-8" />
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden mt-3"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-3">
              <div className="grid grid-cols-2 gap-2">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors text-sm ${
                        isActive
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                      }`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="text-xs sm:text-sm">{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Social Links */}
              <div className="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-gray-800 sm:hidden">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <link.icon className="w-4 h-4" />
                    <span className="sr-only">{link.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
