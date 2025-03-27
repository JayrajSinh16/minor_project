import React from "react";
import Profile from "./Pages/Profile";
import About from "./Pages/About";
import Security from "./Pages/Security";
import { BrowserRouter, Route, Routes } from "react-router";
import Login from "./Pages/Login";
import Forgot from "./Pages/Forgot";
import Signup from "./Pages/Signup";
import VideoPassword from "./Pages/videoPasswordLogin";
import VideoPasswordSetup from "./Pages/VideoPasswordSetup";
import VideoPasswordReset from "./Pages/VideoPasswordReset";


const App = () => {
    return (
        <>
            <div style={{
                backgroundColor: "#101010",
            }}>
                  
                 < BrowserRouter>


    <Routes>
      <Route path='/' element={<Profile/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Security' element={<Security/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Forgot-password' element={<Forgot/>}/>
      <Route path='/videoPassword' element={<VideoPassword/>}/>
      <Route path='/videoPasswordSetup' element={<VideoPasswordSetup/>}/>
      <Route path='/videoPasswordReset' element={<VideoPasswordReset/>}/>

    </Routes>
    </BrowserRouter>

  
            </div>
        </>
    );
};


export default App;
