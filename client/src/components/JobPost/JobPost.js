import React, { Component } from 'react'
import CreatePostModal from './jobpostcomponents/CreatePostModal'
import JobCard from './jobpostcomponents/JobCard'



class JobPost extends Component {
  
  render() {
    if (this.props.mongo_id && this.props.employer) {

    return (
      <>
        <h1>Job Post Page</h1>
        <CreatePostModal pullMongoUserData={this.props.pullMongoUserData} mongo_id={this.props.mongo_id} />
        {this.props.jobs_posted.map(job => (
                <JobCard
          user={this.props.user}
          mongo_id={this.props.mongo_id}
          employer={this.props.employer}
          _id={job._id}
          key={job._id}
          title_name={job.title_name}
          company_name={this.props.company_name}
          city={job.city}
          industry={this.props.industry}
          description={job.description}
          requirements={job.requirements}
          qualifications={job.qualifications}
          salary={job.salary}
          users_applied={job.users_applied}
        />
              ))}
      </>
    )
      }
      else{
        return null
      }
  }

}


export default JobPost