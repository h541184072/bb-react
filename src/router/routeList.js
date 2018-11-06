import Loadable from './loadable' // 后面注意是否丢失props

export default [
    {
        path: '/login',
        component: Loadable(() => import('@/view/Login'))
    }
]