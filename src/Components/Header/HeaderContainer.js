import React, { Component } from 'react'
import Header from './Header'
import { connect } from 'react-redux'

class HeaderContainer extends Component {
  state = { menuVisible: false }
  
  setMenu = (event) => {
    event.preventDefault()
    this.setState({ menuVisible: !this.state.menuVisible })
  }

  render() {
    return (
      <div>
        <Header 
        user={this.props.user}
        onClick={this.setMenu}
        menu={this.state} 
       />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.login
  }
}

export default connect(mapStateToProps)(HeaderContainer)
