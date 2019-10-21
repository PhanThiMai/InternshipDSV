import { connect } from 'react-redux'
import * as actions from '../actions/productsAction'
import Product from '../components/Product/Product'


const mapStateToProps = state => ({
    productsState: state.productsReducer
})

const mapDispatchToProps = (dispatch) => {
    return {
        viewProductDetail: (product) => {
            dispatch(actions.viewProductDetail(product))
        },

        viewProductsOfCategory: (childCategory) => {
            dispatch(actions.viewProductsOfCategory(childCategory))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Product);

