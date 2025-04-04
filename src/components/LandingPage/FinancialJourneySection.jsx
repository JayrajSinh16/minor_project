import React from "react";
import styled from "styled-components";
import abstractImage from "../../assets/abstract-design/abstract.png";

const SectionContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 40px;
    background-color: #1c1c1c;
    border: 1px solid #262626;
    border-radius: 20px;
    margin: 40px auto;
    width: 80%;
    color: #b3b3b3;
    position: relative;
`;

const AbstractImage = styled.div`
    background: url(${abstractImage}) top left no-repeat;
    background-size: contain;
    transform: rotate(-90deg);
    position: absolute;
    top: -5px;
    left: 0;
    width: 150px;
    height: 150px;
    opacity: 1;
    z-index: 0;
`;

const Title = styled.h2`
    color: #ffffff;
    font-size: 32px;
    margin-bottom: -5px;
    z-index: 1;
`;

const Highlight = styled.span`
    color: #caff33;
`;

const Description = styled.p`
    width: 800px;
    font-size: 14px;
    font-weight: lighter;
    z-index: 1;
`;

const Button = styled.button`
    background-color: #caff33;
    color: #1a1a1a;
    border: none;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    font:inherit;
    font-size: 16px;
    z-index: 1;
`;

const FinancialJourneySection = () => {
    return (
        <SectionContainer>
            <AbstractImage/>
            <div>
                <Title>
                    Start your financial journey with <Highlight>YourBank today!</Highlight>
                </Title>
                <Description>
                    Ready to take control of your finances? Join YourBank now, and let us help you achieve your
                    financial goals with our tailored solutions and exceptional customer service.
                </Description>
            </div>
            <Button>Explore Services</Button>
        </SectionContainer>
    );
};

export default FinancialJourneySection;