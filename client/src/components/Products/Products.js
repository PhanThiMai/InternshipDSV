import React from 'react';

import ChildCategory from './ChildCategory/ChildCategory'
import Content from './Content/Content'
import {

    useParams
} from "react-router-dom";

function Products() {
    let { id } = useParams();


    return (
        <div >
            <ChildCategory categoryName={id} />
            <Content mainCategory={id} />
        </div>
    )
}

export default Products