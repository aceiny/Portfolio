import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@heroui/button";
import { Card, CardContent } from "@/components/ui/card";
import { blogInfo } from "@/constants/blogs";

export default function BlogCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center"
    >
      <Card className="bg-transarent border-0">
        <CardContent className="p-4 sm:p-8 lg:p-12">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-foreground">
            Follow My Writing Journey
          </h3>
          <p className="text-default-600 mb-6 sm:mb-8 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Stay updated with my latest articles on software development, best
            practices, and technology insights.
          </p>
          <Button
            as={Link}
            href={`https://medium.com/@${blogInfo.mediumUsername}`}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg"
          >
            Follow on Medium
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}
