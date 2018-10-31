import { createStore, applyMiddleware } from 'redux'
import reducer from '../../reducer'
import thunk from 'redux-thunk'

const middleware = [thunk]
const store = createStore(reducer, applyMiddleware(...middleware))
console.log(store.getState())

export default store