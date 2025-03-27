import React, { useState } from "react";
import styled from "styled-components";
import leftArrow from "../../assets/icons/arrow-slide.svg";
import testimonialImage from "../../assets/images/testimonials.png";

const SectionContainer = styled.section`
    padding: 20px 40px;
    color: #b3b3b3;
    width: 80%;
    margin: 40px auto;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;

const Title = styled.h2`
    color: #ffffff;
    font: inherit;
    font-weight: 600;
    font-size: 32px;
    text-align: left;
    margin-bottom: -10px;
`;

const Highlight = styled.span`
    color: #caff33;
`;

const Description = styled.p`
    font: inherit;
    width: 500px;
    font-size: 16px;
    font-weight: lighter;
    margin-bottom: 30px;
    text-align: left;
`;

const ButtonContainer = styled.div`
    display: flex;
    background-color: #1c1c1c;
    border: 1px solid #262626;
    border-radius: 50px;
    padding: 10px 15px;
    gap: 10px;
`;

const ToggleButton = styled.button`
    background-color: ${({ active }) => (active ? "#caff33" : "#1c1c1c")};
    color: ${({ active }) => (active ? "#1a1a1a" : "#ffffff")};
    border: 1px solid transparent;
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
`;

const TestimonialContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

const Arrow = styled.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
`;

const RightArrow = styled(Arrow)`
    transform: rotate(180deg);
`;

const Testimonial = styled.div`
    max-width: 1200px;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative;
`;

const TestimonialImage = styled.img`
  width: 100%;
`;

const TestimonialsSection = () => {
    const [activeTab, setActiveTab] = useState("individuals");

    return (
        <SectionContainer>
            <Header>
                <div>
                    <Title>
                        Our <Highlight>Testimonials</Highlight>
                    </Title>
                    <Description>
                        Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey.
                    </Description>
                </div>
                <ButtonContainer>
                    <ToggleButton
                        active={activeTab === "individuals"}
                        onClick={() => setActiveTab("individuals")}
                    >
                        For Individuals
                    </ToggleButton>
                    <ToggleButton
                        active={activeTab === "businesses"}
                        onClick={() => setActiveTab("businesses")}
                    >
                        For Businesses
                    </ToggleButton>
                </ButtonContainer>
            </Header>
            <TestimonialContainer>
                <Arrow src={leftArrow} alt="Previous" />
                <Testimonial>
                    <TestimonialImage src={testimonialImage} alt="Testimonial" />
                </Testimonial>
                <RightArrow src={leftArrow} alt="Next" />
            </TestimonialContainer>
        </SectionContainer>
    );
};

export default TestimonialsSection;