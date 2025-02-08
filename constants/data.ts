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
    title: "AI Chat Platform",
    slug: "ai-chat-platform",
    description: "Real-time chat with AI integration",
    tech: ["Next.js", "OpenAI", "Socket.io"],
    image: "/placeholder.svg",
  },
  {
    title: "Security Dashboard",
    slug: "security-dashboard",
    description: "Network monitoring system",
    tech: ["Python", "FastAPI", "Docker"],
    image: "/placeholder.svg",
  },
  {
    title: "Mobile Fitness App",
    slug: "mobile-fitness-app",
    description: "Cross-platform fitness tracking",
    tech: ["React Native", "Firebase", "TensorFlow"],
    image: "/placeholder.svg",
  },
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
    slug: "ai-chat-platform",
    title: "AI Chat Platform",
    description: "Real-time chat with AI integration",
    longDescription:
      "A real-time chat application with AI integration for automated responses and content moderation. The platform uses advanced natural language processing to provide intelligent responses and maintain conversation context.",
    tech: ["Next.js", "OpenAI", "Socket.io", "TypeScript", "TailwindCSS"],
    image: "/placeholder.svg",
    date: "March 2024",
    link: "#",
    github: "#",
    features: [
      "Real-time messaging with WebSocket integration",
      "AI-powered automated responses",
      "Content moderation using machine learning",
      "Multi-language support",
      "User authentication and authorization",
      "Message history and search functionality",
    ],
    challenges: [
      "Implementing efficient real-time communication",
      "Optimizing AI response time",
      "Handling high concurrent user loads",
      "Ensuring data privacy and security",
    ],
    screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    testimonial: {
      quote:
        "The AI chat platform has revolutionized our customer support system. Response times are down 70% and customer satisfaction is up 45%.",
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      avatar: "/placeholder.svg",
    },
    nextProject: {
      slug: "security-dashboard",
      title: "Security Dashboard",
    },
  },
  {
    slug: "security-dashboard",
    title: "Security Dashboard",
    description: "Network monitoring system",
    longDescription:
      "A comprehensive security dashboard for real-time network monitoring and threat detection. Features advanced analytics and automated response capabilities.",
    tech: ["Python", "FastAPI", "Docker", "Redis", "PostgreSQL"],
    image: "/placeholder.svg",
    date: "February 2024",
    link: "#",
    github: "#",
    features: [
      "Real-time network monitoring",
      "Threat detection and alerts",
      "Automated response system",
      "Performance analytics",
      "Custom rule creation",
      "Detailed logging and reporting",
    ],
    challenges: [
      "Processing large volumes of network data in real-time",
      "Implementing accurate threat detection algorithms",
      "Building a scalable architecture",
      "Creating an intuitive user interface",
    ],
    screenshots: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    nextProject: {
      slug: "mobile-fitness-app",
      title: "Mobile Fitness App",
    },
  },
  // Add more projects as needed
];
