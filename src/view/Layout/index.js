import React from 'react'
import { Layout } from 'antd'
import Sider from './components/sider'
import Media from 'react-media'
import * as GlobalActions from '@/redux/actions/global'
import * as MenuActions from '@/redux/actions/menu'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'
import Authorized from '@/utils/Authorized'
import Exception403 from '@/view/Exception/403'
import pathToRegexp from 'path-to-regexp'

const { Header, Content } = Layout

class BasicLayout extends React.Component {
  static propTypes = {
    collapsed: PropTypes.bool.isRequired,
    changeLayoutCollapsed: PropTypes.func.isRequired,
    getMenuData: PropTypes.func.isRequired,
    route: PropTypes.object.isRequired,
    isMobile: PropTypes.bool.isRequired,
    menuData: PropTypes.array.isRequired,
  }

  componentDidMount = () => {
    const {
      getMenuData,
      route: { routes, authority },
    } = this.props
    getMenuData({ routes, authority })
  }

  componentDidUpdate(preProps) {
    // After changing to phone mode,
    // if collapsed is true, you need to click twice to display
    const { collapsed, isMobile, changeLayoutCollapsed } = this.props
    if (isMobile && !preProps.isMobile && !collapsed) {
      changeLayoutCollapsed(true)
    }
  }

  toggleCollapsed = () => {
    const { collapsed, changeLayoutCollapsed } = this.props
    changeLayoutCollapsed(!collapsed)
  }

  getRouterAuthority = (pathname, routeData) => {
    let routeAuthority = ['noAuthority']
    const getAuthority = (key, routes) => {
      routes.map(route => {
        if (route.path && pathToRegexp(route.path).test(key)) {
          routeAuthority = route.authority
        } else if (route.routes) {
          routeAuthority = getAuthority(key, route.routes)
        }
        return route
      })
      return routeAuthority
    }
    return getAuthority(pathname, routeData)
  }

  render() {
    const {
      children,
      location: { pathname },
      route: { routes },
    } = this.props
    const routerConfig = this.getRouterAuthority(pathname, routes)
    console.log(333)
    return (
      <Layout>
        <Sider {...this.props} toggleCollapsed={this.toggleCollapsed}/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}/>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            <Authorized authority={routerConfig} noMatch={<Exception403/>}>
              {children}
            </Authorized>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    collapsed: state.global.collapsed,
    menuData: state.menu.menuData,
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  changeLayoutCollapsed: GlobalActions.changeLayoutCollapsed,
  getMenuData: MenuActions.getMenuData,
}, dispatch)

// const mapDispatchToProps = (dispatch) => {
//   return {
//     changeLayoutCollapsed: (bool) => dispatch(Actions.changeLayoutCollapsed(bool)),
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(props => (
  <Media query="(max-width: 599px)">
    {isMobile => <BasicLayout {...props} isMobile={isMobile}/>}
  </Media>
))
