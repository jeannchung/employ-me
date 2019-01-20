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
import ApplyIcon from '@material-ui/icons/Send'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import moment from 'moment'
import Button from '@material-ui/core/Button'
import axios from 'axios'

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
    maxWidth: '100%',
    minWidth: '100%',
    marginTop: '10px',
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


  handleClick = event => {
    console.log(this.props.jobkey)
    console.log(this.props.userid)
    axios.put(`/api/job/apply/${this.props.jobkey}&${this.props.userid}`, {
      $push: {
        users_applied: this.props.userid
      }
    })
      .catch(err => { console.log(err) })
    this.setState({ isClicked: true })
  }

  render() {
    const { classes } = this.props;

    console.log(this.props.appliedStatus)

    return (
      <>
        <Card key={this.props.jobkey} className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {this.props.title_name.match(/\b(\w)/g)}
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
          <CardActions className={classes.actions} disableActionSpacing>

            {(() => {
              if (this.props.userid === '' && this.props.employer === false) {
                return ("")
              } else if (this.props.userid !== '' && this.props.employer === true) {
                return ("")
              } else {
                return (
                  <>
                    {
                      (() => {
                        if (this.state.isClicked === true) {
                          return (
                            <Button value={this.props.jobkey} variant="contained" disabled style={{ color: '#556B2F', border: '1px solid #556B2F' }} className={classes.button}> Applied </Button>
                          )
                        } else {
                          return (
                            this.props.appliedStatus === true ? <Button value={this.props.jobkey} variant="contained" disabled style={{ color: '#556B2F', border: '1px solid #556B2F' }} className={classes.button}> Applied </Button> :
                              <Button onClick={this.handleClick} value={this.props.jobkey} variant="outlined" style={{ color: '#556B2F', border: '1px solid #556B2F' }} className={classes.button}> Apply </Button>
                          )
                        }
                      })()}

                  </>
                )
              }
            })()}

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
              <Typography paragraph>More Information</Typography>
              <Typography paragraph>Requirements: {this.props.requirements}</Typography>
              <Typography paragraph>Qualifications: {this.props.qualifications}</Typography>
              <Typography paragraph>Salary Range: ${this.props.salary.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</Typography>
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