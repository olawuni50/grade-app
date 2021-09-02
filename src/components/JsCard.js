import React from 'react'
import {Link} from "react-router-dom"

const JsCard = ({jsubject, onDelete, findJunior}) => {
    // const {id, name, jsubject.maths, eng, jsubject.pvs, jsubject.french,  jsubject.cca, jsubject.yor,
    //     jsubject.btech, jsubject.bstu, jsubject.rnv} = props.jsubject
    // const [total, setTotal] = useState("");
    // const [Obtainable, setObtainable] = useState("")
    // const [average, setAverage] = useState("")


let myTotal = parseInt(jsubject.maths) + parseInt(jsubject.eng) + parseInt(jsubject.pvs) + parseInt(jsubject.french) 
+ parseInt(jsubject.cca) + parseInt(jsubject.yor) + parseInt(jsubject.btech) + parseInt(jsubject.bstu) + parseInt(jsubject.rnv)

let subjectLength = [jsubject.maths, jsubject.eng, jsubject.pvs, jsubject.french, jsubject.cca, jsubject.yor,
    jsubject.btech, jsubject.bstu, jsubject.rnv].length

// All calculations
const totalObtained = (myTotal).toFixed(1)

const totalObtainable =subjectLength * 100

const myAverage = (((myTotal)/(subjectLength * 100)) * 100).toFixed(1)


    return (
        <div className="card">
              <div className="name">
                  {/* <Link to={{pathname: `/subjects/${id}`, state:{subject: props.jsubject}}} className="link"> */}
            <div className="name-head">Student's Name: {jsubject.name}</div>
            {/* </Link> */}
            <div className="name-head">ID: {jsubject.id}</div>
            </div>
            <div className="result-heading">
                <div className="result-head">Subject</div>
                <div className="heading">Total Score</div>
                <div className="heading">Comment</div>
            </div>

            
            <div className ="result">
            <div className="result-head">Maths</div>
            <div className="output">{jsubject.maths}</div>
            <div className={jsubject.maths >= 40 ? "output-pass": "output-fail"}>
                {jsubject.maths >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">English</div>
            <div className="output">{jsubject.eng}</div>
            <div className={jsubject.eng >= 40 ? "output-pass": "output-fail"}>
                {jsubject.eng >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">PVS</div>
            <div className="output">{jsubject.pvs}</div>
            <div className={jsubject.pvs >= 40 ? "output-pass": "output-fail"}>{jsubject.pvs >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">French</div>
            <div className="output">{jsubject.french}</div>
            <div className={jsubject.french >= 40 ? "output-pass": "output-fail"}>{jsubject.french >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">CCA</div>
            <div className="output">{jsubject.cca}</div>
            <div className={jsubject.cca >= 40 ? "output-pass": "output-fail"}>{jsubject.cca >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">Yoruba</div>
            <div className="output">{jsubject.yor}</div>
            <div className={jsubject.yor >= 40 ? "output-pass": "output-fail"}>{jsubject.yor >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">Basic Tech</div>
            <div className="output">{jsubject.btech}</div>
            <div className={jsubject.btech >= 40 ? "output-pass": "output-fail"}>{jsubject.btech >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">Bus Studies</div>
            <div className="output">{jsubject.bstu}</div>
            <div className={jsubject.bstu >= 40 ? "output-pass": "output-fail"}>{jsubject.bstu >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className ="result">
            <div className="result-head">RNV</div>
            <div className="output">{jsubject.rnv}</div>
            <div className={jsubject.rnv >= 40 ? "output-pass": "output-fail"}>{jsubject.rnv >= 40 ? "Pass" : "Fail"}</div>
            </div>

            <div className="total-calculation">
                <div>
                <h5>Total Obtained</h5>
                <div>{totalObtained}</div>
                </div>

                <div className="obtainable">    
                <h5>Total Obtainable</h5>
                <div>{totalObtainable}</div>
                </div>
                
                <div>
                <h5>Average</h5>
                <div className={myAverage >= 50 ? "avg-pass": "avg-fail"}>
                    {myAverage}%</div>
                </div>

            </div>
                       
            {/* <div className="add">
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
         */}


            <div onClick={() =>window.confirm(`Are you sure you want to delete ${jsubject.name}`) && onDelete(jsubject.id)} className="delete">
                Delete
            </div>

            <Link to="/edit-junior" className="link">
            <div className="btn" onClick = {() =>findJunior(jsubject.id)}>
                Edit
            </div>
            </Link>

            </div>
    )
}

export default JsCard
