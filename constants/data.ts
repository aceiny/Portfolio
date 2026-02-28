import {
  Home,
  GraduationCap,
  Trophy,
  Folder,
  User,
  BookOpen,
  MessageCircle,
} from "lucide-react";
import avatarImage from "../public/self.jpeg";

// start of portfolio data
export const portfolioInfo = {
  portfolioUrl: "https://aceinyportfolio.vercel.app",
  portfolioDescription: "Portfolio showcasing my work in software development",
  portfolioHomeHeaderDescription:
    "Building innovative web and mobile applications and solving complex problems through elegant code.",
  getInTouch: "https://www.linkedin.com/in/aceiny",
};
// end of portfolio data

// about data
export const personalInfo = {
  name: "Ahmed Yassine Zeraibi",
  role: "Full Stack Developer",
  developer: "aceiny",
  year: "2025",
  startYear: 2022,
  avatar: avatarImage,
  githubStats: {
    commits: "2000+",
    streak: "75+",
  },
};

export const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Competitions", href: "/competitions", icon: Trophy },
  { name: "Projects", href: "/projects", icon: Folder },
  { name: "Blogs", href: "/blogs", icon: BookOpen },
  { name: "Contact", href: "/contact", icon: MessageCircle },
];

// end of about data

// skills data
export const skills = {
  languages: ["TypeScript", "Python", "Java", "Go"],
  frontend: ["React", "Next.js", "TailwindCSS"],
  backend: ["Node.js", "FastAPI", "PostgreSQL"],
  tools: ["Docker", "Git", "AWS"],
};

export const currentTrack = {
  title: "Never Gonna Give You Up",
  artist: "Rick Astley",
  cover: "/placeholder.svg",
  duration: "3:45",
};
