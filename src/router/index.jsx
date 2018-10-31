import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
// import NotFound from '../components/pages/NotFound'
// import Login from '../components/pages/Login'
import Home from '@/view/home'
import Detail from '@/view/detail'

// import App from '../App'

export default function Page() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" render={() => <Redirect to="/home"/>}/>
                <Route path="/home" component={Home}/>
                <Route path="/detail" component={Detail}/>
                {/*           <Route path="/404" component={NotFound}/>
                <Route path="/login" component={Login}/>
                <Route component={NotFound}/>*/}
            </Switch>
        </Router>
    )
}
