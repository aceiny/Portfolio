import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { ZoomIn } from "lucide-react";

interface ProjectScreenshotsProps {
  screenshots: (string | StaticImageData)[];
  onImageClick?: (src: string | StaticImageData) => void;
}

export default function ProjectScreenshots({
  screenshots,
  onImageClick,
}: ProjectScreenshotsProps) {
  if (!screenshots || screenshots.length === 0) return null;

  return (
    <motion.div variants={fadeInUp}>
      <h2 className="text-xl font-semibold mb-4">Screenshots</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="relative aspect-video rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => onImageClick && onImageClick(screenshot)}
          >
            <Image
              src={screenshot || "/placeholder.svg"}
              alt={`Screenshot ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 z-10">
              <ZoomIn className="w-8 h-8 text-white drop-shadow-md" />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
