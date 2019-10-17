import React from 'react';
import './Categories.scss'
import { Link } from 'react-router-dom'
import SizeCategory from './SizeCategory/SizeCategory'
import { Accordion, Button } from 'react-bootstrap'

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


// function CategoryItem(props) {
//     const { decoratedOnClick } = props;
//     return (
//         <div onClick={decoratedOnClick}>
//             <span>{props.children}</span>
//             <img src="img/arrow.svg"
//                 className="arrow float-right" />
//         </div>
//     )
// }



function Categories(props) {
    const { mainCategory } = props
    const categoryItem = categories.map((item, index) => {
        return (
            <Link to={`${mainCategory}/${index}`} key={index} className="category-item">
                {item}
            </Link>
        )
    })
    return (
        <div >
            <p className="category-title">Category</p>
            <p className="all-dresses">{`All ${mainCategory}`}</p>
            <div className="hr-setting1" />

            <div className="list-category-item">
                {categoryItem}
            </div>

            <div className="hr-setting2" />

            <p className="filter">Filter</p>
            <Accordion>
                <ul>
                    <li className="filter-ttem">
                        <span>Size</span>
                        <img src="img/arrow.svg"
                            className="arrow float-right" />
                        <div className="size-category">
                            <SizeCategory sizes={sizes} />
                        </div>
                        <hr />
                    </li>


                    <li className="filterItem">
                        <span>Color</span>
                        <img src="img/arrow.svg"
                            className="arrow float-right" />
                        <hr />
                    </li>
                    <li className="filterItem">
                        <span>Brand</span>
                        <img src="img/arrow.svg"
                            className="arrow float-right" />
                        <hr />
                    </li>
                    <li className="filterItem">
                        <span>Price</span>
                        <img src="img/arrow.svg"
                            className="arrow float-right" />
                        <hr />
                    </li>
                    <li className="filterItem">
                        <span>Available</span>
                        <img src="img/arrow.svg"
                            className="arrow float-right" />
                        <hr />
                    </li>

                </ul>
            </Accordion>

        </div >
    )
}

export default Categories