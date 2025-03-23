import React from "react";
import styled from "styled-components";
import logo from "../assets/icons/logo.svg"; // Import your SVG logo

const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 50px;
    background: #1a1a1a;
    color: #d1fa00;
    border-radius: 100px;
    border: 1px solid #262626;
    margin: 0px 90px 0px 90px;
`;

const Logo = styled.img`
    height: 30px;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 20px;
    font: inherit;
`;

const NavItem = styled.a`
    color: #FFFFFF;
    text-decoration: none;
    font: inherit;

    &:hover {
        color: #CAFF33;
    }
`;

const Button = styled.button`
    background: #CAFF33;
    color: #1c1c1c;
    padding: 8px 20px;
    border: 1px solid #CAFF33;
    cursor: pointer;
    font: inherit;
    margin: 0px 0px 0px 20px;
    border-radius: 20px;

    &:hover {
        background-color: #1c1c1c;
        color: #CAFF33;
        border: 1px solid #CAFF33;
    }
`;

const Navbar = () => {
    return (
        <NavbarContainer>
            <Logo src={logo} alt="YourBank Logo"/>
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