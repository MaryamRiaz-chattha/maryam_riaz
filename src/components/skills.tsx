"use client";

import { useState, useEffect } from "react";
import { Code, Brain, Trophy } from "lucide-react";

const skills = [
  {
    id: 1,
    title: "Strong Academic Background",
    icon: Code,
    description:
      "With a Master’s in Computer Science and multiple certifications, I bring both theoretical knowledge and practical expertise to every project.",
  },

  {
    id: 2,
    title: "Proven Project Experience",
    icon: Brain,
    description:
      "From building AI Learning Assistants to modern e-commerce websites, I have hands-on experience delivering impactful solutions.",
  },
  {
    id: 3,
    title: "Commitment to Growth",
    icon: Trophy,
    description:
      "Continuous learning is at my core — I constantly explore new tools and frameworks to stay at the cutting edge of technology.",
  },
];

export default function Skills() {
  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = Number(entry.target.getAttribute("data-id"));
            setVisible((prev) => [...new Set([...prev, id])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll("[data-id]");
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="py-16 px-4 sm:px-6 lg:px-8  bg-[#070615f8] overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-[#8B5CF6]/30 via-[#EC4899]/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-[#06B6D4]/30 via-[#8B5CF6]/20 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-radial from-[#EC4899]/20 via-[#06B6D4]/10 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      {/* Section Header */}
      <div className="max-w-5xl mx-auto relative z-10 text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Why{" "}
          <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#9a06d4] bg-clip-text text-transparent">
            Me
          </span>
        </h2>
      </div>

      {/* Skill Cards */}
      <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          const isVisible = visible.includes(skill.id);
          return (
            <div
              key={skill.id}
              data-id={skill.id}
              className={`${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              } transition-all duration-700 ease-out`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-black/30 backdrop-blur-md border border-[#8B5CF6]/30 rounded-lg p-6 hover:bg-black/50 hover:border-[#EC4899]/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#EC4899]/30 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 relative">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-[#06B6D4] p-2 flex items-center justify-center shadow-lg shadow-[#8B5CF6]/50 group-hover:shadow-[#EC4899]/70 transition-all duration-300">
                      <Icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#8B5CF6] via-[#EC4899] to-transparent opacity-0 group-hover:opacity-40 group-hover:animate-ping transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8B5CF6] group-hover:to-[#06B6D4] transition-all duration-300">
                      {skill.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
