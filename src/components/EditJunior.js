import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useHistory } from 'react-router'

const EditJunior = ({jaddSubject, editJunior, editJuniorItem}) => {
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

        if(editJuniorItem === null){        
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
        }else{
            editJunior(name, maths, eng, pvs, french, cca, yor,
                btech, bstu, rnv, editJuniorItem.id)
                history.push("/junior-list")
        }

    }

    useEffect (() =>{
        if(editJuniorItem !==null){
            setMaths(editJuniorItem.maths)
        setEnglish(editJuniorItem.eng)
        setPVS(editJuniorItem.pvs)
        setName(editJuniorItem.name)
        setCCA(editJuniorItem.cca)
        setYoruba(editJuniorItem.yor)
        setBTech(editJuniorItem.btech)
        setBstu(editJuniorItem.bstu)
        setRnv(editJuniorItem.rnv)
        setFrench(editJuniorItem.french)
            console.log(editJuniorItem)
        }else{
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
            
        }

    }, [editJuniorItem])


    return (
        <form className="form" onSubmit={submit}>
        <h3>Grade Calculation For Junior Section</h3>

        <div className="info-head">
        <div className="list-head">Edit Info</div>
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

            <button className="btn-info">Update</button> 
            </div>          
        
    </form>
    )
}

export default EditJunior
