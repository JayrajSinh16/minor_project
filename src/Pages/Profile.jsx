// src/pages/Profile.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProfileContent from "../components/ProfilePage/ProfileContent";

const Profile = () => {
    return (
        <>
            <br/>
            <Navbar></Navbar>
            <ProfileContent></ProfileContent>
            <Footer></Footer>
        </>
    );
};

export default Profile;
