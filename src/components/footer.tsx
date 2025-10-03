"use client";
import React from "react";
import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#070615f8] text-gray-300 overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500"></div>

      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand / Intro */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide text-white">
            Maryam{" "}
            <span className="bg-gradient-to-r from-rose-500 to-purple-500 bg-clip-text text-transparent">
              Riaz
            </span>
          </h2>
          <p className="mt-3 text-gray-400 text-sm leading-relaxed">
            Crafting elegant web experiences with Next.js, Tailwind, and AI ✨
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col md:items-center">
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Skills", "Projects", "Contact"].map((link, i) => (
              <li key={i}>
                <Link
                  href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                  className="hover:text-rose-500 transition-colors duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div className="flex flex-col md:items-end">
          <h3 className="text-white font-semibold mb-3">Connect</h3>
          <div className="flex space-x-5">
            <Link
              href="mailto:yourmail@gmail.com"
              className="hover:text-rose-500 transition"
            >
              <Mail className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com/your-username"
              target="_blank"
              className="hover:text-rose-500 transition"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/your-username"
              target="_blank"
              className="hover:text-rose-500 transition"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://twitter.com/your-username"
              target="_blank"
              className="hover:text-rose-500 transition"
            >
              <Twitter className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom strip */}
      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} Maryam Riaz • All Rights Reserved
      </div>
    </footer>
  );
}
