import React from 'react';
import './Header.scss'


const img = {
    cart: './img/cart.png',
    logo: './img/logo.png',
    search: './img/search.png'
}

function Header() {

    return (
        <div className="d-flex justify-content-around">
            <form className="rectangle-2  d-flex justify-content-start">
                <p className="search">Search</p>
                <img src={img.search}
                    className="searchIcon ml-auto " alt="search" />
            </form>

            <img src={img.logo}
                className="logo" alt="logo">

            </img>

            <div className="d-flex ">
                <p className="register">Register</p>
                <button className="login">Login</button>

                <img src={img.cart} alt="cart"
                    className="cart">

                </img>
                <div className="oval">7</div>
            </div>



        </div>
    );
}

export default Header;
