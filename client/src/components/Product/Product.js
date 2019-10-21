import React from 'react'
import './Product.scss'
import { getProducts } from '../../api/products'
import ChildCategory from '../Products/ChildCategory/ChildCategory'
//import SizeCategory from '../Products/Content/CategoriesColumn/SizeCategory/SizeCategory'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            product: null
        }
    }

    componentDidMount = () => {
        getProducts().then(res => {
            const products = res.data;
            if (products) {
                const { productDetail } = this.props.productsState
                let result = products.find((item) => item.name === productDetail)
                if (result) {
                    this.setState({
                        product: result
                    })
                }
            }
        })
    }

    render() {
        const img = ["/img/product.jpg", "/img/product1.jpg"]
        const { product } = this.state;
        const { categoryName } = this.props;
        const productDetail = product ?
            <div className="row">
                <div className="col-5 d-flex ">
                    <div className="d-flex flex-column list-small-img">
                        <img alt="subImg" src={img[0]} className="small-img" />
                        <img alt="subImg" src={img[0]} className="small-img" />
                        <img alt="subImg" src={img[0]} className="small-img" />
                        <img alt="subImg" src={img[0]} className="small-img" />
                    </div>

                    <img alt="largeImg" src={img[1]} className="large-img" />

                </div>
                <div className="col-7 product-info">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price}</p>

                </div>

            </div>
            : <h4 className="error">Opps something wrong</h4>
        return (
            <div>
                <ChildCategory categoryName={categoryName} />
                {productDetail}
            </div>

        )
    }
}


export default Product;