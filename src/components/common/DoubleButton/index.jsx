import { useEffect, useState } from 'react'
import DoubleButtonView from './DoubleButton'

const DoubleButton = ({
  leftTxt,
  rightTxt,
  leftActive,
  rightActive,
  handleLeftClick,
  handleRightClick,
  leftStyle,
  rightStyle
}) => {
  return <DoubleButtonView
    leftTxt={leftTxt}
    rightTxt={rightTxt}
    leftActive={leftActive}
    rightActive={rightActive}
    handleLeftClick={handleLeftClick}
    handleRightClick={handleRightClick}
    leftStyle={leftStyle}
    rightStyle={rightStyle}
  />
}

export default DoubleButton
