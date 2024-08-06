import React from "react"; 
import './style.css'
import { Link } from "react-router-dom";



const Login = ()=>{
    return(
        <div className="flex column page center ">
            <h1>login page</h1>
            <div className="flex column center auth-box">
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>

                <button>Login</button>
                <p className="signup-link">Don t have an account?{"  "}
                <Link to="/">Signup here</Link>
                </p>

            </div>

        </div>
    )
}


export default Login