import { ProjectType } from "@/types/project";
//MyQcm
import myqcm_avatar from "@/public/projects/myqcm/myqcm_avatar.svg";
import myqcm_screenshot_1 from "@/public/projects/myqcm/myqcm_screenshot1.png";
import myqcm_screenshot_2 from "@/public/projects/myqcm/myqcm_screenshot2.png";
import myqcm_screenshot_3 from "@/public/projects/myqcm/myqcm_screenshot3.png";
import myqcm_screenshot_4 from "@/public/projects/myqcm/myqcm_screenshot4.png";
import myqcm_screenshot_5 from "@/public/projects/myqcm/myqcm_screenshot5.png";
import myqcm_screenshot_6 from "@/public/projects/myqcm/myqcm_screenshot6.png";
import myqcm_testi from "@/public/projects/myqcm/myqcm_testi.jpeg";

//Survision
import survision_avatar from "@/public/projects/survision/survision._avatar.svg";
import survision_screenshot_1 from "@/public/projects/survision/survision_screenshot1.svg";
import survision_screenshot_2 from "@/public/projects/survision/survision_screenshot2.svg";
import survision_screenshot_3 from "@/public/projects/survision/survision_screenshot3.svg";
import survision_testi from "@/public/projects/survision/survision_testi.jpeg";

//Enssea
import enssea_avatar from "@/public/projects/enssea/enssea_avatar.svg";
import enssea_screenshot_1 from "@/public/projects/enssea/enssea_screenshot1.png";
import enssea_screenshot_2 from "@/public/projects/enssea/enssea_screenshot2.png";
import enssea_screenshot_3 from "@/public/projects/enssea/enssea_screenshot3.png";
import enssea_screenshot_4 from "@/public/projects/enssea/enssea_screenshot4.png";
import enssea_screenshot_5 from "@/public/projects/enssea/enssea_screenshot5.png";
import enssea_screenshot_6 from "@/public/projects/enssea/enssea_screenshot6.png";

//LockSphere
import lockSphere_screenshot_1 from "@/public/projects/locksphere/locksphere_screenshot1.png";
import lockSphere_screenshot_2 from "@/public/projects/locksphere/locksphere_screenshot2.png";
import lockSphere_screenshot_3 from "@/public/projects/locksphere/locksphere_screenshot3.png";
import lockSphere_avatar from "@/public/projects/locksphere/locksphere_avatar.png";

//PLUAE
import plueaScreenshot_1 from "@/public/projects/pluae/pluae_screenshot_1.png";
import plueaScreenshot_2 from "@/public/projects/pluae/pluae_screenshot_2.png";
import plueaScreenshot_3 from "@/public/projects/pluae/pluae_screenshot_3.png";
import pluaeAvatar from "@/public/projects/pluae/pluae_avatar.png";

//Ra9man
import raqman_logo from "@/public/projects/raqman/raqman_logo.svg";
import raqman_screenshot1 from "@/public/projects/raqman/raqman_screenshot1.png";
import raqman_screenshot2 from "@/public/projects/raqman/raqman_screenshot2.png";
import raqman_screenshot3 from "@/public/projects/raqman/raqman_screenshot3.png";

//Prolink
import prolink_feed from "@/public/projects/prolink/prolink-feed.png";
import prolink_my_enterprise from "@/public/projects/prolink/prolink-my-enterprise.png";
import prolink_annonce from "@/public/projects/prolink/prolink-annonce.png";
import prolink_enterprise from "@/public/projects/prolink/prolink-enterprise.png";
import prolink_search from "@/public/projects/prolink/prolink-search.png";
import rafik_avatar from "@/public/projects/prolink/rafik_kouider_hacen.jpeg";
import prolink_tickets from "@/public/projects/prolink/prolink-tickets.png";
import prolink_logo from "@/public/projects/prolink/prolink-logo.png";

//NestJS Nominatim
import nestjs_nominatim_logo from "@/public/projects/nestjs-nominatim/nominatim.jpeg";

//Pacman
import pacman_logo from "@/public/projects/pacman/pacman_logo.png";
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
    projectType: ProjectType.Freelance,
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
    projectType: ProjectType.Contract,
  },
  {
    title: "MyQcm aljazayr",
    slug: "my-qcm-aljazayr",
    description:
      "MyQCM is an advanced AI-driven e-learning platform designed to revolutionize medical education",
    tech: ["Nest.js", "Typescript", "Postgresql", "Redis", "OpenAI"],
    image: myqcm_avatar,
    projectType: ProjectType.Freelance,
  },
];

export const projects = [
  {
    title: "Prolink - B2B Professional Network",
    slug: "prolink",
    projectType: ProjectType.Freelance_B2B,
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
      "shadcn/ui",
      "Material UI",
    ],
    longDescription: `
    Developed a complete B2B networking platform frontend using Next.js 15 with App Router, Server Components, and TypeScript. Improved performance and SEO by 30%, increasing page load speed and boosting Lighthouse scores from 72 to 96.
    Built a real-time messaging interface with WebSocket integration, featuring conversation lists, message threads, read receipts, and team assignment capabilities. Enhanced real-time data responsiveness by 45% using WebSockets, TanStack Query, and tRPC.
    Reduced frontend runtime errors by 35% and improved API integration reliability by implementing shared type-safe contracts (tRPC) across the stack.
    Designed and implemented a sophisticated announcement feed system with dynamic filtering, search functionality, and category-based navigation.
    Integrated LiveKit client SDK to create interactive webinar rooms with video/audio controls, participant management, and real-time streaming capabilities.
    Developed responsive UI components for the payment flow, supporting multiple Algerian payment methods with Stripe integration for subscriptions and boost purchases.
    Created complex form systems using React Hook Form and Zod validation for announcement creation, user registration, enterprise profiles, and multi-step onboarding flows.
    Developed a reusable, accessible UI component library with Radix UI primitives, shadcn/ui, Material UI, and TailwindCSS. Cut feature delivery time by 25% and improved UI consistency across the platform.
    Strengthened code quality and reduced technical debt by collaborating within a team of 5 engineers through structured code reviews, GitHub workflows, and CI practices.
    Implemented state management using Zustand for global UI state, cart management, and user preferences with persistence.
    Created smooth animations and transitions using Framer Motion for modals, page transitions, and interactive elements.
  `,
    image: prolink_logo,
    date: "Sep 2025 - Jan 2026",
    link: "https://getprolink.com/",
    github: null,
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
    projectType: ProjectType.FullTime,
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
      "BullMQ",
      "MinioS3",
      "Coolify",
      "Docker",
      "Cpanel",
      "Nginx",
      "Graphana",
      "Loki",
      "Promtail",
      "Uptime Kuma",
    ],
    longDescription: `
      Built and scaled an end-to-end data collection platform supporting 1,000+ monthly active users and processing 50,000+ responses/month using NestJS, TypeORM, PostgreSQL, Redis, and TypeScript.
      Developed the mobile application with React Native (Expo), integrating secure APIs and real-time features.
      Optimized platform performance by 35% and lowered operational costs by replacing Google Maps APIs with a self-hosted Nominatim service and developing a cached geolocation module.
      Increased system reliability and processing speed by 42% by designing scalable background job systems for notifications, emails, referrals, and survey workflows using Redis and BullMQ.
      Designed and operated production infrastructure on private VPS using Docker, Coolify, Nginx, and Traefik, implementing CI/CD pipelines, Linux hardening, and a self-hosted S3-compatible object storage (MinioS3).
      Maintained 99.5%+ system uptime and reduced incident resolution time by implementing centralized logging, real-time monitoring, and automated alerting using a self-hosted Grafana stack, Loki, Promtail, and Uptime Kuma.
      `,
    image: survision_avatar,
    date: "Aug 2024 - Sep 2025",
    link: "https://survision.io",
    github: null,
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
    tech: [
      "Nest.js",
      "Typescript",
      "Postgresql",
      "Redis",
      "OpenAI",
      "IRT",
      "BKT",
      "Cloudinary",
      "Chargily",
      "Prisma",
    ],
    longDescription: `
      Architected and rebuilt a scalable backend system using NestJS, TypeScript, PostgreSQL, and Redis, redesigning the database schema for improved data integrity, reliability, and long-term maintainability.
      Migrated existing data to the new schema safely while managing database optimizations.
      Developed an adaptive learning engine using Item Response Theory (IRT) and Bayesian Knowledge Tracing (BKT) to personalize learning paths in real time based on user performance.
      Implemented a secure multi-role access and monetization system including subscriptions, payments, feature gating, and role-based permissions.
      Collaborated with a team of three on architecture, API integration, and project optimization.
      Boosted platform engagement and credibility through real-time notifications, contributing to a 2nd place finish at Educteck, a national EdTech exhibition in Algeria.
      `,
    image: myqcm_avatar,
    date: "Oct 2023 - Feb 2024",
    link: "https://myqcmdz.com/",
    github: null,
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
    screenshots: [
      myqcm_screenshot_1,
      myqcm_screenshot_2,
      myqcm_screenshot_3,
      myqcm_screenshot_4,
      myqcm_screenshot_5,
      myqcm_screenshot_6,
    ],
    testimonial: {
      quote:
        "Collaborating with yassine on the MyQCM Aljazayer project was a transformative experience. His expertise in Nest.js, PostgreSQL, Redis, and OpenAI was instrumental in rebuilding our backend infrastructure",
      name: "Rayane Boucheraine",
      role: "CTO, MyQcm",
      avatar: myqcm_testi,
    },
    nextProject: {
      slug: "enssea-website",
      title: "Enssea website",
    },
    projectType: ProjectType.Freelance,
  },

  {
    title: "Enssea website",
    slug: "enssea-website",
    projectType: ProjectType.Freelance,
    description:
      "Presentative website for ECOLE NATIONALE SUPÉRIEURE DE STATISTIQUE ET D'ECONOMIE APPLIQUÉE",
    tech: [
      "Next.js",
      "ReactJS",
      "TypeScript",
      "Zod",
      "RHF",
      "TailwindCSS",
      "Shadcn",
      "Cpanel",
    ],
    longDescription: `
      I developed a comprehensive website for the National Higher School of Statistics and Applied Economics (ENSSEA) using Next.js, TypeScript, TailwindCSS, and Shadcn, integrated it seamlessly with a Laravel backend, and managed deployment through cPanel, resulting in a dynamic, responsive, and user-friendly platform that effectively serves the needs of ENSSEA's students, faculty, and stakeholders.
      `,
    image: enssea_avatar,
    date: "Jan 2025",
    link: "https://enssea.edu.dz",
    github: null,
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
      enssea_screenshot_4,
      enssea_screenshot_5,
      enssea_screenshot_6,
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
    projectType: ProjectType.Personal,
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
    link: null,
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
      lockSphere_screenshot_1,
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
    projectType: ProjectType.Freelance,
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
    link: null,
    github: null,
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
      slug: "raqman",
      title: "Raqman - Administrative Assistance Platform",
    },
  },
  {
    title: "Raqman - Administrative Assistance Platform",
    slug: "raqman",
    projectType: ProjectType.Freelance,
    description:
      "A full-stack administrative platform tailored for elderly and non-literate users, featuring RAG-based conversational assistant and voice-driven user journeys.",
    tech: [
      "Next.js",
      "NestJS",
      "FastAPI",
      "TypeScript",
      "Python",
      "PostgreSQL",
      "RAG",
      "OCR",
      "Speech-to-Text",
    ],
    longDescription: `
      Reduced manual form handling by 60% by designing and building an accessible full-stack administrative platform tailored for elderly and non-literate users.
      Accelerated request processing by 40% via automated classification, routing, and role-based access control across government departments.
      Implemented a RAG-based conversational assistant exposed via a FastAPI service and integrated with a NestJS backend, enabling users to submit requests via natural language conversations.
      Enabled fully voice-driven user journeys by integrating AI-powered OCR, speech-to-text, and document extraction pipelines to process paper-based forms and route structured data to the appropriate administrative agents.
    `,
    image: raqman_logo,
    date: "June 2023 – August 2023",
    link: "https://raqmen.app",
    github: "",
    features: [
      "Accessible Interface for Elderly & Non-Literate Users",
      "RAG-Based Conversational Assistant",
      "Voice-Driven User Journeys",
      "AI-Powered OCR & Document Extraction",
      "Speech-to-Text Integration",
      "Automated Request Classification & Routing",
      "Role-Based Access Control",
      "Government Department Integration",
    ],
    challenges: [
      "Designing an accessible UI for non-literate users",
      "Integrating RAG pipeline with production backend",
      "Building reliable voice-driven workflows",
      "Processing paper-based forms with OCR accuracy",
      "Routing structured data across government departments",
    ],
    screenshots: [raqman_screenshot1, raqman_screenshot2, raqman_screenshot3],
    testimonial: {
      quote: "No testimonial available",
      name: "undefined",
      role: "undefined",
      avatar: "",
    },
    nextProject: {
      slug: "nestjs-nominatim",
      title: "NestJS Nominatim",
    },
  },
  {
    title: "NestJS Nominatim",
    slug: "nestjs-nominatim",
    projectType: ProjectType.Personal,
    description:
      "A powerful and easy-to-use NestJS library for integrating with the Nominatim API (OpenStreetMap geocoding service). Provides a clean, type-safe interface for performing geocoding, reverse geocoding, and place lookups.",
    tech: [
      "NestJS",
      "TypeScript",
      "Nominatim API",
      "OpenStreetMap",
      "REST API",
      "Caching",
    ],
    longDescription: `
      Developed a powerful and easy-to-use NestJS library for integrating with the Nominatim API (OpenStreetMap geocoding service). 
      This library provides a clean, type-safe interface for performing geocoding, reverse geocoding, and place lookups.
      It features configurable in-memory and Redis caching for improved performance, multi-language support, health checks, and a native NestJS module with dependency injection.
    `,
    image: nestjs_nominatim_logo,
    date: "Aug 2024",
    link: "https://www.npmjs.com/package/nestjs-nominatim",
    github: "https://github.com/aceiny/nestjs-nominatim",
    features: [
      "Forward Geocoding: Search for places by name or address",
      "Reverse Geocoding: Get address information from coordinates",
      "Place Lookup: Retrieve detailed information by OSM ID",
      "Built-in configurable caching for improved performance (in-memory or Redis)",
      "Native NestJS module with dependency injection",
      "Multi-language address formatting",
      "Type-safe with comprehensive interfaces",
      "Built-in API health monitoring",
    ],
    challenges: [
      "Designing a robust built-in caching system across in-memory and Redis stores",
      "Structuring comprehensive interfaces and TypeScript types for various Nominatim API responses",
      "Providing a flexible and safe configuration factory for NestJS injection",
    ],
    screenshots: [],
    testimonial: null,
    nextProject: {
      slug: "prolink",
      title: "Prolink - B2B Professional Network",
    },
  },
  {
    title: "Pacman - Classic Arcade Clone",
    slug: "pacman",
    projectType: ProjectType.Personal,
    description:
      "A fully featured recreation of the classic Pac-Man arcade game built in Processing (Java). It features a custom text-based level parser, intelligent ghost AI pathfinding, persistent high scores, and save/load functionality.",
    tech: [
      "Processing",
      "Java",
      "Object-Oriented Programming (OOP)",
      "Pathfinding Algorithms",
      "File I/O"
    ],
    longDescription: `
    Developed a complete clone of the classic Pac-Man arcade game from scratch using Processing and Java. 
    Structured the project with a clean, modular Object-Oriented architecture, separating entities like Hero and Ghosts from the core game loop and rendering logic.
    Implemented an intelligent ghost AI using algorithmic pathfinding (A* / BFS) to provide challenging and dynamic gameplay.
    Created a custom text-based level parsing system that seamlessly reads and renders complex mazes from simple .txt files, enabling easy map creation and multi-level progression.
    Built a robust state management system to handle smooth transitions between the main menu, active gameplay, and game over screens.
    Engineered a comprehensive save/load system using File I/O to persist game progress and maintain a continuous high score leaderboard across different play sessions.
    Handled precise grid-based movement and collision detection to emulate the authentic arcade feel.
  `,
    image: pacman_logo,
    date: "2025",
    link: null, 
    github: "https://github.com/aceiny/Pacman",
    features: [
      "Intelligent Ghost AI & Pathfinding",
      "Custom Text-Based Level Parsing",
      "Multi-level Progression System",
      "Save & Load Game Progress",
      "Persistent High Scores Tracking",
      "Dynamic Game Menu & UI",
      "Grid-based Movement & Collision Detection",
      "Modular Entity Management (Hero, Ghosts)"
    ],
    challenges: [
      "Implementing efficient and bug-free pathfinding algorithms for multiple ghosts to dynamically chase the hero simultaneously.",
      "Designing a robust level parser capable of accurately translating text file character grids into solid walls, paths, and collectable dots.",
      "Managing complex game state transitions between the start menu, gameplay loop, pausing, and the game over sequence.",
      "Handling precise grid alignment and fluid entity movement to ensure the hero and ghosts don't overlap or sequence break through walls.",
      "Reading and writing persistent data cleanly without performance drops to handle the saveed states and high score logs."
    ],
    screenshots: [
      // pacman_gameplay,
      // pacman_menu,
      // pacman_highscores,
      // pacman_levels
    ],
    testimonial: null,
    nextProject: {
      slug: "survision",
      title: "Survision",
    },
}
];
