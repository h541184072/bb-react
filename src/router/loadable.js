import Loadable from 'react-loadable'
import PageLoading from '@/components/PageLoading'

const LazyLoad = loader => Loadable({
  loader,
  loading: PageLoading
})

export default LazyLoad
