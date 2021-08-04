import { Layout } from './components/views/Layout/Layout'
import { Header } from './components/views/Header/Header'

import { Content } from './components/views/Content/Content'
import { Footer } from './components/views/Footer/Footer'


export const App = () => (
    <Layout layoutStyle='blog'>
        <Header/>
        <Content/>
        <Footer />
    </Layout>
)
