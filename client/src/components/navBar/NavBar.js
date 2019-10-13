import React from 'react';
import './NavBar.scss'
import SubNavBar from './SubNavBar'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


//let CSSTransitionGroup = React.addons.CSSTransitionGroup;

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

        const categories = ["Men", "Ladies", "Girls", "Boys"];
        const categoryItem = categories.map((item, index) =>
            <div className="category d-flex mr-4" key={index} onMouseLeave={this.handleLeave} >
                <p className={`cate${item}`}
                >{item}
                    {/* <div >
                        <ReactCSSTransitionGroup
                            transitionName="slide"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            {this.state.showSubMenu && <SubNavBar />}
                        </ReactCSSTransitionGroup>
                    </div> */}
                </p>
                <img src="img/arrow.svg" alt="arrow"
                    className="arrow" />
            </div>

        )
        return (
            <div>
                <div className="d-flex justify-content-center NavBar" onMouseEnter={this.handleHover} >
                    {categoryItem}
                </div>
            </div>

        )

    }

}

export default NavBar;
