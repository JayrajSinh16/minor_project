import React from "react";
import styled from "styled-components";
import backgroundImage from "../assets/abstract-design/background.png";
import abstractImage from "../assets/abstract-design/abstract.png";
import Navbar from "../components/Navbar";

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #0d0d0d;
`;

const Box = styled.div`
  position: relative;
  font-family: 'Lexend', sans-serif;
  width: 100%;
  max-width: 900px;
  padding: 2rem;
  border-radius: 12px;
  overflow: hidden;
  margin: auto;
  background-color: #1c1c1c;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

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

const AbstractOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  background: url(${abstractImage}) center/contain no-repeat;
  opacity: 1;
  z-index: 2;
`;


const ContentWrapper = styled.div`
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
`;

const Title = styled.h2`
  color: #CAFF33;
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  color: #BFBFBF;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;

  padding: 0.75rem 1rem;
  border-radius: 30px;
  border: 1px solid #333;
  background-color: #222;
  color: #fff;
  margin-bottom: 1rem;
`;

const Video = styled.video`
  width: 100%;
  max-width: 400px;
  height: auto;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  border: 1px solid #333;
`;

const Button = styled.button`
  width: 15rem;
  background-color: #CAFF33;
  color: #1c1c1c;
  font: inherit;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  position: absolute;
  bottom: 2rem;
  right: 2rem;
  &:hover {
    background-color: #1c1c1c;
    color: #CAFF33;
    border: 1px solid #CAFF33;
  }
`;

const ResetButton = styled(Button)`
  background-color: #333;
  color: #fff;
  margin-bottom: 1.5rem;
  position: static;
  &:hover {
    background-color: #555;
    color: #fff;
  }
`;

const GridBox = styled.div`
  width: 80px;
  height: 80px;
  background-color: #D9D9D9;
  border-radius: 8px;
  margin: 0.5rem;
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
            <Subtitle>Welcome back! Please set video password for your account.</Subtitle>
            <div className="grid grid-cols-2 gap-8 items-start">
              <div className="flex flex-col ">
                <Video controls>
                  <source src="path_to_your_video.mp4" type="video/mp4" />
                </Video>
                <div className="flex flex-col  mt-4 w-[300px]">
                  <Input type="password" placeholder="Enter your Password" />
                  <Input type="password" placeholder="Confirm your Password" />
                  <ResetButton type="button" className="w-[260px]">Clear</ResetButton>
                </div>
              </div>
              <div className="flex justify-center items-start">
                <div className="grid grid-cols-3 gap-4">
                  <GridBox />
                  <GridBox />
                  <GridBox />
                  <GridBox />
                  <GridBox />
                  <GridBox />
                </div>
              </div>
            </div>
            <Button type="submit">Done</Button>
          </ContentWrapper>
        </Box>
      </Container>
    </>
  );
};

export default VideoPassword;