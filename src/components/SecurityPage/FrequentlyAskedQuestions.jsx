import React from "react";
import styled from "styled-components";

const SectionContainer = styled.section`
    margin: auto auto 40px;
    background-color: #1c1c1c;
    border-radius: 20px;
    padding: 40px 30px;
    color: #b3b3b3;
    width: 1000px;
`;

const Heading = styled.h2`
    color: #ffffff;
    text-align: left;
    margin-bottom: -10px;
    font: inherit;
    font-size: 36px;
    font-weight: bold;

    span {
        color: #caff33;
    }
`;

const InfoText = styled.p`
    text-align: left;
    font: inherit;
    font-size: 14px;
    font-weight: lighter;
    margin-bottom: 30px;
`;

const FAQGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`;

const FAQBox = styled.div`
    background-color: #1c1c1c;
    border-radius: 10px;
    padding: 20px;
    border: 1px solid #262626;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0);
    transition: box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 1);
    }
`;

const Question = styled.h3`
    color: #ffffff;
    font: inherit;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 10px;
`;

const Answer = styled.p`
    color: #b3b3b3;
    font: inherit;
    font-size: 14px;
    font-weight: lighter;
`;

const LoadButton = styled.button`
    background-color: #1c1c1c;
    color: #b3b3b3;
    font: inherit;
    font-weight: normal;
    border-radius: 20px;
    border: 1px solid #282c34;
    padding: 10px 20px;
    margin: 20px auto;
    display: block;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 6px 12px rgba(0, 0, 0, 1);
        color: #ffffff;
    }
`;

const FrequentlyAskedQuestions = () => {
    return (
        <SectionContainer>
            <Heading>
                <span>Frequently</span> Asked Questions
            </Heading>
            <InfoText>
                Still you have any questions? Contact our Team via support@yourbank.com
            </InfoText>
            <FAQGrid>
                <FAQBox>
                    <Question>How do I open an account with YourBank?</Question>
                    <Answer>
                        Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.
                    </Answer>
                </FAQBox>
                <FAQBox>
                    <Question>What documents do I need to provide to apply for a loan?</Question>
                    <Answer>
                        The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.
                    </Answer>
                </FAQBox>
            </FAQGrid>
            <LoadButton>Load All FAQs &#9662;</LoadButton>
        </SectionContainer>
    );
};

export default FrequentlyAskedQuestions;