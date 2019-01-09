import React, { Component } from 'react'
import CreatePostModal from './jobpostcomponents/CreatePostModal'
import JobPosted from './jobpostcomponents/JobPosted'

class JobPost extends Component {
  // example post
 state = {
   jobsPosted: [
     {
      title: "Head Chef",
      salary: "฿1000000",
      desc: 'Chef at famous Artist Bistro in Bangkok. Create daily specials, source ingredients and lead kitchen staff for lunch and dinner service. ',
      requirements: 'Hiring, Training, Cooking, Smiling',
      qualifications: '5 years experience as Chef',
      employer: 'Artist Bistro',
      city: 'Bangkok',
      contName: 'Sun',
      contEmail: 'sun@artistbistro.th',
      contNumber: '+0116655556789'
   }
  ]
 }
  render() {
    return (
      <>
        <h1>Job Post Page</h1>
        <CreatePostModal />
        {this.state.jobsPosted.map( post => <JobPosted  
          jobTitle={post.title}
          jobSalary={post.salary}
          jobDescription={post.desc}
          jobRequirements={post.requirements}
          jobQualifications={post.qualifications}
          jobEmployerName={post.employer}
          jobCity={post.city}
          jobContactName={post.contName}
          jobContactEmail={post.contEmail}
          jobContactNumber={post.contNumber}
          jobIsPosted={post.isPosted}
        />
        )}
      </>
    )
  }
}


export default JobPost