/** @format */

import React from "react";

import Navbar from "../components/page/Navbar";
import Footer from "../components/page/Footer";
import HeroImg2 from "../components/page/HeroImg2";
import AboutContent from "../components/page/AboutContent";

const Student = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading='Student.' text='Student Schema.' />
      <AboutContent />
      <Footer />
    </div>
  );
};

export default Student;
