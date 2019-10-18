import React from 'react';
import './Content.scss'
import Categories from './CategoriesColumn/Categories'
import ProductsColumn from './ProductsColumn/ProductsColumn'

function Content(props) {
    const { mainCategory, match } = props

    return (
        <div className=" content row container-fluid">
            <div className="categories-column"><Categories mainCategory={mainCategory} match={match} /></div>
            <div className=" product-list">
                <ProductsColumn mainCategory={mainCategory} match={match} />
            </div>
        </div>
    )
}

export default Content