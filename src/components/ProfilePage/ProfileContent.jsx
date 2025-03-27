import React from "react";
import styled from "styled-components";
import profileImage from "../../assets/images/profile-picture.png";
import abstractBackground from "../../assets/abstract-design/abstract-2.png";
import backgroundImage from "../../assets/abstract-design/background.png";

const ContentContainer = styled.div`
    background: url(${backgroundImage}) center/cover no-repeat;
    border-radius: 20px;
    padding: 40px 50px;
    width: 800px;
    margin: 40px auto;
    position: relative;
`;

const AbstractImage = styled.div`
    background: url(${abstractBackground}) top right no-repeat;
    background-size: contain;
    position: absolute;
    top: 3px;
    right: 3px;
    width: 250px;
    height: 250px;
    opacity: 1;
    z-index: 0;
`;

const Title = styled.h2`
    color: #caff33;
    font: inherit;
    font-weight: bold;
    font-size: 36px;
    text-align: center;
    margin-top: -5px;
    margin-bottom: 20px;
    position: relative;
    z-index: 1;
`;

const ProfileGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 100px;
    align-items: start;
    position: relative;
    z-index: 1;
`;

const ProfileImageContainer = styled.div`
    text-align: center;
`;

const ProfileImage = styled.img`
    width: 220px;
    height: 220px;
    border-radius: 50%;
    margin-bottom: 20px;
`;

const Button = styled.button`
    background-color: transparent;
    color: #ffffff;
    border: 1px solid #caff33;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    font: inherit;
    font-weight: lighter;
    font-size: 14px;
    margin-top: 10px;
    width: 100%;
`;

const Form = styled.form`
    display: flex;
    width: 400px;
    flex-direction: column;
    gap: 20px;
    
`;

const FormRow = styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-between;
`;

const Input = styled.input`
    flex: 1;
    padding: 14px;
    border-radius: 50px;
    border: 1px solid #333;
    background-color: #1a1a1a;
    color: #b3b3b3;
`;
const Input1 = styled(Input)`
    width:90%;
`;


const EditButton = styled(Button)`
    background-color: transparent;
    color: #ffffff;
    border: 1px solid #caff33;
    border-radius: 20px;
    padding: 10px 20px;
    cursor: pointer;
    font: inherit;
    font-weight: lighter;
    font-size: 14px;
    margin-top: 10px;
    width: 70%;
`;
const FormButton = styled(EditButton)`
    
    border: 1px solid #caff33;
    margin-top: 0;
    width: 150px;
`;





const ProfileContent = () => {
    return (
        <ContentContainer>
            <AbstractImage />
            <Title>User Profile</Title>
            <ProfileGrid>
                <ProfileImageContainer>
                    <ProfileImage src={profileImage} alt="Profile" />
                    <EditButton>Edit Profile Photo</EditButton>
                </ProfileImageContainer>
                <Form>
                    <FormRow>
                        <Input1 type="text" placeholder="First Name" />
                        <Input1 type="text" placeholder="Last Name" />
                    </FormRow>
                    <Input type="email" placeholder="Email" />
                    <Input type="password" placeholder="Password" />
                    <Button>Edit Video Password</Button>
                    <FormRow>
                        <FormButton>Edit Info</FormButton>
                        <FormButton>Save Changes</FormButton>
                    </FormRow>
                </Form>
            </ProfileGrid>
        </ContentContainer>
    );
};

export default ProfileContent;