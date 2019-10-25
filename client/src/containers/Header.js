import { connect } from 'react-redux'
import * as actions from '../actions/headerAction'
import Header from '../components/Header/Header'


const token = localStorage.getItem("usertoken");
const mapStateToProps = state => ({
    headerState: state.headerReducer,
    cart: state.cart
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleLoginModal: () => {
            dispatch(actions.handleLoginModal(token))
        },

        handleRegisterModal: () => {
            dispatch(actions.handleRegisterModal())
        },
        showAnotherModal: () => {
            dispatch(actions.showAnotherModal())
        },
        checkLogin: () => {
            dispatch(actions.checkLogin())
        },
        logOut: () => {
            dispatch(actions.logOut())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

