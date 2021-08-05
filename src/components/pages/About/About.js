import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'

import { Footer } from '../../views/Footer/Footer'
import { Content } from '../../views/Content/Content'
import { Aside } from '../../views/Aside/Aside'
import { Feed } from '../../views/Feed/Feed'

export const About = () => (
    <Layout layoutStyle='blog'>
        <Header />
        <Content>
            <Aside />
            <Feed>
                <h1>About</h1>
            </Feed>
            <Aside />
        </Content>
        <Footer />
    </Layout>
)
