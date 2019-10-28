import React from 'react';
import './Color.scss'


class Color extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const color = this.props.color
        return (
            <div className={`color-${color}`}></div>
        )
    }
}

export default Color;