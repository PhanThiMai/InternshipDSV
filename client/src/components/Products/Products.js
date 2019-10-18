import React from 'react';

import ChildCategory from './ChildCategory/ChildCategory'
import Content from './Content/Content'
import {

    useParams
} from "react-router-dom";

function Products({ match }) {
    let { id } = useParams();

    return (
        <div >
            <ChildCategory categoryName={id} match={match} />
            <Content mainCategory={id} match={match} />
        </div>
    )
}

export default Products