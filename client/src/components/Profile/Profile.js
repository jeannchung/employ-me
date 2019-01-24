import React, { Component } from 'react'
import ApplicantModal from './ApplicantModal'
import EmployerModal from './EmployerModal'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

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


  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;


    return (

      <>
        <img src="./connection-desk-horizontal.png" alt="home-pic" style={{ maxWidth: '109%', maxHeight: '50%', padding: 0, margin: '-1rem', overflow: 'visible', marginBottom: '10px' }} />

        {
          this.props.mongo_id !== "" ? (

            this.props.employer === false ? (
              <Card className={classes.card}>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    {this.props.name}'s Profile
                </Typography>
                  <Typography component="p">
                    Email: {this.props.email}
                  </Typography>
                  <Typography component="p">
                    Phone Number: {this.props.phone_number}
                  </Typography>
                  <Typography component="p">
                    Experience: {this.props.work_exp}
                  </Typography>
                  <Typography component="p">
                    Education: {this.props.higher_ed}
                  </Typography>
                  <Typography component="p">
                    Skills: {this.props.skills}
                  </Typography>
                  <Typography component="p">
                    City: {this.props.city}
                  </Typography>
                  <Typography component="p">
                    State: {this.props.state}
                  </Typography>
                  <CardActions>
                  </CardActions>
                </CardContent>
              </Card>
            ) : (
                <Card className={classes.card}>
                  <CardContent>
                    <Typography variant="h5" component="h2">
                      {this.props.company_name}'s Profile
                    </Typography>
                    <Typography component="p">
                      Industry: {this.props.industry}
                    </Typography>
                    <Typography component="p">
                      Company Info: {this.props.company_info}
                    </Typography>
                    <Typography component="p">
                      Contact: {this.props.name}
                    </Typography>
                    <Typography component="p">
                      Address: {this.props.address}
                    </Typography>
                    <Typography component="p">
                      City: {this.props.city}
                    </Typography>
                    <Typography component="p">
                      State: {this.props.state}
                    </Typography>
                    <CardActions>
                    </CardActions>
                  </CardContent>
                </Card>
              )
          )
            :
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
                  <ApplicantModal firebase_id={this.props.firebase_id} name={this.props.name} pullMongoUserData={this.props.pullMongoUserData} />
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
                  {bull} Mobile optimized job view
                    <br />
                  {bull} Exposure across the the employ.me network
                </Typography>
                <CardActions>
                  <EmployerModal firebase_id={this.props.firebase_id} name={this.props.name} pullMongoUserData={this.props.pullMongoUserData} />
                </CardActions>
              </CardContent>
            </Card>
        }
      </>
    )
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Profile);