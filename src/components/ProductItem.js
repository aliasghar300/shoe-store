import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { data } from "../data";

export default function ProductItem() {
    const { id } = useParams()
    const shoe = data[id]
     if (!shoe) {
        return (
            <div>
                <h1> Product not found </h1>
                <Link to="/product" className="btn-product"> Return to Products </Link>
            </div>
        )
    }
    return (
        <div className="product-detail">
            <img src={shoe.img} alt="shoes" />
            <h1> {shoe.name} </h1>
            <p> {shoe.info} </p>
            <h3> Rs: {shoe.price} /- </h3>
            <Link to="/products" className="btn-product"> Back to Products </Link>
        </div>
    )
}

