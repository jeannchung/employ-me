import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from 'react-select';
import axios from 'axios'

const options = [
  { label: 'Not Specified' },
  { label: 'None' },
  { label: 'Some Highschool' },
  { label: 'GED' },
  { label: `Associate's Degree` },
  { label: `Bachelor's Degree` },
  { label: `Master's Degree` },
  { label: `Doctorate's Degree` },
  { label: `Higher Degree` },
  { label: 'Other' },
]
const states = [
  { label: 'Alabama' },
  { label: 'Alaska' },
  { label: 'Arizona' },
  { label: 'Arkansas' },
  { label: 'California' },
  { label: 'Colorado' },
  { label: 'Connecticut' },
  { label: 'Delaware' },
  { label: 'District of Columbia' },
  { label: 'Florida' },
  { label: 'Georgia' },
  { label: 'Guam' },
  { label: 'Hawaii' },
  { label: 'Idaho' },
  { label: 'Illinois' },
  { label: 'Indiana' },
  { label: 'Iowa' },
  { label: 'Kansas' },
  { label: 'Kentucky' },
  { label: 'Louisiana' },
  { label: 'Maine' },
  { label: 'Maryland' },
  { label: 'Massachusetts' },
  { label: 'Michigan' },
  { label: 'Minnesota' },
  { label: 'Mississippi' },
  { label: 'Missouri' },
  { label: 'Montana' },
  { label: 'Nebraska' },
  { label: 'Nevada' },
  { label: 'New Hampshire' },
  { label: 'New Jersey' },
  { label: 'New Mexico' },
  { label: 'New York' },
  { label: 'North Carolina' },
  { label: 'North Dakota' },
  { label: 'Ohio' },
  { label: 'Oklahoma' },
  { label: 'Oregon' },
  { label: 'Pennsylvania' },
  { label: 'Puerto Rico' },
  { label: 'Rhode Island' },
  { label: 'South Carolina' },
  { label: 'South Dakota' },
  { label: 'Tennessee' },
  { label: 'Texas' },
  { label: 'Utah' },
  { label: 'Vermont' },
  { label: 'Virgin Islands' },
  { label: 'Virginia' },
  { label: 'Washington' },
  { label: 'West Virginia' },
  { label: 'Wisconsin' },
  { label: 'Wyoming' },
]

class ApplicantModal extends Component {
  state = {
    open: false,
    selectedOption: null,
    selectedStates: null,
    exampleUser: {
      username: "Example",
      email: "example@gmail.com",
      employer: false,
      phone_number: '(562) 123-4567',
      work_exp: "Something",
      skills: "Something",
      state: "California",
      city: "Example",
      address: "112 NoWhere",
      company_name: "Example",
      company_info: "Example",
      jobs_posted: [],
      jobs_applied: [],
      createdAt: Date(),
      updatedAt: Date()
    }
  }

  handleChange = (event) => {
    const tempObj = this.state.input
    const myKey = event.target.id
    tempObj[myKey] = event.target.value
    this.setState({ input: tempObj })
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    console.log(this.state.input)
    this.setState({ open: false });
  };

  handleSubmit = () => {
    axios.post("/api/user/", this.state.exampleUser)
      .then(r => {
        console.log(r.data)
      })
      .catch(err => { console.log(err) })
    this.setState({ open: false });
  };

handleDropdown = (event) => {
  const tempObj = this.state.input
  const myKey = event.target.id
  tempObj[myKey] = event.target.value
  this.setState({ input: tempObj })
  console.log(`Option selected:`, event);
}
handleDropdownState = (event) => {
  const tempObj = this.state.input
  // const myKey = selectedStates.target.id
  // tempObj[myKey] = event.target.selectedStates
  this.setState({ input: tempObj })
  // console.log(`Option selected:`, selectedStates);
}

render() {
  const { selectedOption } = this.state;
  const { selectedStates } = this.state;

  return (
    <div>
      <Button variant="outlined" onClick={this.handleClickOpen}>
        Get Started
        </Button>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Applicant Profile</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Enter Information to create profile then click submit
            </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="email "
            label="Email"
            type="text"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="number"
            label="Phone Number"
            type="tel"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="workExperience"
            label="Work Experience"
            type="text"
            variant="outlined"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="skills"
            label="Skills"
            type="text"
            onChange={this.handleChange}
            fullWidth
          />
          <Select
            placeholder='Highest Education'
            value={selectedOption}
            onChange={this.handleDropdown}
            options={options}
          />
          <TextField
            margin="dense"
            id="city"
            label="City"
            type="text"
            onChange={this.handleChange}
            fullWidth
          />
          <Select
            placeholder='State'
            value={selectedStates}
            onChange={this.handleDropdownState}
            options={states}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>
            Cancel
            </Button>
          <Button onClick={this.handleClose}>
            Submit
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}

export default ApplicantModal