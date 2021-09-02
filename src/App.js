import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import "./App.css";
// import {uuid} from "uuidv4"
import AddSubjects from './components/AddSubjects'
import Header from './components/Header'
import SubjectList from "./components/SubjectList"
import JsAddSubjects from './components/JsAddSubjects';
import Home from './components/Home';
import JsLists from './components/JsLists';
import SeniorProfile from './components/SeniorProfile';
import JuniorProfile from './components/JuniorProfile';
import firebase from './firebase';
import EditSubjects from './components/EditSubjects';
import Footer from './components/Footer';
import EditJunior from './components/EditJunior';





const App = () => {
  const LOCAL_STORAGE_KEY= "subjects";
  // const LOCAL_STORAGE_KEY_JUNIOR= "jsubjects";
  const [subjects, setSubject] = useState([]);
  const [jsubjects, setJsubject] = useState([]);
  const [editItem, setEditItem] = useState([])
  const [editJuniorItem, setJuniorEditItem] = useState([])

  
   
  // Add subject
const addSubjectHandler=  async (subject) =>{
  const id = Math.floor(Math.random() * 10000) + 1
  console.log(subject)
  
  const firestore = firebase.database().ref("/UserInfo")
  let data = {
    id: id,
    ...subject
  }
  firestore.push(data)
  setSubject([...subjects, {id:id, ...subject}])
}


// Junior Add
const jaddSubject = (jsubject) =>{
  const id = Math.floor(Math.random() * 1000) +1
  console.log(jsubject)

  const firestore = firebase.database().ref("/UserInfo")
  let data = {
    id: id,
    ...jsubject
  }
  firestore.push(data)

  setJsubject([...jsubjects, {id:id, ...jsubject}])
}


useEffect(()=>{
  const retrieveSubjects =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
  if(retrieveSubjects) setSubject(retrieveSubjects)
  
}, [])

// Junior 
// useEffect(()=>{
//   const jretrieveSubjects =JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_JUNIOR))
//   if(jretrieveSubjects) setSubject(jretrieveSubjects)
  
// }, [])


useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(subjects))
}, [subjects])

// Junior Storage
// useEffect(()=>{
//   localStorage.setItem(LOCAL_STORAGE_KEY_JUNIOR, JSON.stringify(jsubjects))
// }, [jsubjects])


// Delete Subject
const removeSubjectHandler = (id) =>{
  const newValue = subjects.filter((subject) => subject.id !==id)
  setSubject(newValue)
}


// Junior Delete Subject
const jRemoveSubject = (id) =>{
  const newValue = subjects.filter((subject) => subject.id !==id)
  setSubject(newValue)
}


// Find Item
const findItem = (id) =>{
  const item = subjects.find(subject => subject.id ===id)
  setEditItem(item)
}

// Edit Item
const editSubject = (name, maths, phy, eng, bio,
  chem, agric, fur, fis, eco, civic, comp, id)=>{
  const newSubject = subjects.map(subject => (subject.id === id ? {name, maths, phy, eng, bio,
    chem, agric, fur, fis, eco, civic, comp, id} : subject)) 
  setSubject(newSubject)
}

// Find Junior Item
const findJunior = (id) =>{
  const item = jsubjects.find(jsubject => jsubject.id === id)
  setJuniorEditItem(item)
}

// Edit Junior Item
const editJunior = (name, maths, eng, pvs, french, cca, yor,
  btech, bstu, rnv, id) =>{
    const newSubject = jsubjects.map((jsubject) => (jsubject.id === id) ? {name, maths, eng, pvs, french, cca, yor,
      btech, bstu, rnv}: jsubject)
      setJsubject(newSubject)
  }

  return (
    
    <div className="container">
      <Router>
      <Header/>
      
      <Switch>
        <Route path="/" exact component={Home}/>
        
      <Route  path="/senior-list" exact render={(props) =>(<SubjectList {...props} subjects={subjects}  
      onDelete = {removeSubjectHandler} findItem={findItem} />)}/>

      <Route path="/add" render={(props) =>(<AddSubjects {...props} addSubjectHandler={addSubjectHandler}/>)}/> 

     <Route path="/junior-list"  render={(props) =>(<JsLists {...props} jsubjects={jsubjects}
       onDelete={jRemoveSubject} findJunior={findJunior}/>)}/> 

      <Route path="/jsadd" render={(props) => (<JsAddSubjects {...props} jaddSubject={jaddSubject}/>)}/>
      <Route path="/subjects/:id" component={SeniorProfile}/>
      {/* <Route path="/subjects/:id" component={JuniorProfile}/> */}
      <Route path="/edit" render={(props) =>(<EditSubjects {...props} addSubjectHandler={addSubjectHandler} editItem={editItem} editSubject={editSubject}/>)}/> 

      {/* <Route path="/edit-junior" render={(props) =>(<EditSubjects {...props} jaddSubject={jaddSubject} editJuniorItem={editJuniorItem} editJunior={editJunior}/>)}/>  */}

      <Route path="/edit-junior" render={(props) =>(<EditJunior {...props} jaddSubject={jaddSubject} editJuniorItem={editJuniorItem} editJunior={editJunior}/>)}/>


      
      </Switch>   
      <Footer/>  
      </Router>
    </div>
  )
}

export default App
