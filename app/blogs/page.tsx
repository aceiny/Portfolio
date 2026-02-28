"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ExternalLink, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { blogInfo, blogPosts } from "@/constants/blogs";
import { fetchMediumBlogs } from "@/api/blogs.api";
import { useEffect, useState } from "react";
import { MediumBlogPost, MediumFeed } from "@/types/medium.types";
import DOMPurify from "dompurify";

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

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const cleanDescription = (htmlString: string) => {
  // Use DOMPurify to clean HTML and then extract text content
  const cleanHtml = DOMPurify.sanitize(htmlString, { ALLOWED_TAGS: [] });
  return cleanHtml.trim();
};

export default function BlogsPage() {
  const [mediumBlogs, setMediumBlogs] = useState<MediumBlogPost[]>([]);
  const [mediumFeed, setMediumFeed] = useState<MediumFeed | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const medium = await fetchMediumBlogs();
        console.log(medium);
        setMediumBlogs(medium.items);
        setMediumFeed(medium.feed);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-4 lg:p-8">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <Button
          variant="ghost"
          size="sm"
          className="text-gray-400 hover:text-white"
          asChild
        >
          <Link href="/">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
        </Button>
      </motion.div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-linear-to-r py-1 from-white to-sky-600 bg-clip-text text-transparent">
          Blog Articles
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
          Sharing insights on full-stack development, best practices, and the
          latest technologies I 'm working with.
        </p>
      </motion.div>

      {/* All Articles */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="mb-16"
      >
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {mediumBlogs &&
            mediumBlogs.length > 0 &&
            mediumBlogs.map((post: MediumBlogPost) => (
              <motion.div
                key={post.title}
                variants={item}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Card className="bg-gray-900/30 border-gray-800/50 h-full hover:bg-gray-900/50 hover:border-gray-700/50 transition-all duration-300 backdrop-blur-xs group flex flex-col">
                  <CardHeader className="pb-4">
                    {post.thumbnail && (
                      <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                        <Image
                          src={post.thumbnail}
                          alt={post.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold text-white transition-colors duration-300 leading-tight">
                      {post.title}
                    </h3>
                  </CardHeader>
                  <CardContent className="flex-1 pb-0">
                    <p className="text-gray-300 mb-6 leading-relaxed line-clamp-3">
                      {cleanDescription(post.description)}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.pubDate)}
                      </div>
                      {/* <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {post.readingTime}
                    </div> */}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.categories.slice(0, 3).map((category: string) => (
                        <Badge
                          key={category}
                          variant="outline"
                          className="text-xs border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white transition-colors"
                        >
                          {category}
                        </Badge>
                      ))}
                      {post.categories.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs border-gray-600 text-gray-400"
                        >
                          +{post.categories.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="mt-auto pt-6">
                    <Button
                      asChild
                      className="w-full bg-white text-black hover:text-white transition-all duration-300"
                    >
                      <Link
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read on Medium
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center"
      >
        <Card className=" bg-transarent border-0">
          <CardContent className="p-12">
            <h3 className="text-3xl font-bold mb-6 text-white">
              Follow My Writing Journey
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Stay updated with my latest articles on software development, best
              practices, and technology insights.
            </p>
            <Button asChild size="lg" className="text-white px-8 py-3 text-lg">
              <Link
                href={`https://medium.com/@${blogInfo.mediumUsername}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Medium
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
