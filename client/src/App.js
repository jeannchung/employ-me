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
import Axios from 'axios'

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
    firebase_id: '',
    mongo_id: '',
    name: '',
    email: '',
    employer: false,
    phone_number: '',
    work_exp: '',
    higher_ed: '',
    skills: '',
    state: '',
    city: '',
    address: '',
    company_name: '',
    company_info: '',
    industry: '',
    jobs_posted: [],
    jobs_applied: []
  }

  componentDidMount = () => {
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => this.setState({ user: !!user }))

    firebase.auth().onAuthStateChanged(user => {
      firebase.database().ref(`/users/${user.uid}`).once('value')
        .then(r => r.val())
        .then(dbUser => {
          for (const key in dbUser) {
            if (dbUser.hasOwnProperty(key)) {
              this.setState({ firebase_id: user.uid, name: user.displayName })
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
              if (r.data[0]) {
                this.setState({
                  mongo_id: r.data[0]._id,
                  name: r.data[0].name,
                  email: r.data[0].email,
                  employer: r.data[0].employer,
                  phone_number: r.data[0].phone_number,
                  work_exp: r.data[0].work_exp,
                  higher_ed: r.data[0].higher_ed,
                  skills: r.data[0].skills,
                  state: r.data[0].state,
                  city: r.data[0].city,
                  address: r.data[0].address,
                  company_name: r.data[0].company_name,
                  company_info: r.data[0].company_info,
                  industry: r.data[0].industry,
                  jobs_posted: r.data[0].jobs_posted,
                  jobs_applied: r.data[0].jobs_applied
                })
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
    this.setState({
      user: false,
      firebase_id: '',
      mongo_id: '',
      name: '',
      email: '',
      employer: false,
      phone_number: '',
      work_exp: '',
      higher_ed: '',
      skills: '',
      state: '',
      city: '',
      address: '',
      company_name: '',
      company_info: '',
      industry: '',
      jobs_posted: '',
      jobs_applied: ''
    })
  }

  pullMongoUserData = () => {
    Axios.get(`/api/user/${this.state.firebase_id}`)
      .then(r => {
        this.setState({
          mongo_id: r.data[0]._id,
          name: r.data[0].name,
          email: r.data[0].email,
          employer: r.data[0].employer,
          phone_number: r.data[0].phone_number,
          work_exp: r.data[0].work_exp,
          higher_ed: r.data[0].higher_ed,
          skills: r.data[0].skills,
          state: r.data[0].state,
          city: r.data[0].city,
          address: r.data[0].address,
          company_name: r.data[0].company_name,
          company_info: r.data[0].company_info,
          industry: r.data[0].industry,
          jobs_posted: r.data[0].jobs_posted,
          jobs_applied: r.data[0].jobs_applied
        })
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
            <Navbar user={this.state.user} signOut={this.signOut} employer={this.state.employer} />
            <div style={{ margin: '1rem' }}>
              <Route exact path='/' component={() => <Home
                user={this.state.user}
                firebase_id={this.state.firebase_id}
                mongo_id={this.state.mongo_id}
                employer={this.state.employer}
              />} />
              <Route path='/login' component={() => <Login uiConfig={uiConfig} />} />
              <Route path='/profile' component={() => <Profile
                pullMongoUserData={this.pullMongoUserData}
                user={this.state.user}
                mongo_id={this.state.mongo_id}
                firebase_id={this.state.firebase_id}
                name={this.state.name}
                email={this.state.email}
                phone_number={this.state.phone_number}
                work_exp={this.state.work_exp}
                higher_ed={this.state.higher_ed}
                skills={this.state.skills}
                city={this.state.city}
                state={this.state.state}
              />} />
              <Route path='/jobpost' component={() => <JobPost company_name={this.state.company_name} jobs_posted={this.state.jobs_posted} mongo_id={this.state.mongo_id} pullMongoUserData={this.pullMongoUserData} />} />
              <Route path='/applied' component={() => <Applied
                mongo_id={this.state.mongo_id}
                firebase_id={this.state.firebase_id}
              />} />
            </div>
            <Footer />
          </div>
        </Router>
      </>
    )
  }
}

export default App;