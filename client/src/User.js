import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './User.scss'
import HomePage from './components/HomePage/HomePage';
import Products from './containers/Products'
import Product from './containers/Product'
import MyCart from './containers/MyCart'

import Header from './containers/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'

import {

    Route, Switch
} from "react-router-dom";


function User() {
    return (
        <div className="user">
            <Header />
            <hr></hr>
            <NavBar />
            <hr className="mt-0"></hr>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/category/:id" component={Products} />
                <Route exact path="/products/:id" component={Product} />
                <Route exact path="/cart" component={MyCart} />
            </Switch >
            <Footer className="footer"></Footer>
        </div >

    )
}
export default User;
