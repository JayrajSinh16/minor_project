import React from "react";
import Navbar from "./components/Navbar";
import ForgotPassword from "./Pages/ForgotPassword";
import Footer from "./components/Footer";
import About from "./Pages/About";

const App = () => {
    return (
        <>
            <div style={{
                backgroundColor: "#101010",
            }}>
                <br/>
                <Navbar/>
                <About/>
                <Footer/>
            </div>
        </>
    );
};


export default App;
