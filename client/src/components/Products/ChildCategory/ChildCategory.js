import React from 'react';
import './ChildCategory.scss'


function ChildCategory(props) {
    const { categoryName } = props;
    return (
        <div className="child-category d-flex justify-content-around  mt-3   " >
            {categoryName}
        </div>
    )
}

export default ChildCategory