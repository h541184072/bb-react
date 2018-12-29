import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderRoutes from './renderRoutes'
import routes from './routeList'

export default function Page() {
  return (
    <Router>
      {renderRoutes(routes)}
    </Router>
  )
}
