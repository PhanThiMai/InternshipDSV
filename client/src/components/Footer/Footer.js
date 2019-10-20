import React from 'react';
import './Footer.scss'
import {
    Navbar,
    NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom'


const infor = ["Home", "Products", "Services", "About Us", "Help", "Contacts"]
const socialImg = ["./../../img/facebook-icon.svg", "./../../img/instagram-6-icon.svg", "./../../img/twitter-icon.svg"]
const infoItem = infor.map((item, index) =>
    <NavLink key={index} className="mx-1 inforItem"> {item}</NavLink>
);

const socialImgItem = socialImg.map((item, index) =>
    <img src={item} key={index} alt="social" className="socialImgItem mr-2" />);



function Footer() {
    return (
        <div >
            <hr></hr>
            <div className="d-flex justify-content-around mt-5 ">
                <Link to="/">
                    <img src="./../../img/logo.png"
                        className="logo" alt="logo">
                    </img>
                </Link>
                <Navbar >
                    {infoItem}
                </Navbar>

                <div className="d-flex justify-content-end ">
                    {socialImgItem}
                </div>
            </div>
            <hr></hr>
            <div className="clearfix">
                <Navbar className="float-left">
                    {infoItem}
                </Navbar>
                <Navbar className="float-right ">
                    <NavLink className="privacy-policy  ">Privacy Policy</NavLink>
                    <NavLink className="terms-conditions  ">Term Condition</NavLink>
                </Navbar>
            </div>

        </div>

    );
}

export default Footer;
