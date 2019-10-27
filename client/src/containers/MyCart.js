import { connect } from 'react-redux'
import * as actions from '../actions/productsAction'
import MyCart from '../components/MyCart/MyCart'


const mapStateToProps = state => ({
    cart: state.productsReducer.cart
})

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: () => {
            dispatch(actions.removeFromCart());
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(MyCart);

