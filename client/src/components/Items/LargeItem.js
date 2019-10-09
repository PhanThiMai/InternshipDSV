import React from 'react'
import { Button } from 'reactstrap'
import SmallItem from "./SmallItem"
import './LargeItem.scss'


const categoryName = [
    "Men",
    "Lady",
    "Girl",
    "Boy"
]
const imgOfCategory = {
    large: "./img/bally.jpg",
    small: "./img/smallItem.jpg"
}

const category = categoryName.map((item, index) =>
    <SmallItem key={index} src={imgOfCategory.small} name={item} className="col-3"></SmallItem>
);
function LargeItem() {


    return (
        <div>
            <img className="balli" src={imgOfCategory.large} alt="balli"></img>
            <h1 className="imgText">OUT FIT OF WEEK</h1>
            <Button color="warning" className="shopNow"> Shop Now</Button>

            <div className="row">{category}</div>
        </div>
    );
}

export default LargeItem;   