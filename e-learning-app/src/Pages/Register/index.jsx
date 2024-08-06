import React from "react"; 
import './style.css'
import { Link } from "react-router-dom";


const Register = ()=>{
    return(
        <div className="flex column page center ">
            <h1>register page</h1>
            <div className="flex column center auth-box">
                <input type="text" placeholder="username"/>
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>

                <button>Sign up</button>
                <p className="login-link">already have an account{"  "}
                <Link to="/login">login here</Link>
                </p>

            </div>

        </div>
    )
}


export default Register