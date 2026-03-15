import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@heroui/button";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp } from "@/lib/animations";
import { cleanDescription, formatDate } from "@/lib/blog";
import type { MediumBlogPost } from "@/types/medium.types";
import {
  LinkMinimalistic2,
  Calendar,
} from "@solar-icons/react-perf/BoldDuotone";
interface BlogCardProps {
  post: MediumBlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="min-w-0 w-full h-full "
    >
      <Card
        radius="lg"
        className="bg-content1 rounded-2xl border-divider h-full hover:bg-content2 hover:border-default-400 transition-all duration-300 backdrop-blur-xs group flex flex-col overflow-hidden w-full max-w-full"
      >
        <CardHeader className="p-5 sm:p-6 pb-3 sm:pb-4 flex flex-col items-start w-full">
          {post.thumbnail && (
            <div className="relative w-full h-36 sm:h-48 mb-3 sm:mb-6 rounded-lg overflow-hidden">
              <Image
                src={post.thumbnail}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          )}
          <h3 className="text-lg sm:text-xl font-semibold text-foreground transition-colors duration-300 leading-tight w-full truncate whitespace-normal line-clamp-2 text-left">
            {post.title}
          </h3>
        </CardHeader>
        <CardBody className="flex-1 px-5 sm:px-6 pb-0 overflow-hidden w-full">
          <p className="text-sm sm:text-base text-default-600 mb-3 sm:mb-6 leading-relaxed line-clamp-3">
            {cleanDescription(post.description)}
          </p>
          <div className="flex items-center gap-3 sm:gap-6 text-xs sm:text-sm text-default-500 mb-3 sm:mb-6">
            <div className="flex items-center font-semibold gap-2">
              <Calendar fontSize={20} />
              {formatDate(post.pubDate)}
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {post.categories.slice(0, 3).map((category: string) => (
              <Badge
                key={category}
                variant="outline"
                className="text-[10px] sm:text-xs border-divider text-default-600 hover:border-default-400 hover:text-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
            {post.categories.length > 3 && (
              <Badge
                variant="outline"
                className="text-[10px] sm:text-xs border-divider text-default-500"
              >
                +{post.categories.length - 3} more
              </Badge>
            )}
          </div>
        </CardBody>
        <CardFooter className="mt-auto p-5 sm:p-6 pt-5 sm:pt-6 w-full">
          <Button
            as={Link}
            href={post.link}
            target="_blank"
            variant="bordered"
            rel="noopener noreferrer"
            className="w-full"
            endContent={<LinkMinimalistic2 fontSize={20} />}
          >
            Read on Medium
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
