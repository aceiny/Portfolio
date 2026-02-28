import {
  HomeSmileBold,
  SquareAcademicCapBold,
  CupStarBold,
  FolderBold,
  UserBold,
  BookBold,
  ChatRoundDotsBold,
} from "@solar-icons/react-perf";
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
  name: "Yassine Zeraibi",
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
  { name: "Home", href: "/", icon: HomeSmileBold },
  { name: "About", href: "/about", icon: UserBold },
  { name: "Education", href: "/education", icon: SquareAcademicCapBold },
  { name: "Competitions", href: "/competitions", icon: CupStarBold },
  { name: "Projects", href: "/projects", icon: FolderBold },
  { name: "Blogs", href: "/blogs", icon: BookBold },
  { name: "Contact", href: "/contact", icon: ChatRoundDotsBold },
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
