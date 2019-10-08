import {REGISTER_USER} from '../actions'

export default function register(state = [], action = {}) {
  switch (action.type) {
    case REGISTER_USER:
      return action.payload
    default:
      return state
  }
}