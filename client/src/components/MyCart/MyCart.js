import React from 'react';
import './MyCart.scss'
import Color from './Color'


class MyCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }



    render() {

        const productList = this.props.cart ? this.props.cart : []
        console.log(productList)
        const cartInfor = productList.map((item, index) => {
            return (
                <tr key={index} valign="middle">
                    <td scope="row">
                        <div className="cart-item d-flex">
                            <img src='/img/product.jpg' alt="img" className="cart-item-img" />
                            <div>
                                <p className="cart-item-name">{item.name}</p>
                                <div className="cart-item-edit d-flex">
                                    <p className="change">Change</p>
                                    <p className="remove">Remove</p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td><Color color={item.color} /></td>
                    <td className="cart-item-size">{item.size}</td>
                    <td>
                        <div className="cart-item-quantity d-flex justify-content-between">
                            <p>-</p>
                            <p>{item.quantity}</p>
                            <p>+</p>
                        </div>

                    </td>
                    <td className="cart-item-price">{`$${item.price}`}</td>
                </tr>
            )


        })

        return (
            <div className="cart-page">
                <p className="my-bag">My Bag</p>
                <div className="row">
                    <div className="products-list col-7">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Product</th>
                                    <th scope="col">Color</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartInfor}

                            </tbody>

                        </table>
                    </div>
                    <div className="check-out">
                        <p className="total">Total</p>
                        <div className="check-out-info">
                            <div className="d-flex justify-content-between">
                                <p className="ship-info">Shipping & Handling:</p>
                                <p className="ship-info">Free</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="ship-info">Total product:</p>
                                <p className="ship-info">$6.900</p>
                            </div>
                            <div></div>
                            <div className="d-flex justify-content-between">
                                <p className="total-product">Subtotal</p>
                                <p className="total-product">$6.900</p>
                            </div>
                        </div>
                        <button className="check-out-button">Check out</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyCart;