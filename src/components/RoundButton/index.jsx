import { useEffect, useState } from 'react'
import RoundButtonView from './RoundButton'

const RoundButton = ({ children, onClick, active }) => {
  return <RoundButtonView text={children} onClick={onClick} active={active} />
}

export default RoundButton
