// src/pages/Landing.jsx
import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import abstractDesign from "../assets/abstract-design/abstract-landing-page.png";
import WelcomeSection from "../components/LandingPage/WelcomeSection";
import FeaturesSection from "../components/LandingPage/FeaturesSection";
import FinancialJourneySection from "../components/LandingPage/FinancialJourneySection";



const AbstractImage = styled.div`
  background: url(${abstractDesign}) top left no-repeat;
  width: 100%;
  height: 280px;
    background-size: contain;
  position: absolute;
  top: -10px;
  left: -10px;
  z-index: 0;
`;

const Landing = () => {
    return (
        <>
            <br/>
                <Navbar></Navbar>
                <AbstractImage />
                <WelcomeSection></WelcomeSection>
                <FeaturesSection></FeaturesSection>
                <FinancialJourneySection></FinancialJourneySection>
                <Footer>
                </Footer>
        </>
    );
};

export default Landing;
