import React from 'react'
import StarRatings from 'react-star-ratings';
import './Rating.scss'


class StarRating extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            rating: 0,
            starRatedColor: "yellow",
            starHoverColor: "yellow",
            starDimension: "16px",
            starSpacing: "2px",
            numberOfStars: 5,
            name: 'rating'
        }
    }

    changeRating = (newRating) => {
        this.setState({
            rating: newRating
        });
    }


    render() {
        const { rating, starHoverColor, starRatedColor, starDimension, starSpacing, numberOfStars, name } = this.state;
        return (
            <div className="d-flex rating">
                <StarRatings
                    rating={rating}
                    starRatedColor={starRatedColor}
                    starHoverColor={starHoverColor}
                    starDimension={starDimension}
                    starSpacing={starSpacing}
                    changeRating={this.changeRating}
                    numberOfStars={numberOfStars}
                    name={name}

                />
                <div className="line"></div>
                <p className="number-of-review ml-3 p-2">{`${rating}  Review`}</p>
            </div>

        );
    }
}

export default StarRating;
