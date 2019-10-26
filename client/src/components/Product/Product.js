import React from 'react'
import './Product.scss'
import { getProducts } from '../../api/products'
import ChildCategory from '../Products/ChildCategory/ChildCategory'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: null
        }
    }

    componentDidMount = () => {
        const id = this.props.match.params.id;
        getProducts().then(res => {
            const products = res.data;
            if (products) {
                let result = products.find((item) => item._id === id)
                if (result) {
                    this.setState({
                        product: result
                    })
                }
            }
        })
    }

    handleAddToCart = () => {

        const { product } = this.state;
        let productInCart = localStorage.getItem("cart");

        if (productInCart) {
            productInCart = JSON.parse(productInCart);
            console.log(productInCart)
            const findInCart = productInCart.find((item) => item._id === product._id)
            if (!findInCart) {
                productInCart.push(product);
                localStorage.setItem("cart", JSON.stringify(productInCart));
            }
        } else {
            productInCart = [];
            productInCart.push(product);
            localStorage.setItem("cart", JSON.stringify(productInCart));
        }

    }

    render() {
        const img = ["/img/product.jpg", "/img/product1.jpg"]
        const { product } = this.state;
        const { categoryName } = this.props;

        const sizeItem = product ? product.size.map((item, index) => {
            return (
                <button
                    type="radio"
                    name="radio"
                    className={`d-flex align-items-center justify-content-center mr-3 ${item.amount > 0 ? "square" : "square unenable disabled"}`}
                    key={index}
                >
                    {item}
                </button>
            )
        }) : <></>

        const colorItem = product ? product.color.map((item, index) => {
            return (
                <button
                    type="radio"
                    name="radio"
                    className={`d-flex align-items-center justify-content-center color${index}`}
                    key={index}
                >
                </button>
            )
        }) : <></>


        const productDetail = product ?
            <div className="row">
                <div className="col-5 d-flex ">
                    <div className="d-flex flex-column list-small-img">
                        <img alt="subImg" src={img[0]} className="small-img" />
                        <img alt="subImg" src={img[0]} className="small-img" />
                        <img alt="subImg" src={img[0]} className="small-img" />
                        <img alt="subImg" src={img[0]} className="small-img" />
                    </div>

                    <img alt="largeImg" src={img[1]} className="large-img" />

                </div>
                <div className="col-7 product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{`$${product.price}`}</p>

                    <p className="size-title">Size</p>
                    <div className="sizes d-flex ">
                        {sizeItem}
                    </div>
                    <p className="size-title">Color</p>
                    <div
                        className="d-flex flex-wrap colors "
                    >{colorItem}</div>

                    <div className="d-flex  align-items-center">
                        <p className="mr-5 size-title">Quantity</p>
                        <div className="handle-quantity d-flex justify-content-between">
                            <p>-</p>
                            <p>{product.amount}</p>
                            <p>+</p>
                        </div>
                    </div>

                    <button
                        className="add-to-cart mt-5"
                        onClick={this.handleAddToCart}
                    >Add to cart </button>
                </div>

            </div>
            : <h4 className="error">Opps something wrong</h4>



        return (
            <div>
                <ChildCategory categoryName={categoryName} />
                {productDetail}
            </div>

        )
    }
}


export default Product;