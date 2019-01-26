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
import moment from 'moment'
import Button from '@material-ui/core/Button'
import ApplicantsModal from '../ApplicantsModal'
import axios from 'axios'
import CardTravelIcon from '@material-ui/icons/CardTravel'
import DeleteIcon from '@material-ui/icons/Delete';


const styles = theme => ({
  card: {
    width: '80%',
    margin: '5px',
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
    backgroundColor: "#82b3c9",
  }
});

class JobCard extends Component {
  state = {
    expanded: false,
  };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  }

  handleEdit = id => {
    console.log(id)
    // axios.put(`/api/job/:id`)
  }

  handleDelete = () => {
    axios.delete(`/api/job/${this.props._id}`)
      .then(r => console.log(r))
      .catch(e => console.log(e))
    this.props.pullMongoUserData()
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                <CardTravelIcon />
              </Avatar>
            }
            title={this.props.title_name}
            subheader={this.props.company_name + " - " + this.props.city}
          />
          <CardContent>
            <Typography component="p">Applicants: {this.props.users_applied.length}</Typography>
            <Typography component="p">Posted: {moment().to(moment(parseInt(this.props._id.substring(0, 8), 16) * 1000))}</Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <ApplicantsModal jobId={this.props._id} />
            <Button onClick={this.handleEdit} variant="outlined" style={{ borderColor: '#82b3c9', color: '#82b3c9', marginRight: '0.5em' }}> Edit </Button>
            <Button onClick={this.handleDelete} variant="outlined" style={{ borderColor: '#82b3c9', color: '#82b3c9' }}>
              <DeleteIcon />
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
            <CardContent style={{ paddingTop: 0 }}>
              <Typography variant='subtitle2' style={{ fontSize: '14px' }}>More Information</Typography>
              <Typography component="p">Description: {this.props.description}</Typography>
              <Typography component="p">Requirements: {this.props.requirements}</Typography>
              <Typography component="p">Qualifications: {this.props.qualifications}</Typography>
              <Typography component="p">Salary: ${this.props.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
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