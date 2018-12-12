// 使用 react-loadable  此方式支持服务器渲染，原生暂不支持
// import Loadable from './loadable' // 后面注意是否丢失props
//
// export default [
//   {
//     path: '/login',
//     exact: true,
//     component: Loadable(() => import('@/view/Login'))
//   },
//   {
//     path: '/',
//     exact: true,
//     component: Loadable(() => import('@/view/Layout'))
//   },
//   {
//     component: Loadable(() => import('@/view/Exception/404'))
//   }
// ]

// 使用原生
import AsyncComponent from './viewList.jsx'

export default [
  {
    path: '/login',
    exact: true,
    component: AsyncComponent('Login')
  },
  {
    path: '/',
    exact: true,
    component: AsyncComponent('Layout')
  },
  {
    component: AsyncComponent('NotFound')
  }
]
