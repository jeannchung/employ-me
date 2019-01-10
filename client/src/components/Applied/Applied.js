import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
              Job 1
            </Typography>
            <Typography component="p">
              Company: Apple / Date Applied: mm/dd/yyyy
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
              Job 2
            </Typography>
            <Typography component="p">
              Company: Apple / Date Applied: mm/dd/yyyy
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
              Job 3
            </Typography>
            <Typography component="p">
              Company: Apple / Date Applied: mm/dd/yyyy
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
              Job 4
            </Typography>
            <Typography component="p">
              Company: Apple / Date Applied: mm/dd/yyyy
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
              Job 5
            </Typography>
            <Typography component="p">
              Company: Apple / Date Applied: mm/dd/yyyy
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
              Job 6
            </Typography>
            <Typography component="p">
              Company: Apple / Date Applied: mm/dd/yyyy
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
              Job 7
            </Typography>
            <Typography component="p">
              Company: Apple / Date Applied: mm/dd/yyyy
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
              Job 8
            </Typography>
            <Typography component="p">
              Company: Apple / Date Applied: mm/dd/yyyy
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
              Job 9
            </Typography>
            <Typography component="p">
              Company: Apple / Date Applied: mm/dd/yyyy
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h3">
              Job 10
            </Typography>
            <Typography component="p">
              Company: Apple / Date Applied: mm/dd/yyyy
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Icon className={classes.paper} fontSize="large" color="primary">
              navigate_before
          </Icon>
            <Icon className={classes.paper} fontSize="large" color="primary" >
              navigate_next
          </Icon>
          </Paper>
        </Grid>

      </Grid>

      
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
