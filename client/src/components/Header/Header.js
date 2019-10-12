import React from 'react';
import './Header.scss'
import { Badge } from 'reactstrap'
import Login from '../Login/Login'
import Register from '../Register/Register'


const img = {
    cart: './img/cart.png',
    logo: './img/logo.png',
    search: './img/search.png'
}
const numOfProductInCart = 4;

const showLoginModel = () => {
    return <Login openModel={true} />
}
const showRegisterModel = () => {
    return <Register openModel={true} />
}


function Header() {
    return (
        <div className="d-flex justify-content-around">

            <div className="rectangle-2" >
                <input type="text" className="search" placeholder="search" />
                <div className="searchIcon">
                    <img src={img.search} alt="search"></img>
                </div>
            </div>

            <img src={img.logo}
                className="logo" alt="logo">

            </img>

            <div className="d-flex ">
                <p className="register mr-2" onClick={() => showRegisterModel}>Register</p>
                <button className="login" onClick={() => showLoginModel}>Login</button>

                <img src={img.cart} alt="cart"
                    className="cart">
                </img>

                <Badge color="warning" className="oval badge badge-pill badge-warning" >{numOfProductInCart}</Badge>
            </div>


        </div>
    );
}

export default Header;
