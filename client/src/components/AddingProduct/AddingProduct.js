import React from 'react'
import { Link } from 'react-router-dom'
import './AddingProduct.scss'
import { FormControl } from 'react-bootstrap'
import SelectedInput from './SelectedInput/SelectedInput'
import { addProduct } from '../../api/products'

const optionsCategory = [
    { value: 'Casual dresses', label: 'Casual dresses' },
    { value: 'Going out dresses', label: 'Going out dresses' },
    { value: 'Sets', label: 'Sets' },
    { value: 'Mini dresses', label: 'Mini dresses' },
    { value: 'Rompers / Jumpsuits', label: 'Rompers / Jumpsuits' },
    { value: 'Maxi / Midi dresses', label: 'Maxi / Midi dresses' },

];

const optionsBrand = [
    { value: 'Zara', label: 'Zara' },
    { value: 'H&M', label: 'H&M' },
    { value: 'Pull&Bear', label: 'Pull&Bear' },
    { value: 'Dior', label: 'Dior' },
    { value: 'Chanel', label: 'Chanel' },
];


const optionsSize = [
    { value: 'S', label: 'S' },
    { value: 'M', label: 'M' },
    { value: 'L', label: 'L' },
    { value: 'XL', label: 'XL' },

];

const optionsColors = [
    { label: "Red", value: 'Red' },
    { label: "Yellow", value: 'Yellow' },
    { label: "Blue", value: 'Blue' },
    { label: "Orange", value: 'Orange' },
    { label: "Brown", value: 'Brown' },
    { label: "Gray", value: 'Gray' }

]


class AddingProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            nameProduct: '',
            priceProduct: 0,
            quantityProduct: 0,
            descriptionProduct: '',
            error: false
        }
    }

    handleOnchange = e => {
        this.setState({
            [e.target.name]: e.target.value,
            error: false
        })
    }

    handleCancel = () => {
        this.setState({
            nameProduct: '',
            priceProduct: 0,
            quantityProduct: 0,
            descriptionProduct: '',
            error: false
        })
        this.props.handleCancelProduct();
    }

    handleComplete = e => {
        e.preventDefault()
        const token = localStorage.getItem("usertoken");
        if (!token) {
            this.setState({
                error: true
            })
        }
        else {
            const { selectedCategory, selectedBrand, selectedSize, selectedColor } = this.props.addProductState;
            const { nameProduct, priceProduct, quantityProduct, descriptionProduct } = this.state;
            if (selectedCategory === null
                || selectedSize === null
                || selectedColor === null
                || nameProduct.trim() === '') {
                this.setState({
                    error: true
                })
            }
            else {
                const categogies = selectedCategory.map((item) =>
                    item.value
                )
                const brand = selectedBrand.value;
                const size = selectedSize.map((item) =>
                    item.value
                )
                const color = selectedColor.map((item) => item.value)
                const product = {
                    category: categogies,
                    brand: brand,
                    size: size,
                    color: color,
                    name: nameProduct,
                    price: parseInt(priceProduct),
                    amount: parseInt(quantityProduct),
                    description: descriptionProduct,
                    rating: 0,
                    image: '/img/product.jpg'
                }

                addProduct(product, token).then(res => {
                    if (res) {
                        this.handleCancel();
                    }
                })
            }
        }
    }

    handleLogout = () => {
        this.props.handleLogout()
    }

    render() {
        const { nameProduct, priceProduct, quantityProduct, descriptionProduct, error } = this.state;
        const { selectedCategory, selectedBrand, selectedSize, selectedColor } = this.props.addProductState;
        const { handleSelectedCategory, handleSelectedColor, handleSelectedBrand, handleSelectedSize } = this.props;
        return (
            <div className="d-flex row add-product">
                <div className="menu-colum col-3">
                    <Link to="/">
                        <img src="/img/logo.png"
                            className="logo" alt="logo">
                        </img>
                    </Link>
                    <div className="menu-item d-flex">
                        <img src="/img/overview-dark.svg" alt="view-dark"
                        />
                        <p className="menu-text">Overview</p>
                    </div>

                    <div className="menu-item d-flex">
                        <img src="/img/orders-dark.svg" alt="icon"
                        />
                        <p className="menu-text">Orders</p>
                    </div>

                    <div className="menu-item active-item d-flex">
                        <img src="/img/products-dark.svg" alt="icon"
                        />
                        <p className="menu-text">Products</p>
                    </div>

                    <div className="menu-item d-flex">
                        <img src="/img/orders-dark.svg" alt="icon"
                        />
                        <p className="menu-text">Payments</p>
                    </div>

                    <div className="menu-item d-flex">
                        <img src="/img/promotion-dark.svg" alt="icon"
                        />
                        <p className="menu-text">Promotions</p>
                    </div>

                    <div className="menu-item d-flex">
                        <img src="/img/setting-dark.svg" alt="icon"
                        />
                        <p className="menu-text">Setting</p>
                    </div>


                </div>
                <div className="add-product-column col-9 ">
                    <div className="d-flex justify-content-between">
                        <p className="add-product-logo">Add product</p>
                        <div className="admin-info d-flex">
                            <img src="/img/user.svg" className="userpic mr-3 " alt="avartar" />
                            <p className="admin"
                                onClick={this.handleLogout}
                            >Lucile Bush</p>
                            <img src="/img/dropdown.svg"
                                onClick={this.handleLogout}
                                alt="icon"
                                className="dropdown" />
                            <img src="/img/mail.svg" alt="icon"
                                className="mail" />
                            <img src="/img/notification.svg" alt="icon"
                                className="notification" />
                        </div>

                    </div>
                    <p className="sub-title">Products  /  Add product</p>
                    <div className="product-info d-flex align-items-center">
                        <p className="name-info ">Photos</p>
                        <div className="ml-4">
                            <div className="img-product d-flex mx-3">
                                <img className="smallBalli mr-3" src="/img/smallItem.jpg" alt="img" />
                                <img className="smallBalli" src="/img/smallItem.jpg" alt="img" />
                            </div>
                            <p className="sub-infor-img mt-3 ml-3">You can add up to 8 photos. The 1st photo will be set as cover (main photo).</p>
                        </div>

                    </div>
                    <div className="product-info d-flex align-items-center">
                        <p className="name-info">Name</p>
                        <FormControl
                            value={nameProduct}
                            name="nameProduct"
                            onChange={this.handleOnchange}

                            className={error ? "input-error" : "input-name "}
                            placeholder="Enter product name" />

                    </div>
                    <div className="product-info d-flex align-items-center">
                        <p className="name-info">Categories</p>
                        <SelectedInput
                            isMulti={true}
                            value={selectedCategory}
                            handleSelect={handleSelectedCategory}
                            options={optionsCategory}
                            error={error}
                        />

                    </div>
                    <div className="product-info d-flex align-items-center">
                        <p className="name-info ">Brand</p>
                        <SelectedInput
                            isMulti={false}
                            value={selectedBrand}
                            handleSelect={handleSelectedBrand}
                            error={error}

                            options={optionsBrand} />

                    </div>
                    <div className="product-info d-flex align-items-center">
                        <p className="name-info ">Price($)</p>
                        <FormControl
                            type="number"
                            value={priceProduct}
                            name="priceProduct"
                            onChange={this.handleOnchange}
                            className={error ? "input-error" : "input-name "}
                            min="0"
                            max="1000000000"
                            placeholder="Enter product price" />

                    </div>
                    <div className="product-info d-flex align-items-center">
                        <p className="name-info">Size</p>
                        <SelectedInput
                            isMulti={true}
                            value={selectedSize}
                            handleSelect={handleSelectedSize}
                            error={error}

                            options={optionsSize} />
                    </div>
                    <div className="product-info d-flex align-items-center">
                        <p className="name-info ">Colors</p>
                        <SelectedInput
                            isMulti={true}
                            value={selectedColor}
                            error={error}

                            handleSelect={handleSelectedColor}
                            options={optionsColors} />
                    </div>
                    <div className="product-info d-flex align-items-center">
                        <p className="name-info ">Quantity</p>
                        <FormControl
                            type="number"
                            value={quantityProduct}
                            name="quantityProduct"
                            onChange={this.handleOnchange}
                            className={error ? "input-error" : "input-name "}
                            min="0"
                            max="1000000000"
                            placeholder="Enter product quantity" />

                    </div>
                    <div className="product-info d-flex ">
                        <p className="name-info ">Description</p>
                        <textarea
                            value={descriptionProduct}
                            name="descriptionProduct"
                            className="input-description "
                            onChange={this.handleOnchange}
                            placeholder="Enter product description" />

                    </div>

                    <div className="d-flex justify-content-end button-group">
                        <button className="cancel-button" onClick={this.handleCancel}>Cancel</button>
                        <button className="complete-button" onClick={this.handleComplete}>Compelete</button>

                    </div>
                </div>
            </div>
        )

    }
}

export default AddingProduct;