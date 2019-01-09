import React, { Component } from 'react'
// import ApplicantModal from './ApplicantModal'
// import EmployerModal from './EmployerModal'
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

class Login extends Component {

  render() {
    const { classes } = this.props;

    return (
            <Card className={classes.card}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  Login
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Register
                </Typography>
              </CardContent>
            </Card>
            
          )
    }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);