import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg"; // Import your SVG logo

const FooterContainer = styled.footer`
  background: black;
  color: white;
  padding: 20px 50px;
  text-align: center;
`;

const Logo = styled.img`
  height: 40px;  // Adjust the size as needed
  margin-bottom: 10px;
`;

const Contact = styled.div`
  margin: 10px 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={logo} alt="YourBank Logo" />
      <p>Home | Careers | About | Security</p>
      <Contact>
        📧 hello@skillbridge.com | 📞 +91 9181232509 | 📍 Somewhere in the World
      </Contact>
      <p>© YourBanK All Rights Reserved | Privacy Policy | Terms of Service</p>
    </FooterContainer>
  );
};

export default Footer;
