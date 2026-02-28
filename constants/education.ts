export interface Achievement {
  title: string;
  subtitle: string;
}

export interface EducationEntry {
  title: string;
  institution: string;
  period: string;
  location: string;
  gradient: string;
  coursesLabel?: string;
  courses?: string[];
  achievements?: Achievement[];
}

export const educationData: EducationEntry[] = [
  {
    title: "Licence Informatique (Computer Science)",
    institution: "Université de Limoges",
    period: "Sep. 2025 – Present",
    location: "Limoges, France",
    gradient: "from-cyan-500 to-cyan-600",
    coursesLabel: "Relevant Coursework",
    courses: [
      "Algorithms & Data Structures",
      "Databases",
      "Operating Systems",
      "Computer Networks",
      "Programming (C, Java)",
      "Linear Algebra",
    ],
  },
  {
    title: "Advanced Studies in Computer Science",
    institution:
      "Higher School of Computer Science and Digital Technologies - ESTIN",
    period: "Sep. 2024 – June 2025",
    location: "Bejaia, Algeria",
    gradient: "from-blue-500 to-blue-600",
    coursesLabel: "Key Courses",
    courses: [
      "Software Engineering",
      "Databases (DB)",
      "Networks",
      "Theory of Languages",
      "Graph Theory",
      "Path Optimizations",
      "AI",
      "Security",
      "Analyse Numérique",
    ],
  },
  {
    title: "Preparatory Classes in Computer Science",
    institution:
      "Higher School of Computer Science and Digital Technologies - ESTIN",
    period: "Sep. 2022 – June 2024",
    location: "Bejaia, Algeria",
    gradient: "from-purple-500 to-purple-600",
    coursesLabel: "Key Courses",
    courses: [
      "Algorithms & Data Structures",
      "Operating Systems (Linux)",
      "Computer Architectures",
      "Assembly Programming",
      "Object-Oriented Programming",
      "Analysis & Algebra",
      "Probability & Statistics",
      "Mathematical Logic",
    ],
  },
  {
    title: "Baccalaureate Diploma - Experimental Sciences",
    institution: "Ammar Boudjellal Mebarek High School",
    period: "Sep. 2021 – June 2022",
    location: "Bordj Bou Arreridj, Algeria",
    gradient: "from-green-500 to-green-600",
    achievements: [
      { title: "Bac: 16.58", subtitle: "High Distinction" },
      { title: "Mathematics: 19.5/20", subtitle: "Outstanding Performance" },
    ],
  },
];
