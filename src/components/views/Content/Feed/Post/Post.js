import styles from './Post.module.scss'

export const Post = ({
    children,
    title = 'default post title',
    date = 'default current date: ' + Date().toString()
}) => (
    <div className={styles.Post}>
        <h1>{title}</h1>
        {children}
        <div className={styles.Time}>
            <time dateTime={date}>{date}</time>
        </div>
    </div>
)
