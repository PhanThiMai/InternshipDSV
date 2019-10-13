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


class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loginModel: false,
            registerModel: false
        }
    }

    showLoginModel = () => {
        this.setState({
            loginModel: !this.state.loginModel,
            // registerModel: false
        })
        console.log("login click")
    }

    showRegisterModel = () => {
        this.setState({
            registerModel: !this.state.registerModel,
            // loginModel: false
        })
        console.log("register click")

    }

    render() {
        return (
            <div>
                <Login open={this.state.loginModel} handleEvent={this.showLoginModel}></Login>
                <Register open={this.state.registerModel} handleEvent={this.showRegisterModel}></Register>
                <div className="d-flex justify-content-around">

                    <div className="rectangle-2" >
                        <input type="text" className="search" placeholder="Search" />
                        <img src={img.search} alt="search" className="searchIcon"></img>
                    </div>
                    <img src={img.logo}
                        className="logo" alt="logo">
                    </img>

                    <div className="d-flex ">
                        <p className="register mr-2" onClick={this.showRegisterModel} >Register</p>
                        <button className="login" onClick={this.showLoginModel}>Login</button>

                        <img src={img.cart} alt="cart"
                            className="cart">
                        </img>

                        <Badge color="warning" className="oval badge badge-pill badge-warning" >{numOfProductInCart}</Badge>
                    </div>

                </div>
            </div>

        );
    }

}

export default Header;
