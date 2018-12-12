import React from 'react'
import { Menu, Icon, Layout } from 'antd'
import PropTypes from 'prop-types'
import css from './index.module.less'

const {
  logo,
  trigger
} = css
const { Sider } = Layout

function BasicSider({ collapsed, toggleCollapsed }) {
  return (
    <Sider
      trigger={null}
      collapsible
      width={256}
      breakpoint="lg"
      collapsed={collapsed}
    >
      <div className={logo}>
        <Icon
          className={trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggleCollapsed}
        />
        <h1>XX工作台</h1>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Icon type="user"/>
          <span>nav 1</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="video-camera"/>
          <span>nav 2</span>
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="upload"/>
          <span>nav 3</span>
        </Menu.Item>
      </Menu>
    </Sider>
  )
}

BasicSider.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleCollapsed: PropTypes.func.isRequired
}

export default BasicSider
