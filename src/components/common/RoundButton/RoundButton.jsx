import './RoundButton.css'

/**
 * @param {string} size 
 */
const RoundButtonView = ({ text, onClick, active, size, type, bottom }) => {
  return (
    <div className={bottom && `bottomParent`}>
      <button
        type={type ? type : 'button'}
        className={`${bottom} roundBtn ${active ? 'active' : 'inactive'} ${size} `}
        onClick={active ? onClick : null}
      >{text}</button>
    </div>
  )
}

export default RoundButtonView
