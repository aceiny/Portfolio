import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin, Award, Book } from "lucide-react";
import { fadeInUp } from "@/lib/animations";
import type { EducationEntry } from "@/constants/education";

interface EducationCardProps {
  entry: EducationEntry;
}

export default function EducationCard({ entry }: EducationCardProps) {
  return (
    <motion.div className="relative" variants={fadeInUp}>
      <div
        className={`absolute -left-11 p-2 bg-linear-to-br ${entry.gradient} rounded-full`}
      >
        <GraduationCap className="w-5 h-5" />
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{entry.title}</h2>
          <p className="text-default-500">{entry.institution}</p>
          <div className="flex gap-4 text-sm text-default-400">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {entry.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {entry.location}
            </span>
          </div>
        </div>

        {entry.courses && (
          <div className="bg-content1 rounded-xl p-6 space-y-4">
            <h3 className="flex items-center gap-2 font-medium">
              <Book className="w-4 h-4" />
              {entry.coursesLabel}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {entry.courses.map((course) => (
                <div
                  key={course}
                  className="bg-content2 px-3 py-2 rounded-lg text-sm"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        )}

        {entry.achievements && (
          <div className="bg-content1 rounded-xl p-6 space-y-4">
            <h3 className="flex items-center gap-2 font-medium">
              <Award className="w-4 h-4" />
              Achievements
            </h3>
            <div className="grid gap-3 md:grid-cols-2">
              {entry.achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="bg-linear-to-r from-yellow-500/20 to-yellow-600/20 px-4 py-3 rounded-lg"
                >
                  <div className="font-semibold">{achievement.title}</div>
                  <div className="text-sm text-default-500">
                    {achievement.subtitle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
