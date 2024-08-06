import React from "react";
import ClassList from "../../Components/ClassList";  
import NavBar from "../../Components/NavBar";
import enrolledPage from "../EnrolledPage";
import { Route, Routes } from "react-router-dom";

const Home = ()=>{
    return(
        <div className="flex column">
            <NavBar/> 
            <Routes>
                <Route path="enrolledClasses" element={<enrolledPage/>}/>
                <Route path="" element={<ClassList/>}/>
            </Routes>
        </div>
    )
}

export default Home