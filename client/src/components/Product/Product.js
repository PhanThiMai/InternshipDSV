import React from 'react'
import './Product.scss'
import ChildCategory from '../Products/ChildCategory/ChildCategory'


const img = {
    small: "img/product.jpg",
    medium: "img/product1.jpg",
    large: "img/product2.jpg"
}

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        const { categoryName, product } = this.props;
        return (
            <div>
                {/* <ChildCategory categoryName={categoryName} />
                <div className="row">
                    <div className="col-5 d-flex ">
                        <div className="d-flex flex-column list-small-img">
                            <img alt="subImg" src={img.small} className="small-img" />
                            <img alt="subImg" src={img.small} className="small-img" />
                            <img alt="subImg" src={img.small} className="small-img" />
                            <img alt="subImg" src={img.small} className="small-img" />
                        </div>

                        <img alt="subImg" src={img.medium} className="large-img" />

                    </div>
                    <div className="col-7 product-info">
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">{product.price}</p>

                    </div>

                </div> */}
                <h1>This is product detail</h1>

            </div>

        )
    }
}


export default Product;