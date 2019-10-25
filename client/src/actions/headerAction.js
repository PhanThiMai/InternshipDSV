import * as types from '../constants/ActionType'

export const handleLoginModal = (token) => {
    return {
        type: types.HANDLE_LOGIN_MODAL,
        token
    }
}

export const handleRegisterModal = () => {
    return {
        type: types.HANDLE_REGISTER_MODAL
    }
}

export const showAnotherModal = () => {
    return {
        type: types.SHOW_ANOTHER_MODAL
    }
}

export const checkLogin = () => {
    return {
        type: types.CHECK_LOGIN
    }
}

export const logOut = () => {
    return {
        type: types.LOG_OUT
    }
}

export const isAdmin = () => {
    return { type: types.HANDLE_ADMIN_LOGIN }
}


