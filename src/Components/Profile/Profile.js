import React, { Component } from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'




export default class Profile extends Component {
  render() {
    return (
      <div className="profileWrapper">
        <h1>Profile</h1>
        {this.props.user.length === 0 ? 
        <div>
        <Link to='/login/'><button>Click to log in</button></Link>
        <Link to='/signup/'><button>Click to sign up</button></Link>
        </div>
         : 
        <div>
          <h1>Welcome, {this.props.user.userName}</h1> 
        </div>
        }
      </div>
    )
  }
}

