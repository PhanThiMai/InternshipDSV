import { connect } from 'react-redux'
import MyCart from '../components/MyCart/MyCart'


const mapStateToProps = state => ({
    cart: state.productsReducer.cart
})



export default connect(mapStateToProps, null)(MyCart);

