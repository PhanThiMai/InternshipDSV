import React from 'react';
import './Header.scss'
import { Badge } from 'reactstrap'
import { Link } from 'react-router-dom'

import Login from '../Login/Login'
import Register from '../Register/Register'
import UserSetting from './UserSetting'
//import Cart from './Cart'
import Cart from '../../containers/Cart'

const img = {
    cart: '/img/cart.png',
    logo: '/img/logo.png',
    search: '/img/search.png',
    userImg: '/img/user.svg'
}

//const numOfProductInCart = 0;

function Header(props) {
    const { loginModal, registerModal, isLogin,
    } = props.headerState
    const { handleLoginModal, handleRegisterModal, showAnotherModal, checkLogin,
        logOut
    } = props

    console.log(props.cart)
    //let numOfProductInCart = props.cart.length;
    let numOfProductInCart = props.cart.length;

    let loginAuthen;
    let cart;

    if (isLogin) {
        loginAuthen =
            <div className="userpic mr-3  " >
                <img src={img.userImg} alt="avartar" />
                <div className="user-setting-dropdown">
                    <UserSetting logOut={logOut} />
                </div>

            </div>

    } else {
        loginAuthen = <div className="d-flex">
            <p className="register mr-2" onClick={handleRegisterModal} >Register</p>
            <button className="login" onClick={handleLoginModal}>Login</button>
        </div>
    }

    if (numOfProductInCart > 0) {
        cart = <div className="product-cart">
            <img src={img.cart} alt="cart"
                className="cart">
            </img>
            <Badge color="warning" className=" badge badge-pill badge-warning" >
                {numOfProductInCart}</Badge>
            <div className="cart-dropdown">
                <Cart productList={props.cart} />
            </div>
        </div>

    }
    else {
        cart = <img src={img.cart} alt="cart"
            className="cart">
        </img>
    }


    return (<div>
        <Login open={loginModal}
            handleLoginModal={handleLoginModal}
            showOneAndCloseAnother={showAnotherModal}
            handleLoginCheck={checkLogin}

        ></Login>
        <Register open={registerModal}
            handleRegisterModal={handleRegisterModal}
            showOneAndCloseAnother={showAnotherModal}
            handleLoginCheck={checkLogin}

        ></Register>
        <div className="d-flex justify-content-around">
            <div className="rectangle-2" >
                <input type="text" className="search" placeholder="Search" />
                <img src={img.search} alt="search" className="searchIcon"></img>
            </div>
            <Link to="/">
                <img src={img.logo}
                    className="logo" alt="logo">
                </img>
            </Link>
            <div className="d-flex ">
                {loginAuthen}
                {cart}
            </div>

        </div>
    </div>

    )

}


export default Header;
