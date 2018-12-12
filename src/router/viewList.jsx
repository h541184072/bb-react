import React, { lazy } from 'react'

const Login = lazy(() => import('@/view/Login'))
const Layout = lazy(() => import('@/view/Layout'))
const NotFound = lazy(() => import('@/view/Exception/404'))

const Components = {
  Login,
  Layout,
  NotFound
}

const AsyncComponent = (componentName) => {
  const Component = Components[componentName]
  return (
    props => <Component {...props} />
  )
}

export default AsyncComponent
