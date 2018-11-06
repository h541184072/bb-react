import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderRoutes from './renderRoutes'
import routes from './routeList'

// import Loadable from './loadable' // 后面注意是否丢失props
// const AppLoadable = Loadable(() => import('@/App'))
// const LoginLoadable = Loadable(() => import('@/view/Login'))
// const NotFoundLoadable = Loadable(() => import('@/view/Exception/404'))

export default function Page() {
    return (
        <Router>
            {renderRoutes(routes)}
          {/*  <Switch>
                <Route exact path="/" component={AppLoadable}/>
                <Route exact path="/login" component={LoginLoadable}/>
                <Route exact path="/404" component={NotFoundLoadable}/>
                <Route component={NotFoundLoadable}/>
            </Switch>*/}
        </Router>
    )
}
