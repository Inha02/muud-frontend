import './RoundButton.css'

/**
 * @param {string} size 
 */
const RoundButtonView = ({ text, onClick, active, size }) => {
  return (
    <div>
      <button
        className={`roundBtn ${active ? 'active' : 'inactive'} ${size}`}
        onClick={active ? onClick : null}
      >{text}</button>
    </div >
  )
}

export default RoundButtonView
