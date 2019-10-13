import React from 'react'
import { Card } from 'reactstrap';
import './SmallItem.scss'

function SmallItem(props) {
    const { src, name, } = props;
    return (

        <div className="smallItem mx-3">
            <Card inverse>
                <img className="smallBalli" src={src} alt={name} />
                <div className="subSmall">
                    <h2 className="imgTextSmall">{name}</h2>
                    <button className="shopNowSmall">Shop Now</button>
                </div>

            </Card>
        </div>
    );
}

export default SmallItem;