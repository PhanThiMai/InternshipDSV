import React from 'react';
import './ProductsColumn.scss'
//import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
//import ProductCart from './ProductCart/ProductCart'
import ProductCart from '../../../../containers/ProductCart'
import { getProducts } from '../../../../api/products'


class ProductsColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSort: false,
            products: []
        }
    }

    toggle = () => {
        this.setState(({
            openSort: !this.state.openSort
        }));
    }

    componentDidMount = () => {
        getProducts().then(res => {
            if (res.data) {
                this.setState({
                    products: res.data
                })
            }
        })
    }

    render() {
        const { match } = this.props
        const { products } = this.state
        let productsItem;
        if (products !== null && products !== undefined) {
            productsItem = < div className="products d-flex flex-wrap" >
                {
                    products.map((item, index) =>
                        <ProductCart product={item} key={index} match={match} />
                    )
                }</ div>
        }
        else {
            productsItem = <p className="no-result-found">No result found</p>
        }

        const sortItems = ["Populariry", "Name: A - Z", "Price: lowest to highest", "Price: highest to lowest"]

        return (
            < div >
                <div className="drop-down  d-flex justify-content-between "
                    onClick={this.toggle}
                >
                    <p className="sort-by">Sort By:
                    <span className="sort-by-selected">Populariry
                    </span>
                    </p>
                    <img src="./../../../../img/arrow.svg"
                        className="arrow " alt="arrow" />


                    {
                        this.state.openSort === true ? <div className="sort-by-items">
                            {sortItems.map((item, index) => {
                                return (
                                    <p key={index} className="sort-by-item" > {item}</p>
                                )
                            }
                            )}
                        </div> : <div className="sort-by-items">
                                {sortItems.map((item, index) => {
                                    return (
                                        <p key={index} className="sort-by-item" > {item}</p>
                                    )
                                }
                                )}
                            </div>
                    }
                </div>
                {productsItem}
            </div >
        )
    }
}

export default ProductsColumn