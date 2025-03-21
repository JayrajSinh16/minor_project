import React from "react";
import Navbar from "./components/Navbar";
import ForgotPassword from "./components/ForgotPassword";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <div style={{
                backgroundColor: "#101010",
            }}>
                <br/>
                <Navbar/>
                <ForgotPassword/>
                <Footer/>
            </div>
        </>
    );
};


export default App;
