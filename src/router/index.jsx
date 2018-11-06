import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from './loadable' // 后面注意是否丢失props

const AppLoadable = Loadable(() => import('@/App'))
const LoginLoadable = Loadable(() => import('@/view/Login'))
const NotFoundLoadable = Loadable(() => import('@/view/Exception/404'))

export default function Page() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={AppLoadable}/>
                <Route exact path="/login" component={LoginLoadable}/>
                <Route exact path="/404" component={NotFoundLoadable}/>
                <Route component={NotFoundLoadable}/>
                {/*    <Route path="/login" render={() => Loadable('Login')}/>
                <Route path="/404" render={() => Loadable('Exception/404.js')}/>
                <Route render={() => Loadable('Exception/404.js')}/>*/}
            </Switch>
        </Router>
    )
}
