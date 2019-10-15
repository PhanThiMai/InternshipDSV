import { connect } from 'react-redux'
import * as actions from '../actions/headerAction'
import Header from '../components/Header/Header'

const mapStateToProps = state => ({
    headerState: state.headerReducer
})

const mapDispatchToProps = (dispatch, props) => {
    return {
        handleLoginModal: () => {
            dispatch(actions.handleLoginModal())
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

