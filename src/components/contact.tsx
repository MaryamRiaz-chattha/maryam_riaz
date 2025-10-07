"use client";
import React from "react";
import { Mail, User, MessageSquare, SendHorizonal } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-[#070615f8] text-white flex flex-col items-center justify-center p-6 scroll-mt-20"
    >
      {/* Main Container */}
      <div className="w-full max-w-2xl bg-[#0b0816]/70 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-fuchsia-500/40 hover:border-fuchsia-400 transition-all duration-300">
        {/* Heading + Gmail */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-6 text-center md:text-left gap-3">
          <h1 className="text-4xl font-bold">
            <span className="bg-gradient-to-r from-[#9468fb] via-[#EC4899] to-[#9606d4ee] bg-clip-text text-transparent">
              Contact Me
            </span>
          </h1>

          {/* Gmail beside heading */}
          <div className="flex items-center gap-2 text-fuchsia-400 text-base font-medium">
            <Mail className="w-5 h-5" />
            <a
              href="mailto:maryamriaz800@gmail.com"
              className="hover:underline hover:text-fuchsia-300 transition"
            >
              maryamriaz800@gmail.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your Name
            </label>
            <div className="flex items-center bg-gray-800 rounded-lg border border-gray-600 focus-within:border-fuchsia-500 focus-within:ring-2 focus-within:ring-fuchsia-500 transition">
              <User className="text-fuchsia-400 w-5 h-5 ml-3" />
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 bg-transparent outline-none rounded-lg text-gray-200"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your Email
            </label>
            <div className="flex items-center bg-gray-800 rounded-lg border border-gray-600 focus-within:border-fuchsia-500 focus-within:ring-2 focus-within:ring-fuchsia-500 transition">
              <Mail className="text-fuchsia-400 w-5 h-5 ml-3" />
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-transparent outline-none rounded-lg text-gray-200"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <div className="flex items-start bg-gray-800 rounded-lg border border-gray-600 focus-within:border-fuchsia-500 focus-within:ring-2 focus-within:ring-fuchsia-500 transition">
              <MessageSquare className="text-fuchsia-400 w-5 h-5 ml-3 mt-3" />
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full px-4 py-3 bg-transparent outline-none rounded-lg text-gray-200 resize-none"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gradient-to-r from-rose-500 to-fuchsia-500 font-semibold text-lg shadow-md hover:opacity-90 transition hover:scale-[1.02]"
          >
            <SendHorizonal className="w-5 h-5" />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
