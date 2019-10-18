import React from 'react';
import './SubNavBar.scss'
import {
    Link
} from "react-router-dom";



function SubNavBar(props) {
    const { value } = props;
    const sunCategoriesTag = value.map((item, index) =>
        <Link to={'/' + item} key={index} className={`category${item}`}> {item}</Link >);

    return (
        <div className="d-flex justify-content-around align-items-center mt-3  subNavBar"  >
            {sunCategoriesTag}
        </div>
    )
}



export default SubNavBar;

