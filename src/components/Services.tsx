"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Brain,
  Workflow,
  Cpu,
  PenTool,
  Globe,
  Zap,
  Layers,
  Sparkles,
  Rocket,
  GitBranch,
  Github,
  TerminalSquare,
  Wrench,
  Settings,
  Cloud,
  Database,
} from "lucide-react";

const skills = [
  { name: "Python", icon: <Cpu className="text-yellow-400 w-8 h-8" /> },
  { name: "TypeScript", icon: <Code2 className="text-blue-400 w-8 h-8" /> },
  { name: "JavaScript", icon: <Zap className="text-yellow-500 w-8 h-8" /> },
  { name: "Next.js", icon: <Globe className="text-gray-300 w-8 h-8" /> },
  {
    name: "Tailwind CSS",
    icon: <Workflow className="text-cyan-400 w-8 h-8" />,
  },
  { name: "ShadCN UI", icon: <Code2 className="text-violet-400 w-8 h-8" /> },
  { name: "Figma", icon: <PenTool className="text-pink-400 w-8 h-8" /> },
  { name: "C++", icon: <Cpu className="text-blue-500 w-8 h-8" /> },
  { name: "AI / LLM", icon: <Brain className="text-purple-400 w-8 h-8" /> },
  { name: "Agentic AI", icon: <Brain className="text-fuchsia-400 w-8 h-8" /> },
  {
    name: "Prompt Engineering",
    icon: <Sparkles className="text-pink-400 w-8 h-8" />,
  },
  {
    name: "Context Engineering",
    icon: <Layers className="text-green-400 w-8 h-8" />,
  },
  { name: "FastAPI", icon: <Rocket className="text-teal-400 w-8 h-8" /> },
  {
    name: "n8n Automation",
    icon: <Workflow className="text-green-400 w-8 h-8" />,
  },
  { name: "Git", icon: <GitBranch className="text-orange-400 w-8 h-8" /> },
  { name: "GitHub", icon: <Github className="text-gray-300 w-8 h-8" /> },
  {
    name: "VS Code",
    icon: <TerminalSquare className="text-blue-400 w-8 h-8" />,
  },
  { name: "Docker", icon: <Wrench className="text-sky-400 w-8 h-8" /> },
  {
    name: "API Development",
    icon: <Cloud className="text-indigo-400 w-8 h-8" />,
  },
  {
    name: "UI / UX Design",
    icon: <PenTool className="text-rose-400 w-8 h-8" />,
  },
  { name: "Database", icon: <Database className="text-emerald-400 w-8 h-8" /> },
  { name: "Automation", icon: <Settings className="text-lime-400 w-8 h-8" /> },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40, rotateX: 15 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Skills = () => {
  return (
    <section className=" bg-[#070615f8] py-28 px-6 overflow-hidden">
      {/* Animated Gradient Orbs */}
      <motion.div
        className="absolute top-10 left-1/4 w-72 h-72 bg-gradient-to-br from-[#8B5CF6]/40 to-[#EC4899]/30 blur-[120px] rounded-full opacity-70"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-72 h-72 bg-gradient-to-br from-[#06b6d4]/30 to-[#f0abfc]/40 blur-[120px] rounded-full opacity-60"
        animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[34px] sm:text-[45px] md:text-[55px] font-extrabold uppercase tracking-wide text-white mb-16"
        >
          My{" "}
          <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06b6d4] bg-clip-text text-transparent">
            Expertise
          </span>
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 place-items-center"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.12,
                rotateY: 10,
                rotateX: 5,
                boxShadow: "0 0 30px rgba(236,72,153,0.6)",
              }}
              whileTap={{ scale: 0.96 }}
              className="relative group bg-gradient-to-br from-[#0f172a]/70 to-[#1e293b]/60 backdrop-blur-2xl border border-[#8B5CF6]/40 rounded-2xl p-6 w-[160px] h-[160px] flex flex-col items-center justify-center text-white shadow-[0_0_20px_#8B5CF6]/30 transition-all duration-500"
            >
              {/* Shimmer reflection */}
              <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-10 transition duration-700"></div>

              {/* Neon hover glow */}
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#06b6d4] opacity-0 group-hover:opacity-100 blur-lg transition duration-700"></div>

              {/* Floating icon */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 2 + Math.random(),
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative z-10 mb-3 group-hover:scale-110 transition-transform duration-300"
              >
                {skill.icon}
              </motion.div>

              <h3 className="relative z-10 text-sm sm:text-base font-semibold tracking-wide text-gray-200 group-hover:text-white transition-colors duration-300">
                {skill.name}
              </h3>

              {/* Glowing border pulse */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-transparent opacity-0 group-hover:opacity-100"
                animate={{
                  opacity: [0.6, 1, 0.6],
                  borderColor: ["#8B5CF6", "#EC4899", "#06b6d4", "#8B5CF6"],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
