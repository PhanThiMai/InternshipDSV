import React from 'react'
import './BrandCategory.scss'
import { ButtonGroup } from 'react-bootstrap'
import { Collapse, Nav } from 'reactstrap';
import 'react-input-range/lib/css/index.css'


const checks = ["./../..//img/check-box.svg", "./../..//img/check-box1.svg"]

class BrandCategory extends React.Component {


    render() {
        const { brands, isOpen, clicked } = this.props;
        const brandItem = brands.map((item, index) => {
            return (
                <div className="brand d-flex justify-content-between" key={index}>
                    <span className="brand-name  align-self-center ">{item}</span>
                    <img src={clicked ? checks[0] : checks[1]} alt="checkbox"
                        className="check-box  align-self-center" />
                </div>
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