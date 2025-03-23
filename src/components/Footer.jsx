// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";

// Example icon imports:
import mailIcon from "../assets/icons/icon-mail.svg";
import phoneIcon from "../assets/icons/icon-phone.svg";
import locationIcon from "../assets/icons/icon-location.svg";
import fbIcon from "../assets/icons/icon-facebook.svg";
import twitterIcon from "../assets/icons/icon-twitter.svg";
import instaIcon from "../assets/icons/icon-instagram.svg";
import logo from "../assets/icons/logo.svg";

const FooterContainer = styled.footer`
    background-color: #1c1c1c;
    padding: 30px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #bbb;
`;

const TopSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 1000px;
    margin-bottom: 30px;
`;

const Logo = styled.img`
    height: 35px;
    margin-bottom: 10px;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 30px;
`;

const NavItem = styled.a`
    color: #E4E4E7;
    font: inherit;
    text-decoration: none;
`;

const ContactRow = styled.div`
    display: flex;
    align-items: center;
    gap: 40px;
    position: relative;
    padding: 10px 0;
    width: 100%;
    justify-content: center;
`;

const HRContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    overflow: hidden;

    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        background: linear-gradient(
                to right,
                transparent,
                #262626,
                transparent
        );
    }
`;

const ContactItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    color: #bbb;
    font-size: 0.95rem;
`;

const ContactIcon = styled.img`
    width: 18px;
    height: 18px;
`;

const CapsuleArea = styled.div`
    background-color: #1a1a1a;
    border: 1px solid #262626;
    border-radius: 100px;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: 1200px;
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 20px;
`;

const SocialIcon = styled.a`
    width: 30px;
    height: 30px;
    display: block;

    img {
        width: 100%;
        height: 100%;
    }
`;

// A container for the "All rights reserved" text, T&C, etc.
const RightsRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    color: #B3B3B3;
    font-size: 0.9rem;
`;

const Divider = styled.span`
    margin: 0 5px;
    color: #444;
`;

const Footer = () => {
    return (
        <FooterContainer>
            {/* Top section with bank name, nav links, contact row */}
            <TopSection>
                <Logo src={logo} alt="YorkBank Logo" />
                <NavLinks>
                    <NavItem href="#">Home</NavItem>
                    <NavItem href="#">Careers</NavItem>
                    <NavItem href="#">About</NavItem>
                    <NavItem href="#">Security</NavItem>
                </NavLinks>
                <ContactRow>
                    <HRContainer />
                    <ContactItem>
                        <ContactIcon src={mailIcon} alt="Mail" />
                        hello@skillbridge.com
                    </ContactItem>
                    <ContactItem>
                        <ContactIcon src={phoneIcon} alt="Phone" />
                        +91 9181232509
                    </ContactItem>
                    <ContactItem>
                        <ContactIcon src={locationIcon} alt="Location" />
                        Somewhere in the World
                    </ContactItem>
                    <HRContainer />
                </ContactRow>
            </TopSection>

            <CapsuleArea>
                <SocialIcons>
                    <SocialIcon href="https://facebook.com">
                        <img src={fbIcon} alt="Facebook" />
                    </SocialIcon>
                    <SocialIcon href="https://twitter.com">
                        <img src={twitterIcon} alt="Twitter" />
                    </SocialIcon>
                    <SocialIcon href="https://instagram.com">
                        <img src={instaIcon} alt="Instagram" />
                    </SocialIcon>
                </SocialIcons>

                <RightsRow>
                    <span>YourBanK © All Rights Reserved</span>
                    <Divider>|</Divider>
                    <span>Privacy Policy</span>
                    <Divider>|</Divider>
                    <span>Terms of Service</span>
                </RightsRow>
            </CapsuleArea>
        </FooterContainer>
    );
};

export default Footer;
