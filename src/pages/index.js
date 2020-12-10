// Libs
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Constants
import ROUTES from '../constants/routes'

// Screen
import NotFound from './NotFound'
import Home from './Home'
import Detail from './Detail'
import Search from './Search'

// Split router
const AppRouter = () => (
  <Switch>
    <Route exact path={ROUTES.HOME} component={Home} />
    <Route path={`${ROUTES.DETAIL}/:id`} component={Detail} />
    <Route path={`${ROUTES.SEARCH}/:keyword`} component={Search} />
    <Route component={NotFound} />
  </Switch>
)

const App = () => (
  <Router>
    <AppRouter />
  </Router>
)

export default App
