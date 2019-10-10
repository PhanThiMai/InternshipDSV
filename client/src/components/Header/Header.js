import React from 'react';
import './Header.scss'
import { Badge } from 'reactstrap'


const img = {
    cart: './img/cart.png',
    logo: './img/logo.png',
    search: './img/search.png'
}
var numOfProductInCart = 4;

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
                <p className="register mr-2">Register</p>
                <button className="login">Login</button>


                <img src={img.cart} alt="cart"
                    className="cart">
                </img>
                <Badge color="warning" className="oval badge badge-pill badge-warning" >{numOfProductInCart}</Badge>
            </div>





        </div>
    );
}

export default Header;
