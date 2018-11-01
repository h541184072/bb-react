import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import Routes from './router'
import store from './public_store'

import { LocaleProvider } from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'

class App extends Component {
    render() {
        return (
            <LocaleProvider locale={zh_CN}>
                <AppContainer>
                    <Provider store={store}>
                        <Routes store={store}/>
                    </Provider>
                </AppContainer>
            </LocaleProvider>
        )
    }
}

export default App