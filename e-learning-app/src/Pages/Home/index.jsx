import React from "react";
import ClassList from "../../Components/ClassList";  
import NavBar from "../../Components/NavBar";


const Home = ()=>{
    return(
        <div className="flex column">
            <NavBar/>
            <h1>Home page</h1>
            <ClassList/>
        </div>
    )
}

export default Home