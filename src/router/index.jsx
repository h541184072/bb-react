import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import renderRoutes from './renderRoutes'
import routes from './routeList'

export default function Page() {
  console.info('这里渲染了3次')
  return (
    <Router>
      {renderRoutes(routes)}
    </Router>
  )
}
