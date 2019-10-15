import * as types from '../constants/ActionType'

let initialState = {
    loginModal: false,
    registerModal: false,
    isLogin: true,
}

let headerReducer = (state = initialState, action) => {
    let { registerModal, isLogin, loginModal } = state;
    switch (action.type) {
        case types.HANDLE_LOGIN_MODAL:
            return {
                registerModal,
                isLogin,
                loginModal: !loginModal
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

        default:
            return state
    }
}

export default headerReducer;

