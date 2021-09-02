import React, {useState} from 'react'
import {Link} from "react-router-dom"

const JuniorProfile = (props) => {
    const {id, name, maths, eng, pvs, french,  cca, yor,
        btech, bstu, rnv} = props.location.state.jsubject
    const [total, setTotal] = useState("");
    const [Obtainable, setObtainable] = useState("")
    const [average, setAverage] = useState("")

    let myTotal = parseInt(maths) + parseInt(eng) + parseInt(pvs) + parseInt(french) + parseInt(cca)
+ parseInt(yor) + parseInt(btech) + parseInt(bstu) + parseInt(rnv)
let subjectLength = [maths, eng, pvs, french, cca, yor,
    btech, bstu, rnv].length

const calculateTotal = () =>{
    const newTotal = myTotal;
    setTotal(newTotal)
}

const totalObtainable = () =>{
    const newObtainable = subjectLength * 100
    setObtainable(newObtainable)

}

const myAverage =()=>{
    const newAverage = ((myTotal)/(subjectLength *100)) * 100
    setAverage(newAverage.toFixed(1))
}

    return (
        <div className="card">
            <p>Student's Profile</p>
              <div className="name">
                 
            <div className="name-head">Student's Name: {name}</div>
            
            <div className="name-head">ID: {id}</div>
            </div>
            <div className="result-heading">
                <div className="result-head">Subject</div>
                <div className="heading">Total Score</div>
                <div className="heading">Comment</div>
            </div>

            
            <div className ="result">
            <div className="result-head">Maths</div>
            <div className="output">{maths}</div>
            <div className="output">{maths >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">English</div>
            <div className="output">{eng}</div>
            <div className="output">{eng >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">PVS</div>
            <div className="output">{pvs}</div>
            <div className="output">{pvs >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">French</div>
            <div className="output">{french}</div>
            <div className="output">{french >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">CCA</div>
            <div className="output">{cca}</div>
            <div className="output">{cca >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">Yoruba</div>
            <div className="output">{yor}</div>
            <div className="output">{yor >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">Basic Tech</div>
            <div className="output">{btech}</div>
            <div className="output">{btech >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">Bus Studies</div>
            <div className="output">{bstu}</div>
            <div className="output">{bstu >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">RNV</div>
            <div className="output">{rnv}</div>
            <div className="output">{rnv >= 40 ? "Pass" : "Fail"}</div>
            </div>
                       
            <div className="add">
            <button className ="btn" onClick ={calculateTotal}>Total Obtained</button>
            <h4>{total}</h4>
            </div>

             <div className="add">
            <button className ="btn" onClick={totalObtainable}>Total Obtainable</button>
            <h4>{Obtainable}</h4>
            </div> 

             <div className="add">
            <button className ="btn" onClick={myAverage}>Average</button>
            <h4>{average}%</h4>            
            </div>

            <div className="remarks">
                <h4>Final Remarks</h4>
            <h4>{average >= 50 ? "Pass" : "Fail"}</h4>
            </div>

            <Link to="/junior-list">
            <button className="btn">Back to Subject List</button>
            </Link>
            </div>
    )
}

export default JuniorProfile
