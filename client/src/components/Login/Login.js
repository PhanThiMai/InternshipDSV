import React from 'react';
import { Modal } from 'reactstrap';
import './Login.scss'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };
    }


    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} >
                    <div className="loginModel container container-fluid">
                        <img src="img/cross.svg" alt="cross" className="cross mt-3" />
                        <div className="login" >Login</div>

                        <div className="activeR">
                            <p className="emailLabel">E-MAIL</p>
                            <input type="email" name="email" id="email" placeholder="Enter your email..." />
                        </div>

                        <div className="activeR">
                            <p className="passwordLabel">PASSWORD</p>
                            <input type="password" name="password" id="password" placeholder="Enter your password..." />
                        </div>

                        <div className="subInfor d-flex float-left ml-5 ">
                            <img src="img/check-box.svg"
                                className="checkBox"/>
                            <p className="rememberPsw">Remember password</p>
                        </div>
                        <p className="forgotPsw float-right mr-5">Forgot password</p>
                            <button className="loginButton"><div className="buttonText" >Login</div></button>
                            <hr></hr>
                        <div className="dontHaveAccount">Don't have an account? <a href="/" className="register">Register</a> </div>


                        </div>



                </Modal>
            </div>
                );
            }
        }
        
        export default Login;
        
        
        
        /**
         *
         *
         *
         *
         *
        
                    <form >
                    <img src="img/cross.svg" alt="cross" className="cross float-right mt-3" />

                    <div className="register" >Register</div>

                    <div className="activeR">
                        <p className="fullNameLabel">NAME</p>
                        <input type="text" name="fullname" id="fullname" placeholder="Enter your name..." />
                    </div>
                    <div className="activeR">
                        <p className="emailLabel">E-MAIL</p>
                        <input type="email" name="email" id="email" placeholder="Enter your email..." />
                    </div>

                    <div className="activeR">
                        <p className="passwordLabel">PASSWORD</p>
                        <input type="password" name="password" id="password" placeholder="Enter your password..." />
                    </div>

                    <div className="subInfor"> By creating an account you agree to the <p className="privacy">Term of Service</p>
                        and <p className="privacy" >Privacy Polity</p>
                    </div>
                    <button >Register</button>
                    <hr></hr>
                    <div className="dontHaveAccount">Do you have an account? <a href="/" className="login">Login</a> </div>

                </form>


                */