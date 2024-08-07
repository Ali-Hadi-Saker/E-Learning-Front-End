import axios from "axios"
import React,{ useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchingClasses, loadEnrolledClasses, errorOccured } from "../../redux/classesSlice/slice"
import ClassCard from "../../Components/ClassCard"

const EnrolledPage = ()=>{
    const dispatch = useDispatch()
    const {enrolledClasses, error, loading} = useSelector(state => state.classes)
    const fetchEnrolledClasses = async()=>{
        dispatch(fetchingClasses())
        try{
            const token = localStorage.getItem('token')
            const {data} = await axios.get('http://localhost:8080/classes/enrolled',{
                headers: {
                    'Authorization': `Bearer ${token}`
                }                
            })
            console.log(data)
            dispatch(loadEnrolledClasses(data.enrolledClasses))
        }catch(e){
            dispatch(errorOccured(e.message))
            console.log(e);
        }
    }

    useEffect(()=>{
        fetchEnrolledClasses()
        console.log(enrolledClasses)
    },[dispatch])

    const handleDownload =()=>{
        console.log("download file")
    }
    return(
        <div className="flex column">
            <h1>enrolled course list</h1>
            <div className="flex">
            {
                enrolledClasses.map((classItem)=>(
                    <ClassCard classData={classItem} text={'withdraw'} color={'red-bg'} onDownloadClick={()=>handleDownload()}/>
                ))
            }
            </div>
        </div>
    )
    
}

export default EnrolledPage