import React, { Component } from 'react'
// import ApplicantModal from './ApplicantModal'
// import EmployerModal from './EmployerModal'
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
    marginLeft: 80,
  }
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
                  id="standard-password"
                  label="Password"
                  className={classes.textField}
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  margin="normal"
                />
              </Grid>
            </Grid>
            {
              <StyledFirebaseAuth uiConfig={this.props.uiConfig} firebaseAuth={firebase.auth()} />
            }
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Button variant="outlined" className={[classes.button, classes.btnleft]}>Register</Button>
              </Grid>
              <Grid item xs={6}>
                <Button variant="outlined" className={classes.button}>Login</Button>
              </Grid>
            </Grid>
          </form>
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