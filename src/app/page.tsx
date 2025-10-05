"use client";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import React, { useState } from "react";

import Skills from "@/components/Services";

import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Certificates from "@/components/certificates";
import Footer from "@/components/footer";

import Education from "@/components/MyJourney";
import WhyMe from "@/components/WhyMe";

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

        <WhyMe />
        <Skills />

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
