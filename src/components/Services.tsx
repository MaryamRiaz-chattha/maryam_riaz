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
  { name: "ShadCN UI", icon: <Code2 className="text-violet-400 w-8 h-8" /> },
  {
    name: "n8n Automation",
    icon: <Workflow className="text-green-400 w-8 h-8" />,
  },
];

const Skills = () => {
  return (
    <div className="bg-[#070615f8] py-14 px-6">
      <h2 className="text-center text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase text-white mb-12">
        Advanced{" "}
        <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#9606d4ee] bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-items-center">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group relative flex flex-col items-center justify-center bg-[#0f172a]/60 backdrop-blur-md border border-[#8B5CF6]/60 rounded-2xl p-6 w-[150px] h-[150px] text-center text-white shadow-lg hover:shadow-[0_0_25px_#d946ef] hover:border-[#d946ef] transition-all duration-300"
          >
            <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
              {skill.icon}
            </div>
            <h3 className="text-sm sm:text-base font-semibold tracking-wide">
              {skill.name}
            </h3>

            {/* Neon moving border animation */}
            <motion.div
              className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#d946ef] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              animate={{
                opacity: [0, 1, 0.5, 1],
                borderColor: ["#8B5CF6", "#EC4899", "#9606d4ee", "#d946ef"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
