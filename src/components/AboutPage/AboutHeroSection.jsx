import React from "react";
import styled from "styled-components";

import heroImage from "../../assets/images/about-hero.png";
import abstractImg from "../../assets/abstract-design/abstract.png";

const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    padding: 40px 20px;
`;

const OuterSquare = styled.div`
    position: relative;
    background-color: #1c1c1c;
    border-radius: 20px;
    padding: 2rem;
    max-width: 1000px;
    width: 100%;
    overflow: hidden;
`;

const AbstractOverlay = styled.div`
    position: absolute;
    top: -20px;
    right: -20px;
    width: 350px;
    height: 350px;
    background: url(${abstractImg}) center/contain no-repeat;
    opacity: 0.4;
    z-index: 0;
`;

const HeroRow = styled.div`
    display: flex;
    align-items: flex-start;
    position: relative;
    margin-right: -100px; /* Move the entire row to the right */
`;

const ContentBox = styled.div`
    display: flex;
    position: relative;
    z-index: 1;
`;

const TextSquare = styled.div`
    position: relative;
    width: 400px;
    height: 350px;
    background-color: #1a1a1a;
    border-radius: 20px 0 80px 20px;
    padding: 1.5rem;
    z-index: 2;
    margin-right: -160px;

    h1 {
        color: #fff;
        font: inherit;
        font-size: 2rem;
        font-weight:750 ;

        span {
            color: #caff33;
        }
    }

    p {
        color: #b3b3b3;
        font-size: 0.8rem;
    }
`;

const ImageSquare = styled.div`
    position: relative;
    width: 700px;
    height: 500px;
    border-radius: 8px;
    overflow: hidden;
    z-index: 1;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
`;

const AboutHeroSection = () => {
    return (
        <HeroContainer>
            <OuterSquare>
                <AbstractOverlay />
                <HeroRow>
                    <ContentBox>
                        <TextSquare>
                            <p style={{ color: "#FFFFFF", fontSize: "1rem", marginBottom: "-1.5rem", fontWeight: "450", }}>
                                Welcome to YourBank
                            </p>
                            <h1>
                                Where Banking Meets<br /> 
                                <span>Excellence!</span>
                            </h1>
                            <p style={{ marginTop: "-1rem", fontSize: "0.9rem" }}>
                                At YourBank, we believe that banking should be more than just transactions. It should be an experience that empowers individuals and businesses to thrive and reach their financial goals. As a trusted financial institution, we are committed to delivering exceptional banking services that go beyond expectations. With a focus on innovation, personalized solutions, and unwavering integrity, we strive to provide the best banking experience for our valued customers. Join us on this exciting journey and discover a new level of banking excellence.
                            </p>
                        </TextSquare>
                        <ImageSquare>
                            <HeroImg src={heroImage} alt="Hero" />
                        </ImageSquare>
                    </ContentBox>
                </HeroRow>
            </OuterSquare>
        </HeroContainer>
    );
};

export default AboutHeroSection;