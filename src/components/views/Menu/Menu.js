/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Menu.module.scss'

export const Menu = () => (
    <nav>
        <ul className={styles.Menu}>
            <li className={styles.MenuItem}>
                <a href='#'>Home</a>
            </li>
            <li className={styles.MenuItem}>
                <a href='#'>About</a>
            </li>
            <li className={styles.MenuItem}>
                <a href='#'>Contacts</a>
            </li>
        </ul>
    </nav>
)
