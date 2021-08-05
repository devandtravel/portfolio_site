/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'

export const Navigation = () => (
    <ul className={styles.Navigation}>
        <li className={styles.NavigationItem}>
            <NavLink to='/' exact activeStyle={{ color: 'gray' }}>
                Home
            </NavLink>
        </li>
        <li className={styles.NavigationItem}>
            <NavLink to='/projects' activeStyle={{ color: 'gray' }}>
                Projects
            </NavLink>
        </li>
        <li className={styles.NavigationItem}>
            <NavLink to='/about' activeStyle={{ color: 'gray' }}>
                About
            </NavLink>
        </li>
        <li className={styles.NavigationItem}>
            <NavLink to='/contacts' activeStyle={{ color: 'gray' }}>
                Contacts
            </NavLink>
        </li>
        
    </ul>
)
