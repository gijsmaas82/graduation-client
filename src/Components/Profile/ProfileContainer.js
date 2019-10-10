import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'

class ProfileContainer extends Component {
  render() {
    console.log('user:', this.props.user)
    return (
      <div>
        <Profile
        user={this.props.user} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login
  }
}

export default connect(mapStateToProps)(ProfileContainer)