import { ProjectType } from "@/types/project";

export const getProjectTypeColor = (
  type?: ProjectType,
): "default" | "primary" | "secondary" | "success" | "warning" | "danger" => {
  switch (type) {
    case ProjectType.Freelance:
    case ProjectType.Freelance_B2B:
      return "primary";
    case ProjectType.Contract:
      return "secondary";
    case ProjectType.FullTime:
      return "success";
    case ProjectType.Personal:
      return "warning";
    case ProjectType.Hackathon:
      return "danger";
    default:
      return "default";
  }
};
