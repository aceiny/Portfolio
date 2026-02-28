"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar } from "lucide-react";
import { Button } from "@heroui/button";
import { fadeInUp } from "@/lib/animations";
import { cleanDescription, formatDateShort } from "@/lib/blog";
import { useMediumBlogs } from "@/hooks/use-medium-blogs.hook";
import type { MediumBlogPost } from "@/types/medium.types";

const itemVariant = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

export default function LatestArticles() {
  const { blogs } = useMediumBlogs();

  return (
    <motion.section className="space-y-8" variants={fadeInUp}>
      <div className="flex justify-between items-center">
        <motion.h2 className="text-2xl font-mono">Latest Articles</motion.h2>
        <motion.div whileHover={{ x: 3 }}>
          <Button
            as={Link}
            href="/blogs"
            variant="light"
            className="flex items-center gap-2"
          >
            View All <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.slice(0, 3).map((post: MediumBlogPost, index: number) => (
          <motion.div
            key={post.guid}
            variants={itemVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            className="group relative bg-content1 rounded-xl p-6 cursor-pointer border border-divider hover:border-default-400 transition-colors flex flex-col h-full"
          >
            <div className="flex items-center gap-2 text-sm text-default-500 mb-3">
              <BookOpen className="w-4 h-4" />
              <span>Blog Article</span>
            </div>
            <h3 className="text-lg font-semibold mb-3 group-hover:text-blue-400 transition-colors leading-tight min-h-14 flex items-start">
              {post.title}
            </h3>
            <p className="text-default-500 text-sm mb-4 line-clamp-3 grow">
              {cleanDescription(post.description)}
            </p>
            <div className="flex items-center gap-4 text-xs text-default-400 mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {formatDateShort(post.pubDate)}
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.categories.slice(0, 2).map((category: string) => (
                <span
                  key={category}
                  className="px-2 py-1 bg-background/50 rounded-full text-xs backdrop-blur-xs"
                >
                  {category}
                </span>
              ))}
              {post.categories.length > 2 && (
                <span className="px-2 py-1 bg-background/30 rounded-full text-xs text-default-500">
                  +{post.categories.length - 2}
                </span>
              )}
            </div>
            <div className="mt-auto">
              <Button
                as={Link}
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                size="sm"
                className="w-full relative z-10"
              >
                Read Article
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
