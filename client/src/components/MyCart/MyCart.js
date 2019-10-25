import React from 'react';
import './MyCart.scss'


class MyCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="cart-page">
                <p className="my-bag">My Bag</p>
                <div className="row">
                    <div className="products-list col-7">
                        products
                    </div>
                    <div className="check-out">
                        check out
                    </div>
                </div>
            </div>
        )
    }
}

export default MyCart;