import React from 'react';
import './Header.scss'
import { Badge } from 'reactstrap'
import Login from '../Login/Login'
import Register from '../Register/Register'
import UserSetting from './UserSetting'

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
            loginModal: false,
            registerModal: false,
            isLogin: false,
            showUserSetting: false
        }
    }

    handleHover = (event) => {
        this.setState({ showUserSetting: true });
    };

    handleLeave = (event) => {
        this.setState({ showUserSetting: false });
    };


    handleLoginCheck = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }

    handleLoginModal = () => {
        this.setState({
            loginModal: !this.state.loginModal
        })
    }

    handleRegisterModal = () => {
        this.setState({
            registerModal: !this.state.registerModal
        })

    }

    showOneAndCloseAnother = () => {
        this.setState({
            loginModal: !this.state.loginModal,
            registerModal: !this.state.registerModal
        })
    }



    render() {
        let loginAuthen;

        if (this.state.isLogin) {
            loginAuthen = <div className="userpic mr-3" onMouseEnter={this.handleHover}>
                <UserSetting />
            </div>
        } else {
            loginAuthen = <div className="d-flex">
                <p className="register mr-2" onClick={this.handleRegisterModal} >Register</p>
                <button className="login" onClick={this.handleLoginModal}>Login</button>
            </div>
        }

        return (
            <div>
                <Login open={this.state.loginModal}
                    handleLoginModal={this.handleLoginModal}
                    showOneAndCloseAnother={this.showOneAndCloseAnother}
                    handleLoginCheck={this.handleLoginCheck}
                ></Login>
                <Register open={this.state.registerModal}
                    handleRegisterModal={this.handleRegisterModal}
                    showOneAndCloseAnother={this.showOneAndCloseAnother}
                    handleLoginCheck={this.handleLoginCheck}

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

        );
    }

}

export default Header;
