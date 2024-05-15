import './index.css'
import {Component} from 'react'

class ReviewsCarousel extends Component {
  state = {review: 0}

  clickedplus = () => {
    this.setState(prevstate => ({
      review:
        prevstate.review === this.props.reviewsList.length - 1
          ? this.props.reviewsList.length - 1
          : prevstate.review + 1,
    }))
  }

  clickedminus = () => {
    this.setState(prevstate => ({
      review: prevstate.review === 0 ? 0 : prevstate.review - 1,
    }))
  }

  render() {
    const {reviewsList} = this.props
    const {review} = this.state
    console.log(review)
    return (
      <div className="container">
        <h1 className="h1">Reviews</h1>
        <img
          src={reviewsList[review].imgUrl}
          alt={reviewsList[review].username}
        />
        <div className="corousle">
          <button
            type="button"
            onClick={this.clickedminus}
            className="imgcss"
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <p className="e"> {reviewsList[review].username}</p>
          <button
            type="button"
            onClick={this.clickedplus}
            className="imgcss"
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
        <p>{reviewsList[review].companyName}</p>
        <p>{reviewsList[review].description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
