import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    render() {
        return (
            <div>
                <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>

                    <div toggle={this.toggle}>Modal title</div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
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