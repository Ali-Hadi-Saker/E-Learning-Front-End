import React from "react"; 
import './style.css'
import { Link, useNavigate   } from "react-router-dom";
import { useState } from "react";
import axios from "axios"



const Login = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const handleChange = (e)=>{
        const {name, value} = e.target
        if(name === 'email') setEmail(value)
        if(name === 'password') setPassword(value)
    }

    const fetchUser = async (email, password)=>{
        try {
            const {data} = await axios.post('http://localhost:8080/users/login', {
                email,
                password
            })
            return data
        } catch (error) {
            console.log(error);
        }
    }
    const handleSubmit = async()=>{
        try {
            const data = await fetchUser(email, password)
            console.log(data);
            if(data.message === 'success'){
                const token = data.token
                localStorage.setItem('token',token)
                if(data.user.role === 'admin'){
                    navigate('/admin')
                }else{
                    navigate('/home')
                }
                
            }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <div className="flex column page center ">
            <h1>login page</h1>
            <div className="flex column center auth-box">
            <input type="text" 
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                        value={email}/>
                <input type="password" 
                        name="password"
                        placeholder="password"
                        onChange={handleChange}
                        value={password}
                        />

                <button onClick={handleSubmit}>Login</button>
                <p className="signup-link">Don t have an account?{"  "}
                <Link to="/">Signup here</Link>
                </p>

            </div>

        </div>
    )
}


export default Login