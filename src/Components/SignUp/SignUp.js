import React, { Component } from 'react'
import './SignUp.css'

export default class SignUp extends Component {
  render() {
    return (
      <div className="signUpWrapper">
        <h1>Sign up</h1>
        <p>Please leave a name and password to make a new account.</p>
        <div className="signUpBox">
        <form onSubmit={this.props.onSubmit}>
          <div><label>
            Name:
            <input
              type='text'
              value={this.props.name}
              name='name'
              placeholder='enter your name'
              onChange={this.props.onChange}
            />
          </label></div>
          <div><label>
            password:
            <input
              type='password'
              value={this.props.password}
              name='password'
              placeholder='enter password'
              onChange={this.props.onChange}
            />
          </label></div>
          <div><button type='submit'>Sign up</button></div>
        </form>
        </div>
      </div>
    )
  }
}
