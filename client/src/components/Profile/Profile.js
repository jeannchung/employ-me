import React, { Component } from 'react'
import ApplicantModal from './ApplicantModal'
import EmployerModal from './EmployerModal'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase'

const styles = {
  card: {
    minWidth: 275,
    display: "flex"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

class Profile extends Component {
  // ternary this.props.user, if user exists, display card, if does not, render modals

  state = {
    name: '',
    multiline: 'Controlled',
  // applicantState: {
  //   // name: ,
  //   // email: ,
  //   // phoneNumber: ,
  //   // experience: ,
  //   // skills: ,
  //   // education: ,
  //   // city: ,
  //   // state:
  // },

  // employerState: {

  // }
}

render()
{
  const { classes } = this.props;
  const bull = <span className={classes.bullet}>•</span>;


  return (

    <>
      {/* {
        this.props.isUser ? (
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                {this.props.name}'s Profile
        </Typography>
              <Typography component="p">
                Email: {this.props.email}
                </Typography>
              <CardActions>
              </CardActions>
            </CardContent>
          </Card>
        )
          : */}
          <Card className={classes.card}>
            <CardContent>
              <Typography variant="h5" component="h2">
                Applicant
        </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Find a Job
        </Typography>
              <Typography component="p">
                {bull} Search from millions of jobs posted daily
        <br />
                {bull} Specialize by industry, location, or career type
        <br />
                {bull} Broad distribution of your profile across different networks
        <br />
                {bull} Find the perfect position today
        </Typography>
              <CardActions>
                <ApplicantModal name={this.props.name} email={this.props.email} />
              </CardActions>
            </CardContent>
            <CardContent>
              <Typography variant="h5" component="h2">
                Employer
        </Typography>
              <Typography className={classes.pos} color="textSecondary">
                Post Jobs {bull} Find Talent
        </Typography>
              <Typography component="p">
                {bull} Reach millions of job seekers today
        <br />
                {bull} Post jobs for free
        <br />
                {bull} Mobile Optimized Job View
        <br />
                {bull} Exposure across the the employ.me network
        </Typography>
              <CardActions>
                <EmployerModal />
              </CardActions>
            </CardContent>
          </Card>
      {/* } */}
    </>
  )
}
      }

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);