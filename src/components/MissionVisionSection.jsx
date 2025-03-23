import React from "react";
import styled from "styled-components";

import missionImage from "../assets/images/mission.png";
import visionImage from "../assets/images/hero.png";
import abstractImg from "../assets/abstract-design/about-abstract.png";

const SectionContainer = styled.section`
    margin: auto auto 20px;
    padding: 40px 30px;
    border-radius: 20px;
    width: 1000px;
    background-color: #1c1c1c;
    color: #b3b3b3;
`;

const Heading = styled.h2`
    color: #caff33;
    font: inherit;
    font-weight: bold;
    font-size: 32px;
    text-align: left;
    margin-bottom: -10px;
`;

const InfoText = styled.p`
    text-align: left;
    font: inherit;
    font-weight: 400;
    font-size: 14px;
`;

const BoxContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`;

const ImageBox = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    margin-right: 40px;
    border-radius: 20px;
    overflow: hidden;
`;

const AbstractImage = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${abstractImg}) center/cover no-repeat;
    opacity: 1;
`;

const MissionImage = styled.img`
    position: absolute;
    top: 40px;
    left: 40px;
    width: 250px;
    height: 250px;
    object-fit: cover;
    border-radius: 20px;
`;

const TextBox = styled.div`
    flex: 1;
    padding: 20px;
`;
const MissionTextBox = styled(TextBox)`
    border-left: 2px solid #CAFF3393;
    padding-left: 30px;
`;
const VisionTextBox = styled(TextBox)`
    border-right: 2px solid #CAFF3393;
    padding-right: 30px;
`;
const Title = styled.h3`
    color: #ffffff;
    font-family: inherit;
    font-weight: 700;
    font-size: 28px;
    margin-bottom: -10px;
`;
const StyledParagraph = styled.p`
    font-size: 14px;
    //line-height: 1.6;
    color: #b3b3b3;
    text-align: left;
    margin-bottom: 20px;
`;

const MissionVisionSection = () => {
    return (
        <SectionContainer>
            <Heading>Mission & Vision</Heading>
            <InfoText>
                We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity,
                creating a brighter financial future for individuals and businesses while maintaining a strong
                commitment to customer satisfaction and community development.
            </InfoText>

            <BoxContainer>
                <ImageBox>
                    <AbstractImage/>
                    <MissionImage src={missionImage} alt="Mission"/>
                </ImageBox>
                <MissionTextBox>
                    <Title>Mission</Title>
                    <StyledParagraph>
                        At YourBank, our mission is to empower our customers to achieve financial success. We are
                        dedicated to delivering innovative banking solutions that cater to their unique needs. Through
                        personalized services, expert guidance, and cutting-edge technology, we aim to build strong,
                        lasting relationships with our customers. Our mission is to be their trusted partner, helping
                        them navigate their financial journey and realize their dreams.
                    </StyledParagraph>
                </MissionTextBox>
            </BoxContainer>

            <BoxContainer>
                <VisionTextBox>
                    <Title>Vision</Title>
                    <StyledParagraph>
                        Our vision at YourBank is to redefine banking by creating a seamless and personalized experience
                        for our customers. We envision a future where banking is accessible, transparent, and tailored
                        to individual preferences. Through continuous innovation and collaboration, we strive to be at
                        the forefront of the industry, setting new standards for customer-centric banking. Our vision is
                        to be the preferred financial institution, known for our unwavering commitment to excellence,
                        trust, and customer satisfaction.
                    </StyledParagraph>
                </VisionTextBox>
                <ImageBox>
                    <AbstractImage/>
                    <MissionImage src={visionImage} alt="Vision"/>
                </ImageBox>
            </BoxContainer>
        </SectionContainer>
    );
};

export default MissionVisionSection;