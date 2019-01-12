import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

class CreatePostModal extends Component {
  state = {
    open: false,
    input: {}
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

  render() {
    return (
      <div>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
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
              id="jobSalary"
              label="Salary"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="jobDescription"
              label="Description"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="jobRequirements"
              label="Requirements"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="jobQualifications"
              label="Qualifications"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="jobEmployerName"
              label="Employer"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="jobCity"
              label="City"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="jobContactName"
              label="Contact Name"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="jobContactEmail"
              label="Contact Email"
              type="email"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="jobContactNumber"
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
            <Button onClick={this.handleClose} color="primary">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default CreatePostModal