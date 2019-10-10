import { combineReducers } from 'redux'
import register from "./register"
import apples from "./apples"
import login from "./login"

export default combineReducers({
  register,
  apples,
  login
})