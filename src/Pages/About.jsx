// src/pages/About.jsx
import React from "react";
import AboutHeroSection from "../components/AboutPage/AboutHeroSection";
import MissionVision from "../components/AboutPage/MissionVisionSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <br/>
            <Navbar></Navbar>
            <AboutHeroSection />
            <MissionVision />
            <Footer></Footer>
        </>
    );
};

export default About;
