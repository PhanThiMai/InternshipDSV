import * as types from '../constants/ActionType'

export const handleLoginModal = () => {
    return {
        type: types.HANDLE_LOGIN_MODAL
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

