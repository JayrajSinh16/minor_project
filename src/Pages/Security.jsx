// src/pages/Security.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SecurityInfo from "../components/SecurityPage/SecurityInfo";
import HowWeProtect from "../components/SecurityPage/HowWeProtect";

const Security = () => {
    return (
        <>
            <br/>
            <Navbar></Navbar>
            <SecurityInfo></SecurityInfo>
            <HowWeProtect></HowWeProtect>
            <Footer></Footer>
        </>
    );
};

export default Security;
