/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

const activeStyle = { fontWeight: 'bold' }

export const Navigation = () => (
    <ul className={styles.Navigation}>
        <li className={styles.NavigationItem}>
            <NavLink to='/home' exact activeStyle={activeStyle}>
                Home
            </NavLink>
        </li>
        <li className={styles.NavigationItem}>
            <NavLink to='/projects' activeStyle={activeStyle}>
                Projects
            </NavLink>
        </li>
        <li className={styles.NavigationItem}>
            <NavLink to='/about' activeStyle={activeStyle}>
                About
            </NavLink>
        </li>
        <li className={styles.NavigationItem}>
            <NavLink to='/contacts' activeStyle={activeStyle}>
                Contacts
            </NavLink>
        </li>
    </ul>
)
