import React, { Component } from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import { withStyles } from '@material-ui/core/styles'
import AccountCircle from '@material-ui/icons/AccountCircle'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Hidden from '@material-ui/core/Hidden'

const styles = theme => ({
  root: {
    width: '100%',
    height: '0px'
  },
  link: {
    textDecoration: 'none',
  },
grow: {
  flexGrow: 1,
  },
menuButton: {
  marginLeft: -12,
    marginRight: 20,
  },
menuItem: {
  fontSize: 14,
    '&:hover': {
    backgroundColor: '#e6ffff'
  }
},
  button: {
    '&:hover': {
      backgroundColor: "#82b3c9",
      opacity: '0.5', 
    },
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
  },
  avatar: {
    backgroundColor: 'black',
    opacity: 0.7,
    '&:hover': {
      backgroundColor: "#82b3c9",
      opacity: 0.8,
    },
},
  navEmployer: {
    color: 'black',
    textDecoration: 'none', 
    marginLeft: '10px',
    marginRight: '10px',
    '&:hover': {
      color: "#82b3c9",
  },
},
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

  handleSignOut = () => {
    this.props.signOut()
    this.setState({ anchorEl: null })
  }

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
            <MenuItem onClick={this.handleMenuClose} className={classes.menuItem} >Profile</MenuItem>
          </Link>

          <Link to='/' className={classes.link}>
            <MenuItem onClick={this.handleMenuClose} className={classes.menuItem}>Home</MenuItem>
          </Link>
          {
            this.props.employer ? (

              <Link to='/jobpost' className={classes.link}>
                <MenuItem onClick={this.handleMenuClose} className={classes.menuItem}>Jobs Posted</MenuItem>
              </Link>
            )
              :
              (
                <Link to='/applied' className={classes.link}>
                  <MenuItem onClick={this.handleMenuClose} className={classes.menuItem}>Jobs Applied</MenuItem>
                </Link>
              )
          }
          <Link to='/' className={classes.link}>
            <MenuItem onClick={this.handleSignOut} className={classes.menuItem}>Log Out</MenuItem>
          </Link>
        </div>
      </Menu>
    )

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
          <Toolbar variant="dense">
            <div className={classes.grow} />
            {
              this.props.employer ? (
                <Link to='/jobpost' className={classes.navEmployer}>
                  Employer 
                </Link>
              ) : ''
            }
            {this.props.user === false ?
              <Link to='/login' style={{ color: 'black' }}>
                <Button variant="outlined" style={{ color: 'black', border: '1px solid black', backgroundColor: '#82b3c9', opacity: .6 }} className={classes.button}>
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
                  className={classes.avatar}
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
