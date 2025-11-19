"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Download, ChevronDown } from "lucide-react";
import { CV_LINKS } from "@/constants/link";

interface CVDownloadProps {
  className?: string;
  buttonClassName?: string;
}

export function CVDownload({ className, buttonClassName }: CVDownloadProps) {
  return (
    <motion.div
      className={className}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            size={"sm"}
            className={`w-full justify-between gap-1.5 bg-white hover:bg-gray-100 text-black ${buttonClassName || ""}`}
          >
            <div className="flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5" />
              Download CV
            </div>
            <ChevronDown className="w-3.5 h-3.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="start"
          className="w-[var(--radix-dropdown-menu-trigger-width)]"
        >
          {CV_LINKS.map((cvLink) => (
            <DropdownMenuItem key={cvLink.language} asChild>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href={cvLink.url}
                className="flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                {cvLink.language} CV
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  );
}
