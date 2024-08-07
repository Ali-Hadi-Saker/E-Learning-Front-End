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

    const handleDownload = async (classId, filename) => {
        try {
            const token = localStorage.getItem('token');
            const response = await axios.get(`http://localhost:8080/files/${classId}/download/${filename}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                responseType: 'blob', // ensures the response is treated as a file
            });
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename); // Set the filename
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (e) {
            console.error('Error during file download:', e.message);
        }
    };
    
    
    return(
        <div className="flex column">
            <h1>enrolled course list</h1>
            <div className="flex">
            {
                enrolledClasses.map((classItem)=>(
                    <ClassCard classData={classItem} text={'withdraw'} color={'red-bg'} onDownloadClick={()=>handleDownload(classItem._id, classItem.files[0].filename)}/>
                ))
            }
            </div>
        </div>
    )
    
}

export default EnrolledPage