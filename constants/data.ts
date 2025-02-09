// imports
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
import myqcm_avatar from "@/public/projects/myqcm/myqcm_avatar.svg";
import myqcm_screenshot_1 from "@/public/projects/myqcm/myqcm_screenshot1.svg";
import myqcm_screenshot_2 from "@/public/projects/myqcm/myqcm_screenshot2.svg";
import myqcm_screenshot_3 from "@/public/projects/myqcm/myqcm_screenshot3.svg";
import myqcm_testi from "@/public/projects/myqcm/myqcm_testi.jpeg";
import survision_avatar from "@/public/projects/survision/survision._avatar.svg";
import survision_screenshot_1 from "@/public/projects/survision/survision_screenshot1.svg";
import survision_screenshot_2 from "@/public/projects/survision/survision_screenshot2.svg";
import survision_screenshot_3 from "@/public/projects/survision/survision_screenshot3.svg";
import survision_testi from "@/public/projects/survision/survision_testi.jpeg";
import enssea_avatar from "@/public/projects/enssea/enssea_avatar.svg";
import enssea_screenshot_1 from "@/public/projects/enssea/enssea_screenshot1.svg";
import enssea_screenshot_2 from "@/public/projects/enssea/enssea_screenshot2.svg";
import enssea_screenshot_3 from "@/public/projects/enssea/enssea_screenshot3.svg";
// imports end

// start of portfolio data
export const portfolioInfo = {
  portfolioUrl: "http://localhost:3000",
  portfolioDescription: "Portfolio showcasing my work in software development",
  portfolioHomeHeaderDescription:
    "Building innovative web applications and solving complex problems through elegant code.",
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
    streak: "17+",
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
    description:
      "MyQCM is an advanced AI-driven e-learning platform designed to revolutionize medical education",
    tech: ["Nest.js", "Typescript", "Postgresql", "Redis", "OpenAI"],
    image: myqcm_avatar,
  },
  {
    title: "Survision",
    slug: "survision",
    description:
      "Survision is a market research platform, specializing in data collection and analysis for businesses in Algeria",
    tech: ["React Native", "Nest.js", "Postgresql", "Redis", "Docker"],
    image: survision_avatar,
  },
  {
    title: "Enssea website",
    slug: "enssea-website",
    description:
      "Presentative website for ECOLE NATIONALE SUPÉRIEURE DE STATISTIQUE ET D'ECONOMIE APPLIQUÉE",
    tech: ["Next.js", "Typescript", "TailwindCSS", "Shadcn", "Cpanel"],
    image: enssea_avatar,
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
    title: "MyQcm aljazayr",
    slug: "my-qcm-aljazayr",
    description:
      "MyQCM is an advanced AI-driven e-learning platform designed to revolutionize medical education",
    tech: ["Nest.js", "Typescript", "Postgresql", "Redis", "OpenAI"],
    longDescription: `
    Rebuilt the backend with NestJS, TypeScript, and PostgreSQL, redesigning the database schema for improved
    performance and maintainability.
    Migrated existing data to the new schema while ensuring data integrity.
    Collaborated with a team of three on architecture, API integration, and project optimization.
    The project won 2nd place at Eductek, a startup-focused conference.
    `,
    image: myqcm_avatar,
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
      "Scalable Infrastructure",
    ],
    challenges: [
      "Implementing efficient app",
      "Optimizing AI response time",
      "Handling high concurrent user loads",
      "Ensuring data privacy and security",
    ],
    screenshots: [myqcm_screenshot_1, myqcm_screenshot_2, myqcm_screenshot_3],
    testimonial: {
      quote:
        "Collaborating with aceiny on the MyQCM Aljazayer project was a transformative experience. His expertise in Nest.js, PostgreSQL, Redis, and OpenAI was instrumental in rebuilding our backend infrastructure",
      name: "Rayane Boucheraine",
      role: "CTO, MyQcm",
      avatar: myqcm_testi,
    },
    nextProject: {
      slug: "survision",
      title: "survision",
    },
  },
  {
    title: "Survision ",
    slug: "survision",
    description:
      "Survision is a market research platform, specializing in data collection and analysis for businesses in Algeria",
    tech: [
      "React Native",
      "Nest.js",
      "Typescript",
      "PostgreSQL",
      "Redis",
      "Docker",
      "Nginx",
    ],
    longDescription: `
    Developed the backend using NestJS, TypeORM, PostgreSQL, Redis, and TypeScript, alongside a mobile
    application with React Native, integrating secure APIs and real-time features.
    Managed deployment servers with Nginx, configured domain names, ensured server security, and optimized
    performance.
    `,
    image: survision_avatar,
    date: "Aug 2024",
    link: "https://survision.io",
    github: "https://github.com/aceiny/survision",
    features: [
      "Survey Creation and Management: Allows admins to create, update, and manage surveys, including setting titles, descriptions, target audiences, and pricing.",
      "Wilaya-Based Targeting: Enables surveys to be targeted to specific geographic regions (Wilayas) within Algeria.",
      "Collector Management: Provides tools for managing collectors, including status verification and profile updates.",
      "Real-time Location Tracking: Uses collector location data to assign relevant surveys based on proximity.",
      "Role-Based Access Control: Implements different roles (admin, collector, company) with associated permissions.",
      "Data Analytics and Reporting: Includes features for counting surveys, tracking survey status, and calculating response rates.",
      "Payment and Transaction Management: Supports payment processing and transaction tracking for collectors.",
      "API Documentation with Swagger: Uses Swagger to document and expose the API endpoints.",
      "Email Notifications: Sends email notifications for various events, such as account verification and demo requests.",
      "Company Profile Management: Allows companies to manage their profiles, including company size, contact information, and website details.",
    ],
    challenges: [
      "Ensuring accurate location data and survey assignment.",
      "Maintaining data privacy and security, especially regarding user location and personal information.",
      "Scaling the platform to handle a large number of surveys, collectors, and responses.",
      "Optimizing database queries for performance, especially when filtering surveys by Wilaya and status.",
      "Handling potential conflicts when adding Wilayas to surveys.",
      "Implementing robust error handling and logging.",
      "Managing collector verification and status updates.",
      "Integrating with external services for location data and payment processing.",
      "Creating a user-friendly interface for survey creation and management.",
      "Keeping the application up-to-date with the latest security patches and best practices.",
    ],
    screenshots: [
      survision_screenshot_1,
      survision_screenshot_2,
      survision_screenshot_3,
    ],

    testimonial: {
      quote:
        "aceiny's commitment to excellence and innovative approach significantly enhanced our platform's performance and user experience. His contributions have been invaluable to Survision's success",
      name: "Abdelbasset Meghraoui,",
      role: "Founder & CEO of Survision",
      avatar: survision_testi,
    },
    nextProject: {
      slug: "enssea-website",
      title: "enssea website",
    },
  },

  {
    title: "Enssea website",
    slug: "enssea-website",
    description:
      "Presentative website for ECOLE NATIONALE SUPÉRIEURE DE STATISTIQUE ET D'ECONOMIE APPLIQUÉE",
    tech: ["Nexs.js", "Typescript", "TailwindCSS", "Shadcn", "Cpanel"],
    longDescription: `
    I developed a comprehensive website for the National Higher School of Statistics and Applied Economics (ENSSEA) using Next.js, TypeScript, TailwindCSS, and Shadcn, integrated it seamlessly with a Laravel backend, and managed deployment through cPanel, resulting in a dynamic, responsive, and user-friendly platform that effectively serves the needs of ENSSEA's students, faculty, and stakeholders.
    `,
    image: enssea_avatar,
    date: "Jan 2025",
    link: "https://www.test.enssea.edu.dz",
    github: "https://github.com/aceiny/enssea",
    features: [
      "Dynamic Event Card Component:",
      "Centralized API Configuration",
      "Reusable Query Hooks",
      "Responsive Layout with Tailwind CSS",
      "Client-Side Routing with Next.js Router",
      "Image Optimization with Next.js Image Component",
      "Modular Component Design",
    ],
    challenges: [
      "Optimizing data fetching for landing page",
      "Ensuring consistent UI across devices",
      "Managing complex data transformations",
      "Handling potential API errors gracefully",
      "Maintaining code readability and scalability",
    ],
    screenshots: [
      enssea_screenshot_1,
      enssea_screenshot_2,
      enssea_screenshot_3,
    ],
    testimonial: {
      quote: "No testimonial available",
      name: "undifined",
      role: "undifined",
      avatar: "",
    },
    nextProject: {
      slug: "myqcm",
      title: "myqcm-aljazayr",
    },
  },
  // Add more projects as needed
];
