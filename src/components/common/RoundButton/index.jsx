import { useEffect, useState } from 'react'
import RoundButtonView from './RoundButton'

const RoundButton = ({ children, onClick, active, size }) => {
  return <RoundButtonView text={children} onClick={onClick} active={active} size={size} />
}

export default RoundButton
