import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import axios from 'axios'

class CreatePostModal extends Component {
  state = {
    open: false,
    input: {
      employer_id: this.props.mongo_id
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
  
  handleSubmit = () => {
    console.log('handlesubmit')
    console.log(this.state.input)
    axios.post("/api/job/", this.state.input)
      .then(r => {
        console.log(r.data)
      }).catch(err => { console.log(err) })

    this.handleClose()
    this.props.pullMongoUserData()
  
  }

  render() {
    return (
      <div>
        <Button style={{marginBottom: '1em'}} variant="outlined" color="primary" onClick={this.handleClickOpen}>
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
            <TextField
              margin="dense"
              id="salary"
              label="Salary"
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
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CreatePostModal