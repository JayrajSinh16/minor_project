// src/pages/Forgot.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ForgotPasswordContent from "../components/ForgotPage/ForgotPasswordComponent";

const Forgot = () => {
    return (
        <>
            <br/>
            <Navbar></Navbar>
            <ForgotPasswordContent></ForgotPasswordContent>
            <Footer></Footer>
        </>
    );
};

export default Forgot;
