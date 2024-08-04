import React from "react"; 
import './style.css'


const RegisterPage = ()=>{
    return(
        <div className="flex column page center ">
            <h1>register page</h1>
            <div className="flex column center auth-box">
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>

                <button>Sign up</button>

            </div>

        </div>
    )
}


export default RegisterPage