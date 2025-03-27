
import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/abstract-design/background.png";
import abstractImage from "../assets/abstract-design/abstract.png";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  
  justify-content: center;
  height:100vh;
`;

const Box = styled.div`
  position: relative;
  font-family: 'Lexend', sans-serif;
  width: 100%;
  height: 575px;
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

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1.5rem; 
`;
const Input = styled.input`
  width: 100%;
  font: inherit;
  max-width: 500px;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
  border-radius: 150px;
  border: 1px solid #333;
  background-color: #222;
  color: #fff;
  margin-bottom: 1.5rem;
`;
const Video = styled.video`
  width: 100%;
  max-width: 100%; /* Full width */
  min-height:300px
  height: auto;
  margin-bottom: 1.5rem;
  border-radius: 8px; /* Rounded corners */
  border: 1px solid #333; /* Border for video */
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
const ForgotPasswordLink = styled(Link)`
  color: #BFBFBF;
  text-decoration: underline;
  margin-bottom: 1.5rem; 
`;





const VideoPassword = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Box>
        <BackgroundOverlay />
          <AbstractOverlay />
          <ContentWrapper>
          <Title>Video Password</Title>
          <Subtitle>Welcome back! Please enter video password for your account.</Subtitle>
          <div className="grid grid-cols-2 gap-x-3">          
            <Video controls>
            <source src="path_to_your_video.mp4" type="video/mp4" />
          </Video>
          <div className="my-auto w-[85%] mx-auto">
          <InputWrapper>
            <Input type="text" placeholder="Enter your Password" />
            <ForgotPasswordLink to="/Forgot-password">Forgot Password?</ForgotPasswordLink>
          </InputWrapper>
          </div>
          </div>

          <Button type="submit">Done</Button>
          </ContentWrapper>
        </Box>
      </Container>
    </>
  );
}

export default VideoPassword;

