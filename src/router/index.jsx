import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import Loadable from './loadable'
import App from '../App'
import Login from '@/view/Login'
import NotFound from '@/view/Exception/404.js'

export default function Page() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app"/>}/>
        <Route exact path="/app" component={App}/>
        <Route path="/login" component={Login}/>
        <Route path="/404" component={NotFound}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  )
}
