import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface ProjectScreenshotsProps {
  screenshots: string[];
}

export default function ProjectScreenshots({
  screenshots,
}: ProjectScreenshotsProps) {
  return (
    <motion.div variants={fadeInUp}>
      <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden"
          >
            <Image
              src={screenshot || "/placeholder.svg"}
              alt={`Screenshot ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
