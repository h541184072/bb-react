import React from 'react'
import RenderAuthorized from '@/components/Authorized'
import { getAuthority } from '@/utils/authority'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

const Authority = getAuthority()
const Authorized = RenderAuthorized(Authority)

const AuthorizedFun = ({ children }) => {
  return (
    <Authorized authority={children.props.route.authority} noMatch={<Redirect to="/login"/>}>
      {children}
    </Authorized>
  )
}

AuthorizedFun.propTypes = {
  children: PropTypes.object.isRequired,
}

export default AuthorizedFun
