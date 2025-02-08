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
import {
  Code2,
  Layout,
  Server,
  Database,
  Wrench,
  Brain,
  Shield,
  Terminal,
} from "lucide-react";
import avatarImage from "../public/self.jpeg";

export const portfolioInfo = {
  portfolioUrl: "http://localhost:3000",
  portfolioDescription: "Portfolio showcasing my work in software development",
  portfolioHomeHeaderDescription:
    "Building innovative web applications and solving complex problems through elegant code.",
  getInTouch: "https://www.linkedin.com/in/yacine-zeraibi-1b8307300",
};
// about data
export const personalInfo = {
  name: "Ahmed Yassine Zeraibi",
  role: "Full Stack Developer",
  developer: "aceiny",
  year: "2025",
  avatar: avatarImage,
  githubStats: {
    commits: "2000+",
    streak: "17+",
  },
  aboutMe: `
  Full-Stack Developer skilled in Java, Python, JavaScript, and frameworks like React, Next.js, Express.js,
  Nest.js, and FastAPI. Proficient in database management, cloud services, and tools such as Docker, Redis,
  and GitHub Actions.
  `,
};

export const cvUrl = `${portfolioInfo.portfolioUrl}/cv.pdf`;

export const quickStats = [
  { value: "2+", label: "Years Coding" },
  { value: "50+", label: "Projects" },
  { value: "2000+", label: "Commits" },
  { value: "17+", label: "Day Streak" },
];

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

// start of tech stack data
export const techStack = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: [
      "C/C++",
      "Assembly",
      "Python",
      "JavaScript",
      "TypeScript",
      "Go",
      "Java",
      "Bash",
    ],
    color: "from-blue-500/20 to-blue-600/20",
  },
  {
    title: "Frontend",
    icon: Layout,
    items: [
      "React",
      "Next.js",
      "React Native",
      "TailwindCSS",
      "Redux",
      "Zustand",
      "React Query",
    ],
    color: "from-purple-500/20 to-purple-600/20",
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Express.js", "Nest.js", "FastAPI", "Django", "Gin", "Socket.io"],
    color: "from-green-500/20 to-green-600/20",
  },
  {
    title: "Database",
    icon: Database,
    items: [
      "Firebase",
      "Supabase",
      "TypeORM",
      "PrismaORM",
      "Mongoose",
      "SQL",
      "NoSQL",
      "Redis",
    ],
    color: "from-yellow-500/20 to-yellow-600/20",
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    items: [
      "Git/GitHub",
      "GitHub Actions",
      "Docker",
      "Nginx",
      "DigitalOcean",
      "Azure",
      "VS Code",
    ],
    color: "from-red-500/20 to-red-600/20",
  },
  {
    title: "AI & ML",
    icon: Brain,
    items: [
      "OpenAI",
      "NumPy",
      "Pandas",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
    ],
    color: "from-pink-500/20 to-pink-600/20",
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    items: [
      "Network Security",
      "Penetration Testing",
      "Security Auditing",
      "Cryptography",
    ],
    color: "from-emerald-500/20 to-emerald-600/20",
  },
  {
    title: "Other Skills",
    icon: Terminal,
    items: [
      "Linux",
      "CLI",
      "Web Scraping",
      "Automation",
      "OOP",
      "Figma",
      "Technical Writing",
    ],
    color: "from-orange-500/20 to-orange-600/20",
  },
];

// end of tech stack data

// featured projects data
export const featuredProjects = [
  {
    title: "MyQcm aljazayr",
    slug: "my-qcm-aljazayr",
    description: "MyQCM is an advanced AI-driven e-learning platform designed to revolutionize medical education",
    tech: ["Nest.js", "Postgresql" , "Redis" ,"OpenAI"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGO8s26uQFFFrsyn4s5FPUS0e8LMU_uJlmPw&s",
  },
  {
    title: "Survision",
    slug: "survision",
    description: "Survision is a data collection platform",
    tech: ["React Native" ,"Nest.js", "Postgresql", "Redis" , "Docker" ,],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY_slkt9x5jiQnETHgWqeQPL6gQ68s556mjg&s",
  },
  /*{
    title: "Enssea website",
    slug: "enssea-website",
    description: "Presentative website for ECOLE NATIONALE SUPÉRIEURE DE STATISTIQUE ET D'ECONOMIE APPLIQUÉE",
    tech: ["React Native", "Firebase", "TensorFlow"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8M2YD9R6SOMf2vD_HyyexT5dgMm3U6LmL3Q&s",
  },*/
];
// end of projects data

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

export const projects = [
  {
    title: "MyQcm aljazayr",
    slug: "my-qcm-aljazayr",
    description: "MyQCM is an advanced AI-driven e-learning platform designed to revolutionize medical education",
    tech: ["Nest.js", "Postgresql" , "Redis" ,"OpenAI"],  
    longDescription:
      "MyQCM is a platform designed to manage multiple-choice questions (MCQs) for educational institutions and automate payment calculations for freelancers. It helps maintain a structured entry of MCQs and tracks user progress and performance analytics.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGO8s26uQFFFrsyn4s5FPUS0e8LMU_uJlmPw&s",
    date: "Aug 2024",
    link: "https://myqcmdz.com/",
    github: "https://github.com/aceiny/my_qcm",
    features: [
      "MCQ Entry and Management:",
      "Automated Payment Calculation",
      "User Progress Tracking",
      "Performance Analysis",
      "Multi-Level Course Hierarchy",
      "Real-Time Reporting",
      "Scalable Infrastructure"
    ],
    challenges: [
      "Implementing efficient app",
      "Optimizing AI response time",
      "Handling high concurrent user loads",
      "Ensuring data privacy and security",
    ],
    screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    testimonial: {
      quote:
        "This platform has helped me alot in my medical studies",
      name: "Mohamed",
      role: "CEO, TechCorp",
      avatar: "/placeholder.svg",
    },
    nextProject: {
      slug: "survision",
      title: "survision",
    },
  },
  // Add more projects as needed
];
