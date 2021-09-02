import React from 'react'
import {Link} from "react-router-dom"

const Header = () => {
    return (
        <div className="head">
            <Link to="/" className="link">
            <h3>ESGS</h3>
            </Link>


        </div>
    )
}

export default Header
