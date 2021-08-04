/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Navigation.module.scss'

export const Navigation = () => (
    <ul className={styles.Navigation}>
        <li className={styles.NavigationItem}>
            <a href='#'>Home</a>
        </li>
        <li className={styles.NavigationItem}>
            <a href='#'>Projects</a>
        </li>
        <li className={styles.NavigationItem}>
            <a href='#'>About</a>
        </li>
        <li className={styles.NavigationItem}>
            <a href='#'>Contacts</a>
        </li>
    </ul>
)
