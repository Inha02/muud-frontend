import React, { useState, useEffect } from 'react';
import styles from './EllipsizedText.module.css'
const EllipsizedText = ({ text, maxHeight, className }) => {
    const [isEllipsized, setIsEllipsized] = useState(false);

    useEffect(() => {
        const container = document.getElementById('textContainer');
        if (container.scrollHeight > maxHeight) {
            setIsEllipsized(true);
        } else {
            setIsEllipsized(false);
        }
    }, [text, maxHeight]);
    return (
        <div className={className + ' ' + (isEllipsized ? styles['ellipsized'] : '')} id="textContainer">
            {text}
        </div>
    );
}

export default EllipsizedText