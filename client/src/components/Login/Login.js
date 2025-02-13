import React from 'react';
import { Modal } from 'reactstrap';
import './Login.scss'
import { login } from '../../api/userAction';


const img = {
    cross: "/img/cross.svg",
    checkbox: "/img/check-box.svg"
}

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: false
        };
    }

    handleFocus = e => {

        this.setState({
            [e.target.name]: '',
            errors: false
        })
    }
    onChange = e => {

        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleClick = e => {
        e.preventDefault()
        const { email, password } = this.state;
        if (login(email, password) === false) {
            this.setState({ errors: true })

        } else {
            login(email, password).then(res => {
                if (res) {
                    this.props.handleLoginCheck();
                    this.setState({
                        fullname: '',
                        email: '',
                        password: ''
                    })
                }
            })

        }
    }

    render() {
        const { open, handleLoginModal, showOneAndCloseAnother } = this.props
        const active = this.state.email !== '' && this.state.password !== '';
        const error = this.state.errors;
        const errorText = error && <p className="errorNotification">Your e-mail/password is invalid!</p>


        return (
            <div>
                <Modal isOpen={open}>
                    <div className="loginModal ">
                        <img src={img.cross} alt="cross" className="cross mt-2"
                            onClick={handleLoginModal} />
                        <div className="loginT" >Login</div>
                        <div className="errorNotification mt-2 mb-2">{errorText}</div>

                        <div className="activeR">
                            <label className="emailLabel">E-MAIL</label>
                            <input type="email" name="email" id="email"
                                placeholder="Enter your email..."
                                onFocus={this.handleFocus}
                                value={this.state.email}
                                className={error ? 'errorInput' : 'normalInput'}
                                onChange={this.onChange} />
                        </div>

                        <div className="activeR">
                            <label className="passwordLabel">PASSWORD</label>
                            <input type="password" name="password" id="password"
                                placeholder="Enter your password..."
                                value={this.state.password}
                                onFocus={this.handleFocus}

                                className={error ? 'errorInput' : 'normalInput'}
                                onChange={this.onChange} />
                        </div>

                        <div className="subInfor d-flex float-left ">
                            <img src={img.checkbox} alt="checkBox"
                                className="checkBox" />
                            <p className="rememberPsw">Remember password</p>
                        </div>
                        <p className="forgotPsw float-right">Forgot password</p>
                        <button onClick={this.handleClick} className={active ? 'loginButtonActive' : 'loginButton'}><div className="buttonText mb-5" >Login</div></button>
                        <hr className="mt-2"></hr>

                        <div className="d-flex mt-4">
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

