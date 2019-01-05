import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Applied from './components/Applied'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import JobPost from './components/JobPost'
import Login from './components/Login'
import Profile from './components/Profile'


class App extends Component {
  render() {
    return (
      <>
      <Router>
        <div>
            <Navbar />
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
