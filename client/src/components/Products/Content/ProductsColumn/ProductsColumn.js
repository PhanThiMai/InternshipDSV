import React from 'react';
import './ProductsColumn.scss'
import ProductCart from '../../../../containers/ProductCart'
import { getProducts } from '../../../../api/products'

const sortItems = ["Populariry", "Name: A - Z", "Price: lowest to highest", "Price: highest to lowest"]


class ProductsColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSort: false,
            sort: "Populariry",
            products: [],
            productList: [],
            category: ""
        }
    }

    toggle = () => {
        this.setState(({
            openSort: !this.state.openSort
        }));
    }

    componentDidMount = () => {
        getProducts().then(res => {
            const productList = res.data;
            if (productList) {
                this.setState({
                    productList: productList,
                    products: productList
                })
            }
        })
    }

    compareName = (a, b) => {
        return a.name < b.name ? 1 : -1
    }

    comparePrice = (a, b) => {
        return a.price < b.price ? 1 : -1
    }
    comparePrice1 = (a, b) => {
        return a.price > b.price ? 1 : -1

    }

    handleClickSort = e => {
        const sortItem = e.target.getAttribute('name');
        const { productList } = this.state;
        let products = [...productList]
        if (sortItem === sortItems[1]) {
            products.sort(this.compareName)
        }
        else if (sortItem === sortItems[2]) {
            products.sort(this.comparePrice1)
        }
        else {
            products.sort(this.comparePrice2)
        }

        this.setState({
            products: products
        })

    }


    render() {
        const { match } = this.props
        const { products, sort } = this.state
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


        return (
            < div >
                <div className="drop-down  d-flex justify-content-between " >
                    <p className="sort-by"
                        onClick={this.toggle}
                    >Sort By:
                    <span className="sort-by-selected">{sort}
                        </span>
                    </p>
                    <img src="/img/arrow.svg"
                        className="arrow " alt="arrow" />
                    {
                        this.state.openSort === true ? <div className="sort-by-items">
                            {sortItems.map((item, index) => {
                                return (
                                    <p key={index}
                                        className="sort-by-item"
                                        name={item}
                                        onClick={this.handleClickSort}
                                    > {item}</p>
                                )
                            }
                            )}
                        </div> : <></>
                    }
                </div>
                {productsItem}
            </div >
        )
    }
}

export default ProductsColumn