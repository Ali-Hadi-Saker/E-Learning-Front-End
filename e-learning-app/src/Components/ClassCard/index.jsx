import React from "react";
import './style.css'

const ClassCard = ({})=>{
    return(
        <div className="flex column rounded class center">
            <h2 className="ClassTitle">course title</h2>
            <p>course description</p>
            <p>instractor</p>
            <button>enrol</button>
        </div>
    )
}

export default ClassCard