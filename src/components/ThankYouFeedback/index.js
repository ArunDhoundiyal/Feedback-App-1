import './index.css'

const ThankYouFeedback = props => {
  const {emojisArray, happyButton} = props
  const {id} = emojisArray
  const onClickHappyButton = () => {
    happyButton(id)
  }
  return (
    <li className="emoji-icon">
      <button className="button" type="button" onClick={onClickHappyButton}>
        <img
          alt={emojisArray.name}
          src={emojisArray.imageUrl}
          className="emoji-icon"
        />
      </button>

      <p className="emoji-text">{emojisArray.name}</p>
    </li>
  )
}
export default ThankYouFeedback
