import React from 'react';
import { Modal } from 'reactstrap';
import './Register.scss'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };

        // this.toggle = this.toggle.bind(this);
    }

    // toggle() {
    //     this.setState(prevState => ({
    //         modal: !prevState.modal
    //     }));
    // }

    render() {
        return (
            <div>
                <Modal isOpen={this.state.modal} >
                    <div className="registerModel container container-fluid">
                        <img src="img/cross.svg" alt="cross" className="cross" />
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

                        <div className="subInfor"> By creating an account you agree to the  </div>
                        <div className="privacy">Term of Service <span> and <span className="privacy">Privacy Polity</span></span></div>>

                        <button >Register</button>
                        <hr></hr>
                        <div className="dontHaveAccount">Do you have an account? <a href="/" className="login">Login</a> </div>


                    </div>



                </Modal>
            </div>
        );
    }
}

export default Register;