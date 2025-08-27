export interface BlogPost {
  id: string;
  title: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  mediumUrl: string;
  tags: string[];
  thumbnail?: string;
  featured?: boolean;
}

export const blogInfo = {
  mediumUsername: "a_zeraibi",
};
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title:
      "Step-by-Step Guide to Deploying Your Node.js App: From Development to Production",
    description:
      "A comprehensive guide to building enterprise-level applications using NestJS framework with TypeORM for database management and PostgreSQL.",
    publishedAt: "2024-12-15",
    readingTime: "8 min read",
    mediumUrl: "https://medium.com/@your-username/your-article-slug",
    tags: ["NestJS", "TypeORM", "PostgreSQL", "Backend"],
    thumbnail: "/placeholder.jpg",
    featured: true,
  },
  {
    id: "2",
    title: "Modern Frontend Development with Next.js and TailwindCSS",
    description:
      "Exploring the latest features of Next.js 14 and how to create beautiful, responsive UIs with TailwindCSS utility classes.",
    publishedAt: "2024-11-28",
    readingTime: "6 min read",
    mediumUrl: "https://medium.com/@your-username/your-article-slug-2",
    tags: ["Next.js", "TailwindCSS", "React", "Frontend"],
    thumbnail: "/placeholder.jpg",
  },
  {
    id: "3",
    title: "Implementing JWT Authentication in Full-Stack Applications",
    description:
      "A step-by-step guide to implementing secure JWT authentication in both frontend and backend applications.",
    publishedAt: "2024-11-10",
    readingTime: "10 min read",
    mediumUrl: "https://medium.com/@your-username/your-article-slug-3",
    tags: ["JWT", "Authentication", "Security", "Full-Stack"],
    thumbnail: "/placeholder.jpg",
  },
  {
    id: "4",
    title: "Database Design Best Practices for Modern Applications",
    description:
      "Essential database design principles and patterns for building robust, scalable data layers in modern web applications.",
    publishedAt: "2024-10-22",
    readingTime: "7 min read",
    mediumUrl: "https://medium.com/@your-username/your-article-slug-4",
    tags: ["Database", "PostgreSQL", "Design Patterns", "Architecture"],
    thumbnail: "/placeholder.jpg",
  },
  {
    id: "5",
    title: "TypeScript Best Practices for Large-Scale Applications",
    description:
      "Advanced TypeScript techniques and patterns for maintaining type safety and code quality in enterprise applications.",
    publishedAt: "2024-09-30",
    readingTime: "9 min read",
    mediumUrl: "https://medium.com/@your-username/your-article-slug-5",
    tags: ["TypeScript", "Best Practices", "Code Quality", "Enterprise"],
    thumbnail: "/placeholder.jpg",
  },
];
