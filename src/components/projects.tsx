"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Learning Assistant",
    category: "AI Frontend Project",
    description:
      "A modern AI Learning Assistant built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. It provides an interactive and visually rich learning experience.",
    image: "/images/ai.jpg",
    github: "https://github.com/MaryamRiaz-chattha/learning-assistant-ai",
    demo: "https://3d-learning-assistant.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "E-Commerce Website",
    category: "Full Stack Project",
    description:
      "An elegant and fully responsive e-commerce platform with animations, category filters, and smooth UI built using Next.js, TypeScript, and Tailwind CSS.",
    image: "/images/ec.jpg",
    github: "https://github.com/MaryamRiaz-chattha/ecommerce-site",
    demo: "https://ecommerce-demo.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "AI Video to Voice Generator",
    category: "AI Backend Project",
    description:
      "An AI-powered backend project that converts videos into speech using advanced machine learning models — designed without a frontend interface.",
    image: "/images/langchain.png",
    github: "https://github.com/MaryamRiaz-chattha/ai-video-voice-generator",
    demo: "#",
    tech: ["Python", "FastAPI", "Generative AI"],
  },
  {
    title: "Tic Tac Toe Game",
    category: "Fun Project",
    description:
      "A 3x3 and 4x4 Tic Tac Toe game built with Next.js, TypeScript, and Tailwind CSS. Features animations, auto-reset, and a modern minimalist interface.",
    image: "/images/tic.jpg",
    github: "https://github.com/MaryamRiaz-chattha/tic-tac-toe",
    demo: "https://tic-tac-toe.vercel.app",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Netflix Clone",
    category: "Frontend Project",
    description:
      "A responsive Netflix clone designed with HTML and CSS to replicate the real platform’s layout and UI elements.",
    image: "/images/netflix.jpg",
    github: "https://github.com/MaryamRiaz-chattha/netflix-clone",
    demo: "https://maryam-netflix-clone.vercel.app/",
    tech: ["HTML", "CSS"],
  },
  {
    title: "Web-Based Voting System",
    category: "Backend Project",
    description:
      "A secure voting system built using PHP, MySQL, and Bootstrap that allows users to vote and view results in real-time.",
    image: "/images/vote.png",
    github: "https://github.com/MaryamRiaz-chattha/web-voting-system",
    demo: "#",
    tech: ["PHP", "MySQL", "Bootstrap"],
  },
];

const Projects = () => {
  return (
    <div className="bg-[#070615f8] p-8">
      <p className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        My{" "}
        <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#9606d4ee] bg-clip-text text-transparent">
          Projects
        </span>
      </p>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="group relative h-full rounded-xl bg-[#111827]/60 backdrop-blur-md overflow-hidden shadow-lg border border-fuchsia-500 hover:shadow-[0_0_25px_#d946ef] transition"
          >
            {/* Image */}
            <img
              className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
              src={project.image}
              alt={project.title}
            />

            {/* Category */}
            <h2 className="pt-3 px-4 text-xs font-semibold text-red-300 uppercase tracking-widest">
              {project.category}
            </h2>

            {/* Title & Description */}
            <div className="py-2 px-6">
              <h3 className="mb-2 text-xl font-extrabold text-gray-100 tracking-wide">
                {project.title}
              </h3>
              <p className="line-clamp-4 mb-3 text-gray-300">
                {project.description}
              </p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="bg-fuchsia-900/40 text-fuchsia-300 text-xs px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="pb-4 px-6 flex justify-between items-center">
              <div className="flex space-x-4">
                {/* GitHub */}
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition hover:scale-110"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.31-1.28-1.66-1.28-1.66-1.05-.71.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.56.23 2.72.12 3.01.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.7.41.35.77 1.05.77 2.13v3.16c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                </Link>

                {/* Vercel / Demo */}
                {project.demo !== "#" && (
                  <Link
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition hover:scale-110"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2L1 21h22L12 2z" />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
