import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/system';


const styles = {
  card: {
    minWidth: 275,
    display: "flex",
    justifyContent: "center",
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
  btnleft: {
    marginLeft: 80,
  },
};



class Login extends Component {
  state = {
    name: '',
    age: '',
    multiline: 'Controlled',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        {
          this.props.isUser ? (
            <Card className={classes.card}>
              <CardContent>
                <Grid container spacing={24}>
                  <Grid item xs={6}>
                    <Link to='/profile' className={classes.link}>
                      <Button variant="outlined" className={classes.button}>Edit Profile</Button>
                    </Link>
                  </Grid>
                  <Grid item xs={6}>
                    <Link to='/' className={classes.link}>
                      <Button variant="outlined" className={classes.button}>Log Out</Button>
                    </Link>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>)
            :
            <Card className={classes.card}>
              <CardContent>
                <form className={classes.container} noValidate autoComplete="off">
                  <Grid container spacing={24}>
                    <Grid item xs={6}>
                      <TextField
                        id="standard-name"
                        label="Username"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        id="standard-name"
                        label="Password"
                        className={classes.textField}
                        value={this.state.name}
                        onChange={this.handleChange('name')}
                        margin="normal"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={24}>
                    <Grid item xs={6}>
                      <Button variant="outlined" className={classes.button, classes.btnleft}>Register</Button>
                    <Button variant="outlined" className={classes.button}>Login</Button>
                  </Grid> 
                  </Grid>
                </form>
              <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={firebase.auth()} />
            </CardContent>
        </Card>
      }
      </>
    )
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);