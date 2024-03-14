import React, { useState, useEffect } from 'react';
import { isMobile } from 'react-device-detect';
import styles from './EllipsizedText.module.css'

const EllipsizedText = ({ text, maxHeight, className }) => {
    const [isEllipsized, setIsEllipsized] = useState(false);

    const calMaxH = isMobile ? (maxHeight / 2.5) : maxHeight;
    const small = calMaxH < 40 ? styles.small : ''
    useEffect(() => {
        const container = document.getElementById('textContainer');
        if (container.scrollHeight > calMaxH) {
            setIsEllipsized(true);
        } else {
            setIsEllipsized(false);
        }
    }, [text, maxHeight]);
    return (
        <div className={className + ' ' + small + ' ' + (isEllipsized ? styles['ellipsized'] : '')} id="textContainer">
            {text}
        </div>
    );
}

export default EllipsizedText