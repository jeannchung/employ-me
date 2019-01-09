import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Modal from '@material-ui/core/Modal'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: '#556B2F',
    color: 'black'
  },
  paper: {
    position: 'absolute',
    width: '60%',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
})


function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}



class Footer extends React.Component {
  state = {
    value: null,
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleChange = (event, value) => {
    this.setState({ value: value })
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <>

        <BottomNavigation value={value} onChange={this.handleChange} showLabels className={classes.root}>
          <BottomNavigationAction style={{ color: 'white' }} label="About Us" value="About Us" onClick={this.handleOpen} />
          <BottomNavigationAction style={{ color: 'white' }} label="Contact Us" value="Contact Us" onClick={this.handleOpen} />
          <BottomNavigationAction style={{ color: 'white' }} label="Terms of Use" value="Terms of Use" onClick={this.handleOpen} />
          <BottomNavigationAction style={{ color: 'white' }} label="Privacy Policy" value="Privacy Policy" onClick={this.handleOpen} />
        </BottomNavigation>


        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >

          <div style={getModalStyle()} className={classes.paper}>
            <Typography variant="h6" id="modal-title">
              {this.state.value}
            </Typography>
            <Typography variant="subtitle1" id="simple-modal-description">
              <div>
                {(() => {
                  if (this.state.value === 'About Us') {
                    return (
                      <div>
                        <p>A job posting application that allows applicants to quickly apply for jobs, view jobs applied to, and edit personal profile with a manual resume. Employers are able to create postings, view current open positions,and directly view contact information with resume for each applicant on the posting.
                          </p>
                      </div>
                    )
                  } else if (this.state.value === 'Contact Us') {
                    return (
                      <div>
                        <p>Adam Openbrier : <a href="mailto:aopenbrier@gmail.com">aopenbrier@gmail.com</a></p>
                        <p>Garrett Fermo : <a href="mailto:garrettcfermo@gmail.com">garrettcfermo@gmail.com</a></p>
                        <p>Jean Chung : <a href="mailto:jeannchung@gmail.com">jeannchung@gmail.com</a></p>
                        <p>Joleen Tsai : <a href="mailto:joleenjtsai@gmail.com">joleenjtsai@gmail.com</a></p>
                        <p>Radley Eakle : <a href="mailto:radley.eakle@gmail.com ">radley.eakle@gmail.com </a></p>
                      </div>
                    )
                  } else if (this.state.value === 'Terms of Use') {
                    return (
                      <div>
                        PLACE HOLDER FOR JEAN
                        </div>
                    )
                  } else if (this.state.value === 'Privacy Policy') {
                    return (
                      <div>
                        PLACE HOLDER FOR JEAN
                      </div>
                    )
                  }
                })()}
              </div>

            </Typography>
          </div>
        </Modal>
      </>

    )
  }
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer)
