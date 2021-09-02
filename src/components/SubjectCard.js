import React from 'react'
// import {AiOutlineDelete} from "react-icons/ai"
import {Link} from "react-router-dom"

const SubjectCard = ({subject, onDelete, findItem}) => {   
    // const {id, name, subject.maths, subject.phy, eng,  subject.bio, subject.chem, subject.agric, subject.fur, subject.fis, subject.eco, subject.civic, subject.comp} = props.subject
   
    // const [total, setTotal] = useState("") 
    // const [Obtainable, setObtainable] = useState("")
    // const [average, setAverage] = useState("")
    


let myTotal = parseInt(subject.maths) + parseInt(subject.phy) + parseInt(subject.eng) + parseInt(subject.bio) 
+ parseInt(subject.chem) + parseInt(subject.agric) + parseInt(subject.fur) + parseInt(subject.fis) + parseInt(subject.eco) + parseInt(subject.civic) + parseInt(subject.comp)
let subjectLength = [subject.maths, subject.phy, subject.eng, subject.bio, subject.chem, subject.agric, subject.fur, subject.fis, subject.eco, subject.civic, subject.comp].length


// All calculations
const totalObtained = (myTotal).toFixed(1)

const totalObtainable =subjectLength * 100

const myAverage = (((myTotal)/(subjectLength * 100)) * 100).toFixed(1)



    //   const calculateTotal = () => {
        
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
            
            <div className="name">
                
            <div className="name-head">Student's Name: {subject.name}</div>           
           
            <div className="name-head">ID: {subject.id}</div>
            </div>
            <div className="result-heading">
                <div className="result-head">Subject</div>
                <div className="heading">Total Score</div>
                <div className="heading">Comment</div>
            </div>

            {/* <div className="list-head">Subject List</div> */}
            
            <div className ="result">
            <div className="result-head">Maths</div>
            <div className="output">{subject.maths}</div>  
            
            <div className={subject.maths >= 40 ? "output-pass": "output-fail"}>{subject.maths >=40 ? "Pass": "Fail"}</div>
            </div>


            <div className="result">
                <div className="result-head">Physics</div>
            <div className="output">{subject.phy}</div>
            <div className={subject.phy >= 40 ? "output-pass": "output-fail"}>
                {subject.phy >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">English</div>
            <div className="output">{subject.eng}</div>
             <div className={subject.eng >= 40 ? "output-pass": "output-fail"}>
                 {subject.eng >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">Biology</div>
            <div className="output">{subject.bio}</div>
            <div className={subject.bio >= 40 ? "output-pass": "output-fail"}>
                {subject.bio >=40 ? "Pass": "Fail"}</div> 
            </div>

            <div className="result">
                <div className="result-head">Chem</div>
            <div className="output">{subject.chem}</div>
            <div className={subject.chem >= 40 ? "output-pass": "output-fail"}>
                {subject.chem >=40 ? "Pass": "Fail"}</div> 
            </div>

            <div className="result">
                <div className="result-head">Agric</div>
            <div className="output">{subject.agric}</div>
        <div className={subject.agric >= 40 ? "output-pass": "output-fail"}>
            {subject.agric >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">Fur.Maths</div>
            <div className="output">{subject.fur}</div>
            <div className={subject.fur >= 40 ? "output-pass": "output-fail"}>
                {subject.fur >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">Fishery</div>
            <div className="output">{subject.fis}</div>
            <div className={subject.fis >= 40 ? "output-pass": "output-fail"}>
                {subject.fis >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">Econs</div>
            <div className="output">{subject.eco}</div>
            <div className={subject.eco >= 40 ? "output-pass": "output-fail"}>
                {subject.eco >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">Civic</div>
            <div className="output">{subject.civic}</div>
             <div className={subject.civic >= 40 ? "output-pass": "output-fail"}>
                 {subject.civic >=40 ? "Pass": "Fail"}</div>
            </div>

            <div className="result">
                <div className="result-head">Comp.</div>
            <div className="output">{subject.comp}</div>
             <div className={subject.comp >= 40 ? "output-pass": "output-fail"}>
                 {subject.comp >=40 ? "Pass": "Fail"}</div> 
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
            <h4> {average}%</h4>            
            </div>
            <div className="remarks">
                <h4>Final Remarks</h4>
            <h4>{average >= 50 ? "Pass" : "Fail"}</h4>
            </div> */}

            <div onClick={() =>window.confirm(`Are you sure you want to delete ${subject.name}?`) && onDelete(subject.id)} className="delete"> 
            Delete</div>

            

            <Link to="/edit" className="link">
            <div className="btn" onClick={()=>findItem(subject.id)}> 
            Edit</div>
            </Link>
       
       
                     
        </div>
    )
}

export default SubjectCard

