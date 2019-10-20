import React from 'react';
import './ProductsColumn.scss'
// import { Dropdown } from 'react-bootstrap'
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import ProductCart from './ProductCart/ProductCart'



const products = [{
    img: './../..//img/product.jpg',
    name: 'Surplice Gingham',
    brand: 'Jumpsuit',
    price: '$69.00',
    soldOut: false
},
{
    img: './../..//img/product.jpg',
    name: 'Button-Down Denim ',
    brand: 'Mini Dress',
    price: '$69.00',
    soldOut: true
},
{
    img: './../..//img/product.jpg',
    name: 'Plunge V-neck Denim  ',
    brand: 'Mini Dress',
    price: '$69.00',
    soldOut: false
}
]

class ProductsColumn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSort: false
        }
    }

    toggle = () => {
        this.setState(({
            openSort: !this.state.openSort
        }));
    }

    render() {
        const { match } = this.props
        // console.log(match)
        //const sortItems = ["Populariry", "Name: A - Z", "Price: lowest to highest", "Price: highest to lowest"]

        return (
            <div>
                {/* <div className="drop-down  d-flex justify-content-between " >
                    <p className="sort-by">Sort By: <span className="sort-by-selected">Populariry</span> </p>
                    <img src="/img/arrow.svg"
                        className="arrow " alt="arrow" />
                </div>
                <div className="sort-by-items">
                    {sortItems.map((item, index) => {
                        return (
                            <p key={index} className="sort-by-item" > {item}</p>
                        )
                    }
                    )}


                </div>
               */}

                <div className="products d-flex flex-wrap">
                    {
                        products.map((item, index) =>
                            <ProductCart product={item} key={index} match={match} />
                        )
                    }


                </div>




            </div>
        )
    }
}

export default ProductsColumn