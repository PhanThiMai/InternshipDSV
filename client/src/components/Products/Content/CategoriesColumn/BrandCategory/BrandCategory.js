import React from 'react'
import './BrandCategory.scss'
import { ButtonGroup } from 'react-bootstrap'
import { Collapse, Nav } from 'reactstrap';
import 'react-input-range/lib/css/index.css'


const checks = ["./../../../../img/check-box.svg", "./../../../../img/check-box1.svg"]

class BrandCategory extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    handleInputChange = (event) => {
        const target = event.target;
        this.setState({
            [target.name]: target.checked
        });
    }

    render() {
        const { brands, isOpen } = this.props;
        const brandItem = brands.map((item, index) => {
            return (
                <label key={index} className="brand-name" id="checked">{item}
                    <input
                        name={item}
                        type="checkbox"
                        className="check-box  float-right   "
                        onChange={this.handleInputChange} />
                    <span className="checkmark"></span>
                </label>
            )
        })

        return (
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <ButtonGroup toggle
                        className="brands d-flex flex-column">
                        {brandItem}
                    </ButtonGroup>
                </Nav>
            </Collapse>


        )
    }
}


export default BrandCategory;