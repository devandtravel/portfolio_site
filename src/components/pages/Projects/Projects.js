import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'

import { Footer } from '../../views/Footer/Footer'
import { Content } from '../../views/Content/Content'

export const Projects = () => (
    <Layout layoutStyle='blog'>
        <Header />
        <Content>
            <h1>Projects</h1>
        </Content>
        <Footer />
    </Layout>
)
