import './RoundButton.css'

/**
 * @param {string} size 
 */
const RoundButtonView = ({ text, onClick, active, size, type, bottom }) => {
  return (
    <button
      type={type ? type : 'button'}
      className={`${bottom} roundBtn ${active ? 'active' : 'inactive'} ${size} `}
      onClick={active ? onClick : null}
    >{text}</button>
  )
}

export default RoundButtonView
