import React from 'react'
import {Link} from "react-router-dom"

const SeniorProfile = (props) => {
    const {id, name, maths, phy, eng,  bio, chem, agric, fur, fis, eco, civic, comp} = props.location.state.subject

    // const [total, setTotal] = useState("") 
    // const [Obtainable, setObtainable] = useState("")
    // const [average, setAverage] = useState("")
    


let myTotal = parseInt(maths) + parseInt(phy) + parseInt(eng) + parseInt(bio) + parseInt(chem) +
 parseInt(agric) + parseInt(fur) + parseInt(fis) + parseInt(eco) + parseInt(civic) + parseInt(comp)
let subjectLength = [maths, phy, eng, bio, chem, agric, fur, fis, eco, civic, comp].length

// All calculations
const totalObtained = (myTotal).toFixed(1)

const totalObtainable =subjectLength * 100

const myAverage = (((myTotal)/(subjectLength * 100)) * 100).toFixed(1)


    
    // const calculateTotal = () => {
        
    //     const newTotal = myTotal
    //     return(
    //     setTotal(newTotal))

    //     }

    //  const totalObtainable = () =>{
    //     const newObtainable = subjectLength * 100
    //     return(
    //     setObtainable(newObtainable)
    //     )
    // }

    //  const myAverage = () =>{
    //     const newAverage =((myTotal)/(subjectLength * 100)) * 100
    //     setAverage(newAverage.toFixed(1))
       
    // }

    return (
        <div className="card">
            <p>Student's Profile</p>

        <div className="name-head">
                <h5>Student's Name: {name}</h5>
                <h5>Student's ID: {id}</h5>

            </div>
    
            <div className="result-heading">
                <div className="result-head">Subject</div>
                <div className="heading">Total Score</div>
                <div className="heading">Comment</div>
            </div>

            <div className ="result">
            <div className="result-head">Maths</div>
            <div className="output">{maths}</div>  
            
            <div className={maths >= 40 ? "output-pass": "output-fail"}>{maths >=40 ? "Pass": "Fail"}</div>
            </div>


            <div className="result">
                <div className="result-head">Physics</div>
            <div className="output">{phy}</div>
            <div className={phy >= 40 ? "output-pass": "output-fail"}>
                {phy >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">English</div>
            <div className="output">{eng}</div>
             <div className={eng >= 40 ? "output-pass": "output-fail"}>
                 {eng >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">Biology</div>
            <div className="output">{bio}</div>
            <div className={bio >= 40 ? "output-pass": "output-fail"}>
                {bio >=40 ? "Pass": "Fail"}</div> 
            </div>

            <div className="result">
                <div className="result-head">Chem</div>
            <div className="output">{chem}</div>
            <div className={chem >= 40 ? "output-pass": "output-fail"}>
                {chem >=40 ? "Pass": "Fail"}</div> 
            </div>

            <div className="result">
                <div className="result-head">Agric</div>
            <div className="output">{agric}</div>
        <div className={agric >= 40 ? "output-pass": "output-fail"}>
            {agric >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">Fur Maths</div>
            <div className="output">{fur}</div>
            <div className={fur >= 40 ? "output-pass": "output-fail"}>
                {fur >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">Fishery</div>
            <div className="output">{fis}</div>
            <div className={fis >= 40 ? "output-pass": "output-fail"}>
                {fis >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">Econs</div>
            <div className="output">{eco}</div>
            <div className={eco >= 40 ? "output-pass": "output-fail"}>
                {eco >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">Civic</div>
            <div className="output">{civic}</div>
             <div className={civic >= 40 ? "output-pass": "output-fail"}>
                 {civic >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">Comp.</div>
            <div className="output">{comp}</div>
             <div className={comp >= 40 ? "output-pass": "output-fail"}>
                 {comp >=40 ? "Pass": "Fail"}</div> 
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

{/*             
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
            </div> */}

            <Link to="/senior-list">
            <button className="btn">Back to Subject List</button>
            </Link>
            
            
        </div>
    )
}

export default SeniorProfile
