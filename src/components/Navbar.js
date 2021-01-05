import React from 'react'
import {Link} from "react-router-dom";
import "../App.css"

export default function Navbar() {
    return (
        <div className="nav-bar">
            <ul>
                <li>
                    <Link to="/" >  Home </Link>
                </li>
                <li>
                    <Link to="/products"> Products </Link>
                </li>
                <li>
                    <Link to="/about"> About </Link>
                </li>
            </ul>            
        </div>
    )
}
