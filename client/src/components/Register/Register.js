import React from 'react';
import { Modal } from 'reactstrap';
import './Register.scss'
import Login from '../Login/Login'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            login: false
        };
    }


    showLoginModel = (event) => {
        this.setState({
            modal: false,
            //login: true
        })

    }
    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} >
                    <div className="registerModel container container-fluid">
                        <img src="img/cross.svg" alt="cross" className="cross mt-3" onClick={() => {
                            this.setState({ modal: false })
                        }} />
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

                        <div className="subInfor"> By creating an account you agree to the

                             <div className="d-flex ml-5">
                                <p className="privacy mr-2">Term of Service  </p>
                                <p>and</p>
                                <p className="privacy ml-2">Privacy Polity</p>
                            </div>
                        </div>

                        <button className="registerButton"><div className="buttonText" >Register</div></button>
                        <hr></hr>
                        <div className="d-flex ">
                            <div className="dontHaveAccount mr-2">Do you have an account?</div>
                            <p className="loginN" onClick={this.showLoginModel}>Login</p>

                        </div>


                    </div>

                </Modal>
                <Login isOpen={this.state.login}></Login>

            </div>
        );
    }
}

export default Register;