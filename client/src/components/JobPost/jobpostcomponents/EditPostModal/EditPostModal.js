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
      title_name: '',
      city: '',
      company_name: '',
      contact: '',
      description: '',
      email: '',
      employer_id: '',
      industry: '',
      qualifications: '',
      requirements: '',
      salary: '',
      telephone: '',

    }
  }

  handleChange = (event) => {
    const tempObj = this.state.input
    const myKey = event.target.id
    tempObj[myKey] = event.target.value
    this.setState({input: tempObj})
  }

  
  handleClickOpen = () => {
    axios.get(`/api/job/${this.props.jobId}`)
      .then(r => {
        console.log(r.data)
        this.setState({input: {
          title_name: r.data.title_name,
          city: r.data.city,
          company_name: r.data.company_name,
          contact: r.data.contact,
          description: r.data.description,
          email: r.data.email,
          employer_id: r.data.employer_id,
          industry: r.data.industry,
          qualifications: r.data.qualifications,
          requirements: r.data.requirements,
          salary: r.data.salary,
          telephone: r.data.telephone
        } })
      }).catch(e => console.log(e))

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
    axios.put(`/api/job/${this.props._id}`, this.state.input)
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
        <Button variant="outlined" style={{ color: '#82b3c9', border: '1px solid #82b3c9', marginRight: '0.5em' }} onClick={this.handleClickOpen} className={classes.startButton}>
          Edit
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
              value={this.state.input.title_name}
              onChange={this.handleChange}
              fullWidth
            />
            <Select
              placeholder='Salary'
              id="salary"
              value={this.state.input.salary}
              label="Salary"
              value={salaryRange}
              onChange={this.handleDropdown}
              options={salary}
            />
            <TextField
              margin="dense"
              id="industry"
              value={this.state.input.industry}
              label="Industry"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="description"
              value={this.state.input.description}
              label="Description"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="requirements"
              value={this.state.input.requirements}
              label="Requirements"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="qualifications"
              value={this.state.input.qualifications}
              label="Qualifications"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="city"
              value={this.state.input.city}
              label="City"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="contact"
              value={this.state.input.contact}
              label="Contact Name"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="email"
              value={this.state.input.email}
              label="Contact Email"
              type="email"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="telephone"
              value={this.state.input.telephone}
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

