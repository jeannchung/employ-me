import React, { Component } from 'react'
import CreatePostModal from './jobpostcomponents/CreatePostModal'

class JobPost extends Component {
  // example post
 state = {
   jobsPosted: [
     {
      title: "Head Chef",
       salary: "฿1000000",
      desc: 'Example Chef at famous Artist Restaurant in Bangkok. Create daily specials, source ingredients and lead kitchen staff for lunch and dinner service. ',
      contName: 'Sun Example',
      contEmail: 'sun@artistrestaurant.th',
      contNumber: '+0116655556789'
   }
  ]

 }
  render() {
    return (
      <>
        <h1>Job Post Page</h1>
        <CreatePostModal />
        {/* example posted job */}
        {this.state.jobsPosted.map( post => {
          return <div style={{ margin: '2px', padding: '2px', border: '1px solid black', borderRadius: '2px'}}>
            
          <h3>{post.title}</h3>
          <p>{post.salary}</p>
          <p>{post.desc}</p>
          <h4>Contact:</h4>
          <p>{post.contName}</p>
          <p>{post.contEmail}</p>
          <p>{post.contNumber}</p>
          </div>
        })}
      </>
    )
  }
}


export default JobPost