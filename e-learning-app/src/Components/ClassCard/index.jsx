import React from "react";
import './style.css'

const ClassCard = ({title, description, instractor})=>{
    return(
        <div className="flex column rounded class center">
            <h2 className="ClassTitle">{title}</h2>
            <p> {description}</p>
            <p>{instractor}</p>
            <button>enrol</button>
        </div>
    )
}

export default ClassCard