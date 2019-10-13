import React from 'react'
import SmallItem from "./SmallItem"
import './LargeItem.scss'


const categoryName = [
    "Men",
    "Lady",
    "Girl",
    "Boy"
]
const imgOfCategory = {
    large: "./img/bally1.jpg",
    small: "./img/smallItem.jpg"
}

const category = categoryName.map((item, index) =>
    <SmallItem key={index} src={imgOfCategory.small} name={item} className="mx-1" ></SmallItem>
);
function LargeItem() {

    return (
        <div className="container-fluid">
            <img className="balli" src={imgOfCategory.large} alt="balli" />
            <h1 className="imgText">OUT FIT OF THE WEEK</h1>
            <button className="btnshopNow align-self-center">
                <p className="shopNow">Shop Now </p>
            </button>
            <div className=" d-flex justify-content-center">{category}</div>
        </div>
    );
}

export default LargeItem;   