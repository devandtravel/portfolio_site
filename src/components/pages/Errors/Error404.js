import { Aside } from '../../views/Aside/Aside'
import { Content } from '../../views/Content/Content'
import { Feed } from '../../views/Feed/Feed'
import { Footer } from '../../views/Footer/Footer'
import { Header } from '../../views/Header/Header'
import { Layout } from '../../views/Layout/Layout'

export const Error404 = () => (
    <Layout layoutStyle='blog'>
        <Header />
        <Content>
            <Aside />
            <Feed>
                <h1>Error 404</h1>
                <h2>Page not found</h2>
            </Feed>
            <Aside />
        </Content>
        <Footer />
    </Layout>
)
