import React from 'react'
import './Cart.scss'
import { Link } from 'react-router-dom'


// const productsInCart =
//     [{
//         img: '/img/product.jpg',
//         name: "New Balance Men's Street Backpack",
//         size: 'S',
//         price: 69,
//         amount: 5,
//         color: 'Black'
//     }
//     ]



class Cart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
<<<<<<< Updated upstream
        const productItems = productsInCart.map((item, index) => {
=======
        const { productList } = this.props;
        const productItems = productList.map((item, index) => {
>>>>>>> Stashed changes
            return (
                <div key={index}>
                    <div className="cart-item d-flex">
                        <img src={item.img} alt="img" className="cart-item-img" />
                        <div>
                            <p className="cart-item-name">{item.name}</p>
                            <div className="cart-item-info d-flex justify-content-between">
                                <p className="cart-item-price">{`$${item.price}`}</p>
                                <div className="  cart-item-subinfo">
                                    {
                                        `${item.size}.${item.color}.${item.amount}`
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cart-item-hr"></div>
                </div>
            )
        })
        return (
            <div className="cart-component">
                {productItems}
                <Link to="/cart" className="view-cart">View Cart</Link>

            </div>
        )
    }
}


export default Cart