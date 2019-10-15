import React from 'react';
import './Header.scss'
import { Badge } from 'reactstrap'
import Login from '../Login/Login'
import Register from '../Register/Register'
import UserSetting from './UserSetting'

const img = {
    cart: './img/cart.png',
    logo: './img/logo.png',
    search: './img/search.png',
    userImg: './img/user.svg'
}
const numOfProductInCart = 4;


function Header(props) {

    const { loginModal, registerModal, isLogin,
    } = props.headerState
    const { handleLoginModal, handleRegisterModal, showAnotherModal, checkLogin
    } = props

    let loginAuthen;

    if (isLogin) {
        loginAuthen =
            <div className="userpic mr-3 " >
                <img src={img.userImg} />
                <div className="user-setting-dropdown">
                    <UserSetting />
                </div>

            </div>

    } else {
        loginAuthen = <div className="d-flex">
            <p className="register mr-2" onClick={handleRegisterModal} >Register</p>
            <button className="login" onClick={handleLoginModal}>Login</button>
        </div>
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
            <img src={img.logo}
                className="logo" alt="logo">
            </img>

            <div className="d-flex ">
                {loginAuthen}
                <img src={img.cart} alt="cart"
                    className="cart">
                </img>
                <Badge color="warning" className=" badge badge-pill badge-warning" >
                    {numOfProductInCart}</Badge>
            </div>

        </div>
    </div>

    )

}


export default Header;
