import React, { useEffect } from "react";
import ClassCard from "../ClassCard";
import axios from "axios";



const ClassList = ()=>{
    const fetchClasses = async()=>{
        try{
            const token = localStorage.getItem('token')
            const {data} = await axios.get('http://localhost:8080/classes/',{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(data)
        }catch(e){
            console.log(e)
        }        
    }
    useEffect(()=>{
        fetchClasses()
    },[])
    return(
        <div>
            <h1>course list</h1>
            <ClassCard title={'Class Title'} description={'Class description'} instractor={'Class instractor'}/>
        </div>
    )
}

export default ClassList