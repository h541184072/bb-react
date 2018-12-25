import { combineReducers } from 'redux'
import login from './login'
import menu from './menu'
import global from './global'

export default combineReducers({
  login,
  menu,
  global,
})
