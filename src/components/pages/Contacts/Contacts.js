import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'
import { Footer } from '../../views/Footer/Footer'
import { Content } from '../../views/Content/Content'
import { ContactForm } from './ContactForm/ContactForm'
import { Aside } from '../../views/Aside/Aside'
import { Feed } from '../../views/Feed/Feed'

export const Contacts = () => (
    <Layout layoutStyle='blog'>
        <Header />
        <Content>
            <Aside />
            <Feed>
                <h1>Contacts</h1>
                <ContactForm />
            </Feed>
            <Aside />
        </Content>
        <Footer />
    </Layout>
)
