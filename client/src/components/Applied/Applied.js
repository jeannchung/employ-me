import React, { Component } from 'react'
import firebase from 'firebase'

class Applied extends Component {
  //user is logged in
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => this.setState({ user: !!user }))
  }
  render() {
    return (
      <>
       <h1>Applied</h1>
      </>
    )
  }
}


export default Applied



