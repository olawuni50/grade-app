import React from 'react'

import img1 from "../Images/calc.png"

import {Link} from "react-router-dom"

const Home = () => {
   
    return (
        <div className="my-home">  

          <img src={img1} alt="calculator"/>                  
            <div   className="home">             

            <h2>Excel Standard Grade Calculator</h2>
            <h4>This application will help class teachers to calculate Total Obtained,
                Total Obtainable, Average
            </h4>
            
            {/* <div className="feature">
                <image src={img1} alt="school"/>
            <div className="features">Features:</div>
            <ul>
                <li>Total Obtained</li>
                <li>Total Obtainable</li>
                <li>Average</li>
                <li>Total Remarks</li>
            </ul>
            </div> */}
            

            <div className="result-home">
               <Link to="/jsadd"> 
            <button className="btn-home">Add Junior Class</button>
            </Link>

        <Link to="/add">
            <button className="btn-home">Add Senior Class</button>
            </Link>
        
            </div>

            
            </div>
            <div className="mylist">
            <Link to="/junior-list">
            <button className="btn-home">Check Junior List</button>
            </Link>
        <Link to="/senior-list">
            <button className="btn-home">Check Senior List</button>
            </Link>
            </div>
            
        </div>
    )
}

export default Home
