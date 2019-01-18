import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import NotificationsIcon from '@material-ui/icons/Notifications'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import axios from 'axios';
import firebase from 'firebase'


const styles = theme => ({
  root: {
    width: '100%',
  },
  link: {
    textDecoration: 'none'
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
    logoSize: {
      width: '100px',
      height: '100px'
    },
  }
})

class Navbar extends Component {
  state = {
    anchorEl: null,
  }

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget })
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null })
  };


  render() {
    const { anchorEl } = this.state
    const { classes } = this.props
    const isMenuOpen = Boolean(anchorEl)

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >

        <div>
          <Link to='/profile' className={classes.link}>
            <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
          </Link>

          <Link to='/' className={classes.link}>
            <MenuItem onClick={this.handleMenuClose}>Home</MenuItem>
          </Link>
          {
            this.props.employer ? (

              <Link to='/jobpost' className={classes.link}>
                <MenuItem onClick={this.handleMenuClose}>Jobs Posted</MenuItem>
              </Link>
            )
              :
              (
                <Link to='/applied' className={classes.link}>
                  <MenuItem onClick={this.handleMenuClose}>Jobs Applied</MenuItem>
                </Link>
              )
          }
          <Link to='/' className={classes.link}>
            <MenuItem onClick={this.props.signOut}>Log Out</MenuItem>
          </Link>
        </div>
      </Menu>
    )

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: '#556B2F' }}>
          <Toolbar>
            <Link to='/' className={classes.link}>
              <Typography variant="h6" color="inherit" noWrap style={{ color: 'white' }}>
                <img src="./eme-logo.png" alt='Employ.Me' style={{ width: '60px', height: '60px'}} />
            </Typography>
            </Link>
            <div className={classes.grow} />
            {
              this.props.employer ? (
                <Link to='/jobpost' style={{ color: 'white' }}>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </Link>
              ) : ''
            }
            {this.props.isLoggedIn === false ?
              <Link to='/login' style={{ color: 'white' }}>
                <Button variant="outlined" style={{ color: 'white', border: '1px solid white' }} className={classes.button}>
                  Login/Sign Up
                </Button>
              </Link>
              :
              (
                <IconButton
                  aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              )
            }
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
