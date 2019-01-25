import React, { Component } from 'react'
import CreatePostModal from './jobpostcomponents/CreatePostModal'
import JobCard from './jobpostcomponents/JobCard'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
  centerThis: {
    justifyContent: 'center',
  },
  card: {
    maxWidth: '100%',
    minWidth: '100%',
    marginTop: '10px',
  },
})


class JobPost extends Component {



  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    if (this.props.mongo_id && this.props.employer) {
      return (
        <>
          <img src="./connection-desk-horizontal.png" alt="home-pic" style={{ maxWidth: '109%', maxHeight: '50%', padding: 0, margin: '-1rem', overflow: 'visible', marginBottom: '10px' }} />
          <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'auto' }}>
              <Paper className={classes.root} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'auto', marginTop: "10px" }} elevation={1}>
                <Typography variant="h5" component="h2">
                  Job Posts
                  </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Start the search for your next employee
                  </Typography>
                  <br />
                <Typography component="p">
                  {bull} Reach millions of job seekers today
                      <br />
                  {bull} Post jobs for free
                      <br />
                  {bull} Mobile optimized job view
                      <br />
                  {bull} Exposure across the the employ.me network
                  </Typography>
                <br />
                <CreatePostModal pullMongoUserData={this.props.pullMongoUserData} mongo_id={this.props.mongo_id} company_name={this.props.company_name} />
              </Paper>
            </div>
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
          </div>
        </>
          )}
          else {
            return null
          } 
        }
      }

JobPost.propTypes = {
            classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(JobPost);
