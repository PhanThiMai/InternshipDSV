import React from 'react';
import './SubNavBar.scss'
import {
    BrowserRouter as Router,
    Route, Link, NavLink
} from "react-router-dom";


function showProducts() {
    console.log("click")
    // return (<Router>
    //     <Route path="/products" component={Products} />

    // </Router>)
}


function SubNavBar(props) {
    const { value } = props;
    const sunCategoriesTag = value.map((item, index) =>
        <NavLink to={item} key={index} className={`category${item}`} onClick={() => showProducts}> {item}</NavLink >);

    return (
        <Router>
            <div className="d-flex justify-content-around align-items-center mt-3  subNavBar"  >
                {sunCategoriesTag}
            </div>
        </Router>

    )

}

export default SubNavBar;

