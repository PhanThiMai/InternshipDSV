import React from 'react';
import './SubNavBar.scss'
import {
    Link
} from "react-router-dom";


class SubNavBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { value } = this.props;
        const sunCategoriesTag = value.map((item, index) =>
            <Link to={'/category/' + item._id}
                key={index}
                className={`category${item.name}`}
                name={item.name}
            > {item.name}</Link >);

        return (
            <div className="d-flex justify-content-around align-items-center mt-3  subNavBar"  >
                {sunCategoriesTag}
            </div>
        )
    }

}



export default SubNavBar;

