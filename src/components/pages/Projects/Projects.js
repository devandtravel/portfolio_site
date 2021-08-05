import { Layout } from '../../views/Layout/Layout'
import { Header } from '../../views/Header/Header'

import { Footer } from '../../views/Footer/Footer'
import { Content } from '../../views/Content/Content'
import { Feed } from '../../views/Feed/Feed'
import { Project } from '../../views/Feed/Project/Project'
import { Aside } from '../../views/Aside/Aside'

export const Projects = () => (
    <Layout layoutStyle='blog'>
        <Header />
        <Content>
            <Aside />
            <Feed>
                <Project title={'sample project title 1'} date={'01.05.2021'}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.
                    </p>
                </Project>
                <Project title={'sample project title 2'} date={'02.05.2021'}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.
                    </p>
                </Project>
                <Project title={'sample project title 3'} date={'03.05.2021'}>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, esse.
                    </p>
                </Project>
            </Feed>
            <Aside />
        </Content>
        <Footer />
    </Layout>
)
