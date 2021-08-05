import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'

import { Content } from '../../views/Content/Content'
import { Footer } from '../../views/Footer/Footer'
import { Aside } from '../../views/Aside/Aside'
import { Feed } from '../../views/Feed/Feed'

export const Home = () => (
    <Layout layoutStyle='blog'>
        <Header />
        <Content>
            <Aside />
            <Feed />
            <Aside />
        </Content>
        <Footer />
    </Layout>
)
