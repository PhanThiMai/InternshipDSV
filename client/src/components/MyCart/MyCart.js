import React from 'react';
import './MyCart.scss'
import Color from './Color'
import { getProducts, editProduct } from '../../api/products'


class MyCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }


    handleChange = e => {
        const id = e.target.getAttribute('name');
        const cart = this.props.cart;
        const product = cart.find((item) => {
            if (item._id === id)
                return item
            return null
        })
        if (product) {
            let index = cart.indexOf(product);
            let newcart = [...cart.slice(0, index), product, ...cart.slice(index + 1, cart.length)]
            localStorage.setItem('cart', JSON.stringify(newcart));
        }



    }

    handleRemove = e => {
        const id = e.target.getAttribute('name');
        const cart = this.props.cart;
        const product = cart.find((item) => {
            if (item._id === id)
                return item
            return null
        })
        if (product) {
            let index = cart.indexOf(product);
            let newcart = [...cart.slice(0, index), ...cart.slice(index + 1, cart.length)]
            localStorage.setItem('cart', JSON.stringify(newcart));
            this.props.removeFromCart();

            this.setState({
                products: newcart
            })
        }
    }

    handleDecreaseQuantity = e => {
        const id = e.target.getAttribute('name')
        const { products } = this.state;
        const product = products.find((item) => {
            if (item._id === id)
                return item
            return null
        })
        if (product) {
            let index = products.indexOf(product);
            let productCopy = [...products]
            product.quantity = product.quantity > 0 ? product.quantity - 1 : product.quantity;
            this.setState({
                products: [...productCopy.slice(0, index), product, ...productCopy.slice(index + 1, productCopy.length)]
            })
        }
    }

    handleIncreaseQuantity = e => {
        const id = e.target.getAttribute('name')
        const { products } = this.state;
        const product = products.find((item) => { // get product in cart
            if (item._id === id)
                return item
            return null
        })
        getProducts().then(res => {// get origional product
            const productList = res.data;
            if (productList) {
                productList.forEach(item => {
                    if (item._id === id) {
                        let index = products.indexOf(product);
                        let productCopy = [...products]
                        product.quantity = product.quantity < item.amount ? product.quantity + 1 : product.quantity;
                        this.setState({
                            products: [...productCopy.slice(0, index), product, ...productCopy.slice(index + 1, productCopy.length)]
                        })

                    }
                });
            }
        })

    }

    handleCheckout = () => {
        const { products } = this.state;
        let productList = [];
        getProducts().then(res => {
            productList = res.data;
            if (productList) {
                products.map((item) => {
                    productList.forEach(element => {
                        if (element._id === item._id) {
                            const restAmount = element.amount - item.quantity;
                            element.amount = restAmount
                            editProduct(element).then(res => {
                            })
                        }
                    });
                })
            }
        })
        localStorage.removeItem("cart");
        this.props.checkout();
        this.setState({
            products: []
        })
    }

    componentDidMount = () => {
        const productList = this.props.cart ? this.props.cart : []
        this.setState({
            products: productList
        })
    }

    render() {

        const productList = this.props.cart ? this.props.cart : []
        const { products } = this.state;

        const cartInfor = products.map((item, index) => {
            return (
                <tr key={index} valign="middle">
                    <td scope="row">
                        <div className="cart-item d-flex">
                            <img src='/img/product.jpg' alt="img" className="cart-item-img" />
                            <div>
                                <p className="cart-item-name">{item.name}</p>
                                <div className="cart-item-edit d-flex">
                                    <p className="change"
                                        name={item._id}
                                        onClick={this.handleChange}
                                    >Change</p>
                                    <p className="remove"
                                        name={item._id}
                                        onClick={this.handleRemove}
                                    >Remove</p>
                                </div>
                            </div>
                        </div>
                    </td>
                    <td><Color color={item.color} /></td>
                    <td className="cart-item-size">{item.size}</td>
                    <td>
                        <div className="cart-item-quantity d-flex justify-content-between">
                            <p name={item._id}
                                onClick={this.handleDecreaseQuantity}
                            >-</p>
                            <p>{item.quantity}</p>
                            <p
                                name={item._id}
                                onClick={this.handleIncreaseQuantity}
                            >+</p>
                        </div>

                    </td>
                    <td className="cart-item-price">{`$${item.price * item.quantity}`}</td>
                </tr>
            )
        })



        let subtotal = 0;
        productList.forEach(item => {
            subtotal += (item.price * item.quantity)
        });


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
                                <p className="ship-info">{`$${subtotal}`}</p>
                            </div>
                            <div></div>
                            <div className="d-flex justify-content-between">
                                <p className="total-product">Subtotal</p>
                                <p className="total-product">{`$${subtotal}`}</p>
                            </div>
                        </div>
                        <button className="check-out-button" onClick={this.handleCheckout}>Check out</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MyCart;