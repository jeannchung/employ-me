import React, { Component } from 'react'
import CreatePostModal from './jobpostcomponents/CreatePostModal'
import JobPosted from './jobpostcomponents/JobPosted'
import firebase from 'firebase'
import axios from 'axios';



class JobPost extends Component {
  


  render() {
    return (
      <>
        <h1>Job Post Page</h1>
        <CreatePostModal pullMongoUserData={this.props.pullMongoUserData} mongo_id={this.props.mongo_id} />
        {this.props.jobs_posted.map( post => <JobPosted
          key={post._id}  
          jobTitle={post.title_name}
          jobSalary={post.salary}
          jobDescription={post.description}
          jobRequirements={post.requirements}
          jobQualifications={post.qualifications}
          jobCity={post.city}
          jobContactName={post.contact}
          jobContactEmail={post.email}
          jobContactNumber={post.telephone}
          jobIsPosted={post.isPosted}
        />
        )}
      </>
    )
  }

}


export default JobPost