import React from 'react'
import { Link } from 'react-router-dom'


class AddingProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div>
                <div className="menu-colum">
                    <Link to="/">
                        <img src="/img/logo.png"
                            className="logo" alt="logo">
                        </img>
                    </Link>
                </div>
                <div></div>
            </div>
        )

    }
}

export default AddingProduct;