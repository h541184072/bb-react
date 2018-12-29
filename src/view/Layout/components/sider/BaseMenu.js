import React, { PureComponent } from 'react'
import { Menu, Icon } from 'antd'
import { isUrl } from '@/utils/utils'
import styles from './BaseMenu.module.less'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getDefaultCollapsedSubMenus, getMenuMatches } from './SiderMenuUtils'
import { urlToList } from './pathTools'

const { SubMenu } = Menu

// Allow menu.js config icon as string or ReactNode
//   icon: 'setting',
//   icon: 'http://demo.com/icon.png',
//   icon: <Icon type="setting" />,
const getIcon = icon => {
  if (typeof icon === 'string' && isUrl(icon)) {
    return <img src={icon} alt="icon" className={styles.icon}/>
  }
  if (typeof icon === 'string') {
    return <Icon type={icon}/>
  }
  return icon
}

class BaseMenu extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      openKeys: getDefaultCollapsedSubMenus(props),
    }
  }

  getNavMenuItems = (menusData, parent) => {
    if (!menusData) return []
    return menusData
      .filter(item => item.name && !item.hideInMenu)
      .map(item => this.getSubMenuOrItem(item, parent))
      .filter(item => item)
  }
  /**
   * get SubMenu or Item
   */
  getSubMenuOrItem = item => {
    // doc: add hideChildrenInMenu
    if (item.children && !item.hideChildrenInMenu && item.children.some(child => child.name)) {
      const { name } = item
      return (
        <SubMenu
          title={
            item.icon ? (
              <span>
                {getIcon(item.icon)}
                <span>{name}</span>
              </span>
            ) : (
              name
            )
          }
          key={item.path}
        >
          {this.getNavMenuItems(item.children)}
        </SubMenu>
      )
    }
    return <Menu.Item key={item.path}>{this.getMenuItemPath(item)}</Menu.Item>
  }

  /**
   * 判断是否是http链接.返回 Link 或 a
   * Judge whether it is http link.return a or Link
   * @memberof SiderMenu
   */
  getMenuItemPath = item => {
    const { name } = item
    const itemPath = this.conversionPath(item.path)
    const icon = getIcon(item.icon)
    const { target } = item
    // Is it a http link
    if (/^https?:\/\//.test(itemPath)) {
      return (
        <a href={itemPath} target={target}>
          {icon}
          <span>{name}</span>
        </a>
      )
    }
    const { location } = this.props
    return (
      <Link
        to={itemPath}
        target={target}
        replace={itemPath === location.pathname}
      >
        {icon}
        <span>{name}</span>
      </Link>
    )
  }

  conversionPath = path => {
    if (path && path.indexOf('http') === 0) {
      return path
    }
    return `/${path || ''}`.replace(/\/+/g, '/')
  }

  // Get the currently selected menu
  getSelectedMenuKeys = (pathname, flatMenuKeys) => {
    return urlToList(pathname).map(itemPath => getMenuMatches(flatMenuKeys, itemPath).pop())
  }

  isMainMenu = key => {
    const { menuData } = this.props
    return menuData.some(item => {
      if (key) {
        return item.key === key || item.path === key
      }
      return false
    })
  }

  handleOpenChange = openKeys => {
    const moreThanOne = openKeys.filter(openKey => this.isMainMenu(openKey)).length > 1
    this.setState({
      openKeys: moreThanOne ? [openKeys.pop()] : [...openKeys],
    })
  }

  render() {
    const {
      menuData,
      collapsed,
      flatMenuKeys,
      location: { pathname },
    } = this.props
    const { openKeys } = this.state
    const defaultProps = collapsed ? {} : { openKeys }
    let selectedKeys = this.getSelectedMenuKeys(pathname, flatMenuKeys)
    if (!selectedKeys.length && openKeys) {
      selectedKeys = [openKeys[openKeys.length - 1]]
    }
    return (
      <Menu
        {...defaultProps}
        selectedKeys={selectedKeys}
        onOpenChange={this.handleOpenChange}
        key='Menu'
        theme="dark"
        mode="inline"
        style={{ padding: '16px 0', width: '100%' }}
      >
        {this.getNavMenuItems(menuData)}
      </Menu>
    )
  }
}

BaseMenu.propTypes = {
  menuData: PropTypes.array.isRequired,
  flatMenuKeys: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  collapsed: PropTypes.bool.isRequired,
}

export default BaseMenu
