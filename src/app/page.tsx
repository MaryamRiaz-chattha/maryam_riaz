"use client";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import React, { useState } from "react";

import Services from "@/components/Services";

import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Certificates from "@/components/certificates";
import Footer from "@/components/footer";

import Education from "@/components/whyme";
import Skills from "@/components/skills";

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

        <Skills />
        <Services />
        {/*Hero section  *
        <About />*Hero section  */}
        <Education />

        <Projects />

        <Certificates />

        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Homepage;
