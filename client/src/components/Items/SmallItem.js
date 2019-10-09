import React from 'react'
import { Button } from 'reactstrap'
import './LargeItem.scss'

function SmallItem(props) {
    const { src, name, } = props;
    return (
        <div class="card">
            <img src={src} className="card-img-top" alt={name}>

            </img>
            <div class="card-body">
                <h5 class="card-title">{name}</h5>
                <Button color="warning" className="shopNow"> Shop Now</Button>
            </div>
        </div>
    );
}

export default SmallItem;