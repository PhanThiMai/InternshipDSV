import React from 'react';
import './NavBar.scss'
import SubNavBar from './SubNavBar'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

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
        return (
            <div className="d-flex justify-content-center NavBar" onMouseEnter={this.handleHover} >
                <div className="category d-flex mr-4" onMouseLeave={this.handleLeave}>
                    <p className="men">Men

                    <div >
                            <ReactCSSTransitionGroup
                                transitionName="slide"
                                transitionEnterTimeout={300}
                                transitionLeaveTimeout={300}>
                                {this.state.showSubMenu && <SubNavBar />}
                            </ReactCSSTransitionGroup>
                        </div>
                    </p>
                    <img src="img/arrow.svg" alt="arrow"
                        className="arrow" />
                </div>

                <div className="category d-flex mr-4" onMouseLeave={this.handleLeave}>
                    <p className="ladies">Ladies


                    </p>
                    <img src="img/arrow.svg" alt="arrow"
                        className="arrow" />
                </div>

                <div className="category d-flex mr-4" onMouseLeave={this.handleLeave}>
                    <p className="girls">Girls</p>
                    <img src="img/arrow.svg" alt="arrow"
                        className="arrow" />
                </div>

                <div className="category d-flex mr-4" onMouseLeave={this.handleLeave}>
                    <p className="boys">Boys</p>
                    <img src="img/arrow.svg" alt="arrow"
                        className="arrow" />
                </div>


            </div>
        )
    }




}
export default NavBar;
