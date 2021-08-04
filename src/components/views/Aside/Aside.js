import styles from './Aside.module.scss'

export const Aside = ({ children}) => (
    <aside className={styles.Aside}>
        <h1>aside</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem aut ullam
            minima, facere enim modi, omnis eos voluptas earum, accusantium nostrum laudantium
            officiis rem quod molestias labore unde dolores! Eligendi odit, omnis qui aut culpa et.
            Deleniti rerum fuga tempora quibusdam alias tenetur, at quia. Accusantium quibusdam
            culpa tenetur architecto.
        </p>
        {children}
    </aside>
)
