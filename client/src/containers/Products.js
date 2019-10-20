import { connect } from 'react-redux'
import * as actions from '../actions/productsAction'
import Products from '../components/Products/Products'


const mapStateToProps = state => ({
    productsState: state.productsReducer
})

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        viewProductDetail: () => {
            dispatch(actions.viewProductDetail(ownProps.product))
        },

        viewProductsOfCategory: () => {
            dispatch(actions.viewProductsOfCategory(ownProps.childCategory))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Products);

