import Tag from "../Tag"
import styles from './Tags.module.css'

const Tags = ({ array }) => {
    return (
        <div className={styles.tagContainer}>
            {array &&
                array.map((item) => <Tag key={item}>{item}</Tag>)}
        </div>
    )
}

export default Tags
