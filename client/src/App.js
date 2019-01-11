import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import firebase from 'firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import Applied from './components/Applied'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import JobPost from './components/JobPost'
import Login from './components/Login'
import Profile from './components/Profile'

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
    employer: null
  }
  componentDidMount = () => {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({ user: !!user })
    })
    firebase.auth().onAuthStateChanged(user => {
      firebase.database().ref(`/users/${user.uid}`).once('value')
        .then(r => r.val())
        .then(dbUser => {
          this.setState({ name: user.displayName, uid: user.uid })
          if (!dbUser) {
            firebase.database().ref(`/users/${user.uid}`).push({
              name: user.displayName,
              password: user.password,
              email: user.email,
            })
          }
        })
    })
  }
  componentWillUnmount() {
    this.unregisterAuthObserver()
  }

  render() {
    return (
      <>
        <Router>
          <div>
            <Navbar user={this.state.user} employer={this.state.employer} />
            <Route exact path='/' component={() => <Home />} />
            <Route path='/login' component={() => <Login isUser={this.state.user} uiConfig={uiConfig} />} />
            <Route path='/profile' component={() => <Profile employer={this.state.employer} />} />
            <Route path='/jobpost' component={() => <JobPost />} />
            <Route path='/applied' component={() => <Applied />} />
            <Footer />
          </div>
        </Router>
      </>
    )
  }
}

export default App;
