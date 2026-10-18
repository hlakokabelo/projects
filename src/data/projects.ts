export type Project = {
  name: string;
  tagline: string;
  stack: string[];
  source: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Chatterra",
    tagline: "Reddit-like social platform",
    stack: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "PostgreSQL",
      "TanStack Query",
    ],
    source: "https://github.com/hlakokabelo/Chatterra-social-media-app",
    live: "https://chatterra.vercel.app",
    featured: true,
  },
  {
    name: "Photos Clone API",
    tagline: "Java Spring Boot REST API",
    stack: [
      "Java 21",
      "Spring Boot 4",
      "Spring Security",
      "Spring Data JDBC",
      "PostgreSQL",
      "Docker",
      "Gradle",
      "GitHub Actions",
    ],
    source: "https://github.com/hlakokabelo/photos-clone-api",
    live: "https://photos-clone-api.onrender.com/api",
    featured: true,
  },
  {
    name: "Trimzo",
    tagline: "Full-stack URL shortener",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    source: "https://github.com/hlakokabelo/Trimzo",
    live: "https://trimzo.vercel.app",
    featured: true,
  },
  {
    name: "Movie List API",
    tagline: "RESTful API for movie data",
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma", "REST API"],
    source: "https://github.com/hlakokabelo/movie-list-api",
    live: "https://movie-list-api-z4dh.onrender.com/api",
    featured: true,
  },
  {
    name: "JobScout",
    tagline: "Job search utility",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    source: "https://github.com/hlakokabelo/JobScout",
    live: "https://jobscout-za.vercel.app",
    featured: true,
  },
  {
    name: "Vitest Practice",
    tagline: "Component testing playground",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "Vitest",
      "React Testing Library",
      "jsdom",
    ],
    source: "https://github.com/hlakokabelo/Vitest-Practice",
    featured: true,
    live: "https://vitest-practice-two.vercel.app",
  },
  {
    name: "SYNAT Tutors",
    tagline: "Academic group project",
    stack: ["Cross-platform mobile/web"],
    source: "https://github.com/hlakokabelo",
    featured: true,
  },
  {
    name: "Utility hub",
    tagline: "utility hub",
    stack: ["React", "Vite", "TypeScript", "Vitest"],
    source: "https://github.com/hlakokabelo/Utility-hub",
    featured: true,
    live: "https://myutilityhub.vercel.app",
  },
  {
    name: "File Explorer",
    tagline: "View files",
    stack: ["React", "Vite", "TypeScript", "Zustand"],
    source: "https://github.com/hlakokabelo/File-Explorer",
    featured: true,
    live: "https://file-explorer-sage.vercel.app/",
  },

  {
    name: "Chat App",
    tagline: "",
    stack: [
      "bcryptjs",
      "cloudinary",
      "dotenv",
      "express",
      "jsonwebtoken",
      "mongoose",
      "socket.io",
    ],
    source: "https://github.com/hlakokabelo/chat-app",
    featured: true,
    //live: "https://vitest-practice-two.vercel.app",
  },
];
