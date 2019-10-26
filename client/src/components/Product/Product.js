import React from 'react'
import './Product.scss'
import { getProducts } from '../../api/products'
import ChildCategory from '../Products/ChildCategory/ChildCategory'
import StarRating from './Rating'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: null,
            _id: '',
            name: '',
            price: 0,
            size: '',
            color: '',
            quantity: 1,
            category: ''
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
                        product: result,
                        _id: id,
                        name: result.name,
                        price: result.price,
                        size: result.size[0],
                        color: result.color[0],
                        quantity: 1,
                        category: result.category[0]
                    })
                }
            }
        })
    }



    handleAddToCart = () => {
        const { _id, price, size, color, quantity, name } = this.state;

        const newProduct = {
            _id: _id,
            price: price,
            size: size,
            color: color,
            name: name,
            quantity: quantity
        }

        let productInCart = localStorage.getItem("cart");
        if (productInCart) {
            productInCart = JSON.parse(productInCart);
            const findInCart = productInCart.find((item) => item._id === newProduct._id)
            if (!findInCart) {
                productInCart.push(newProduct);
                localStorage.setItem("cart", JSON.stringify(productInCart));
                this.props.addToCart(newProduct);
            }
        } else {
            productInCart = [];
            productInCart.push(newProduct);
            localStorage.setItem("cart", JSON.stringify(productInCart));
            this.props.addToCart(newProduct);
        }



    }

    handleClickColor = (e) => {
        const color = e.target.name
        this.setState({
            color
        })
    }

    handleClickSize = (e) => {
        const size = e.target.name
        this.setState({
            size
        })
    }

    handleIncreaseQuantity = () => {
        const { product, quantity } = this.state;
        if (quantity < product.amount) {
            this.setState({
                quantity: quantity + 1
            })
        }
    }
    handleDecreaseQuantity = () => {
        const { quantity } = this.state;
        if (quantity > 0) {
            this.setState({
                quantity: quantity - 1
            })
        }
    }


    render() {
        const img = ["/img/product.jpg", "/img/product1.jpg"]
        const { product, quantity } = this.state;

        const sizeItem = product ? product.size.map((item, index) => {
            return (
                <button
                    type="radio"
                    name={item}
                    className={`d-flex align-items-center justify-content-center mr-3 ${product.amount > 0 ? "square" : "square unenable disabled"}`}
                    key={index}
                    onClick={this.handleClickSize}
                >
                    {item}
                </button>
            )
        }) : <></>

        const colorItem = product ? product.color.map((item, index) => {
            return (
                <button
                    type="radio"
                    name={item}
                    className={`d-flex align-items-center justify-content-center color${index}`}
                    key={index}
                    onClick={this.handleClickColor}
                > </button>
            )
        }) : <></>

        const canAddToCart = (product && product.amount !== 0) ? true : false;
        let addToCart;

        if (canAddToCart) {
            addToCart = < button className="mt-5 add-to-cart"
                onClick={this.handleAddToCart}> Add to cart </button >
        }
        else {
            addToCart = < button className="mt-5 do-not-add"> Add to cart </button >
        }

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
                <div className="col-5 product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{`$${product.price}`}</p>
                    <StarRating />
                    <p className="size-title">Size</p>
                    <div className="sizes-product d-flex ">
                        {sizeItem}
                    </div>
                    <p className="size-title">Color</p>
                    <div
                        className="d-flex flex-wrap colors-product "
                    >{colorItem}</div>
                    <div className="d-flex align-items-center mt-3">
                        <p className="mr-3 size-title1">Quantity</p>
                        <div className="handle-quantity d-flex justify-content-between">
                            <p onClick={this.handleDecreaseQuantity}>-</p>
                            <p>{quantity}</p>
                            <p onClick={this.handleIncreaseQuantity}>+</p>
                        </div>
                    </div>
                    {addToCart}
                    <div className="line-under-add-to-cart"></div>

                    <div className="model-wearing">
                        <p className="model-wearing-s">
                            Model wearing size S
                        </p>
                        - Chest: 36”<br />
                        - Length: 25.75”
                    </div>
                </div>

                <div className="relative">
                    <p className="more-from">More from</p>
                    <p className="more-from-category">{product.category[0]}</p>
                    <div className="d-flex flex-column list-small-img1">
                        <img alt="subImg" src={img[0]} className="small-img1" />
                        <img alt="subImg" src={img[0]} className="small-img1" />
                        <img alt="subImg" src={img[0]} className="small-img1" />
                        <img alt="subImg" src={img[0]} className="small-img1" />
                    </div>

                </div>
            </div>
            : <h4 className="error">Opps something wrong</h4>
        const categoryName = product ? <ChildCategory categoryName={product.category[0]} /> : <></>
        return (
            <div>
                {categoryName}
                {productDetail}
                <div className=" row reviews">
                    <div className="review ">Reviews</div>

                </div>
            </div>

        )
    }
}


export default Product;