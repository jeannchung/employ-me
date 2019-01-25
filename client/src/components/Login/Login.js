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



const styles = {
  card: {
    minWidth: 275,
    display: "flex",
    justifyContent: "center",
    margin: '1rem'
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
  btnright: {
    marginLeft: 25,
  }
};



class Login extends Component {
  // state = {
  //   multiline: 'Controlled',
  // };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <img src="./connection-desk-horizontal.png" alt="home-pic" style={{ maxWidth: '100vw', overflow: 'visible', marginBottom: '10px' }} />
        <Card className={classes.card}>
          <CardContent>
            <form className={classes.container} noValidate autoComplete="off">
              <Grid container spacing={24}>
                <Grid item xs={6}>
                  <TextField
                    id="standard-name"
                    label="Username"
                    className={classes.textField}
                    onChange={this.handleChange('name')}
                    margin="normal"
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="standard-name"
                    label="Password"
                    className={classes.textField}
                    onChange={this.handleChange('password')}
                    margin="normal"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={6}>
                  <Button variant="outlined" className={classes.btnleft}>Register</Button>
                </Grid>
                <Grid item xs={6}>
                  <Button variant="outlined" className={classes.btnright}>Login</Button>
                </Grid>
              </Grid>
            </form>
            <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={firebase.auth()} />
          </CardContent>
        </Card>
      </>
    )
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);