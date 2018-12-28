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
    component: AsyncComponent('Login'),
  },
  {
    path: '/',
    component: AsyncComponent('Layout'),
    Routes: [require('./Authorized').default],
    authority: [
      'admin',
      'user',
    ],
    routes: [
      { path: '/', redirect: '/404/4042', 'exact': true },
      {
        path: '/404',
        name: '404',
        icon: 'dashboard',
        routes: [
          {
            path: '/404/4042',
            name: '404',
            component: AsyncComponent('NotFound'),
            exact: true,
          },
          {
            path: '/404/4043',
            name: '404',
            component: AsyncComponent('NotFound'),
            exact: true,
          },
          {
            path: '/404/4044',
            name: '404',
            component: AsyncComponent('NotFound'),
            exact: true,
          },
        ],
      },
    ]
    ,
  },
  {
    component: AsyncComponent('NotFound'),
  },
]
