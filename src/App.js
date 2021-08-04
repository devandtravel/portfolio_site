import { Layout } from './components/views/Layout/Layout'
import { Menu } from './components/views/Menu/Menu'
import { Feed } from './components/views/Feed/Feed'
import { Aside } from './components/views/Aside/Aside'
import { Content } from './components/views/Content/Content'
import { Footer } from './components/views/Footer/Footer'

export const App = () => (
    <Layout layoutStyle='blog'>
        <Menu />
        <Content>
            <Aside />
            <Feed />
            <Aside />
        </Content>

        <Footer />
    </Layout>
)
