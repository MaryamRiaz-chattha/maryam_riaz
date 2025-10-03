"use client";
import React from "react";
import { motion } from "framer-motion";

const AboutMe = () => {
  const education = [
    {
      degree: "Master of Computer Science (MCS)",
      institution: "Virtual University of Pakistan",
      year: "2021 – 2023",
      grade: "CGPA: 3.50 / 4.0",
    },
    {
      degree: "Associate Degree in Science (Computer Science)",
      institution: "Government College University, Faisalabad",
      year: "2018 – 2021",
      grade: "Final Grade: 70.88%",
    },
    {
      degree: "Intermediate in Computer Science (ICS)",
      institution: "BISE Gujranwala Board",
      year: "2016 – 2018",
    },
  ];

  return (
    <section id="about" className="bg-[#070615f8] text-white py-16 px-6">
      {/* Keep particles visible, so no solid overlays here */}

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-10 uppercase tracking-wide"
        >
          About{" "}
          <span className="bg-gradient-to-r from-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
            Me
          </span>
        </motion.h2>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-fuchsia-400 mb-12 text-center">
            🎓 Education Journey
          </h3>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ x: index % 2 === 0 ? -120 : 120, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group p-[2px] rounded-3xl bg-gradient-to-br from-fuchsia-600 via-pink-600 to-purple-700 shadow-xl hover:shadow-[0_0_35px_#d946ef80] transition"
              >
                <div className="rounded-3xl bg-[#0b0a16]/80 backdrop-blur-xl p-6 h-full flex flex-col justify-between">
                  <div>
                    <h4 className="text-xl font-bold text-fuchsia-300 mb-2">
                      {edu.degree}
                    </h4>
                    <p className="text-gray-200">{edu.institution}</p>
                  </div>
                  <div className="mt-4">
                    <p className="text-gray-400 text-sm">{edu.year}</p>
                    {edu.grade && (
                      <p className="text-gray-400 text-sm">{edu.grade}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
