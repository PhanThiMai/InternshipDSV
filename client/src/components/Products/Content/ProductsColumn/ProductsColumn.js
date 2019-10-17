import React from 'react';
import './ProductsColumn.scss'

function ProductsColumn(props) {
    const { mainCategory } = props

    return (
        <div className="mt-5">
            {`Products of ${mainCategory}`}
        </div>
    )
}

export default ProductsColumn