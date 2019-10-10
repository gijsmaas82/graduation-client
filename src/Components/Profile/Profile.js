import React, { Component } from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'




export default class Profile extends Component {
  render() {
    return (
      <div className="profileWrapper">
        <h1>Profile</h1>
        {this.props.user.length === 0 ? 
        <div className="buttons">
        <Link to='/login/'><div className="button" ><p>Click to log in</p></div></Link>
        <Link to='/signup/'><div className="button"><p>Click to sign up</p></div></Link>
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

