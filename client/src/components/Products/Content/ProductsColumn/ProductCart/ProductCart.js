import React from 'react'
import './ProductCart.scss'
import { NavLink } from 'react-router-dom'

class ProductCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { product } = this.props;
        const newUrl = product._id

        const soldOutItem = product.amount === 0 ? <div className="sold-out">Sold out</div> : <></>;
        return (
            <NavLink
                to={`/products/${newUrl}`}
            >
                <div className="cart-product" >
                    <img src={product.image} alt="product" className="product-img" />
                    {soldOutItem}
                    <p className="product-name">{product.name + ' ' + product.brand}</p>
                    <p className="product-price">{`$${product.price}.00`}</p>
                </div>
            </NavLink>

        )
    }
}

export default ProductCart;