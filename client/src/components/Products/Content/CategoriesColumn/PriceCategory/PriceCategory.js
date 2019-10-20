import React from 'react';
import InputRange from 'react-input-range';
import { Collapse } from 'reactstrap';
import './PriceCategory.scss'

class PriceCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: { min: 0, max: 300 },
        };
    }

    render() {
        const { isOpen } = this.props

        return (
            <Collapse isOpen={isOpen} >
                <div className="custom-input-range ">
                    <InputRange
                        maxValue={300}
                        minValue={0}
                        formatLabel={value => `${value}$`}
                        value={this.state.value}
                        onChange={value => this.setState({ value: value })}
                    />
                </div>
            </Collapse>


        );
    }
}

export default PriceCategory;