import React from 'react';
import './Header.scss'
import { Badge } from 'reactstrap'
import Login from '../Login/Login'
import Register from '../Register/Register'
import UserSetting from './UserSetting'
import { connect } from 'react-redux'
import * as actions from '../../actions/index'

const img = {
    cart: './img/cart.png',
    logo: './img/logo.png',
    search: './img/search.png'
}
const numOfProductInCart = 4;


class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { loginModal, registerModal, isLogin,
        } = this.props.headerState
        const { handleLoginModal, handleRegisterModal, showAnotherModal, checkLogin
        } = this.props

        console.log(this.props.headerState)
        let loginAuthen;

        if (isLogin) {
            loginAuthen = <div className="userpic mr-3" >
                <UserSetting />
            </div>
        } else {
            loginAuthen = <div className="d-flex">
                <p className="register mr-2" onClick={handleRegisterModal} >Register</p>
                <button className="login" onClick={handleLoginModal}>Login</button>
            </div>
        }
        return (
            <div>
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

        );
    }

}

const mapStateToProps = state => ({
    headerState: state.headerReducer
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleLoginModal: () => {
            dispatch(actions.handleLoginModal())
        },

        handleRegisterModal: () => {
            dispatch(actions.handleRegisterModal())
        },
        showAnotherModal: () => {
            dispatch(actions.showAnotherModal())
        },
        checkLogin: () => {
            dispatch(actions.checkLogin())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);
