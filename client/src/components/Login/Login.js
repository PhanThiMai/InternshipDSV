import React from 'react';
import { Modal } from 'reactstrap';
import './Login.scss'
import { login } from '../../actions/userAction';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLogin: false,
            email: '',
            password: '',
            errors: false
        };
        this.onChange = this.onChange.bind(this)
        this.handleClick = this.handleClick.bind(this)

    }


    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleClick(e) {
        e.preventDefault()
        const { email, password } = this.state;


        if (login(email, password) === false) {
            this.setState({ errors: true })

        } else {
            login(email, password).then(res => {
                if (res === 200) {
                    this.setState({ isLogin: true })
                }
            })
        }
    }

    render() {
        const { open, handleLoginModal, showOneAndCloseAnother } = this.props
        const active = this.state.email !== '' && this.state.password !== '';
        const error = this.state.errors;
        const errorTextEmail = error && <p className="errorText">Please enter a valid email</p>
        const errorTextPassword = error && <p className="errorText">Please enter a valid password</p>


        return (
            <div>
                <Modal isOpen={open && (!this.state.isLogin)} >
                    <div className="loginModal container container-fluid">
                        <img src="img/cross.svg" alt="cross" className="cross mt-3"
                            onClick={handleLoginModal} />
                        <div className="loginT" >Login</div>
                        <p className="errorNotification"></p>

                        <div className="activeR">
                            <label className="emailLabel">E-MAIL</label>
                            <input type="email" name="email" id="email"
                                placeholder="Enter your email..."
                                value={this.state.email}
                                className={error ? 'errorInput' : 'normalInput'}
                                onChange={this.onChange} />
                            <div>{errorTextEmail}</div>

                        </div>

                        <div className="activeR">
                            <label className="passwordLabel">PASSWORD</label>
                            <input type="password" name="password" id="password"
                                placeholder="Enter your password..."
                                value={this.state.password}
                                className={error ? 'errorInput' : 'normalInput'}

                                onChange={this.onChange} />
                            <div>{errorTextPassword}</div>

                        </div>

                        <div className="subInfor d-flex float-left ml-5 ">
                            <img src="img/check-box.svg" alt="checkBox"
                                className="checkBox" />
                            <p className="rememberPsw">Remember password</p>
                        </div>
                        <p className="forgotPsw float-right mr-5">Forgot password</p>
                        <button onClick={this.handleClick} className={active ? 'loginButtonActive' : 'loginButton'}><div className="buttonText mb-5" >Login</div></button>
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

