import React from 'react';
import './NavBar.scss'
import SubNavBar from './SubNavBar'
import { getCategories } from '../../api/category'

const img = "/img/arrow.svg"
class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rootCategories: []
        };
    }

    componentDidMount = () => {
        getCategories().then(res => {
            const data = res.data;
            let rootCategories = [];
            if (data) {
                data.map(item => {
                    if (item.root)
                        rootCategories.push(item)
                })
            }
            this.setState({
                rootCategories
            })
        })
    }


    render() {
        const { rootCategories } = this.state;
        return (
            <ul className="d-flex justify-content-center nav-bar">
                <li>
                    <span className="men">Men</span>
                    <img src={img} alt="arrow"
                        className="arrow mr-4" />
                    <div className="sub-nav-bar-container">
                        <SubNavBar value={rootCategories} />
                    </div>
                </li>
                <li>
                    <span className="ladies">Ladies</span>
                    <img src={img} alt="arrow"
                        className="arrow mr-4" />
                    <div className="sub-nav-bar-container">
                        <SubNavBar value={rootCategories} />
                    </div>

                </li>
                <li>
                    <span className="girls">Girls</span>
                    <img src={img} alt="arrow"
                        className="arrow mr-4" />
                    <div className="sub-nav-bar-container">
                        <SubNavBar value={rootCategories} />
                    </div>
                </li>
                <li>
                    <span className="boys">Boys</span>
                    <img src={img} alt="arrow"
                        className="arrow mr-4" />
                    <div className="sub-nav-bar-container">
                        <SubNavBar value={rootCategories} />
                    </div>
                </li>

            </ul>
        )
    }




}
export default NavBar;
