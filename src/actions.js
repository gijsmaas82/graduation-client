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

export const SET_APPLES = 'SET_APPLES'

function setApples(payload) {
  return{
    type: SET_APPLES,
    payload
  }
}

export const getApples = (apples) => dispatch => {  
  const action = setApples(apples)
  dispatch(action)
}

export const JWT = 'JWT'

function jwt(payload) {
  return{
    type: JWT,
    payload
  }
}

export const login = (name, password) => dispatch => {  
  request
  .post(`${url}/login`)
  .send({ name, password })
  .then(res => {
    const action = jwt(res.body)
    dispatch(action)
  })
  .catch(console.error)
}