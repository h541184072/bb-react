import React from 'react'
import { Icon, Layout } from 'antd'
import PropTypes from 'prop-types'
import css from './index.module.less'
import BaseMenu from './BaseMenu'
import { getFlatMenuKeys } from './SiderMenuUtils'

const {
  logo,
  trigger,
} = css
const { Sider } = Layout

function BasicSider(props) {
  const { collapsed, toggleCollapsed, menuData } = props
  const flatMenuKeys = getFlatMenuKeys(menuData)

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
      <BaseMenu {...props} flatMenuKeys={flatMenuKeys}/>
    </Sider>
  )
}

BasicSider.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleCollapsed: PropTypes.func.isRequired,
}

export default BasicSider
