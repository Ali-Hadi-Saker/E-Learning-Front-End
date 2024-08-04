import React from "react";
import ClassCard from "../ClassCard";


const ClassList = ()=>{
    return(
        <div>
            <h1>course list</h1>
            <ClassCard title={'Class Title'} description={'Class description'} instractor={'Class instractor'}/>
        </div>
    )
}

export default ClassList