import React from 'react'
import Loadable from 'react-loadable'
import PageLoading from '@/components/PageLoading'

// export default function LazyLoad(file) {
//     const LoadableComponent = Loadable({
//         // loader: () => import('@/view/Login'),
//         loader: () => import(`@/view/${file}`),
//         loading() {
//             return <PageLoading/>
//         }
//     })
//     return <LoadableComponent/>
// }

export default function LazyLoad(loader) {
    return function () {
        const LoadableComponent = Loadable({
            loader,
            loading() {
                return <PageLoading/>
            }
        })
        return <LoadableComponent/>
    }
}
