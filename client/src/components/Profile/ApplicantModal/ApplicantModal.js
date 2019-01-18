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
import Typography from '@material-ui/core/Typography';

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

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
    height: 1400,
  },
  dense: {
    marginTop: 19,
  },
});

class ApplicantModal extends Component {
  state = {
    name: '',
    open: false,
    selectedEducation: null,
    selectedStates: null,
    input: { employer: false, firebase_id: this.props.firebaseID},
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
    this.props.verifyUser();
  };

  handleSubmit = () => {
    axios.post("/api/user/", this.state.input)
      .then(r => {
        console.log(r.data)
      })
      .catch(err => { console.log(err) })
    this.setState({ open: false });
  };

handleDropdown = (selectedEducation) => {
  const tempObj = this.state.input
  tempObj.highest_ed = 
  selectedEducation.label
  this.setState({ input: tempObj, selectedEducation})
  console.log(`Education selected:`, this.state.input);
}
handleDropdownState = (selectedStates) => {
  const tempObj = this.state.input
  tempObj.state = 
  selectedStates.label
  this.setState({ input: tempObj, selectedStates })
  console.log(`State selected:`, this.state.input);
}

render() {
  const { selectedEducation } = this.state;
  const { selectedStates } = this.state;
  const { classes } = this.props;

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
            <Typography variant="h5">
                {this.props.name}'s Profile
        </Typography>
            Enter Information to create profile then click submit
            </DialogContentText>
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
            id="phone_number"
            label="Phone Number"
            type="tel"
            onChange={this.handleChange}
            fullWidth
          />
          <TextField
            margin="dense"
            id="work_exp"
            label="Work Experience"
            type="text"
            multiline
            variant="outlined"
            onChange={this.handleChange}
            style={styles.textField}
            fullWidth
          />
          <TextField
            margin="dense"
            id="skills"
            label="Skills"
            type="text"
            multiline
            variant="outlined"
            style={styles.textField}
            onChange={this.handleChange}
            fullWidth
          />
          <Select
            placeholder='Highest Education'
            id="highest_ed"
            value={selectedEducation}
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
            id="state"
            value={selectedStates}
            onChange={this.handleDropdownState}
            options={states}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose}>
            Cancel
            </Button>
          <Button onClick={this.handleSubmit}>
            Submit
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}

export default ApplicantModal