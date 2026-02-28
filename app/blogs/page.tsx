"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft } from "lucide-react";
import { Button } from "@heroui/button";
import { useMediumBlogs } from "@/hooks/use-medium-blogs.hook";
import { BlogCard, BlogCTA } from "@/components/page/blogs";

export default function BlogsPage() {
  const { blogs } = useMediumBlogs();

  return (
    <div className="min-h-screen p-2 md:p-4 lg:p-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mb-8 max-w-7xl mx-auto"
      >
        <Button
          as={Link}
          href="/"
          variant="light"
          size="sm"
          className="text-default-500 hover:text-foreground"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Button>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 sm:mb-16 max-w-7xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-linear-to-r py-1 from-foreground to-sky-600 bg-clip-text text-transparent">
          Blog Articles
        </h1>
        <p className="text-base sm:text-xl text-default-500 max-w-2xl leading-relaxed">
          Sharing insights on full-stack development, best practices, and the
          latest technologies I&apos;m working with.
        </p>
      </motion.div>

      {/* All Articles */}
      <div className="mb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {blogs &&
            blogs.length > 0 &&
            blogs.map((post) => <BlogCard key={post.title} post={post} />)}
        </div>
      </div>

      {/* CTA Section */}
      <BlogCTA />
    </div>
  );
}
