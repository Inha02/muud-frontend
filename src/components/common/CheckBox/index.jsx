import { useEffect, useState, useContext, useRef } from 'react'
import styles from './CheckBox.module.css'

const CheckBox = ({ index, value, isChecked, handleCheckboxChange }) => {
    return (
            <input
                className={isChecked ===true ? styles.checked:''}
                type="checkbox"
                id={'value'}
                value={value}
                checked={isChecked}
                onChange={(e) => { handleCheckboxChange(e, index) }}
            /> 
    )
}

export default CheckBox