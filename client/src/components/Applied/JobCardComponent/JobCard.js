import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import classnames from 'classnames'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CardTravelIcon from '@material-ui/icons/CardTravel'
import moment from 'moment'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete';

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
    maxWidth: '80%',
    minWidth: '80%',
    margin: '5px',
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
  },
  avatarJob: {
    backgroundColor: "#82b3c9",
  }
});

class JobCard extends Component {
  state = {
    expanded: false,
    isClicked: false
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  }





  render() {
    const { classes } = this.props;


    return (
      <>
        <Card key={this.props.jobkey} className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatarJob}>
                <CardTravelIcon />
              </Avatar>
            }
            title={this.props.title_name}
            subheader={this.props.company_name + " - " + this.props.city}
          />
          <CardContent>
            <Typography>Industry: {this.props.industry}</Typography>
            <Typography component="p"> Description: {this.props.description}</Typography>
            <Typography>Posted: {moment().to(moment(this.props.createdAt))}</Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button onClick={this.props.handleClick} value={this.props.jobkey} variant="outlined" style={{ color: '#82b3c9', border: '1px solid #82b3c9' }} className={classes.button}>
              <DeleteIcon onClick={this.props.handleClick} value={this.props.jobkey}/>
            </Button>
           
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
              <Typography variant='h6'>More Information</Typography>
              <Typography component='body2'>Requirements: {this.props.requirements}</Typography>
              <Typography component='body2'>Qualifications: {this.props.qualifications}</Typography>
              <Typography component='body2'>Salary Range: {this.props.salary}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      </>
    )
  }
}

JobCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(JobCard);