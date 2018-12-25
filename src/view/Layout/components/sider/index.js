import React, { Suspense, lazy } from 'react'
import { Icon, Layout } from 'antd'
import PropTypes from 'prop-types'
import css from './index.module.less'
import PageLoading from '@/components/PageLoading'
import { getFlatMenuKeys } from './SiderMenuUtils'

const BaseMenu = lazy(() => import('./BaseMenu'))
const {
  logo,
  trigger,
} = css
const { Sider } = Layout

function BasicSider(props) {
  const { collapsed, toggleCollapsed, onCollapse, ...rest } = props
  const flatMenuKeys = getFlatMenuKeys(props.menuData)
  return (
    <Sider
      trigger={null}
      collapsible
      width={256}
      breakpoint="lg"
      collapsed={collapsed}
      onCollapse={onCollapse}
    >
      <div className={logo}>
        <Icon
          className={trigger}
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggleCollapsed}
        />
        <h1>XX工作台</h1>
      </div>
      <Suspense fallback={<PageLoading/>}>
        <BaseMenu {...rest} flatMenuKeys={flatMenuKeys}/>
      </Suspense>
    </Sider>
  )
}

BasicSider.propTypes = {
  collapsed: PropTypes.bool.isRequired,
  toggleCollapsed: PropTypes.func.isRequired,
  onCollapse: PropTypes.func.isRequired,
}

export default BasicSider
