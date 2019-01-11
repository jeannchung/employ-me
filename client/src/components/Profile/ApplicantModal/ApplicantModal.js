import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from 'react-select';

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
    }
  handleChange = (selectedOption) => {
      this.setState({ selectedOption });
      console.log(`Option selected:`, selectedOption);
    }
  handleChangeState = (selectedStates) => {
      this.setState({ selectedStates });
      console.log(`Option selected:`, selectedStates);
    }
  handleClickOpen = () => {
      this.setState({ open: true });
    };

handleClose = () => {
  this.setState({ open: false });
};

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
            fullWidth
          />
          <TextField
            margin="dense"
            id="email "
            label="Email"
            type="text"
            fullWidth
          />
          <TextField
            margin="dense"
            id="number"
            label="Phone Number"
            type="tel"
            fullWidth
          />
          <TextField
            margin="dense"
            id="workExperience"
            label="Work Experience"
            type="text"
            variant="outlined"
            fullWidth
          />
          <TextField
            margin="dense"
            id="skills"
            label="Skills"
            type="text"
            fullWidth
          />
          <Select
            placeholder='Highest Education'
            value={selectedOption}
            onChange={this.handleChange}
            options={options}
          />
          <TextField
            margin="dense"
            id="city"
            label="City"
            type="text"
            fullWidth
          />
          <Select
            placeholder='State'
            value={selectedStates}
            onChange={this.handleChangeState}
            options={states}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} >
            Cancel
            </Button>
          <Button onClick={this.handleClose} >
            Submit
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}

export default ApplicantModal