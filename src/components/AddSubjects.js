import React, {useState, useEffect} from 'react'
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"

const AddSubjects = ({addSubjectHandler}) => {
    const [name, setName] = useState("")
    const[maths, setMaths] = useState("")
    const[eng, setEnglish] = useState("")
    const [phy, setPhysics] = useState("");
    const [bio, setBio] = useState("")
    const [chem, setChem] = useState("")
    const [agric, setAgric] = useState("")
    const [fur, setFurther] = useState("")
    const [fis, setFishery] = useState("")
    const [eco, setEco] = useState("")
    const [civic, setCivic] = useState("")
    const [comp, setComp] = useState("")
    const history = useHistory();


    const myScore = !maths || !phy || !eng || !bio||
    !chem ||!agric || !fur || !fis || !eco || !civic || !comp

   
         

    const submit = (e) =>{
        e.preventDefault();

        if(myScore){
            alert("Field is mandatory")
            return
            
        }
        // if (maths || phy || eng || bio||
        //     chem ||agric || fur || fis || eco || civic || comp >= 40){
        //     alert("Score exceeds the maximum value")
        //     return
        // }

        // Add subject
        addSubjectHandler ({name, maths, phy, eng, bio,
        chem, agric, fur, fis, eco, civic, comp})


        // clear form
        setName("")
        setMaths("")
        setPhysics("")
        setEnglish("")
        setBio("")
        setChem("")
        setAgric("")
        setFurther("")
        setFishery("")
        setEco("")
        setCivic("")
        setComp("")
        history.push("/senior-list")
        
    }

  

    return (
        <form className="form" onSubmit={submit}>
            
            <h3>Grade Calculation For Secondary Section</h3>
            <div className="info-head">
            <div className="list-head">Senior Class</div>
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
                <label>Mathmatics</label>
                <input type="number" placeholder="Enter Score"
                value={maths} onChange={ (e) => setMaths(e.target.value)}/>
            </div>
            <div className="form-control">
                <label>Physics</label>
                <input type="number" placeholder="Enter Score"
                value={phy} onChange={(e) => setPhysics(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>English</label>
                <input type="number" placeholder="Enter Score"
                value={eng} onChange={(e) => setEnglish(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Biology</label>
                <input type="number" placeholder="Enter Score"
                value={bio} onChange={(e) => setBio(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Chemistry</label>
                <input type="number" placeholder="Enter Score"
                value={chem} onChange={(e) => setChem(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Agriculture</label>
                <input type="number" placeholder="Enter Score"
                value={agric} onChange={(e) => setAgric(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Further Maths</label>
                <input type="number" placeholder="Enter Score"
                value={fur} onChange={(e) => setFurther(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Fishery</label>
                <input type="number" placeholder="Enter Score"
                value={fis} onChange={(e) => setFishery(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Economics</label>
                <input type="number" placeholder="Enter Score"
                value={eco} onChange={(e) => setEco(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Civic</label>
                <input type="number" placeholder="Enter Score"
                value={civic} onChange={(e) => setCivic(e.target.value)}/>
            </div>

            <div className="form-control">
                <label>Computer</label>
                <input type="number" placeholder="Enter Score"
                value={comp} onChange={(e) => setComp(e.target.value)}/>
            </div>
            <button className="btn-info">Add</button>
            </div>

           
        </form>
    )
}

export default AddSubjects
