import React from 'react';
import './Categories.scss'
import { NavLink } from 'react-router-dom'
import SizeCategory from './SizeCategory/SizeCategory'
import ColorCategory from './ColorCategory/ColorCategory'
import BrandCategory from './BrandCategory/BrandCategory'
import PriceCategory from './PriceCategory/PriceCategory'
const categories = [

    "Rompers / Jumpsuits",
    "Casual dresses", "Going out dresses",
    "Party / Ocassion dresses",
    "Mini dresses", "Maxi / Midi dresses", "Sets"
]

const sizes = [
    {
        size: "S",
        amount: 1
    },
    {
        size: "M",
        amount: 1
    },
    {
        size: "L",
        amount: 0
    }

]

const brands = ["Zara", "H&M", "Pull&Bear", "Dior", "Chanel"]

const colors = ["Red", "Yellow", "Blue", "Orange", "Brown", "Gray"]

const availables = ["In-store", "Out of stock"];

class Categories extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sizeCollapsed: false,
            colorCollapsed: false,
            brandCollapsed: false,
            priceCollapsed: false,
            availCollapsed: false
        }
    }


    render() {
        const { mainCategory, match } = this.props
        //viewProductDetail, viewProductsOfCategory
        const { childCategory, productDetail } = this.props.productsState;
        const { colorCollapsed, sizeCollapsed,
            brandCollapsed, priceCollapsed, availCollapsed

        } = this.state;

        // console.log(childCategory, productDetail)

        const categoryItem = categories.map((item, index) => {
            let newUrl = item.replace(/\s/g, '');
            return (
                <NavLink
                    to={`${match.url}/${newUrl}`}
                    key={index}
                    className="category-item"
                    activeClassName="all-dresses"
                //  onClick={viewProductsOfCategory}
                >
                    {item}
                </NavLink>
            )
        })

        return (
            <div >
                <p className="category-title">Category</p>
                <NavLink
                    to={`${match.url}`}
                    className="category-item"
                    activeClassName="all-dresses"
                    exact
                >
                    {`All ${mainCategory}`}
                </NavLink>
                <div className="hr-setting1" />

                <div className="list-category-item">
                    {categoryItem}
                </div>

                <div className="hr-setting2" />

                <p className="filter">Filter</p>
                <ul className="filter-items">
                    <li className="filter-item">
                        <span
                            onClick={() => {
                                this.setState({
                                    sizeCollapsed: !sizeCollapsed
                                })
                            }}
                        >Size</span>
                        <img src="./../..//img/arrow.svg" alt="arrow"
                            onClick={() => {
                                this.setState({
                                    sizeCollapsed: !sizeCollapsed
                                })
                            }}
                            className={`arrow float-right ${sizeCollapsed ? "rotate90" : ""}`} />
                        <SizeCategory sizes={sizes} isOpen={sizeCollapsed} />

                        <hr />
                    </li>


                    <li className="filter-item">
                        <span
                            onClick={() => {
                                this.setState({
                                    colorCollapsed: !colorCollapsed
                                })
                            }}
                        >Color</span>
                        <img src="./../..//img/arrow.svg" alt="arrow"
                            onClick={() => {
                                this.setState({
                                    colorCollapsed: !colorCollapsed
                                })
                            }}
                            className={`arrow float-right ${colorCollapsed ? "rotate90" : ""}`} />
                        <ColorCategory colors={colors} isOpen={colorCollapsed} />
                        <hr />
                    </li>


                    <li className="filter-item">
                        <span
                            onClick={() => {
                                this.setState({
                                    brandCollapsed: !brandCollapsed
                                })
                            }}
                        >Brand</span>
                        <img src="./../..//img/arrow.svg" alt="arrow"
                            onClick={() => {
                                this.setState({
                                    brandCollapsed: !brandCollapsed
                                })
                            }}
                            className={`arrow float-right ${brandCollapsed ? "rotate90" : ""}`} />
                        <BrandCategory brands={brands} isOpen={brandCollapsed} />
                        <hr />
                    </li>


                    <li className="filter-item">
                        <span
                            onClick={() => {
                                this.setState({
                                    priceCollapsed: !priceCollapsed
                                })
                            }}
                        >Price</span>
                        <img src="./../..//img/arrow.svg" alt="arrow" className="arrow float-right"
                            onClick={() => {
                                this.setState({
                                    priceCollapsed: !priceCollapsed
                                })
                            }}
                        />
                        <PriceCategory isOpen={priceCollapsed} />
                        <hr />
                    </li>
                    <li className="filter-item">
                        <span onClick={() => {
                            this.setState({
                                availCollapsed: !availCollapsed
                            })
                        }}
                        >Available</span>
                        <img src="./../..//img/arrow.svg" alt="arrow"
                            className="arrow float-right"
                            onClick={() => {
                                this.setState({
                                    availCollapsed: !availCollapsed
                                })
                            }}
                        />

                        <BrandCategory brands={availables} isOpen={availCollapsed} />

                        <hr />
                    </li>

                </ul>

            </div >
        )
    }
}




export default Categories