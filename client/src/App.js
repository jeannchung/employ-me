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

var config = {
  apiKey: "AIzaSyAJUEk-d9tisX-ZedhpItxe9n8h7aStyMU",
  authDomain: "employ-me-42819.firebaseapp.com",
  databaseURL: "https://employ-me-42819.firebaseio.com",
  projectId: "employ-me-42819",
  storageBucket: "employ-me-42819.appspot.com",
  messagingSenderId: "118031344911"
};
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
}
firebase.initializeApp(config);


class App extends Component {
  state = {
    user: null,
    employeer: false
  }

  render() {
    return (
      <>
      <Router>
        <div>
            <Navbar user={this.state.user} employeer={this.state.employeer} />
            <Route exact path='/' component={() => <Home />} />
            <Route path='/login' component={() => <Login />} />
            <Route path='/profile' component={() => <Profile />} />
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
