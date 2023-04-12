import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {value: 0}

  onCarouselDecrement = () => {
    const {value} = this.state

    if (value > 0) {
      this.setState({value: value - 1})
    }
  }

  onCarouselIncrement = () => {
    const {value} = this.state
    if (value < 3) {
      this.setState({value: value + 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {value} = this.state
    const results = reviewsList[value]
    const {imgUrl, username, companyName, description} = results

    return (
      <div className="main-container">
        <h1 className="heading">Reviews</h1>
        <div className="review-container">
          <button
            type="button"
            data-testid="leftArrow"
            onClick={this.onCarouselDecrement}
            className="button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>

          <div className="review-item">
            <img src={imgUrl} alt={username} className="profile" />
            <p className="name">{username}</p>
            <p className="company">{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <button
            type="button"
            onClick={this.onCarouselIncrement}
            className="button"
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
