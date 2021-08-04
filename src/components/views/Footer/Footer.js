import styles from './Footer.module.scss'
import { FooterContent } from './FooterContent/FooterContent'
import { Social } from './Social/Social'

export const Footer = () => (
    <footer className={styles.Footer}>
        <FooterContent />
        <Social />
    </footer>
)
