import React from 'react'
import './ProductCart.scss'
import { Link } from 'react-router-dom'

class ProductCart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { product, match } = this.props;
        const newUrl = product.name.replace(/\s/g, '');

        const soldOutItem = <div className="sold-out">Sold out</div>;
        return (
            <Link to={`${match.url}/${newUrl}`}>
                <div className="cart-product">
                    <img src={product.img} alt="product" className="product-img" />
                    {soldOutItem}
                    <p className="product-name">{product.name}</p>
                    <p className="product-brand">{product.brand}</p>
                    <p className="product-price">{product.price}</p>

                </div>
            </Link>

        )
    }
}

export default ProductCart;