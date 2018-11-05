import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import Routes from './router'
import store from './public_store'

import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'

render(
  <LocaleProvider locale={zh_CN}>
    <AppContainer>
      <Provider store={store}>
        <Routes store={store}/>
      </Provider>
    </AppContainer>
  </LocaleProvider>,
  document.getElementById('root')
)
