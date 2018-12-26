import React from 'react'
import { Layout } from 'antd'
import Sider from './components/sider'
import Media from 'react-media'
import * as GlobalActions from '@/redux/actions/global'
import * as MenuActions from '@/redux/actions/menu'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types'

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

  render() {
    return (
      <Layout>
        <Sider {...this.props} toggleCollapsed={this.toggleCollapsed}/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}/>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          >
            Content
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
