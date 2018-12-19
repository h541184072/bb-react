import React, { PureComponent } from 'react'
import { Menu, Icon } from 'antd'
import { isUrl } from '@/utils/utils'
import styles from './BaseMenu.module.less'
import { connect } from 'react-redux'
import * as Actions from '@/redux/actions/menu'
import PropTypes from 'prop-types'

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
    // const { location, isMobile, onCollapse } = this.props;
    // return (
    //   <Link
    //     to={itemPath}
    //     target={target}
    //     replace={itemPath === location.pathname}
    //     onClick={
    //       isMobile
    //         ? () => {
    //           onCollapse(true);
    //         }
    //         : undefined
    //     }
    //   >
    //     {icon}
    //     <span>{name}</span>
    //   </Link>
    // );
    return <span>{name}</span>
  }

  render() {
    const {
      menuData
    } = this.props
    return (
      <Menu
        key='Menu'
        theme="dark"
        mode="inline"
        style={{ padding: '16px 0', width: '100%' }}
        defaultSelectedKeys={['1']}
      >
        {this.getNavMenuItems(menuData)}
      </Menu>
    )
  }
}

BaseMenu.propTypes = {
  menuData: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    menuData: state.menu.menuData
  }
}

export default connect(mapStateToProps, Actions)(BaseMenu)
