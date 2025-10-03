"use client";
import React from "react";
import Particle from "./Particle";
import TextEffect from "./textEffects";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="bg-[#070615f8] bg-center bg-cover relative">
      <Particle />

      <div className="w-[90%] lg:w-[80%] mx-auto h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-10 py-16">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left lg:max-w-[50%]"
        >
          {/* Heading */}
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Hi, I am{" "}
            <span className="bg-gradient-to-r from-fuchsia-500 to-purple-700 bg-clip-text text-transparent">
              Maryam Riaz
            </span>
          </h1>

          {/* Animated Text Effect */}
          <div className="mt-2">
            <TextEffect />
          </div>

          {/* Description */}
          <p className="mt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-teal-100 max-w-[600px] mx-auto lg:mx-0 leading-relaxed">
            Welcome to the digital world of{" "}
            <span className="text-fuchsia-400 font-semibold">Maryam Riaz</span>{" "}
            – where <span className="text-fuchsia-500">web development</span>{" "}
            meets <span className="text-fuchsia-500">continuous learning</span>.
            I’m an aspiring developer with skills in{" "}
            <span className="text-fuchsia-400">
              Next.js, TypeScript, and Tailwind CSS
            </span>
            , exploring the exciting potential of{" "}
            <span className="text-fuchsia-400">AI-driven applications</span>.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
            <Link href="/path/to/your-cv.pdf" download>
              <button className="bg-gradient-to-r from-purple-900 to-pink-900 text-white font-semibold py-3 px-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                Download CV
              </button>
            </Link>
            <Link href="#contact">
              <button className="border border-fuchsia-500 text-fuchsia-400 font-semibold py-3 px-6 rounded-lg hover:bg-fuchsia-500 hover:text-black transition">
                Let’s Connect
              </button>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[400px] relative flex justify-center items-center"
        >
          <div className="w-full h-full rounded-full overflow-hidden shadow-[0_0_25px_#d946ef] hover:shadow-[0_0_45px_#a21caf] transition duration-300">
            <Image
              src="/images/port.png"
              alt="user"
              layout="responsive"
              width={400}
              height={400}
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
