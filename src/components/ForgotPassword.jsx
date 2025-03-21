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
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #bbb;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #ccc;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid #333;
  background-color: #222;
  color: #fff;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #d1fa00;
  color: #111;
  font-weight: bold;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 4px;
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
            Forgot your password? Don’t worry, we’ll help you reset it.
          </Subtitle>
          <Form>
            <Label htmlFor="email">Enter your Email</Label>
            <Input type="email" id="email" placeholder="yourname@example.com" />
            <Button type="submit">Send Mail</Button>
          </Form>
        </ContentWrapper>
      </Box>
    </Container>
  );
};

export default ForgotPasswordContent;
