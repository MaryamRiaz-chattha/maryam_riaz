"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MessageCircle,
  Send,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "👋 Hi! I’m Maryam’s assistant. Ask me about her!" },
  ]);
  const [input, setInput] = useState("");
  const messagesRef = useRef<HTMLDivElement | null>(null);

  const responses: Record<string, string> = {
    hello: "Hello there! I'm Maryam Riaz's personal chatbot. 😊",
    who: "Maryam Riaz is a passionate Computer Scientist and AI Enthusiast specializing in Next.js, TypeScript, and Generative AI.",
    skills:
      "Maryam’s skills include TypeScript, Next.js, Tailwind CSS, Python, FastAPI, ShadCN UI, Git, and Prompt Engineering.",
    projects:
      "She has built projects like a Portfolio Website, Netflix Clone, 3D Login Form, School Finder Chatbot, and an AI PDF Reader.",
    goals:
      "Maryam’s goal is to become an advanced AI Engineer and create impactful web applications blending creativity and intelligence.",
    contact: "You can connect with Maryam on LinkedIn or GitHub! 💼",
  };

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!input.trim()) return;
    const userText = input.trim();
    const userMsgLower = userText.toLowerCase();

    const key =
      Object.keys(responses).find((k) => userMsgLower.includes(k)) ?? "default";
    const reply =
      key === "default"
        ? "🤖 I can tell you about Maryam’s skills, projects, or goals! Try asking about them."
        : responses[key];

    setMessages((prev) => [
      ...prev,
      { sender: "user", text: userText },
      { sender: "bot", text: reply },
    ]);

    setInput("");
    setIsOpen(true);
  };

  return (
    <>
      {/* 🌈 FOOTER SECTION */}
      <footer className="relative bg-[#070615f8] text-gray-300 overflow-hidden">
        {/* Gradient top border */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-rose-500 via-purple-500 to-blue-500" />

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
            <h3 className="text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-[#8B5CF6] via-[#EC4899] to-[#9606d4ee] px-2 py-1 rounded-full mb-3 inline-block">
              Connect
            </h3>

            <div className="flex items-center space-x-5 mb-4">
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

      {/* 🌟 Floating Chat Button */}
      <motion.button
        aria-label="Open Maryam chatbot"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen((v) => !v)}
        className="fixed bottom-8 right-8 z-50 flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-pink-500/50 transition-all"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:block font-medium text-sm">Ask Maryam</span>
      </motion.button>

      {/* 💬 Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-8 w-80 h-96 bg-[#0c0b18] text-gray-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-purple-500/30 z-[60]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 flex justify-between items-center">
              <h3 className="font-semibold text-sm">Maryam Riaz Chatbot 🤖</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:text-gray-300 p-1 rounded"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={messagesRef}
              className="flex-1 p-3 space-y-2 overflow-y-auto"
            >
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: msg.sender === "bot" ? -12 : 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.18 }}
                  className={`p-2 rounded-lg max-w-[80%] ${
                    msg.sender === "bot"
                      ? "bg-purple-600/20 text-purple-300 self-start"
                      : "bg-purple-500/80 text-white self-end ml-auto"
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 flex items-center gap-2 border-t border-purple-500/20">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about Maryam..."
                className="flex-1 bg-transparent border border-purple-500/40 rounded-lg px-3 py-1 text-sm focus:outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 p-2 rounded-lg"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
