import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'

import { Content } from '../../views/Content/Content'
import { Footer } from '../../views/Footer/Footer'
import { Aside } from '../../views/Aside/Aside'
import { Feed } from '../../views/Feed/Feed'
import { Post } from '../../views/Feed/Post/Post'

export const Home = () => (
    <Layout layoutStyle='blog'>
        <Header />
        <Content>
            <Aside />
            <Feed>
                <Post title={'sample post title 1'} date={'01.05.2021'}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.
                    </p>
                </Post>
                <Post title={'sample post title 2'} date={'02.05.2021'}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.
                    </p>
                </Post>
                <Post title={'sample post title 3'} date={'03.05.2021'}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.
                    </p>
                </Post>
            </Feed>
            <Aside />
        </Content>
        <Footer />
    </Layout>
)
