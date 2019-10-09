import React from 'react';
import './NavBar.scss'

function NavBar() {
    return (
        <div className="d-flex justify-content-center navBar">
            <div className="category d-flex mr-4">
                <p className="men">Men</p>
                <img src="img/arrow.svg" alt="arrow"
                    className="arrow" />
            </div>

            <div className="category d-flex mr-4">
                <p className="ladies">Ladies</p>
                <img src="img/arrow.svg" alt="arrow"
                    className="arrow" />
            </div>

            <div className="category d-flex mr-4">
                <p className="girls">Girls</p>
                <img src="img/arrow.svg" alt="arrow"
                    className="arrow" />
            </div>

            <div className="category d-flex mr-4">
                <p className="boys">Boys</p>
                <img src="img/arrow.svg" alt="arrow"
                    className="arrow" />
            </div>


        </div>
    )

}

export default NavBar;
