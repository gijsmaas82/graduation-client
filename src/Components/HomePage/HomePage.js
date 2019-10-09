import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <h1> Home </h1>
        <Link to="/picking-apples/" ><button>Picking Apples Game</button></Link>
      </div>
    )
  }
}
