import { Redirect, Route, Switch } from 'react-router-dom'

import { About } from './About/About'
import { Contacts } from './Contacts/Contacts'
import { Projects } from './Projects/Projects'
import { Home } from './Home/Home'


export const Routes = () => (
    <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contacts' component={Contacts} />
        <Redirect from={ '/'} to={'home'} exact/>
        <Route render={() => <h1>404</h1>} />
    </Switch>
)
