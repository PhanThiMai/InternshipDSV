import React from 'react'
import './SizeCategory.scss'
import { ToggleButton, ButtonGroup } from 'react-bootstrap'


class SizeCategory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { sizes } = this.props;


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

            <ButtonGroup toggle
                className="d-flex justify-content-between sizes"
            >
                {sizeItem}
            </ButtonGroup>

        )
    }
}


export default SizeCategory;