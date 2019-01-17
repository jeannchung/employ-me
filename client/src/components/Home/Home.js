import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ApplyIcon from '@material-ui/icons/Send';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment'

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
  }
});


class Home extends Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
    jobs: []
  };

  componentDidMount = () => {
    //gets all jobs
    axios.get('/api/job/')
      .then(r => {
        this.setState({ jobs: r.data} )
      }).catch(err => { console.log(err) })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* Search Form */}
        <Paper className={classes.root} elevation={1}>
          <Typography variant="h5" component="h3">
            employ.me for employees
          </Typography>
          <Typography component="p">
            Search for jobs, read career advice from Employ.me's job experts, and the best employees to fill your roles.
          </Typography>
          <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="Keyword"
              className={classes.textField}
              value={this.state.keyword}
              onChange={this.handleChange('keyword')}
              margin="normal"
            />
            <TextField
              id="standard-name"
              label="Location"
              className={classes.textField}
              value={this.state.location}
              onChange={this.handleChange('location')}
              margin="normal"
            />
          </form>
          <Grid container className={classes.centerThis}>
            <Grid item>
              <Button variant="outlined" className={classes.button}>Employ.me!</Button>
            </Grid>
          </Grid>
        </Paper>

        {/* Jobs Searched */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 'auto' }}>
          {
            this.state.jobs.map(job => (

              <Card className={classes.card}>
                <CardHeader
                  avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                      {job.title_name.match(/\b(\w)/g)}
            </Avatar>
                  }
                  title={job.title_name}
                  subheader={job.company_name + " - " + job.city}
                />
                <CardContent>
                  <Typography>Industry: {job.industry}</Typography>
                  <Typography component="p"> Description: {job.description}</Typography>
                  <Typography>Posted: {moment().to(moment(job.createdAt))}</Typography>
                </CardContent>
                <CardActions className={classes.actions} disableActionSpacing>
                  <IconButton value={job._id} aria-label="Add to favorites">
                    <ApplyIcon style={{ color: "#556B2F" }} />
                  </IconButton>
                  <IconButton
                    className={classnames(classes.expand, {
                      [classes.expandOpen]: this.state.expanded,
                    })}
                    onClick={this.handleExpandClick}
                    aria-expanded={this.state.expanded}
                    aria-label="Show more"
                  >
                    <ExpandMoreIcon />
                  </IconButton>
                </CardActions>
                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Typography paragraph>More Information</Typography>
                    <Typography paragraph>Requirements: {job.requirements}</Typography>
                    <Typography paragraph>Qualifications: {job.qualifications}</Typography>
                    <Typography paragraph>Salary Range: ${job.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
                  </CardContent>
                </Collapse>
              </Card>
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
