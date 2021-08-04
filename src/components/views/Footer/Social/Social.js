/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from './Social.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons'

export const Social = () => (
    <div className={styles.Social}>
        <a href='https://github.com/devandtravel' className={styles.github}>
            <FontAwesomeIcon icon={faGithub} className={styles.fa} />
        </a>
        <a
            href='https://www.youtube.com/channel/UCLO5KplVfPtAWmFkgsPJBZA'
            className={styles.youtube}>
            <FontAwesomeIcon icon={faYoutube} className={styles.fa} />
        </a>
    </div>
)
