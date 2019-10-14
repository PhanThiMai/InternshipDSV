import React from 'react';
import './SubNavBar.scss'



function SubNavBar(props) {
    const { value } = props;

    const sunCategoriesTag = value.map((item, index) =>
        <div key={index} className={`category${item}`}> {item}</div >);

    return (
        <div className="d-flex justify-content-around align-items-center mt-3  subNavBar"  >
            {sunCategoriesTag}
        </div>
    )

}

export default SubNavBar;

