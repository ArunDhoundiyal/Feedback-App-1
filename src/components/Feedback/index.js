import {Component} from 'react'
import ThankYouFeedback from '../ThankYouFeedback'
import './index.css'

class Feedback extends Component {
  state = {condition: false}

  happyButton = id => {
    if (id === 2) {
      this.setState({condition: true})
    }
  }

  render() {
    const {condition} = this.state
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    console.log(condition)
    return (
      <div className="bg-container">
        <div className="card-container">
          {condition ? (
            <div className="thank-you-container">
              <img
                className="thankYou-image"
                src={loveEmojiUrl}
                alt="love emoji"
              />
              <h1 className="thankYouHeading">Thank You!</h1>
              <p className="thank-you-text">
                We will use your feedback to improve our customer support
                performance
              </p>
            </div>
          ) : (
            <div>
              <h1 className="top-heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="emojis-container">
                {resources.emojis.map(emojisArray => (
                  <ThankYouFeedback
                    key={emojisArray.id}
                    emojisArray={emojisArray}
                    happyButton={this.happyButton}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Feedback
