import './style.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import {useDispatch, useSelector} from 'react-redux'
import { fetchingClasses, loadClasses, errorOccured } from "../../redux/classesSlice/slice";
import ClassCard from '../../Components/ClassCard';

const AdminPage = () => {
    const [title, settTitle] = useState()
    const [description, setDescription] = useState()
    const [instructor, setInstructor] = useState()

    const dispatch = useDispatch()
    const {classes, loading, error, enrolledClasses} = useSelector(state => state.classes)

    const handleChange = (e)=>{
        const {name, value} = e.target
        if(name === 'title') settTitle(value)
        if(name === 'description') setDescription(value)
        if(name === 'instructor') setInstructor(value)

    }

    const handleSubmit = async()=>{
        try {
            const token = localStorage.getItem('token')
            const {data} = await axios.post('http://localhost:8080/classes/create',{
                title,
                instructor,
                description
            },{
                headers:{
                    Authorization: `Bearer ${token}`
                }
            } )
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
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
    const handleUpload = ()=>{
        console.log('upload')
    }
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
                                <div className='flex btns'>
                                    <button className="delete-button red-bg" onClick={() => handleDeleteClass(classItem._id)}>
                                    Delete
                                    </button>
                                    <button className="delete-button green-bg" onClick={() => handleUpload()}>
                                        upload
                                    </button>
                                </div>
                            </div>
                            
                        </li>))
                }
            </div>

            <div className="section form-container felx column center">
                <h2>Create New Class</h2>
                <input
                    type="text"
                    name='title'
                    placeholder="Title"
                    value={title}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name='description'
                    placeholder="Description"
                    value={description}
                    onChange={handleChange}
                />
                <input
                    name='instructor'
                    type="text"
                    placeholder="Instructor"
                    value={instructor}
                    onChange={handleChange}
                />
                <button onClick={handleSubmit}>add Class</button>
            </div>
        </div>
    );
};

export default AdminPage;
