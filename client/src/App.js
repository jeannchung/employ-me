import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import firebase from 'firebase'
import Applied from './components/Applied'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import JobPost from './components/JobPost'
import Login from './components/Login'
import Profile from './components/Profile'
import Axios from 'axios';

firebase.initializeApp({
  apiKey: "AIzaSyAJUEk-d9tisX-ZedhpItxe9n8h7aStyMU",
  authDomain: "employ-me-42819.firebaseapp.com",
  databaseURL: "https://employ-me-42819.firebaseio.com",
  projectId: "employ-me-42819",
  storageBucket: "employ-me-42819.appspot.com",
  messagingSenderId: "118031344911"
})
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
}

class App extends Component {
  state = {
    user: null,
    name: '',
    firebase_id: '',
    email: '',
    isLoggedIn: false,
    employer: null,
  }
  componentDidMount = () => {
    // think we can delete this if the signout function sets user to null 
    // this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
    // this.setState({ user: !!user })
    // })
    firebase.auth().onAuthStateChanged(oAuthUser => {
      console.log('oAuthUser:')
      console.log(oAuthUser)
      firebase.database().ref(`/users/${oAuthUser.uid}`).once('value')
        .then(r => r.val())
        .then(fbUser => {
          console.log('firebase collection user')
          console.log(fbUser)
          this.setState({ name: oAuthUser.displayName, firebase_id: oAuthUser.uid, isLoggedIn: true, email: oAuthUser.email })
          if (!fbUser) {
            firebase.database().ref(`/users/${oAuthUser.uid}`).push({
              name: oAuthUser.displayName,
              email: oAuthUser.email
            })
          }
        })
    })
    console.log('state.isloggedin: ' + this.state.isLoggedIn)
  }

  signOut = () => {
    firebase.auth().signOut()
    this.setState({ isLoggedIn: false, user: null })
  }

  verifyUser = () => {
    console.log('verifyUser function')

    Axios.get(`/api/user/${this.state.firebase_id}`)
      .then(r => {
        this.setState({ user: r.data[0] })
      })
      .catch(e => {
        console.error(e)
      })
  }

  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar verifyUser={this.verifyUser} isUser={this.state.user} isLoggedIn={this.state.isLoggedIn} signOut={this.signOut} employer={this.state.employer} />
            <div style={{ margin: '1rem' }}>
              <Route exact path='/' component={() => <Home />} />
              <Route path='/login' component={() => <Login isUser={this.state.user} uiConfig={uiConfig} />} />
              <Route path='/profile' component={() => <Profile firebaseID={this.state.firebase_id} verifyUser={this.verifyUser} user={this.state.user} name={this.state.name} email={this.state.email} isLoggedIn={this.state.isLoggedIn} employer={this.state.employer} />} />
              <Route path='/jobpost' component={() => <JobPost />} />
              <Route path='/applied' component={() => <Applied />} />
            </div>
            <Footer />
          </div>
        </Router>
      </>
    )
  }
}

export default App;