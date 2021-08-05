import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'
import { Footer } from '../../views/Footer/Footer'
import { Content } from '../../views/Content/Content'
import { ContactForm } from './ContactForm/ContactForm'

export const Contacts = () => (
    <Layout layoutStyle='blog'>
        <Header />
        <Content>
            <ContactForm />
        </Content>
        <Footer />
    </Layout>
)
