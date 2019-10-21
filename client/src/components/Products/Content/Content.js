import React from 'react';
import './Content.scss'
import Categories from '../../../containers/Category'
import ProductsColumn from '../../../containers/ProductsColumn'

function Content(props) {
    const { mainCategory, match } = props
    return (
        <div className=" content d-flex ">
            <div className="categories-column"><Categories mainCategory={mainCategory} match={match} /></div>
            <div className=" product-list">
                <ProductsColumn mainCategory={mainCategory} match={match} />
            </div>
        </div>
    )
}

export default Content