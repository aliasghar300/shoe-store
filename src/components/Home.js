import React from 'react'
import {Link} from "react-router-dom"
export default function Home() {
        
    return (
        <div>
            <div className="bg-image"> </div>
            <div className="bg-text">
                <h1 style={{fontSize: "40px"}}>Welcome to the Shoe Store</h1> 
                <h3> Your one stop solution for online shoe shopping. </h3>
                <Link className="btn" to="/products"> View Products </Link>
            </div>
        </div>
    )
}
