"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@heroui/button";
import { fadeInUp } from "@/lib/animations";
import { useMediumBlogs } from "@/hooks/use-medium-blogs.hook";
import type { MediumBlogPost } from "@/types/medium.types";
import BlogCard from "@/components/page/blogs/BlogCard";

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
        {blogs.slice(0, 3).map((post: MediumBlogPost) => (
          <BlogCard key={post.guid} post={post} />
        ))}
      </div>
    </motion.section>
  );
}
