import styles from './Tag.module.css';

const TagView = ({ text }) => {
    return (<span className={styles.moodTag}>{text}</span>
    )
}

export default TagView