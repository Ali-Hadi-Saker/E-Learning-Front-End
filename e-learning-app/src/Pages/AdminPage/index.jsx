import './style.css';
import React, { useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux'
import { fetchingClasses, loadClasses, errorOccured } from "../../redux/classesSlice/slice";
import ClassCard from '../../Components/ClassCard';

const AdminPage = () => {
    const dispatch = useDispatch()
    const {classes, loading, error, enrolledClasses} = useSelector(state => state.classes)
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

    },[dispatch])
    const handleDeleteClass = async(classId)=>{
        console.log('class delted')
        try{
            const token = localStorage.getItem('token')
            const response = await axios(`http://localhost:8080/classes/${classId}/delete`,{
                headers:{
                    Authorization: `Bearer ${token}`
                }
                
            })
            console.log(response.data.message)
        }catch(e){
            console.log(e)
        }
    }
    console.log(classes)

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <h2>All Classes</h2>
            <div className="section  ">
                
                {
                    classes.map((classItem)=>(
                        <li key={classItem._id} className="class-item">
                            <div className="class-details flex center">
                                <div>
                                <h3>{classItem.title}</h3>
                                <p>{classItem.description}</p>
                                <p>Instructor: {classItem.instructor}</p>
                                </div>
                                <button className="delete-button red-bg" onClick={() => handleDeleteClass(classItem._id)}>
                                Delete
                            </button>
                            </div>
                            
                        </li>))
                }
            </div>

            <div className="section form-container felx column center">
                <h2>Create New Class</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={''}
                    onChange={''}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={''}
                    onChange={''}
                />
                <input
                    type="text"
                    placeholder="Instructor"
                    value={''}
                    onChange={''}
                />
                <button onClick={''}>Create Class</button>
            </div>
        </div>
    );
};

export default AdminPage;
