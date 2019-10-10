import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'


class ProfileContainer extends Component {
  
  render() {
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