// src/components/ForgotPasswordContent.jsx
import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/background.png";
import abstractImage from "../assets/abstract.png";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: #101010; /* overall page background */
`;

const Box = styled.div`
  position: relative;
  font-family: 'Lexend', sans-serif;
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  border: 1px solid #444; /* 1px stroke */
  border-radius: 8px;
  overflow: hidden;
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
  color: #d1fa00;
  font-family: 'Lexend',sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #bbb;
  font-family: 'Lexend', sans-serif;
  font-weight: lighter;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 0.75rem 0.75rem 1rem;
  border-radius: 20px;
  border: 1px solid #333;
  background-color: #222;
  color: #fff;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  width: 20rem;
  //height: ;
  background-color: #d1fa00;
  color: #111;
  font-weight: bold;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #afff00;
  }
`;

const ForgotPasswordContent = () => {
  return (
    <Container>
      <Box>
        <BackgroundOverlay />
        <AbstractOverlay />
        <ContentWrapper>
          <Title>Forgot Password</Title>
          <Subtitle>
            Forgot your password ? Don’t worry, we’ll help you reset it.
          </Subtitle>
          <Form>
            <Input type="email" id="email" placeholder="Enter your Email" />
            <Button type="submit">Send Mail</Button>
          </Form>
        </ContentWrapper>
      </Box>
    </Container>
  );
};

export default ForgotPasswordContent;
