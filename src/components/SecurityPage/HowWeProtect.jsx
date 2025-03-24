import React from "react";
import styled from "styled-components";

import gradientBackground from "../../assets/abstract-design/gradient-background.png";
import secureIcon from "../../assets/icons/secure-icon.png";
import authIcon from "../../assets/icons/auth-icon.png";
import fraudIcon from "../../assets/icons/fraud-icon.png";
import mobileIcon from "../../assets/icons/mobile-icon.png";

const SectionContainer = styled.section`
    margin: auto;
    background-color: #1c1c1c;
    border-radius: 20px;
    padding: 40px 30px;
    color: #b3b3b3;
    width: 1000px;
`;

const HeadingBox = styled.div`
    padding: 20px 10px;
    margin-bottom: 40px;
`;

const Heading = styled.h2`
    color: #ffffff;
    text-align: left;
    font: inherit;
    font-size: 36px;
    font-weight: bold;
    margin-bottom: -10px;

    span {
        color: #caff33;
    }
`;

const InfoText = styled.p`
    text-align: left;
    font: inherit;
    font-size: 14px;
    margin-bottom: 0;
`;

const BigBox = styled.div`
    background: url(${gradientBackground}) center/cover no-repeat;
    border-radius: 20px;
    padding: 40px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`;

const SmallBox = styled.div`
    background: url(${gradientBackground}) center/cover no-repeat;
    opacity: 0.8;
    border-radius: 10px;
    padding: 20px;
    border: 1px solid #262626;
`;

const TitleBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

const Icon = styled.img`
    width: 80px;
    height: 80px;
    margin-right: 20px;
`;

const Title = styled.h3`
  color: #ffffff;
    font:inherit;
    font-weight: bold;
    font-size: 20px;
  margin: 0;
`;

const HowWeProtect = () => {
    return (
        <SectionContainer>
            <HeadingBox>
                <Heading>How We <span>Protect You</span></Heading>
                <InfoText>
                    At YourBank, we prioritize the security and confidentiality of your financial information. Our
                    state-of-the-art encryption technology and stringent data protection measures ensure your assets and
                    transactions are safeguarded at all times.
                </InfoText>
            </HeadingBox>
            <BigBox>
                <SmallBox>
                    <TitleBox>
                        <Icon src={secureIcon} alt="Secure Online Banking Platform" />
                        <Title>Secure Online Banking Platform</Title>
                    </TitleBox>
                    <p style={{font:"inherit",fontSize:"14px"}}>
                        Our online banking platform is built with multiple layers of security to safeguard your
                        information. We utilize industry-standard encryption protocols to ensure that your data
                        remains confidential and protected during transmission.
                    </p>
                </SmallBox>
                <SmallBox>
                    <TitleBox>
                        <Icon src={authIcon} alt="Multi-Factor Authentication" />
                        <Title>Multi-Factor Authentication</Title>
                    </TitleBox>
                    <p style={{font:"inherit",fontSize:"14px"}}>
                        To enhance the security of your online banking experience, we employ multi-factor
                        authentication. This additional layer of security requires you to provide multiple pieces of
                        identification, such as a password and a one-time verification code, to access your account.
                    </p>
                </SmallBox>
                <SmallBox>
                    <TitleBox>
                        <Icon src={fraudIcon} alt="Fraud Monitoring" />
                        <Title>Fraud Monitoring</Title>
                    </TitleBox>
                    <p style={{font:"inherit",fontSize:"14px"}}>
                        We have sophisticated fraud detection systems in place to monitor your accounts for any
                        suspicious activities. Our dedicated team works around the clock to detect and prevent
                        unauthorized transactions, providing you with peace of mind.
                    </p>
                </SmallBox>
                <SmallBox>
                    <TitleBox>
                        <Icon src={mobileIcon} alt="Secure Mobile Banking" />
                        <Title>Secure Mobile Banking</Title>
                    </TitleBox>
                    <p style={{font:"inherit",fontSize:"14px"}}>
                        Our mobile banking app is designed with the same level of security as our online banking
                        platform. You can confidently access your accounts, make transactions, and manage your
                        finances on the go, knowing that your information is protected.
                    </p>
                </SmallBox>
            </BigBox>
        </SectionContainer>
    );
};

export default HowWeProtect;