import { connect } from 'react-redux'
import * as actions from '../actions/addProductAction'
import AddingProduct from '../components/AddingProduct/AddingProduct'


const mapStateToProps = state => ({
    addProductState: state.addProductReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleSelectedCategory: (value) => {
            dispatch(actions.handleSelectedCategory(value))
        },

        handleSelectedColor: (value) => {
            dispatch(actions.handleSelectedColor(value))
        },
        handleSelectedBrand: (value) => {
            dispatch(actions.handleSelectedBrand(value))
        },
        handleSelectedSize: (value) => {
            dispatch(actions.handleSelectedSize(value))
        },
        handleCancelProduct: () => {
            dispatch(actions.handleCancelProduct())
        },

        handleLogout: () => {
            dispatch(actions.handleLogout())
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(AddingProduct);

