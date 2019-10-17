import React from 'react';
import './Content.scss'
import Categories from './CategoriesColumn/Categories'
import ProductsColumn from './ProductsColumn/ProductsColumn'

function Content(props) {
    const { mainCategory } = props
    return (
        <div className=" content row">
            <div className="categories-column"><Categories mainCategory={mainCategory} /></div>
            <div className=" product-list">
                <ProductsColumn mainCategory={mainCategory} />
            </div>
        </div>
    )
}

export default Content