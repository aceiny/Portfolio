import { motion } from "framer-motion";
import { Trophy, Calendar, MapPin, Award, ExternalLink } from "lucide-react";
import { Button } from "@heroui/button";
import { fadeInUp } from "@/lib/animations";

interface CompetitionCardProps {
  competition: {
    title: string;
    organizer: string;
    date: string;
    location: string;
    description: string;
    achievement: string;
    color: string;
    link: string;
  };
}

export default function CompetitionCard({ competition }: CompetitionCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${competition.color.split(",")[0]}, ${competition.color.split(",")[1]})`,
      }}
      className="rounded-xl overflow-hidden"
    >
      <div className="p-6 backdrop-blur-xs">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-4">
            <div>
              <div className="flex items-center gap-3">
                <Trophy className="w-6 h-6 text-yellow-500" />
                <h2 className="text-2xl font-semibold">{competition.title}</h2>
              </div>
              <p className="text-default-500 mt-1">
                Organized by {competition.organizer}
              </p>
            </div>
            <div className="flex gap-4 text-sm text-default-400">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {competition.date}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {competition.location}
              </span>
            </div>
            <p className="text-default-600">{competition.description}</p>
          </div>
          <div className="flex flex-col items-end gap-4">
            <div className="flex items-center gap-2 bg-background/20 px-4 py-2 rounded-full">
              <Award className="w-5 h-5 text-yellow-500" />
              <span className="font-medium">{competition.achievement}</span>
            </div>
            <Button
              as="a"
              href={competition.link}
              variant="flat"
              size="sm"
              className="rounded-full flex items-center gap-2"
            >
              Learn More
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
