import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import JobCard from './JobCardComponent/JobCard'
import axios from 'axios'

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
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "#556B2F",
  },
  button: {
    // borderColor: "#82b3c9",
    backgroundColor: "#82b3c9",
    '&:hover': {
      backgroundColor: "#b3e5fc",
    },
  }
})


class Home extends Component {
  state = {
    jobs_applied: [],
    isJobsApplied: false
  }

  componentWillMount = () => {
    if (this.props.mongo_id) {
      axios.get(`/api/user/${this.props.firebase_id}`)
        .then(r => {
          this.setState({
            jobs_applied: r.data[0].jobs_applied
          })
        }).then(() => {
          if (this.state.jobs_applied[0]) {
            this.setState({ isJobsApplied: true })
          }
        })
        .catch(e => {
          console.error(e)
        })
    }
  }

  handleClick = event => {
    axios.delete(`/api/user/unapply/${this.props.firebase_id + "&" + event.target.value}`)
      .then(r => {
        axios.get(`/api/user/${this.props.firebase_id}`)
          .then(r => {
            this.setState({
              jobs_applied: r.data[0].jobs_applied
            })
          }).then(() => {
            if (this.state.jobs_applied[0]) {
              this.setState({ isJobsApplied: true })
            } else {
              this.setState({ isJobsApplied: false })
            }
          })
          .catch(e => {
            console.error(e)
          })
      }).catch(e => { console.log(e) })
  }


  render() {
    const { classes } = this.props;

    console.log(this.state.jobs_applied)
    console.log(this.state.isJobsApplied)

    return (
      <div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'auto' }}>
          {
            this.state.isJobsApplied === false ?

              <Paper className={classes.root} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'auto', marginTop: "10px" }} elevation={1}>
                <Typography> You have not Applied to Any Jobs.</Typography>
              </Paper>

              :
              this.state.jobs_applied.map(job => (
                <JobCard
                  handleClick={this.handleClick}
                  mongo_id={this.props.mongo_id}
                  firebase_id={this.props.firebase_id}
                  jobkey={job._id}
                  title_name={job.title_name}
                  company_name={job.company_name}
                  city={job.city}
                  industry={job.industry}
                  description={job.description}
                  createdAt={job.createdAt}
                  requirements={job.requirements}
                  qualifications={job.qualifications}
                  salary={job.salary}
                />
              ))
          }
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);

