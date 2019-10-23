import React from 'react'
import { Link } from 'react-router-dom'
import './AddingProduct.scss'
import { FormControl } from 'react-bootstrap'
import Select from 'react-select';

const options = [
    { value: 'Casual dresses', label: 'Casual dresses' },
    { value: 'Going out dresses', label: 'Going out dresses' },
    { value: 'Sets', label: 'Sets' },
    { value: 'Mini dresses', label: 'Mini dresses' },
    { value: 'Rompers / Jumpsuits', label: 'Rompers / Jumpsuits' },
    { value: 'Maxi / Midi dresses', label: 'Maxi / Midi dresses' },

];

class AddingProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        }
    }

    handleChange = selectedOption => {
        this.setState({
            selectedOption
        });
        //  console.log(`Option selected:`, selectedOption);
    };

    render() {
        const { selectedOption } = this.state;

        return (
            <div className="d-flex row">
                <div className="menu-colum col-3">
                    <Link to="/">
                        <img src="/img/logo.png"
                            className="logo" alt="logo">
                        </img>
                    </Link>
                    <div className="menu-item d-flex">
                        <img src="/img/overview-dark.svg"
                        />
                        <p className="menu-text">Overview</p>
                    </div>

                    <div className="menu-item d-flex">
                        <img src="/img/orders-dark.svg"
                        />
                        <p className="menu-text">Orders</p>
                    </div>

                    <div className="menu-item d-flex">
                        <img src="/img/products-dark.svg"
                        />
                        <p className="menu-text">Products</p>
                    </div>

                    <div className="menu-item d-flex">
                        <img src="/img/orders-dark.svg"
                        />
                        <p className="menu-text">Payments</p>
                    </div>

                    <div className="menu-item d-flex">
                        <img src="/img/promotion-dark.svg"
                        />
                        <p className="menu-text">Promotions</p>
                    </div>

                    <div className="menu-item d-flex">
                        <img src="/img/setting-dark.svg"
                        />
                        <p className="menu-text">Setting</p>
                    </div>


                </div>
                <div className="add-product-column col-9 ">
                    <div className="d-flex justify-content-between">
                        <p className="add-product-logo">Add product</p>
                        <p className="admin-info d-flex">
                            <div className="userpic mr-3 " >
                                <img src="/img/user.svg" alt="avartar" />
                            </div>
                            <p className="admin">Lucile Bush</p>
                            <img src="/img/dropdown.svg"
                                className="dropdown" />
                            <img src="/img/mail.svg"
                                className="mail" />
                            <img src="/img/notification.svg"
                                className="notification" />
                        </p>

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
                            className="input-name "
                            placeholder="Enter product name" />

                    </div>
                    <div className="product-info d-flex">
                        <p className="name-info">Categories</p>
                        <Select
                            className="select-category"
                            value={selectedOption}
                            isMulti={true}
                            onChange={this.handleChange}
                            options={options}
                        />
                    </div>
                    <div className="product-info d-flex">
                        <p className="name-info ">Brand</p>
                        <div></div>
                    </div>
                    <div className="product-info d-flex">
                        <p className="name-info ">Price($)</p>
                        <div></div>
                    </div>
                    <div className="product-info d-flex">
                        <p className="name-info">Size</p>
                        <div></div>
                    </div>
                    <div className="product-info d-flex">
                        <p className="name-info ">Colors</p>
                        <div></div>
                    </div>
                    <div className="product-info d-flex">
                        <p className="name-info ">Quantity</p>
                        <div></div>
                    </div>
                    <div className="product-info d-flex">
                        <p className="name-info ">Description</p>
                        <div></div>
                    </div>

                </div>
            </div>
        )

    }
}

export default AddingProduct;