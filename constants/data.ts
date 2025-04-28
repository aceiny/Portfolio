import {
  Home,
  GraduationCap,
  Trophy,
  Folder,
  User,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import avatarImage from "../public/self.jpeg";

// start of portfolio data
export const portfolioInfo = {
  portfolioUrl: "https://aceinyportfolio.vercel.app",
  portfolioDescription: "Portfolio showcasing my work in software development",
  portfolioHomeHeaderDescription:
    "Building innovative web and mobile applications and solving complex problems through elegant code.",
  getInTouch: "https://www.linkedin.com/in/yacine-zeraibi-1b8307300",
};
// end of portfolio data

// about data
export const personalInfo = {
  name: "Ahmed Yassine Zeraibi",
  role: "Full Stack Developer",
  developer: "aceiny",
  year: "2025",
  avatar: avatarImage,
  githubStats: {
    commits: "2000+",
    streak: "75+",
  },
  aboutMe: `
  Full-Stack Developer skilled in Java, Python, JavaScript, and frameworks like React, Next.js, Express.js, Nest.js,
  and FastAPI. Proficient in database management, cloud services, and tools such as Docker, Redis, and GitHub
  Actions. Adept at building scalable, high-performance applications with a results-driven mindset, strong teamwork
  skills, and a passion for continuous learning. Currently pursuing a degree in Computer Science, eager to tackle
  technical challenges and deliver innovative solutions.
  `,
};

export const cvUrl = `${portfolioInfo.portfolioUrl}/cv.pdf`;


export const socialLinks = [
  { name: "Email", href: "mailto:yzeraibi2000@gmail.com", icon: Mail },
  { name: "GitHub", href: "https://github.com/aceiny", icon: Github },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/yacine-zeraibi-1b8307300",
    icon: Linkedin,
  },
];

export const navigation = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: User },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Competitions", href: "/competitions", icon: Trophy },
  { name: "Projects", href: "/projects", icon: Folder },
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
