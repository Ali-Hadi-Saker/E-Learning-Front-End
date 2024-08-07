import React from "react";
import './style.css'

const ClassCard = ({classData, text, color, onMousseClick, onDownloadClick} )=>{
    return(
        <div className="flex column rounded class center card-cont">
            <h2 className="ClassTitle">{classData.title}</h2>
            <p> {classData.description}</p>
            <p>{classData.instructor}</p>
            <button className={color} onClick={onMousseClick}>{text}</button>
            {onDownloadClick && (<button  onClick={onDownloadClick}> download </button>)}
        </div>
    )
}

export default ClassCard