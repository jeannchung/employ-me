import React, { Component } from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import firebase from 'firebase'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

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
  btnleft: {
    paddingLeft: 80,
  },
  smallMargin: {
    margin: 5,
  },
  centerThis: {
    textAlign: 'center',
    alignItems: 'center',
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
        <div>
          <Card className={classes.card}>
            <CardContent>
                  <form className={classes.container} noValidate autoComplete="off">
                    <Grid container className={classes.centerThis}>
                      <Grid item xs>
                          <TextField
                            id="standard-name"
                            label="Username"
                            className={classes.textField}
                            value={this.state.name}
                            onChange={this.handleChange('name')}
                            margin="normal"
                          />
                      </Grid>
                    </Grid>
                    <Grid container className={classes.centerThis}>
                      <Grid item xs>
                        <TextField
                          id="standard-password"
                          label="Password"
                          className={classes.textField}
                          value={this.state.password}
                          onChange={this.handleChange('password')}
                          margin="normal"
                        />
                      </Grid>
                    </Grid>    
                    <Grid container className={classes.centerThis}>
                          <Grid item xs>
                            <Button variant="outlined" className={[classes.button, classes.smallMargin]}>Register</Button>
                            <Button variant="outlined" className={[classes.button, classes.smallMargin]}>Login</Button>
                          </Grid> 
                    </Grid>
                          {
                            <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={firebase.auth()} />
                          }
              </form>
            </CardContent>
          </Card>
        </div>
      </>
    )
  // }
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);