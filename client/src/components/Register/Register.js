import React from 'react';
import { Modal } from 'reactstrap';
import './Register.scss'
import Login from '../Login/Login'
import axios from 'axios'

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true,
            login: false,
            fullname: '',
            email: '',
            password: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    showLoginModel = (event) => {
        this.setState({
            modal: !this.state.modal,
            // login: true
        })

    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })

    }

    handleClick(e) {
        e.preventDefault()
        const { fullname, email, password } = this.state;
        return axios.post('http://localhost:4000/user', {
            fullname,
            email,
            password,
        })
            .then(res => {
                if (res.status == 422)
                    console.log(res.errors)
                else {
                    if (res.type == 0)
                        console.log(res.errors)
                    else
                        console.log(res.data)
                }
            })

    }

    render() {
        const { open, handleEvent } = this.props;
        return (
            <div>
                <Modal isOpen={this.state.modal && open} >
                    <div className="registerModel container container-fluid">
                        <img src="img/cross.svg" alt="cross" className="cross mt-3" onClick={handleEvent}
                        />
                        <div className="register" >Register</div>

                        <div className="activeR">
                            <label className="fullNameLabel">NAME</label>
                            <input type="text"
                                name="fullname"
                                id="fullname"
                                placeholder="Enter your name..."
                                value={this.state.fullname}
                                onChange={this.onChange}

                            />

                        </div>

                        <div className="activeR">
                            <label className="emailLabel">E-MAIL</label>
                            <input type="email" name="email" id="email"
                                placeholder="Enter your email..."
                                value={this.state.email}
                                onChange={this.onChange}

                            />
                        </div>

                        <div className="activeR">
                            <label className="passwordLabel">PASSWORD</label>
                            <input type="password" name="password" id="password"
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

                        <button className="registerButton" onClick={this.handleClick}><div className="buttonText" >Register</div></button>
                        <hr></hr>
                        <div className="d-flex ">
                            <div className="dontHaveAccount mr-2">Do you have an account?</div>
                            <p className="loginN" onClick={this.showLoginModel}>Login</p>

                        </div>


                    </div>

                </Modal>
                {/* 
                <Login open={this.state.login}></Login> */}

            </div>
        );
    }
}

export default Register;