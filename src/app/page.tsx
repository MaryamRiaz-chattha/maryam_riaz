"use client";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import React, { useState } from "react";
import About from "@/components/about";
import Services from "@/components/Services";

import BlogCard2 from "@/components/projects";
import Contact from "@/components/contact"

const Homepage = () => {
  const [nav, setNav] = useState(false);

  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/*Hero section  */}

        <Hero />

        <About />
        <Services />

        <BlogCard2 />
        <Contact/>
      </div>
    </div>
  );
};

export default Homepage;
