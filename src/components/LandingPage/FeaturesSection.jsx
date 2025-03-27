import React from "react";
import styled from "styled-components";
import arrowIcon from "../../assets/icons/arrow.svg";

const SectionContainer = styled.section`
    padding: 20px 40px;
    border-radius: 20px;
    margin: 40px auto;
    width: 80%;
    color: #b3b3b3;
`;

const Title = styled.h2`
    color: #ffffff;
    font: inherit;
    font-size: 36px;
    margin-bottom: -10px;
`;

const Highlight = styled.span`
    color: #caff33;
`;

const Description = styled.p`
    margin-bottom: 20px;
    font: inherit;
    font-size: 16px;
    font-weight: lighter;
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    justify-items: start;
    gap: 10px;
`;

const ButtonBox = styled.div`
    display: flex;
    border-radius: 12px;
    background-color: #1C1C1C;
    padding: 10px 15px;
    height: 300px;
    width: 200px;
    flex-direction: column;
    gap: 10px;
`;

const FeatureButton = styled.button`
    background-color: #1a1a1a;
    color: #ffffff;
    margin: auto;
    width: 150px;
    border: 1px solid #b3b3b3;
    border-radius: 20px;
    padding: 10px;
    cursor: pointer;
    font: inherit;
    font-weight: 500;
    font-size: 14px;
    text-align: center;

    &:hover {
        color: #caff33;
    }
`;

const FeaturesGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-items: start;
    margin-left: -150px;
`;

const FeatureBox = styled.div`
    background-color: #262626;
    border-radius: 10px;
    width: 350px;
    padding: 10px 20px;
    position: relative;
    transition: box-shadow 0.3s ease;

    &:hover {
        box-shadow: 0 4px 8px rgba(202, 255, 51, 0.2);
    }
`;

const FeatureTitle = styled.h3`
    color: #ffffff;
    margin-bottom: 10px;
    display: flex;
    font:inherit;
    font-weight: 500;
    justify-content: space-between;
    align-items: center;
`;

const FeatureText = styled.p`
    font: inherit;
    font-size: 14px;
    color: #b3b3b3;
`;

const ArrowIcon = styled.img`
    width: 20px;
    height: 20px;
`;

const FeaturesSection = () => {
    return (
        <SectionContainer>
            <Title>
                Our <Highlight>Features</Highlight>
            </Title>
            <Description>
                Experience a host of powerful features at YourBank. Discover seamless online banking with robust
                financial tools and dedicated customer support.
            </Description>
            <GridContainer>
                <ButtonBox>
                    <FeatureButton>Online Banking</FeatureButton>
                    <FeatureButton>Financial Tools</FeatureButton>
                    <FeatureButton>Customer Support</FeatureButton>
                </ButtonBox>
                <FeaturesGrid>
                    <FeatureBox>
                        <FeatureTitle>
                            24/7 Account Access
                            <ArrowIcon src={arrowIcon} alt="Arrow"/>
                        </FeatureTitle>
                        <FeatureText>
                            Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online
                            banking platform. Check balances, transfer funds, and pay bills with ease.
                        </FeatureText>
                    </FeatureBox>
                    <FeatureBox>
                        <FeatureTitle>
                            Mobile Banking App
                            <ArrowIcon src={arrowIcon} alt="Arrow"/>
                        </FeatureTitle>
                        <FeatureText>
                            Stay connected to your finances on the go with our user-friendly mobile banking app. Easily
                            manage your accounts, deposit checks, and make payments from your smartphone or tablet.
                        </FeatureText>
                    </FeatureBox>
                    <FeatureBox>
                        <FeatureTitle>
                            Secure Transactions
                            <ArrowIcon src={arrowIcon} alt="Arrow"/>
                        </FeatureTitle>
                        <FeatureText>
                            Rest assured knowing that your transactions are protected by industry-leading security
                            measures. We employ encryption and multi-factor authentication to safeguard your financial
                            information.
                        </FeatureText>
                    </FeatureBox>
                    <FeatureBox>
                        <FeatureTitle>
                            Bill Pay and Transfers
                            <ArrowIcon src={arrowIcon} alt="Arrow"/>
                        </FeatureTitle>
                        <FeatureText>
                            Save time and avoid late fees with our convenient bill pay service. Set up recurring
                            payments or make one-time transfers between your accounts with just a few clicks.
                        </FeatureText>
                    </FeatureBox>
                </FeaturesGrid>
            </GridContainer>
        </SectionContainer>
    );
};

export default FeaturesSection;