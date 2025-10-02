"use client";
import React from "react";
import { motion } from "framer-motion";

const Certificates = () => {
  const certificates = [
    {
      title: "n8n Automation",
      issuer: "Udemy",
      year: "2024",
      link: "https://www.udemy.com/certificate/your-n8n-certificate-link",
    },
    {
      title: "CSS Certificate",
      issuer: "Coursera",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/certificate/your-css-cert",
    },
    {
      title: "JavaScript Certificate",
      issuer: "Coursera",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/certificate/your-js-cert",
    },
    {
      title: "HTML Certificate",
      issuer: "Coursera",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/certificate/your-html-cert",
    },
  ];

  return (
    <section id="certificates" className="bg-[#070615f8] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 uppercase">
          My <span className="text-fuchsia-500">Certificates</span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -80 }} // start above
              whileInView={{ opacity: 1, y: 0 }} // fall into place
              transition={{
                duration: 0.6,
                delay: index * 0.2, // stagger effect
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="p-6 border border-fuchsia-900 rounded-2xl hover:shadow-[0_0_20px_#d946ef] transition"
            >
              <h4 className="text-lg font-semibold">{cert.title}</h4>
              <p className="text-gray-300">{cert.issuer}</p>
              <p className="text-gray-400 text-sm">{cert.year}</p>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-fuchsia-500 border border-fuchsia-500 px-4 py-2 rounded-lg hover:bg-fuchsia-500 hover:text-black transition"
              >
                View Certificate
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
