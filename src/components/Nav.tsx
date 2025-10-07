"use client";
import React from "react";
import { Menu } from "lucide-react";

interface NavProps {
  openNav: () => void;
}

const Nav: React.FC<NavProps> = ({ openNav }) => {
  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Projects", href: "projects" },
    { name: "Certificates", href: "certificates" },
    { name: "Contact", href: "contact" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-4 left-0 w-full z-50 flex justify-center">
      <div
        className="w-[90%] sm:w-[85%] md:w-[80%] lg:w-[75%] 
        flex justify-between items-center px-6 py-3
        bg-[#0b0816]/50 backdrop-blur-xl border border-fuchsia-800/40
        rounded-2xl shadow-[0_0_25px_#d946ef30]"
      >
        {/* Logo */}
        <h1 className="text-[22px] sm:text-[25px] font-bold text-white tracking-wide hover:text-fuchsia-400 transition cursor-pointer">
          Maryam Riaz
        </h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleScroll(link.href)}
                className="text-gray-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-fuchsia-500 to-purple-700 transition-all duration-300 group-hover:w-full" />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-fuchsia-400 hover:text-fuchsia-300 transition"
          onClick={openNav}
        >
          <Menu size={28} />
        </button>
      </div>
    </nav>
  );
};

export default Nav;
