import React, { Component } from 'react'
import ApplicantModal from './ApplicantModal'
import EmployerModal from './EmployerModal'

class Profile extends Component {

  render() {
    return (
      <>
        <h1>Profile</h1>
        <ApplicantModal/>
        <EmployerModal/>
      </>
    )
  }
}


export default Profile