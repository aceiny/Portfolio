import { useMemo, useState } from "react";
import { projects } from "@/constants/projects";

export const sortOptions = [
  { key: "newest", label: "Newest First" },
  { key: "oldest", label: "Oldest First" },
  { key: "name-asc", label: "Name (A–Z)" },
  { key: "name-desc", label: "Name (Z–A)" },
  { key: "most-tech", label: "Most Technologies" },
];

function parseDateToTimestamp(dateStr: string): number {
  const monthMap: Record<string, number> = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
    June: 5,
    August: 7,
  };

  const parts = dateStr.split(/\s*[-–]\s*/);
  const lastPart = parts[parts.length - 1].trim();

  const monthYear = lastPart.match(/^([A-Za-z]+)\s+(\d{4})$/);
  if (monthYear) {
    const month = monthMap[monthYear[1]] ?? 0;
    return new Date(parseInt(monthYear[2]), month).getTime();
  }

  const yearOnly = lastPart.match(/^(\d{4})$/);
  if (yearOnly) {
    return new Date(parseInt(yearOnly[1]), 0).getTime();
  }

  return 0;
}

export function useProjectSort() {
  const [sortBy, setSortBy] = useState("newest");

  const sortedProjects = useMemo(() => {
    const sorted = [...projects];
    switch (sortBy) {
      case "newest":
        return sorted.sort(
          (a, b) => parseDateToTimestamp(b.date) - parseDateToTimestamp(a.date),
        );
      case "oldest":
        return sorted.sort(
          (a, b) => parseDateToTimestamp(a.date) - parseDateToTimestamp(b.date),
        );
      case "name-asc":
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case "name-desc":
        return sorted.sort((a, b) => b.title.localeCompare(a.title));
      case "most-tech":
        return sorted.sort((a, b) => b.tech.length - a.tech.length);
      default:
        return sorted;
    }
  }, [sortBy]);

  return { sortBy, setSortBy, sortedProjects, totalCount: projects.length };
}
