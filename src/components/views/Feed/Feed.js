import styles from './Feed.module.scss'
import { Post } from './Post/Post'

export const Feed = () => {


    return (
        <section className={styles.Feed}>
            <h1>feed component</h1>
            <Post title={'sample post title 1'} date={'01.05.2021'}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</p>
            </Post>
            <Post title={'sample post title 2'} date={'02.05.2021'}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</p>
            </Post>
            <Post title={'sample post title 3'} date={'03.05.2021'}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.</p>
            </Post>
        </section>
    )
}
