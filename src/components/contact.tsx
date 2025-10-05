"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#070615f8] text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-[#070615f8] p-8 rounded-2xl shadow-xl border-2 border-fuchsia-500 animate-neon">
        <h1 className="text-4xl font-bold text-center mb-6">
          Contact{" "}
          <span className="bg-gradient-to-r from-[#9468fb] via-[#EC4899] to-[#9606d4ee] bg-clip-text text-transparent">
            Me
          </span>
        </h1>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Write your message..."
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-fuchsia-500 focus:ring-2 focus:ring-fuchsia-500 outline-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-rose-500 to-fuchsia-500 font-semibold text-lg shadow-md hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
