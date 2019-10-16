import React from 'react';
import './Categories.scss'
import { Link } from 'react-router-dom'

const categories = [
    "Rompers / Jumpsuits",
    "Casual dresses", "Going out dresses",
    "Party / Ocassion dresses",
    "Mini dresses", "Maxi / Midi dresses", "Sets"
]

function Categories(props) {
    const { mainCategory } = props
    const categoryItem = categories.map((item, index) => {
        return (
            // <li className="category-item" key={index} >
            //     <Link to={`products/${mainCategory}/item`} exact >
            //         {item}
            //     </Link>
            // </li>


            <p key={index} className="category-item">
                {item}
            </p>

        )
    })
    return (
        <div >
            <p className="category-title">Category</p>
            <p className="all-dresses">All dresses</p>
            <div className="hr-setting" />

            {categoryItem}


        </div>
    )
}

export default Categories