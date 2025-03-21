import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg"; // Import your SVG logo

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 50px;
    background: black;
    color: #d1fa00;
    border-radius: 20px;
    
`;

const Logo = styled.img`
    height: 40px;  // Adjust the height as needed
`;

const NavLinks = styled.div`
    display: flex;
    gap: 20px;
`;

const NavItem = styled.a`
    color: white;
    text-decoration: none;
    font-size: 16px;
    &:hover {
        color: #d1fa00;
    }
`;

const Button = styled.button`
    background: #d1fa00;
    color: black;
    padding: 8px 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo src={logo} alt="YourBank Logo" />
            <NavLinks>
                <NavItem href="#">Home</NavItem>
                <NavItem href="#">Careers</NavItem>
                <NavItem href="#">About</NavItem>
                <NavItem href="#">Security</NavItem>
            </NavLinks>
            <div>
                <NavItem href="#">Sign Up</NavItem>
                <Button>Login</Button>
            </div>
        </NavbarContainer>
    );
};

export default Navbar;