import { applyMiddleware, createStore } from 'redux'
import reducer from '@/reducer'
import thunk from 'redux-thunk'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(require('redux-immutable-state-invariant').default())
}

const store = createStore(reducer, applyMiddleware(...middleware))
console.log(store.getState())

export default store