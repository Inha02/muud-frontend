import { useEffect, useState } from 'react'
import RoundButtonView from './RoundButton'

const RoundButton = ({ children, onClick, active, size, type, bottom }) => {
  return <RoundButtonView type={type} text={children} onClick={onClick} active={active} size={size} bottom={bottom && 'bottom'} />
}

export default RoundButton
