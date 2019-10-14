import React from 'react';
import './NavBar.scss'
import SubNavBar from './SubNavBar'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showSubMenu: false
        };

    }
    handleHover = (event) => {
        this.setState({ showSubMenu: true });
    };

    handleLeave = (event) => {
        this.setState({ showSubMenu: false });
    };

    render() {
        const subCategories = ["Tops", "Bottoms", "Dresses", "Jackets", "Shoes", "Accessories", "Sale"];

        return (
            <ul className="d-flex justify-content-center nav-bar">
                <li>
                    <span className="men">Men</span>
                    <img src="img/arrow.svg" alt="arrow"
                        className="arrow mr-4" />
                    <div className="sub-nav-bar-container">
                        <SubNavBar value={subCategories} />
                    </div>
                </li>
                <li>
                    <span className="ladies">Ladies</span>
                    <img src="img/arrow.svg" alt="arrow"
                        className="arrow mr-4" />
                    <div className="sub-nav-bar-container">
                        <SubNavBar value={subCategories} />
                    </div>

                </li>
                <li>
                    <span className="girls">Girls</span>
                    <img src="img/arrow.svg" alt="arrow"
                        className="arrow mr-4" />
                    <div className="sub-nav-bar-container">
                        <SubNavBar value={subCategories} />
                    </div>
                </li>
                <li>
                    <span className="boys">Boys</span>
                    <img src="img/arrow.svg" alt="arrow"
                        className="arrow mr-4" />
                    <div className="sub-nav-bar-container">
                        <SubNavBar value={subCategories} />
                    </div>
                </li>

            </ul>
        )
    }




}
export default NavBar;
