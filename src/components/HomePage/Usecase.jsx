import React from "react";
import styled from "styled-components";
import personalFinanceIcon from "../../assets/icons/personal-finance.svg";
import savingIcon from "../../assets/icons/savings.svg";
import home_owner from "../../assets/icons/homeownership.svg";
import educationIcon from "../../assets/icons/education.svg";
import startupsIcon from "../../assets/icons/startups.svg";
import cashFlowIcon from "../../assets/icons/cash-flow.svg";
import businessExpansionIcon from "../../assets/icons/business-expansion.svg";
import paymentSolutionsIcon from "../../assets/icons/payment-solutions.svg";
import abstractImage from "../../assets/abstract-design/abstract.png";

const SectionContainer = styled.section`
    padding: 40px;
    color: #b3b3b3;
    width: 80%;
    margin: 40px auto;
`;

const Title = styled.h2`
    color: #caff33;
    font: inherit;
    font-weight: 600;
    font-size: 36px;
    text-align: left;
    margin-bottom: -10px;
`;

const Description = styled.p`
    text-align: left;
    width: 800px;
    font: inherit;
    font-size: 14px;
    font-weight: lighter;
    margin-bottom: 40px;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
`;

const IconBox = styled.div`
    background-color: #1c1c1c;
    border-radius: 10px;
    padding: 20px;
    position: relative;
`;

const AbstractImage = styled.div`
    background: url(${abstractImage}) no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    ${props => props.variant === 'first' ? 'left: 0;' : 'right: 0;'}
    width: 200px;
    height: 200px;
    opacity: 1;
    z-index: 0;
    transform: ${props => props.variant === 'first' ? 'rotate(-90deg)' : 'none'};
`;

const IconGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    position: relative;
    z-index: 1;
`;

const SmallIconBox = styled.div`
    background-color: #1a1a1a;
    border: 1px solid #262626;
    border-radius: 20px;
    padding: 20px;
    text-align: center;
`;

const Icon = styled.img`
    width: 60px;
    height: 60px;
    margin-bottom: 10px;
`;

const UseCaseTitle = styled.h3`
    color: #ffffff;
    font:inherit;
    font-size: 18px;
    margin-bottom: 10px;
`;

const TextBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 10px 20px;
    background-color: #1c1c1c;
    border-radius: 10px;

    h3 {
        color: #ffffff;
        font: inherit;
        font-size: 28px;
        font-weight: 600;
        margin-bottom: 0;
    }

    p {
        font: inherit;
        font-size: 16px;
        font-weight: lighter;
    }
`;

const StatSection = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`;

const Stat = styled.div`
    text-align: center;
    
    p{
        font:inherit;
    }
`;

const StatValue = styled.div`
    color: #caff33;
    font:inherit;
    font-size: 24px;
    font-weight: bold;
`;

const LearnMoreButton = styled.button`
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #1a1a1a;
    color: #ffffff;
    border: 1px solid #262626;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold;
    align-self: flex-start;
`;

const UseCasesSection = () => {
    return (
        <SectionContainer>
            <Title>Use Cases</Title>
            <Description>
                At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of
                financial solutions.
            </Description>
            <GridContainer>
                <IconBox>
                    <AbstractImage variant="first"/>
                    <IconGrid>
                        <SmallIconBox>
                            <Icon src={personalFinanceIcon} alt="Managing Personal Finances"/>
                            <UseCaseTitle>Managing Personal Finances</UseCaseTitle>
                        </SmallIconBox>
                        <SmallIconBox>
                            <Icon src={savingIcon} alt="Saving for the Future"/>
                            <UseCaseTitle>Saving for the Future</UseCaseTitle>
                        </SmallIconBox>
                        <SmallIconBox>
                            <Icon src={home_owner} alt="Homeownership"/>
                            <UseCaseTitle>Homeownership</UseCaseTitle>
                        </SmallIconBox>
                        <SmallIconBox>
                            <Icon src={educationIcon} alt="Education Funding"/>
                            <UseCaseTitle>Education Funding</UseCaseTitle>
                        </SmallIconBox>
                    </IconGrid>
                </IconBox>
                <TextBox>
                    <h3>For Individuals</h3>
                    <p>
                        For individuals, our mortgage services pave the way to homeownership, and our flexible personal
                        loans provide vital support during various life milestones. We also prioritize retirement
                        planning, ensuring a financially secure future for our customers.
                    </p>
                    <StatSection>
                        <Stat>
                            <StatValue>78%</StatValue>
                            <p>Secure Retirement Planning</p>
                        </Stat>
                        <Stat>
                            <StatValue>63%</StatValue>
                            <p>Manageable Debt Consolidation</p>
                        </Stat>
                        <Stat>
                            <StatValue>91%</StatValue>
                            <p>Reducing Financial Burdens</p>
                        </Stat>
                    </StatSection>
                    <LearnMoreButton>Learn More</LearnMoreButton>
                </TextBox>
                <TextBox>
                    <h3>For Businesses</h3>
                    <p>
                        For businesses, we empower growth with working capital solutions that optimize cash flow, and
                        our tailored financing options fuel business expansion. Whatever your financial aspirations,
                        YourBank is committed to providing the right tools and support to achieve them.
                    </p>
                    <StatSection>
                        <Stat>
                            <StatValue>65%</StatValue>
                            <p>Cash Flow Management</p>
                        </Stat>
                        <Stat>
                            <StatValue>70%</StatValue>
                            <p>Drive Business Expansion</p>
                        </Stat>
                        <Stat>
                            <StatValue>45%</StatValue>
                            <p>Streamline Payroll Processing</p>
                        </Stat>
                    </StatSection>
                    <LearnMoreButton>Learn More</LearnMoreButton>
                </TextBox>
                <IconBox>
                    <AbstractImage/>
                    <IconGrid>
                        <SmallIconBox>
                            <Icon src={startupsIcon} alt="Startups and Entrepreneurs"/>
                            <UseCaseTitle>Startups and Entrepreneurs</UseCaseTitle>
                        </SmallIconBox>
                        <SmallIconBox>
                            <Icon src={cashFlowIcon} alt="Cash Flow Management"/>
                            <UseCaseTitle>Cash Flow Management</UseCaseTitle>
                        </SmallIconBox>
                        <SmallIconBox>
                            <Icon src={businessExpansionIcon} alt="Business Expansion"/>
                            <UseCaseTitle>Business Expansion</UseCaseTitle>
                        </SmallIconBox>
                        <SmallIconBox>
                            <Icon src={paymentSolutionsIcon} alt="Payment Solutions"/>
                            <UseCaseTitle>Payment Solutions</UseCaseTitle>
                        </SmallIconBox>
                    </IconGrid>
                </IconBox>
            </GridContainer>
        </SectionContainer>
    );
};

export default UseCasesSection;