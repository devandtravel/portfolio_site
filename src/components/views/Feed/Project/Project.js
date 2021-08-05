import styles from './Project.module.scss'

export const Project = ({
    children,
    title = 'default Project title',
    date = 'default current date: ' + Date().toString()
}) => (
    <div className={styles.Project}>
        <h1>{title}</h1>
        {children}
        <div className={styles.Time}>
            <time dateTime={date}>{date}</time>
        </div>
    </div>
)
