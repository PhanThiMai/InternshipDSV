import React from 'react';
import { Modal } from 'reactstrap';
import './Login.scss'

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modal: true,
            register: false,
            close: false
        };
    }




    render() {
        const { open, handleLoginModal, showOneAndCloseAnother } = this.props
        return (

            <div>
                <Modal isOpen={open} >
                    <div className="loginModal container container-fluid">
                        <img src="img/cross.svg" alt="cross" className="cross mt-3"
                            onClick={handleLoginModal} />
                        <div className="loginT" >Login</div>

                        <div className="activeR">
                            <label className="emailLabel">E-MAIL</label>
                            <input type="email" name="email" id="email" placeholder="Enter your email..." />
                        </div>

                        <div className="activeR">
                            <label className="passwordLabel">PASSWORD</label>
                            <input type="password" name="password" id="password" placeholder="Enter your password..." />
                        </div>

                        <div className="subInfor d-flex float-left ml-5 ">
                            <img src="img/check-box.svg" alt="checkBox"
                                className="checkBox" />
                            <p className="rememberPsw">Remember password</p>
                        </div>
                        <p className="forgotPsw float-right mr-5">Forgot password</p>
                        <button className="loginButton"><div className="buttonText mb-5" >Login</div></button>
                        <hr></hr>

                        <div className="d-flex mt-5">
                            <div className="dontHaveAccount mr-2">Don't have an account? </div>
                            <p className="register" onClick={showOneAndCloseAnother}>Register</p>
                        </div>
                    </div>
                </Modal>

            </div>
        );
    }
}

export default Login;

