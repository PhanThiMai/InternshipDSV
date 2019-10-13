import React from 'react';
import './SubNavBar.scss'


const subCategories = ["Tops", "Bottoms", "Dresses", "Jackets", "Shoes", "Accessories", "Sale"];

const sunCategoriesTag = subCategories.map((item, index) =>
    <div key={index} className={`category${item}`}> {item}</div >);

function SubNavBar() {
    return (
        <div className="d-flex justify-content-around align-items-center mt-3  subNavBar"  >
            {sunCategoriesTag}
        </div>
    )

}

export default SubNavBar;

