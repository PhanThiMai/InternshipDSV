import React from 'react'
import './SizeCategory.scss'
import { ButtonGroup } from 'react-bootstrap'
import { Collapse, Nav } from 'reactstrap';


class SizeCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { sizes, isOpen } = this.props;


        const sizeItem = sizes.map((item, index) => {
            return (
                <button
                    type="radio"
                    name="radio"
                    className={`d-flex align-items-center justify-content-center  ${item.amount > 0 ? "square" : "unenable disabled"}`}
                    key={index}
                >
                    {item.size}
                </button>
            )
        })

        return (
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <ButtonGroup toggle
                        className="d-flex justify-content-between sizes">
                        {sizeItem}
                    </ButtonGroup>
                </Nav>
            </Collapse>


        )
    }
}


export default SizeCategory;