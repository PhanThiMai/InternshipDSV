import React from 'react';
import { Modal } from 'reactstrap';
import './Register.scss'
import { register } from '../../actions/userAction'


class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            fullname: '',
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
        const { fullname, email, password } = this.state;


        if (register(fullname, email, password) === false) {
            this.setState({ errors: true })

        } else {
            register(fullname, email, password).then(res => {
                if (res === 200) { this.setState({ isLogin: true }) }
            })
        }
    }

    render() {
        const { open, handleRegisterModal, showOneAndCloseAnother, handleLoginCheck } = this.props;
        const active = this.state.fullname !== '' && this.state.email !== '' && this.state.password !== '';
        const error = this.state.errors;
        return (
            <div>
                <Modal isOpen={open && (!this.state.isLogin)} >
                    <div className="registerModal container container-fluid">
                        <img src="img/cross.svg" alt="cross"
                            className="cross mt-3"
                            onClick={handleRegisterModal}
                        />
                        <div className="register" >Register</div>

                        <div className="activeR">
                            <label className="fullNameLabel">NAME</label>
                            <input type="text"
                                name="fullname"
                                id="fullname"
                                className={(error) ? 'errorInput' : 'normalInput'}
                                placeholder="Enter your name..."
                                value={this.state.fullname}
                                onChange={this.onChange}
                            />
                        </div>

                        <div className="activeR">
                            <label className="emailLabel">E-MAIL</label>
                            <input type="email" name="email" id="email"
                                className={error ? 'errorInput' : 'normalInput'}
                                placeholder="Enter your email..."
                                value={this.state.email}
                                onChange={this.onChange}

                            />
                        </div>

                        <div className="activeR">
                            <label className="passwordLabel">PASSWORD</label>
                            <input type="password" name="password" id="password"
                                className={error ? 'errorInput' : 'normalInput'}

                                placeholder="Enter your password..."
                                value={this.state.password}
                                onChange={this.onChange}

                            />
                        </div>

                        <div className="subInfor"> By creating an account you agree to the

                             <div className="d-flex ml-5">
                                <p className="privacy mr-2">Term of Service  </p>
                                <p>and</p>
                                <p className="privacy ml-2">Privacy Polity</p>
                            </div>
                        </div>

                        <button className={active ? 'registerButtonActive' : 'registerButton'}
                            onClick={this.handleClick}><div className="buttonText" >Register</div></button>
                        <hr></hr>
                        <div className="d-flex ">
                            <div className="dontHaveAccount mr-2">Do you have an account?</div>
                            <p className="loginN" onClick={showOneAndCloseAnother} >Login</p>

                        </div>
                    </div>

                </Modal>
                {/* 
                <Login prop={prop}></Login> */}


            </div>
        );
    }
}

export default Register;