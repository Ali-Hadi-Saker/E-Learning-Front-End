import React, { useEffect } from "react";
import ClassCard from "../ClassCard";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux'
import { fetchingClasses, loadClasses, errorOccured } from "../../redux/classesSlice/slice";


const ClassList = ()=>{
    const dispatch = useDispatch()
    const {classes, loading, error} = useSelector(state => state.classes)

    const fetchClasses = async()=>{
        dispatch(fetchingClasses())
        try{
            const token = localStorage.getItem('token')
            const {data} = await axios.get('http://localhost:8080/classes/',{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch(loadClasses(data))
            console.log(data)
        }catch(e){
            dispatch(errorOccured(e.message))
            console.log(e)
        }        
    }
    useEffect(()=>{
        fetchClasses()
        console.log(classes[0]._id)

    },[dispatch])
    const handleEnroll =async(classId)=>{
        try{
            const token = localStorage.getItem('token')
            const {data} = await axios(`http://localhost:8080/classes/${classId}/enroll`, {
                headers:{
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(data)

        }catch(e){
            console.log(e)
        }
    }
    if (loading) {
        return <p>Loading classes...</p>;
    }

    if (error) {
        return <p>Error loading classes: {error}</p>;
    }
    return(
        <div className="flex column">
            <h1>course list</h1>
            <div className="flex">
            {
                classes.map((classItem)=>(
                    <ClassCard classData={classItem} text={'enroll'} onMousseClick={handleEnroll(classItem._id)}/>
                ))
            }
            </div>
        </div>
    )
}

export default ClassList