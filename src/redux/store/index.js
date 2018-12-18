import { applyMiddleware, createStore } from 'redux'
import reducer from '../reducers'
import thunk from 'redux-thunk'

const middleware = [thunk]

const initialState = {}

if (process.env.NODE_ENV !== 'production') {
  middleware.push(require('redux-immutable-state-invariant').default())
}

const store = createStore(reducer, initialState, applyMiddleware(...middleware))
console.log(store.getState())

export default store
