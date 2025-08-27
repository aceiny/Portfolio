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
import lockSphere_screenshot_1 from "@/public/projects/locksphere/locksphere_screenshot1.png";
import lockSphere_screenshot_2 from "@/public/projects/locksphere/locksphere_screenshot2.png";
import lockSphere_screenshot_3 from "@/public/projects/locksphere/locksphere_screenshot3.png";
import lockSphere_avatar from "@/public/projects/locksphere/locksphere_avatar.png";
import plueaScreenshot_1 from "@/public/projects/pluae/pluae_screenshot_1.png";
import plueaScreenshot_2 from "@/public/projects/pluae/pluae_screenshot_2.png";
import plueaScreenshot_3 from "@/public/projects/pluae/pluae_screenshot_3.png";
import pluaeAvatar from "@/public/projects/pluae/pluae_avatar.png";
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
    tech: [
      "Typescript",
      "Next.js",
      "React.js",
      "React Native",
      "Nest.js",
      "Postgresql",
      "Redis",
      "Minio",
      "Nginx",
      "Docker",
      "Nominatim",
      "Cpanel",
    ],
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
  // {
  //   title: "LockSphere",
  //   slug: "lock-sphere",
  //   description:
  //   "A robust password management solution designed to securely store and manage sensitive credentials with modern encryption technologies",
  //   tech: [
  //     "NestJS",
  //     "Next.js",
  //     "TypeScript",
  //     "TailwindCSS",
  //     "Shadcn UI",
  //     "PostgreSQL",
  //     "Redis",
  //     "Bull Queue",
  //     "Cloudinary"
  //   ],
  //   image: lockSphere_avatar,
  // },
];

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
      "Typescript",
      "Next.js",
      "React.js",
      "React Native",
      "Nest.js",
      "Postgresql",
      "Redis",
      "Minio",
      "Nginx",
      "Docker",
      "Nominatim",
      "Cpanel",
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
    tech: ["Next.js", "Typescript", "TailwindCSS", "Shadcn", "Cpanel"],
    longDescription: `
      I developed a comprehensive website for the National Higher School of Statistics and Applied Economics (ENSSEA) using Next.js, TypeScript, TailwindCSS, and Shadcn, integrated it seamlessly with a Laravel backend, and managed deployment through cPanel, resulting in a dynamic, responsive, and user-friendly platform that effectively serves the needs of ENSSEA's students, faculty, and stakeholders.
      `,
    image: enssea_avatar,
    date: "Jan 2025",
    link: "https://enssea.edu.dz",
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
      title: "LockSphere",
      slug: "lock-sphere",
    },
  },
  {
    title: "LockSphere",
    slug: "lock-sphere",
    description:
      "A robust password management solution designed to securely store and manage sensitive credentials with modern encryption technologies",
    tech: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Shadcn UI",
      "PostgreSQL",
      "Redis",
      "Bull Queue",
      "Cloudinary",
    ],
    longDescription: `
        LockSphere is a comprehensive password management system that prioritizes security and user experience. Built with NestJS and modern encryption technologies, it provides secure credential storage while maintaining accessibility. The application features vault management, two-factor authentication, secure file handling, and real-time notifications, all wrapped in an intuitive user interface powered by Next.js and Shadcn UI components.
      `,
    image: lockSphere_avatar, // You'll need to provide this
    date: "Feb 2025",
    link: "https://lock.yxne.tech",
    github: "https://github.com/aceiny/lock-sphere", // Update with your actual repo
    features: [
      "Secure Password Storage with AES-256-GCM Encryption",
      "Two-Factor Authentication (2FA) with TOTP",
      "Category-based Vault Management",
      "Custom Password Generator",
      "Secure File Upload System with Cloudinary",
      "Real-time login history and notifications",
      "Dark/Light Theme Support",
      "Activity Logging and Monitoring",
      "Data Import/Export Capabilities",
    ],
    challenges: [
      "Implementing robust encryption for sensitive data",
      "Building a secure authentication system with 2FA",
      "Optimizing performance with Redis caching",
      "Managing secure file uploads and storage",
      "Creating an intuitive and responsive UI",
      "Ensuring scalability and maintainability",
    ],
    screenshots: [
      lockSphere_screenshot_1, // You'll need to provide these
      lockSphere_screenshot_2,
      lockSphere_screenshot_3,
    ],
    testimonial: {
      quote: "No testimonial available",
      name: "undefined",
      role: "undefined",
      avatar: "",
    },
    nextProject: {
      title: "MyQcm aljazayr",
      slug: "my-qcm-aljazayr",
    },
  },
  {
    title: "PLUAE Platform",
    slug: "pluae-platform",
    description:
      "PLUAE (Platforme de Liaison Universités – ANEM – Entreprises) is a digital platform that connects Algerian universities, the National Employment Agency (ANEM), economic institutions, and students to streamline graduate employment and job matching processes.",
    tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "RESTful APIs"],
    longDescription: `
  Developed a comprehensive digital platform to bridge the gap between Algerian universities, ANEM (National Employment Agency), 
  and economic institutions. The platform facilitates seamless job matching and graduate employment processes through intelligent 
  matching algorithms and comprehensive user management systems.
  Built with TypeScript for type safety and maintainability, ensuring robust performance across all platform components.
  Implemented scalable architecture to handle multiple stakeholders including students, universities, employers, and government agencies.
  `,
    image: pluaeAvatar,
    date: "2024",
    link: "https://github.com/aceiny/pluae-",
    github: "https://github.com/aceiny/pluae-",
    features: [
      "Multi-Stakeholder Dashboard",
      "Intelligent Job Matching System",
      "Graduate Profile Management",
      "University-Industry Liaison",
      "ANEM Integration",
      "Real-Time Application Tracking",
      "Employment Analytics",
      "Secure Authentication System",
    ],
    challenges: [
      "Integrating multiple stakeholder requirements",
      "Implementing efficient matching algorithms",
      "Ensuring data privacy across institutions",
      "Building scalable multi-tenant architecture",
      "Managing complex user role hierarchies",
    ],
    screenshots: [plueaScreenshot_1, plueaScreenshot_2, plueaScreenshot_3],
    testimonial: {
      quote:
        "Working with aceiny on the PLUAE platform was exceptional. Their deep understanding of TypeScript and system architecture helped create a robust solution that effectively bridges the gap between academia and industry in Algeria.",
      name: "Unknown",
      role: "Project Stakeholder",
      avatar: "",
    },
    nextProject: {
      slug: "next-project-slug",
      title: "Next Project Title",
    },
  },
  // Add more projects as needed
];
