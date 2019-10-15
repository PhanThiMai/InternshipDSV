import axios from 'axios'
const emailRegEx = /^[a-z][a-z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

export const register = (fullname, email, password) => {
    if (!emailRegEx.test(email)) {
        return false;
    }
    if (fullname.length < 3 || email.length < 6 || password.length < 6) {
        return false;
    }

    return axios
        .post('http://localhost:4000/user/register', {
            fullname,
            email,
            password,
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
}


export const login = (email, password) => {
    if (!emailRegEx.test(email)) {
        return false;
    }
    if (email.length < 6 || password.length < 6) {
        return false;
    }
    return axios
        .post('http://localhost:4000/user/login', {
            email,
            password,
        })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
}

