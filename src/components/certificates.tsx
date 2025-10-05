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
    {
      title: "Python for Data Science",
      issuer: "IBM",
      year: "2023",
      link: "https://www.coursera.org/account/accomplishments/certificate/your-python-cert",
    },
    {
      title: "Machine Learning",
      issuer: "Stanford Online",
      year: "2022",
      link: "https://www.coursera.org/account/accomplishments/certificate/your-ml-cert",
    },
    {
      title: "Generative AI Basics",
      issuer: "Google Cloud",
      year: "2024",
      link: "https://www.cloudskillsboost.google/public_profiles/your-ai-cert",
    },
    {
      title: "E-commerce Website with HTML & CSS",
      issuer: "Great Learning Academy",
      year: "2023",
      link: "https://www.mygreatlearning.com/certificate/your-ecommerce-cert",
    },
    {
      title: "HTML, CSS & JavaScript",
      issuer: "Coursera",
      year: "July 2023",
      link: "https://www.coursera.org/account/accomplishments/certificate/your-html-css-js-cert",
    },
  ];

  return (
    <section id="certificates" className="bg-[#070615f8] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 uppercase">
          My{" "}
          <span className="bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#9606d4ee] bg-clip-text text-transparent">
            Certificates
          </span>
        </h2>

        <div className="grid sm:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100, // even index = left, odd = right
              }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
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
