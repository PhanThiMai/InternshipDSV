import React from 'react'
import Select from 'react-select';
import './SelectedInput.scss'

class SelectedInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null
        }
    }

    handleSelected = selectedOption => {
        this.setState({
            selectedOption
        })
        this.props.handleSelected(this.state.selectedOption)
    }

    render() {
        const { isMulti, options, value, handleSelect, error } = this.props;
        return (
            <Select
                className={error ? "selected-error" : "selected-input"}
                value={value}
                isMulti={isMulti}
                onChange={handleSelect}
                options={options}
            />
        )
    }
}

export default SelectedInput;