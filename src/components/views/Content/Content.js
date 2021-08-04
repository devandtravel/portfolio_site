import styles from './Content.module.scss'
import { Aside } from './Aside/Aside'
import { Feed } from './Feed/Feed'


export const Content = () => (
    <div className={styles.Content}>
        <Aside />
        <Feed />
        <Aside />
    </div>
)
