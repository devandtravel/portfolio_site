import styles from './Header.module.scss'
import { Logo } from './Logo/Logo'
import { Navigation } from './Navigation/Navigation'



export const Header = () => (
    <header className={styles.Header}>
        <Navigation />
        <Logo />
    </header>
)
