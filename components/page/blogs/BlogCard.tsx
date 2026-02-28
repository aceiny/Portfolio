import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Calendar } from "lucide-react";
import { Button } from "@heroui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { fadeInUp } from "@/lib/animations";
import { cleanDescription, formatDate } from "@/lib/blog";
import type { MediumBlogPost } from "@/types/medium.types";

interface BlogCardProps {
  post: MediumBlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div variants={fadeInUp}>
      <Card className="bg-content1 border-divider h-full hover:bg-content2 hover:border-default-400 transition-all duration-300 backdrop-blur-xs group flex flex-col">
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
          <h3 className="text-xl font-semibold text-foreground transition-colors duration-300 leading-tight">
            {post.title}
          </h3>
        </CardHeader>
        <CardContent className="flex-1 pb-0">
          <p className="text-default-600 mb-6 leading-relaxed line-clamp-3">
            {cleanDescription(post.description)}
          </p>
          <div className="flex items-center gap-6 text-sm text-default-500 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.pubDate)}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            {post.categories.slice(0, 3).map((category: string) => (
              <Badge
                key={category}
                variant="outline"
                className="text-xs border-divider text-default-600 hover:border-default-400 hover:text-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
            {post.categories.length > 3 && (
              <Badge
                variant="outline"
                className="text-xs border-divider text-default-500"
              >
                +{post.categories.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="mt-auto pt-6">
          <Button
            as={Link}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-foreground text-background hover:bg-foreground/90 transition-all duration-300"
          >
            Read on Medium
            <ExternalLink className="w-4 h-4 ml-2" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
