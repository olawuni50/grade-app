import React from 'react'
import SubjectCard from './SubjectCard'
import {Link} from "react-router-dom"

const SubjectList = ({subjects, findItem, onDelete}) => {

    // const deleteSubject = (id) =>{
    //     props.getSubjectId(id);
    // }

    

    const renderSubject = subjects.map((subject) => {
        return(
            <SubjectCard subject={subject} onDelete={onDelete} findItem={findItem} key={subject.id}/>
        )
    })

    return (
        <div className="subject-list">
             <h3>Grade Calculation For Senior Section</h3>
             <Link to="/">
            <button className="btns">Back to Home</button> 
            </Link>   
            <div className="info-head">            
            <div className="list-head">Subject List</div>
            <Link to="/add">
            <button className="btn-info">Add Scores</button>
            </Link>
            </div>
        <div>
            {renderSubject}
            </div>
        </div>
    )
}

export default SubjectList
