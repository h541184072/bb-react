import React from 'react'
import Loadable from 'react-loadable'

export default function LazyLoad(file) {
  const Component = Loadable({
    loader: () => import(`@/view/${file}`),
    loading: () => import('@/components/PageLoading')
  })
  return <Component/>
}