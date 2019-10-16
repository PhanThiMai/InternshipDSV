import * as types from '../constants/ActionType'

const token = localStorage.getItem("usertoken");
console.log(token)
let initialState = {
    loginModal: false,
    registerModal: false,
    isLogin: token ? true : false
}

let headerReducer = (state = initialState, action) => {
    let { registerModal, isLogin, loginModal } = state;
    switch (action.type) {
        case types.HANDLE_LOGIN_MODAL:
            return {
                registerModal,
                isLogin: action.token ? true : false,
                loginModal: action.token ? false : !loginModal
            }
        case types.HANDLE_REGISTER_MODAL:

            return {
                loginModal,
                isLogin,
                registerModal: !registerModal
            }
        case types.SHOW_ANOTHER_MODAL:

            return {
                isLogin,
                loginModal: !state.loginModal,
                registerModal: !registerModal
            }
        case types.CHECK_LOGIN:

            return {
                loginModal: false,
                registerModal: false,
                isLogin: true,

            }
        case types.LOG_OUT:
            localStorage.removeItem("usertoken")
            return {
                isLogin: false
            }

        default:
            return state
    }
}

export default headerReducer;

