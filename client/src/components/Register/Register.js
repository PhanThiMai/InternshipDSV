import React from 'react';
import { Modal } from 'reactstrap';
import './Register.scss'

class Register extends React.Component {
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
                    <div className="registerModel container container-fluid">
                        <img src="img/cross.svg" alt="cross" className="cross mt-3" />
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
                                <p className="privacy mr-1">Term of Service  </p>
                                <p>and</p>
                                <p className="privacy ml-1">Privacy Polity</p>
                            </div>
                        </div>


                        <button className="registerButton"><div className="buttonText" >Register</div></button>
                        <hr></hr>
                        <div className="dontHaveAccount">Do you have an account? <a href="/" className="login">Login</a> </div>


                    </div>



                </Modal>
            </div>
        );
    }
}

export default Register;