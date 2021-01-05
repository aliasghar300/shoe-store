import React from 'react'
import {BrowserRouter as Router , Route , Switch } from "react-router-dom";
import About from './About';
import Error from './Error';
import Home from './Home';
import Navbar from './Navbar';
import ProductItem from './ProductItem';
import Products from './Products';

export default function ShoeStore() {
    return (
        <div>
            <Router>
                <Navbar />
                <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route  path="/products" >
                    <Products/>
                </Route>
                <Route path="/about">
                    <About  />
                </Route>
                <Route path='/product/:id' children={<ProductItem />}></Route>
                <Route>
                    <Error path="*" />                   
                </Route>
                </Switch>
            </Router>
        </div>
    )
}
