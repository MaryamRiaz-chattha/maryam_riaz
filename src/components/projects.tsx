"use client";
import React from "react";
import Link from "next/link";

const BlogCard2 = () => {
  return (
    <div className="bg-black p-4">
      <p className="text-center text-white text-[28px] sm:text-[33px] md:text-[45px] font-bold uppercase">
        My <span className="text-rose-900">Projects</span>
      </p>

      {/* Grid container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="group relative h-full rounded-lg bg-gray-800 overflow-hidden shadow-lg border-2 border-fuchsia-500 animate-neon"
          >
            {/* Image */}
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center transition duration-500 ease-in-out transform group-hover:scale-105"
              src="https://fancytailwind.com/static/9e8be5587c42e1f7ebec77c5a333a3a4/17574/city2.webp"
              alt="blog"
            />

            {/* Category */}
            <h2 className="pt-4 pb-1 px-4 inline-block title-font text-xs font-semibold text-red-300 uppercase tracking-widest">
              My Category
            </h2>

            {/* Title & Description */}
            <div className="py-1 px-6">
              <Link
                href={`/project${i}`}
                className="mb-3 inline-block title-font text-xl font-extrabold text-gray-100 tracking-wide"
              >
                Fancy Blog Card {i}
              </Link>
              <p className="line-clamp-6 mb-3 leading-relaxed text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
                illum cum autem incidunt magni voluptatum alias reiciendis
                possimus doloremque.
              </p>
            </div>

            {/* Links */}
            <div className="pt-1 pb-4 px-2 flex justify-between items-center flex-wrap">
              <div className="mt-1 flex space-x-4">
                {/* GitHub */}
                <Link
                  href="https://github.com/your-username/your-repo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.96.58.11.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.31-1.28-1.66-1.28-1.66-1.05-.71.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.72-1.54-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.3 1.2-3.11-.12-.29-.52-1.45.11-3.01 0 0 .97-.31 3.18 1.18a11.05 11.05 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.56.23 2.72.12 3.01.75.81 1.2 1.85 1.2 3.11 0 4.43-2.69 5.41-5.25 5.7.41.35.77 1.05.77 2.13v3.16c0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
                  </svg>
                </Link>

                {/* Vercel */}
                <Link
                  href="https://your-vercel-demo-link.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogCard2;
