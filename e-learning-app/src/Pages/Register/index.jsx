import React from "react"; 
import './style.css'
import { Link } from "react-router-dom";
import { useState } from "react";


const Register = ()=>{
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (e)=>{
        console.log(e.target.value)
    }
    const handleSubmit = ()=> {console.log(submit)}
    return(
        <div className="flex column page center ">
            <h1>register page</h1>
            <div className="flex column center auth-box">
                <input type="text" 
                        placeholder="username"
                        onChange={handleChange}
                        value={username}/>
                <input type="text" 
                        placeholder="email"
                        onChange={handleChange}
                        value={email}/>
                <input type="password" 
                        placeholder="password"
                        onChange={handleChange}
                        value={password}/>

                <button onClick={handleSubmit}>Sign up</button>
                <p className="login-link">already have an account{"  "}
                <Link to="/login">login here</Link>
                </p>

            </div>

        </div>
    )
}


export default Register