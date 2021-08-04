import styles from './HideContent.scss'

export const HideContent = ({ children, hide }) => (
    <div className={hide ? styles.hide : styles.show}>{children}</div>
)
