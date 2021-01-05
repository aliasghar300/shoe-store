import React from 'react'
import {Link} from "react-router-dom";
import {data} from "../data";


export default function Products() {
    

    return (
        <div>
            <h1 style={{textAlign:"center"}}> Products </h1>
                <div className="product-container">
                {Object.keys(data).map(keyname=>{
                    const shoe = data[keyname]
                return(
                    <div key={keyname}>
                    <img src={shoe.img} alt="shoes" />
                    <h4> {shoe.name} </h4>
                    <h5> Rs: {shoe.price} /- </h5>
                    <Link to={`/product/${keyname}`} className="btn-product"> View This Product </Link>
                    </div>)})}      
                    </div>
        </div>
    )
}
