import React from 'react';
import ChildCategory from './ChildCategory/ChildCategory'
import Content from './Content/Content'
import { getCategories } from '../../api/category'



class Products extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount = () => {
        getCategories().then(res => {
            const data = res.data;
            if (data) {
                this.setState({
                    categories: data
                })
            }

        })
    }



    render() {
        const { match } = this.props
        let { categories } = this.state
        let category = "";
        categories.forEach(item => {
            if (item._id === match.params.id)
                category = item.name;
        });


        return (
            <div >
                <ChildCategory categoryName={category} match={match} />
                <Content mainCategory={category} match={match} />
            </div>
        )
    }

}
export default Products