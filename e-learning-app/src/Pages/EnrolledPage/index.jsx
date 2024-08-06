import axios from "axios"
import React,{ useEffect } from "react"

const EnrolledPage = ()=>{

    const fetchUser = async()=>{
        try{
            const token = localStorage.getItem('token')
            const {data} = await axios.get('http://localhost:8080/classes/enrolled',{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
                
            })
            console.log(data)
            return data
        }catch(e){
            console.log(e);
        }
    }

    useEffect(()=>{
        fetchUser()
    },[])
    return(
        <div>
            <h1>enrolled classes</h1>
        </div>
    )
}

export default EnrolledPage