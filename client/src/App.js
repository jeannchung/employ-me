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
  apiKey: "AIzaSyCduj200TnPkn1GH9LbuPj3CrRPMwGpq4Q",
  authDomain: "employme2-94283.firebaseapp.com",
  databaseURL: "https://employme2-94283.firebaseio.com",
  projectId: "employme2-94283",
  storageBucket: "employme2-94283.appspot.com",
  messagingSenderId: "233537031765"
})
const uiConfig = {
  signInFlow: 'popup',
  signInSuccessUrl: '/profile',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ]
}

class App extends Component {
  state = {
    user: false,
    name: '',
    firebase_id: '',
    email: '',
    isLoggedIn: false,
    employer: false,
    mongo_id:''
  }


  componentDidMount = () => {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => this.setState({ user: !!user }))

    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      firebase.database().ref(`/users/${user.uid}`).once('value')
        .then(r => r.val())
        .then(dbUser => {
          for (const key in dbUser) {
            if (dbUser.hasOwnProperty(key)) {
              this.setState({ name: user.displayName, firebase_id: user.uid })
            }
          }
          if (!dbUser) {
            firebase.database().ref(`/users/${user.uid}`).push({
              name: user.displayName,
              email: user.email
            })
          }
        })
        .then(() => {
          Axios.get(`/api/user/${user.uid}`)
            .then(r => {
              if(r.data[0]){
             console.log(r.data[0]._id)
             this.setState({mongo_id:r.data[0]._id})
              }
            })
            .catch(e => {
              console.error(e)
            })
        })
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver()
  }
  
  signOut = () => {
    firebase.auth().signOut()
    this.setState({ isLoggedIn: false, user: false , firebase_id: "", employer: false, jobsApplied:[] })
  }

  verifyUser = () => {
    console.log('verifyUser function')

    Axios.get(`/api/user/${this.state.firebase_id}`)
      .then(r => {
        // console.log(r.data[0])
        // this.setState({ m: r.data[0],
        // userid : r.data[0]._id })
      })
      .catch(e => {
        console.error(e)
      })
  }
  
  render() {
    
    console.log(this.state.user)
    console.log(this.state.firebase_id)
    console.log(this.state.name)
    console.log(this.state.mongo_id)
    return (
      <>
        <Router>
          <div>
            <Navbar fbid={this.state.firebase_id} user={this.state.user} isLoggedIn={this.state.isLoggedIn} signOut={this.signOut} employer={this.state.employer} />
            <div style={{ margin: '1rem' }}>
              <Route exact path='/' component={() => <Home userid={this.state.userid} firebaseID={this.state.firebase_id} />} />
              <Route path='/login' component={() => <Login fbid={this.state.firebase_id} isUser={this.state.user} uiConfig={uiConfig} />} />
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