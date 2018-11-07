import Loadable from './loadable' // 后面注意是否丢失props

export default [
    {
        path: '/login',
        exact: true,
        component: Loadable(() => import('@/view/Login'))
    }, {
        path: '/',
        exact: true,
        component: Loadable(() => import('@/view/layouts/BasicLayout.js'))
    },
    {
        component: Loadable(() => import('@/view/Exception/404'))
    }
]