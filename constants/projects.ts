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
import prolink_feed from "@/public/projects/prolink/prolink-feed.png";
import prolink_my_enterprise from "@/public/projects/prolink/prolink-my-enterprise.png";
import prolink_annonce from "@/public/projects/prolink/prolink-annonce.png";
import prolink_enterprise from "@/public/projects/prolink/prolink-enterprise.png";
import prolink_search from "@/public/projects/prolink/prolink-search.png";
import rafik_avatar from "@/public/projects/prolink/rafik_kouider_hacen.jpeg";
import prolink_tickets from "@/public/projects/prolink/prolink-tickets.png";
import prolink_logo from "@/public/projects/prolink/prolink-logo.png";

export const featuredProjects = [
  {
    title: "Prolink - B2B Network",
    slug: "prolink",
    description:
      "A comprehensive B2B professional networking platform for the Algerian market, featuring real-time messaging, live webinars, and announcement management.",
    tech: [
      "TypeScript",
      "Next.js",
      "React.js",
      "NextAuth.js",
      "TailwindCSS",
      "Framer Motion",
      "React Hook Form",
      "Zustand",
      "Zod",
      "TanStack Query",
      "PostgreSQL",
      "Drizzle ORM",
      "tRPC",
      "WebSocket",
      "LiveKit",
      "Redis",
      "Docker",
      "Stripe",
      "MinIO S3",
    ],
    image: prolink_logo,
  },
  {
    title: "Survision",
    slug: "survision",
    description:
      "Survision is a market research platform, specializing in data collection and analysis for businesses in Algeria",
    tech: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Next.js",
      "React.js",
      "React Native",
      "TailwindCSS",
      "Framer Motion",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Axios",
      "Nest.js",
      "TypeORM",
      "Nominatim",
      "Postgresql",
      "Redis",
      "MinioS3",
      "Coolify",
      "Docker",
      "Cpanel",
      "Nginx",
      "Graphana",
      "Loki",
      "Promtail",
    ],
    image: survision_avatar,
  },
  {
    title: "MyQcm aljazayr",
    slug: "my-qcm-aljazayr",
    description:
      "MyQCM is an advanced AI-driven e-learning platform designed to revolutionize medical education",
    tech: ["Nest.js", "Typescript", "Postgresql", "Redis", "OpenAI"],
    image: myqcm_avatar,
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

export const projects = [
  {
    title: "Prolink - B2B Professional Network",
    slug: "prolink",
    description:
      "Prolink is a comprehensive B2B professional networking platform designed specifically for the Algerian business market, connecting enterprises through announcements, real-time messaging, and interactive webinars.",
    tech: [
      "TypeScript",
      "Next.js",
      "React.js",
      "NextAuth.js",
      "TailwindCSS",
      "Framer Motion",
      "React Hook Form",
      "Zustand",
      "Zod",
      "TanStack Query",
      "PostgreSQL",
      "Drizzle ORM",
      "tRPC",
      "WebSocket",
      "LiveKit",
      "Redis",
      "Docker",
      "Stripe",
      "MinIO S3",
    ],
    longDescription: `
    Developed a complete B2B networking platform frontend using Next.js 15 with App Router and Server Components for optimal performance and SEO.
    Built a real-time messaging interface with WebSocket integration, featuring conversation lists, message threads, read receipts, and team assignment capabilities with a polished two-pane layout.
    Designed and implemented a sophisticated announcement feed system with dynamic filtering, search functionality, and category-based navigation using React components and TailwindCSS.
    Integrated LiveKit client SDK to create interactive webinar rooms with video/audio controls, participant management, and real-time streaming capabilities.
    Developed responsive UI components for the payment flow, supporting multiple Algerian payment methods with Stripe integration for subscriptions and boost purchases.
    Created complex form systems using React Hook Form and Zod validation for announcement creation, user registration, enterprise profiles, and multi-step onboarding flows.
    Implemented a professional social feed with publication composer, image galleries, masonry layouts using react-masonry-css, and engagement features.
    Built advanced search and filtering interfaces with debounced inputs, multi-select dropdowns, and real-time result updates.
    Developed reusable UI component library with Radix UI primitives, ensuring accessibility and consistent design across the platform.
    Implemented state management using Zustand for global UI state, cart management, and user preferences with persistence.
    Created smooth animations and transitions using Framer Motion for modals, page transitions, and interactive elements.
    Optimized image loading and rendering with Next.js Image component and implemented lazy loading for better performance.
  `,
    image: prolink_logo,
    date: "Aug 2025 - Dec 2025",
    link: "",
    github: "",
    features: [
      "Multi-Type Announcement Feed & Management UI",
      "Announcement Boost & Promotion Dashboard",
      "Enterprise Profile & Management Interface",
      "Department & Team Collaboration UI",
      "Role-Based Dashboard Views",
      "Subscription & Plan Selection UI",
      "Professional Social Feed",
      "Advanced Search & Filtering Interface",
      "Multi-Step Payment Flow (Algerian Market)",
      "Real-Time Messaging Interface with WebSocket",
      "File Upload Interface with Progress Tracking",
      "Two-Factor Authentication Flow",
      "Live Webinar Client with LiveKit Integration",
      "Responsive Design (Mobile & Desktop)",
    ],
    challenges: [
      "Building a real-time chat UI that handles message optimistic updates, read receipts, and typing indicators seamlessly",
      "Creating dynamic form components that adapt based on announcement category selection with proper validation",
      "Integrating LiveKit client for smooth webinar experiences while managing UI state for camera/mic controls and participant views",
      "Implementing complex responsive layouts with TailwindCSS that work across mobile, tablet, and desktop viewports",
      "Optimizing image galleries and feed performance with lazy loading and intersection observers for infinite scroll",
      "Building accessible UI components using Radix UI while maintaining custom styling and animations",
      "Managing complex form state across multi-step flows with proper validation and error handling",
      "Creating smooth real-time UI updates for WebSocket messages while preventing race conditions and maintaining message order",
    ],
    screenshots: [
      prolink_feed,
      prolink_my_enterprise,
      prolink_enterprise,
      prolink_annonce,
      prolink_search,
      prolink_tickets,
    ],
    testimonial: {
      quote:
        "The Prolink platform has transformed how Algerian businesses connect and collaborate. The real-time messaging and announcement system provides exactly what our B2B market needs.",
      name: "Rafik kouider hacen",
      role: "Project Manager",
      avatar: rafik_avatar,
    },
    nextProject: {
      slug: "survision",
      title: "Survision",
    },
  },
  {
    title: "Survision ",
    slug: "survision",
    description:
      "Survision is a market research platform, specializing in data collection and analysis for businesses in Algeria",
    tech: [
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Next.js",
      "React.js",
      "React Native",
      "TailwindCSS",
      "Framer Motion",
      "Zustand",
      "TanStack Query",
      "React Hook Form",
      "Zod",
      "Axios",
      "Nest.js",
      "TypeORM",
      "Nominatim",
      "Postgresql",
      "Redis",
      "MinioS3",
      "Coolify",
      "Docker",
      "Cpanel",
      "Nginx",
      "Graphana",
      "Loki",
      "Promtail",
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
      "Region-Based Targeting: Enables surveys to be targeted to specific geographic regions (Wilayas) within Algeria.",
      "Collector Management: Provides tools for managing collectors, including status verification and profile updates.",
      "Real-time Location Tracking: Uses collector location data to assign relevant surveys based on proximity.",
      "Create a nominatim library to manage location searching and reverse geocoding.",
      "Diffrent qusetion types: Supports multiple question types, including multiple-choice with others , free , radio ,etc...",
      "Survey Assignment and Filtering: Implements logic to assign surveys to collectors based on their location and survey status (active, paused, completed).",
      "Role-Based Access Control: Implements different roles (admin, collector, company) with associated permissions.",
      "Data Analytics and Reporting: Includes features for counting surveys, tracking survey status, and calculating response rates.",
      "Payment and Transaction Management: Supports payment processing and transaction tracking for collectors.",
      "Reports : Allow user to send reports and manage them.",
      "Fraud Detection: Implements mechanisms to detect and prevent fraudulent activities and submissions by collectors.",
      "Authentication and Authorization: Implements secure login and registration processes for different user roles.",
      "Detailed Statistics: Provides in-depth statistics on surveys, collectors, and responses for better decision-making.",
      "Email Notifications: Sends email notifications for various events, such as account verification and demo requests.",
      "Collector Referral System: Implements a referral system for collectors to invite others and earn rewards.",
      "Company Referral System: Enables companies to refer their collectors to Survision.",
      "Company Profile Management: Allows companies to manage their profiles, including company size, contact information, and website details.",
      "API Documentation with Swagger: Uses Swagger to document and expose the API endpoints.",
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
      slug: "my-qcm-aljazayr",
      title: "MyQcm aljazayr",
    },
  },
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
      slug: "enssea-website",
      title: "Enssea website",
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
