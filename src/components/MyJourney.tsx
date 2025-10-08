"use client";

import { useState, useEffect } from "react";
import { BookOpen, Laptop, BrainCircuit } from "lucide-react";

const education = [
  {
    id: 1,
    title: "Master of Computer Science (MCS)",
    description:
      "Completed my Master’s degree from Virtual University of Pakistan, building a strong foundation in Artificial Intelligence, Data Structures, Algorithms, and Web Technologies.",
    icon: BookOpen,
    year: "2023",
  },
  {
    id: 2,
    title: "Joined PIAIC – Certified Cloud Applied Generative AI Engineer",
    description:
      "In 2024, I joined PIAIC to enhance my skills in Next.js, TypeScript, Tailwind CSS, Python, and FastAPI — diving deep into Web Development and Generative AI.",
    icon: Laptop,
    year: "2024",
  },
  {
    id: 3,
    title: "Exploring the Future of AI & Web",
    description:
      "Currently focusing on building intelligent, responsive, and AI-integrated web applications that connect creativity with innovation and real-world impact.",
    icon: BrainCircuit,
    year: "2025",
  },
];

export default function EducationSection() {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepId = Number(entry.target.getAttribute("data-step"));
            setVisibleSteps((prev) => Array.from(new Set([...prev, stepId])));
          }
        });
      },
      { threshold: 0.3 }
    );

    const steps = document.querySelectorAll("[data-step]");
    steps.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="education"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-[#070615f8] overflow-hidden "
    >
      {/* Background Glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-gradient-radial from-[#8B5CF6]/30 via-[#EC4899]/15 to-transparent rounded-full blur-[100px] animate-pulse-slow"></div>
        <div
          className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-radial from-[#06B6D4]/25 via-[#8B5CF6]/15 to-transparent rounded-full blur-[80px] animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-radial from-[#EC4899]/20 via-[#06B6D4]/10 to-transparent rounded-full blur-[60px] animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Header */}
      <div className="max-w-5xl mx-auto relative z-10 text-center mb-12">
        <h2 className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
          MY{" "}
          <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#9606d4ee] bg-clip-text text-transparent">
            JOURNEY
          </span>
        </h2>
      </div>

      {/* Mobile Timeline */}
      <div className="lg:hidden relative max-w-md mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-6 top-0 w-1 h-full bg-white/20 rounded-full"></div>

        <div className="space-y-6">
          {education.map((step, index) => {
            const Icon = step.icon;
            const visible = visibleSteps.includes(step.id);
            return (
              <div
                key={step.id}
                data-step={step.id}
                className={`relative flex items-start ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {/* Icon */}
                <div className="z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-[#9606d4ee] flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <div className="ml-6 bg-black/30 backdrop-blur-md border border-[#8B5CF6]/30 rounded-lg p-5 hover:bg-black/50 hover:border-[#EC4899]/50 hover:shadow-xl hover:shadow-[#EC4899]/30 transition-all duration-300 flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-white font-semibold">{step.title}</h3>
                    <span className="text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#9606d4ee] px-2 py-1 rounded-full">
                      {step.year}
                    </span>
                  </div>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden lg:block relative max-w-6xl mx-auto">
        {/* Vertical Center Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-white/20 h-full rounded-full shadow-lg shadow-[#06B6D4]/50"></div>

        <div className="space-y-16">
          {education.map((step, index) => {
            const Icon = step.icon;
            const visible = visibleSteps.includes(step.id);
            const left = index % 2 === 0;
            return (
              <div
                key={step.id}
                data-step={step.id}
                className={`relative flex items-center ${
                  left ? "justify-start" : "justify-end"
                } ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                } transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div
                  className={`w-full sm:w-5/12 px-4 ${
                    left ? "sm:pr-8" : "sm:pl-8"
                  }`}
                >
                  <div className="bg-black/20 backdrop-blur-md border border-[#8B5CF6]/30 rounded-lg p-6 hover:bg-black/40 hover:border-[#EC4899]/50 hover:shadow-xl hover:shadow-[#EC4899]/30 transition-all duration-300">
                    <span className="text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#9606d4ee] px-2 py-1 rounded-full mb-2 inline-block">
                      {step.year}
                    </span>
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {step.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Icon in center */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="relative group">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] p-2 flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50 group-hover:shadow-[#EC4899]/70 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
