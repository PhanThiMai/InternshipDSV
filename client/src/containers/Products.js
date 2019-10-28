import { connect } from 'react-redux'
import * as actions from '../actions/productsAction'
import Products from '../components/Products/Products'


const mapStateToProps = state => ({
    productsState: state.productsReducer,
    category: state.subNavBarReducer
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


export default connect(mapStateToProps, mapDispatchToProps)(Products);

