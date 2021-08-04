import styles from './Footer.module.scss'

export const Footer = ({ children }) => (
    <footer className={styles.Footer}>
        <h1>footer</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aut ullam
            minima, facere enim modi, omnis eos voluptas earum, accusantium nostrum laudantium
            officiis rem quod molestias labore unde dolores! Eligendi odit, omnis qui aut culpa et.
            Deleniti rerum fuga tempora quibusdam alias tenetur, at quia. Accusantium quibusdam
            culpa tenetur architecto.
        </p>
        {children}
    </footer>
)
