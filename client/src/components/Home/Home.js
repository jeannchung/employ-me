import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Grid } from '@material-ui/core'
import JobCard from './JobCardComponent/JobCard'
import Axios from 'axios'

const styles = theme => ({
  container: {
    margin: '0px',
    padding: '0px',
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
    backgroundColor: "#82b3c9",
    color: 'white',
    opacity: .7,
    '&:hover': {
      backgroundColor: "#b3e5fc",
    },
  }
});


class Home extends Component {
  state = {
    searchWord: "",
    multiline: 'Controlled',
    jobs: [],
    isjobs: true,
    AppliedJobArr: [],
    jobs_applied: []
  }



  handleChange = event => {
    event.preventDefault()
    this.setState({
      searchWord: event.target.value,
    })

    if (this.props.mongo_id) {
      Axios.get(`/api/user/${this.props.firebase_id}`)
        .then(r => {
          this.setState({
            jobs_applied: r.data[0].jobs_applied
          })
        })
        .catch(e => {
          console.error(e)
        })
    }
  }

  handleEnter = event => {
    if (event.charCode === 13) {
      event.preventDefault()
      setImmediate(() => this.handleClick(event))
      event.persist()
    }
  }

  handleClick = event => {
    event.preventDefault()
    Axios.get(`/api/job/search/${this.state.searchWord}`)
      .then(r => {
        if (r.data[0].title_name) {
          this.setState({
            jobs: r.data,
            isjobs: true
          })
        }
      })
      .then(r => {
        let temp = []
        this.state.jobs_applied.forEach(job => {
          temp.push(job._id)
          this.setState({ AppliedJobArr: temp })
        })
      })
      .catch(err => { this.setState({ isjobs: false }) })
  }

  render() {
    const { classes } = this.props;

    return (
      <>
      <div>
        <img src="./home-pic.png" alt="home-pic" style={{ maxWidth: '100vw', overflow: 'visible', marginBottom: '10px' }} />
        {/* Search Form */}
        <Paper className={classes.root} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'auto', margin:'1rem' }} elevation={1}>
          <Typography component="p">
            Search for jobs, read career advice from Employ.me's job experts, and find the best employees to fill your roles.
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="Title/Industry/City"
              className={classes.textField}
              value={this.state.searchWord}
              onKeyPress={this.handleEnter}
              onChange={this.handleChange}
              margin="normal"
            />
            <Grid container className={classes.centerThis}>
              <Grid item>
                <Button onClick={this.handleClick} className={classes.button}>Employ.me!</Button>
              </Grid>
            </Grid>
          </form>
        </Paper>

        {/* Jobs Searched */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'auto' }}>
          {
            this.state.isjobs === false ?

              <Paper className={classes.root} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'auto', marginTop: "10px" }} elevation={1}>
                <Typography> Your search did not match any jobs.</Typography>
              </Paper>

              :
              this.state.jobs.map(job => (
                <JobCard
                  appliedStatus={this.state.AppliedJobArr.includes(job._id)}
                  user={this.props.user}
                  mongo_id={this.props.mongo_id}
                  employer={this.props.employer}
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
      </>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
