// src/components/ForgotPasswordContent.jsx
import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/abstract-design/background.png";
import abstractImage from "../assets/abstract-design/abstract.png";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import faceImg from "../assets/icons/facebook-icon.png"
import googleImg from "../assets/icons/Google-icon.png"
import appleImg from "../assets/icons/apple-icon.png"
import { Link } from "react-router";

const Container = styled.div`
  display: flex;
  
  justify-content: center;
//   padding: 4rem 2rem;
//   background-color: #101010; /* overall page background */
  height:100vh;
`;

const Box = styled.div`
  position: relative;
  font-family: 'Lexend', sans-serif;
  width: 100%;
  height: 500px;
  max-width: 850px;
  padding: 1.5rem 2rem;
  border: 1px solid #262626; /* 1px stroke */
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
  background-color: #1c1c1c; /* solid background color */
`;

// Background overlay: covers the box with the background image at 30% opacity.
const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${backgroundImage}) center/cover no-repeat;
  opacity: 1;
  z-index: 1;
`;

// Abstract design overlay: positioned at top right with 30% opacity.
const AbstractOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;  /* adjust width as needed */
  height: 200px; /* adjust height as needed */
  background: url(${abstractImage}) center/contain no-repeat;
  opacity: 1;
  z-index: 2;
`;

// Content that appears above the overlays
const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;

`;

const Title = styled.h2`
  color: #CAFF33;
  font: inherit;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #BFBFBF;
  font: inherit;
  font-size: 0.8rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-left: 2px;
  margin: right: 2px;
`;


const Input = styled.input`
  width: 100%;
  font: inherit;
  max-width: 500px;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
  border-radius: 20px;
  border: 1px solid #333;
  background-color: #222;
  color: #fff;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  width: 20rem;
  background-color: #CAFF33;
  color: #1c1c1c;
  font:inherit;
  border: none;
  
  padding: 0.75rem 2rem;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #1c1c1c;
    color: #CAFF33;
    border: 1px solid #CAFF33;
  }
`;

const Login = () => {
  return (
    <>
      <Container className="flex flex-col">
    <div className="mt-5 mx-auto w-[95%]">
    <Navbar />
    </div>
  
        <Box>
          <BackgroundOverlay />
          <AbstractOverlay />
          <ContentWrapper>
            <Title>LogIn</Title>
            <Subtitle>
            Welcome back! Please log in to access your account
            </Subtitle>
            <Form className="flex gap-4">
              <Input type="email" id="email" placeholder="Enter your Email" />
              <Input type="email" id="email" placeholder="Enter your Password" />
            </Form>
            <div className="btn flex flex-col items-center gap-4">
                <Link to="/Forgot-password"><u> Forgot Password </u></Link>
              <Button type="submit">Login</Button>
              <Button type="submit" style={{backgroundColor: "#1c1c1c", color:"white"}}>Signup</Button>
              </div>
                <div className="cont-footer flex flex-col justify-center items-center pt-2">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width:"45%"}}>
                        <hr style={{ flex: 1, width:"50%", border: 'none', borderTop: '1px solid #ccc' }} />
                        <span style={{ margin: '0 10px' }}>or Continue with</span>
                <hr style={{ flex: 1, border: 'none', borderTop: '1px solid #ccc' }} />
                </div>

                <div className="flex items-center justify-center gap-5 p-5 pb-2">
                    <img src={googleImg} alt="" className="h-[60px]"/>
                    <img src={faceImg} alt="" className="h-[60px]" />
                    <img src={appleImg} alt="" className="h-[60px]" />
                </div>
            </div>
          </ContentWrapper>
        </Box>
      </Container>
      
        </>
  );
};

export default Login;