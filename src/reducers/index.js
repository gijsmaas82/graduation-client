import { combineReducers } from 'redux'
import register from "./register"
import apples from "./apples"

export default combineReducers({
  register,
  apples
})