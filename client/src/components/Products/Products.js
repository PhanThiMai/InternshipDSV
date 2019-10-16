import React from 'react';
import Header from '../../containers/Header';
import NavBar from '../NavBar/NavBar'
import ChildCategory from './ChildCategory/ChildCategory'
import Content from './Content/Content'


function Products() {

    return (
        <div >
            <Header />
            <hr></hr>
            <NavBar />
            <hr />
            <ChildCategory categoryName="Example Child Category" />
            <Content mainCategory="example-child-category" />



        </div>
    )
}

export default Products