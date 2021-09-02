import React from 'react'
import JsCard from './JsCard'
import {Link} from "react-router-dom"

const JsLists = ({jsubjects, onDelete, findJunior}) => {

   

    const renderList = jsubjects.map((jsubject) =>{
        return(
            <JsCard jsubject={jsubject} onDelete={onDelete} findJunior={findJunior} key={jsubject.id}/>
        )
    })
    return (
        <div className="subject-list">
            <h3>Grade Calculation For Junior Section</h3>
            <Link to="/">
            <button className="btns">Back to Home</button> 
            </Link>
        <div className="info-head">            
            <div className="list-head">Subject List</div>
            <Link to="/jsadd">
            <button className="btn-info">Add Scores</button>
            </Link>
            </div>
            
        <div>
            {renderList}           
        </div>
        </div>
    )
}

export default JsLists
