import React from "react"; 
import './style.css'
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'


const Register = ()=>{
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const handleChange = (e)=>{
        const {name, value} = e.target
        if(name === 'name') setName(value)
        if(name === 'email') setEmail(value)
        if(name === 'password') setPassword(value)
    }

    const fetchUser = async (name, email, password)=>{
        try{
            const {data} = await axios.post('http://localhost:8080/users/register', {
                name,
                email,
                password
            })
            return data
        }catch(e){
            console.log(e)
        }
    }
    const handleSubmit = async()=> {
        try{
            const data = await fetchUser(name, email, password)
            console.log(data)
            if(data.message === 'success'){
                navigate('/login')
            }
        }catch(e){
            console.log(e)
        }
    }
    return(
        <div className="flex column page center ">
            <h1>register page</h1>
            <div className="flex column center auth-box">
                <input type="text" 
                        name="name"
                        placeholder="name"
                        onChange={handleChange}
                        value={name}/>
                <input type="text" 
                        name="email"
                        placeholder="email"
                        onChange={handleChange}
                        value={email}/>
                <input type="password" 
                        name="password"
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