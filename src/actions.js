import request from 'superagent'
const { url } = require('./constants')

export const REGISTER_USER = 'REGISTER_USER'

function registerUser(payload) {
  return{
    type: REGISTER_USER,
    payload
  }
}

export const register = (name) => dispatch => {  
  request
  .post(`${url}/url`)
  .send({ name })
  .then(res => {
    const action = registerUser(res.body)
    dispatch(action)
  })
  .catch(console.error)
}