import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Applied from '../Applied'
import Home from '../Home'
import Navbar from '../Navbar'
import Footer from '../Footer'
import JobPost from '../JobPost'
// import Login from '../Login'
import Profile from '../Profile'

class Login extends Component {

  render() {
    return (
      <>
      <Router>
        <div>
          <Navbar />
          
          <Footer />       
        </div>
      </Router>
      </>
    )
  }
}


export default Login

// class App extends Component {
//   render() {
//     return (
//       <>
//       <Router>
//         <div>
//             <Navbar />
//             <Navbar />
//             <Route exact path='/' component={() => <Home />} />
//             <Route path='/login' component={() => <Login />} />
//             <Route path='/profile' component={() => <Profile />} />
//             <Route path='/jobpost' component={() => <JobPost />} />
//             <Route path='/applied' component={() => <Applied />} />
//             <Footer />
//         </div>
//       </Router>
//       </>
//     )
//   }
// }
