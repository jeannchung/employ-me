import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import Select from 'react-select';



const styles = theme => ({
  startButton: {
    borderColor: "#82b3c9",
    color: '#82b3c9',
    '&:hover': {
      backgroundColor: "#82b3c9",
      color: 'black',
    },
  },
  link: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: "#82b3c9",
    color: 'white',
    '&:hover': {
      backgroundColor: "#b3e5fc",
    },
  },
})
const salary = [
  { label: '$40,000-$45,000' },
  { label: '$45,000-$50,000' },
  { label: '$50,000-$55,000' },
  { label: '$55,000-$60,000' },
  { label: '$60,000-$65,000' },
  { label: '$65,000-$70,000' },
  { label: '$70,000-$75,000' },
  { label: '$75,000-$80,000' },
  { label: '$80,000-$85,000' },
  { label: '$85,000-$90,000' },
  { label: '$90,000-$95,000' },
  { label: '$95,000-$100,000' },
  { label: '$100,000-$110,000' },
  { label: '$110,000-$120,000' },
  { label: '$120,000++' },
]

class CreatePostModal extends Component {
  state = {
    open: false,
    salaryRange: null,
    input: {
      employer_id: this.props.mongo_id,
      createdAt: Date(),
      company_name:this.props.company_name
    }
  }

  handleChange = (event) => {
    const tempObj = this.state.input
    const myKey = event.target.id
    tempObj[myKey] = event.target.value
    this.setState({input: tempObj})
  }

  
  handleClickOpen = () => {
    this.setState({ open: true });
  };
  
  handleClose = () => {
    console.log(this.state.input)
    this.setState({ open: false });
  };
  handleDropdown = (salaryRange) => {
    const tempObj = this.state.input
    tempObj.salary =
      salaryRange.label
    this.setState({ input: tempObj, salaryRange })
  }
  
  handleSubmit = () => {
    console.log('handlesubmit')
    console.log(this.state.input)
    axios.post("/api/job/", this.state.input)
      .then(r => {
        console.log(r.data)
        this.props.pullMongoUserData()
      }).catch(err => { console.log(err) })

    this.handleClose()
    this.props.pullMongoUserData()
  
  }

  render() {
    const { salaryRange } = this.state;
    const { classes } = this.props;

    return (
      <div>
        <Button style={{ marginBottom: '1em' }} variant="outlined" onClick={this.handleClickOpen} className={classes.startButton}>
          Create New Post
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">New Job Post</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter Information for the new post then click submit
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title_name"
              label="Job Title"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <Select
              placeholder='Salary'
              id="salary"
              label="Salary"
              value={salaryRange}
              onChange={this.handleDropdown}
              options={salary}
            />
            <TextField
              margin="dense"
              id="industry"
              label="Industry"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="description"
              label="Description"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="requirements"
              label="Requirements"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="qualifications"
              label="Qualifications"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="city"
              label="City"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="contact"
              label="Contact Name"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              label="Contact Email"
              type="email"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="telephone"
              label="Contact Number"
              type="tel"
              onChange={this.handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} className={classes.button}>
              Cancel
            </Button>
            <Link to="/jobpost" className={classes.link} >
            <Button onClick={this.handleSubmit} className={classes.button}>
              Submit
            </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
CreatePostModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CreatePostModal);

