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
      tech: ["Next.js", "Typescript", "TailwindCSS", "Shadcn", "Cpanel"],
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
        slug: "myqcm-aljazayr",
        title: "myqcm",
      },
    },
    // Add more projects as needed
  ];
  