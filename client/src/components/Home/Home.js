import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

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
  }
});


class Home extends Component {
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
      <div>
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
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
