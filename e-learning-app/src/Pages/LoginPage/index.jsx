import React from "react"; 
import './style.css'


const Login = ()=>{
    return(
        <div className="flex column page center ">
            <h1>login page</h1>
            <div className="flex column center auth-box">
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>

                <button>Login</button>

            </div>

        </div>
    )
}


export default Login