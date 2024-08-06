import React from "react";
import './style.css'

const ClassCard = ({classData})=>{
    return(
        <div className="flex column rounded class center">
            <h2 className="ClassTitle">{classData.title}</h2>
            <p> {classData.description}</p>
            <p>{classData.instructor}</p>
            <button>enrol</button>
        </div>
    )
}

export default ClassCard