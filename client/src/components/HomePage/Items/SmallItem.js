import React from 'react'
import './SmallItem.scss'

function SmallItem(props) {
    const { src, name, } = props;
    return (
        <div className="smallItem mx-1">
            <img className="smallBalli" src={src} alt={name} />
            <div className="subSmall">
                <h2 className="imgTextSmall">{name}</h2>
                <button className="shopNowSmall">
                    Shop now
            </button>
            </div>

        </div>
    );
}

export default SmallItem;