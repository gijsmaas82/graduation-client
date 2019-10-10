import React, { Component } from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
// import request from 'superagent'
// import { url } from '../../constants'


class ProfileContainer extends Component {
  // state = { drawings: [] }

  // componentDidMount() {
  //   if (this.props.user.jwt) {
  //     request
  //       .get(`${url}/drawings`)
  //       .set('Authorization', `Bearer ${this.props.user.jwt}`)
  //       .then(response => {
  //         console.log('res:', response.body)
  //         this.setState({ drawings: response.body })
  //       })
  //       .catch(console.error)
  //   }
  // }

  render() {
    
    return (
      <div>
        <Profile
        // drawings={this.state.drawings}
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