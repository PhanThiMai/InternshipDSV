import React from 'react';
import ChildCategory from './ChildCategory/ChildCategory'
import Content from './Content/Content'
import {
    useParams
} from "react-router-dom";

import { getProducts } from '../../api/products'

class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount = () => {
        getProducts().then(res => {
            console.log(res);
        })
    }

    render() {
        let { id } = useParams();
        const { match } = this.props

        return (
            <div >
                <ChildCategory categoryName={id} match={match} />
                <Content mainCategory={id} match={match} />
            </div>
        )
    }
}


export default Products