// src/components/Footer.jsx
import React from "react";
import styled from "styled-components";

// Import your icons:
import mailIcon from "../assets/icon-mail.svg";
import phoneIcon from "../assets/icon-phone.svg";
import locationIcon from "../assets/icon-location.svg";
import fbIcon from "../assets/icon-facebook.svg";
import twitterIcon from "../assets/icon-twitter.svg";
import instaIcon from "../assets/icon-instagram.svg";
import logo from "../assets/logo.svg";


const FooterContainer = styled.footer`
  background-color: #1c1c1c;
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

/*
   The top portion: Bank logo, nav links,
   and the contact row with horizontal line
*/
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
  height: 50px;
  margin-bottom: 10px;
`;


const NavLinks = styled.div`
  display: flex;
  gap: 30px;
`;

const NavItem = styled.a`
  color: #d1fa00;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
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

/*
   This is the horizontal line with fading corners.
   We'll use a pseudo-element for the line,
   with a gradient so edges fade out.
*/
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

/*
   The capsule area: #1a1a1a background,
   1px border #262626, 20px radius, containing
   social icons, all rights reserved, T&C, etc.
*/
const CapsuleArea = styled.div`
  background-color: #1a1a1a;
  border: 1px solid #262626;
  border-radius: 20px;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 1000px;
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

const FooterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  color: #bbb;
  font-size: 0.9rem;
`;

const Divider = styled.span`
  margin: 0 8px;
  color: #444;
`;

const Footer = () => {
    return (
        <FooterContainer>
            {/* Top section with logo, nav links, contact row */}
            <TopSection>
                {/* If you have a real logo file, you can <img src={logo} alt="YourBank" /> */}
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
                </ContactRow>
            </TopSection>

            {/* Capsule area for social icons & T&C */}
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

                <FooterRow>
                    <span>YourBanK © All Rights Reserved</span>
                    <Divider>|</Divider>
                    <span>Privacy Policy</span>
                    <Divider>|</Divider>
                    <span>Terms of Service</span>
                </FooterRow>
            </CapsuleArea>
        </FooterContainer>
    );
};

export default Footer;
