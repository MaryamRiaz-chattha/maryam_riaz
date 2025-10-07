"use client";
import React from "react";
import { X, Home, User, Code2, Briefcase, Mail } from "lucide-react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav: React.FC<Props> = ({ nav, closeNav }) => {
  const navAnimation = nav ? "translate-x-0" : "-translate-x-full";

  const navLinks = [
    { name: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
    { name: "About", href: "#about", icon: <User className="w-5 h-5" /> },
    { name: "Skills", href: "#skills", icon: <Code2 className="w-5 h-5" /> },
    {
      name: "Projects",
      href: "#projects",
      icon: <Briefcase className="w-5 h-5" />,
    },
    { name: "Contact", href: "#contact", icon: <Mail className="w-5 h-5" /> },
  ];

  // Function for smooth scrolling
  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      closeNav();
    }
  };

  return (
    <div
      className={`fixed ${navAnimation} transform transition-transform duration-500 ease-in-out top-0 left-0 w-full h-full bg-[#0b0816]/95 backdrop-blur-lg z-[1000] flex flex-col items-center justify-center space-y-8 text-white`}
    >
      {/* Close Button */}
      <button
        onClick={closeNav}
        className="absolute top-6 right-6 text-fuchsia-400 hover:text-fuchsia-300 transition"
      >
        <X className="w-7 h-7" />
      </button>

      {/* Navigation Links */}
      {navLinks.map((link) => (
        <button
          key={link.name}
          onClick={() => handleScroll(link.href)}
          className="flex items-center gap-3 text-xl font-semibold hover:text-fuchsia-400 transition group"
        >
          <span className="group-hover:translate-x-1 transition-transform">
            {link.icon}
          </span>
          <span>{link.name}</span>
        </button>
      ))}
    </div>
  );
};

export default MobileNav;
