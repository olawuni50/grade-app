import React, {useState} from 'react'
import {useHistory, Link} from "react-router-dom"

const JsAddSubjects = ({jaddSubject}) => {
    const [maths, setMaths] = useState("")
    const [eng, setEnglish] = useState("")
    const [pvs, setPVS] = useState("")
    const [french, setFrench] = useState("");
    const [cca, setCCA] = useState("");
    const [yor, setYoruba] = useState("");
    const [btech, setBTech] = useState("")
    const [bstu, setBstu] = useState("");
    const [rnv, setRnv] = useState("")
    const [name, setName] = useState("")
    const history = useHistory()

    const submit =  (e) =>{
        e.preventDefault();

        if(!maths || !eng || !pvs || !french){
            alert("Field is Mandatory")
        }

        // Add Subject
        jaddSubject({name, maths, eng, pvs, french, cca, yor,
        btech, bstu, rnv})

        // Clear form
        setMaths("")
        setEnglish("")
        setPVS("")
        setName("")
        setCCA("")
        setYoruba("")
        setBTech("")
        setBstu("")
        setRnv("")
        setFrench("")

        history.push("/junior-list")

    }


    return (
        <form className="form" onSubmit={submit}>
            <h3>Grade Calculation For Junior Section</h3>

            <div className="info-head">
            <div className="list-head">Junior Class Info</div>
            <Link to="/">
            <button className="btns">Back to Home</button> 
            </Link>
            </div>
            
            <div className="myform">
            <div className="form-control">
                <label>Student's Name</label>
                <input type="text" placeholder="Enter Name of Student"
                value={name} onChange={(e) => setName(e.target.value)}/>
            </div>


            <div className="form-control">
                <label> Mathematics</label>
                <input type="number" placeholder="Enter Score"
                value={maths} onChange={(e) =>setMaths(e.target.value)}/>
                </div>

                <div className="form-control">
                <label> English</label>
                <input type="number" placeholder="Enter Score"
                value={eng} onChange={(e) =>setEnglish(e.target.value)}/>
                </div>

                <div className="form-control">
                <label> PVS</label>
                <input type="number" placeholder="Enter Score"
                value={pvs} onChange={(e) =>setPVS(e.target.value)}/>
                </div>

                <div className="form-control">
                <label> French</label>
                <input type="number" placeholder="Enter Score"
                value={french} onChange={(e) =>setFrench(e.target.value)}/>
                </div>

                <div className="form-control">
                <label>CCA</label>
                <input type="number" placeholder="Enter Score"
                value={cca} onChange={(e) =>setCCA(e.target.value)}/>
                </div>

                <div className="form-control">
                <label> Basic Tech</label>
                <input type="number" placeholder="Enter Score"
                value={btech} onChange={(e) =>setBTech(e.target.value)}/>
                </div>

                <div className="form-control">
                <label> Yoruba</label>
                <input type="number" placeholder="Enter Score"
                value={yor} onChange={(e) =>setYoruba(e.target.value)}/>
                </div>

                <div className="form-control">
                <label> Business Studies</label>
                <input type="number" placeholder="Enter Score"
                value={bstu} onChange={(e) =>setBstu(e.target.value)}/>
                </div>

                <div className="form-control">
                <label> RNV</label>
                <input type="number" placeholder="Enter Score"
                value={rnv} onChange={(e) =>setRnv(e.target.value)}/>
                </div>

                <button className="btn-info">Add</button>  
                </div>         
            
        </form>
    )
}

export default JsAddSubjects
