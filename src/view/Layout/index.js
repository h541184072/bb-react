import React from 'react'
import { Layout } from 'antd'
import Sider from './components/sider'

const { Header, Content } = Layout

class BasicLayout extends React.Component {
  state = {
    collapsed: false
  }

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed
    })
  }

  render() {
    console.log(this.props)
    const { collapsed } = this.state
    return (
      <Layout>
        <Sider collapsed={collapsed} toggleCollapsed={this.toggleCollapsed}/>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}/>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280
          }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default BasicLayout
