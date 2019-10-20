import { connect } from 'react-redux'
import * as actions from '../actions/productsAction'
import Category from '../components/Products/Content/CategoriesColumn/Categories'


const mapStateToProps = state => ({
    productsState: state.productsReducer
})

const mapDispatchToProps = (dispatch, productDetail, childCategory) => {
    return {
        viewProductDetail: () => {
            dispatch(actions.viewProductDetail(productDetail))
        },

        viewProductsOfCategory: () => {
            dispatch(actions.viewProductsOfCategory(childCategory))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Category);

