import { connect } from 'react-redux'
import Cart from '../components/Header/Cart'


const mapStateToProps = state => ({
    cart: state.cart
})



export default connect(mapStateToProps, null)(Cart);

