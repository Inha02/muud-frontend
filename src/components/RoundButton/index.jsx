import { useEffect, useState } from 'react'
import RoundButtonView from './RoundButton'

const RoundButton = ({ children, onClick }) => {

  return <RoundButtonView text={children} onClick={onClick} />
}

export default RoundButton
