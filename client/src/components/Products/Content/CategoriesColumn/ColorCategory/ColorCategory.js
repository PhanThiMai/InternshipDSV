import React from 'react'
import './ColorCategory.scss'
import { ButtonGroup } from 'react-bootstrap'
import { Collapse, Nav } from 'reactstrap';


class ColorCategory extends React.Component {

    render() {
        const { colors, isOpen } = this.props;
        const colorItem = colors.map((item, index) => {
            return (
                <button
                    type="radio"
                    name="radio"
                    className={`d-flex align-items-center justify-content-center color${index}`}
                    key={index}
                >

                </button>
            )
        })

        return (
            <Collapse isOpen={isOpen} navbar>
                <Nav navbar>
                    <ButtonGroup toggle
                        className="d-flex flex-wrap colors ">
                        {colorItem}
                    </ButtonGroup>
                </Nav>
            </Collapse>


        )
    }
}


export default ColorCategory;