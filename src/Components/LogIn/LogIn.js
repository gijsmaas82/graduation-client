import React, { Component } from 'react'
import './Login.css'

export default class LogIn extends Component {
  render() {
    return (
      <div className="logInWrapper"> 
        <h1>Login</h1>
        <p>Enter your username and password to log in.</p>
        <div className="logInBox">
        <form onSubmit={this.props.onSubmit}>
          <div><label>
            Name:
            <input 
            type='text' 
            value={this.props.name} 
            name='name' 
            placeholder='enter your name' 
            onChange={this.props.onChange} 
            />
          </label></div>
          <div><label>
            Password:
            <input
            type='password'
            value={this.props.password}
            name='password'
            placeholder='enter password'
            onChange={this.props.onChange}
            />
          </label></div>
          <div><button type='submit'>Login</button></div>
        </form></div>
      </div>
    )
  }
}
