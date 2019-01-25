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
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'


const options = [
  { label: 'Not Specified' },
  { label: 'Accounting' },
  { label: 'Administrative' },
  { label: 'Advertising' },
  { label: 'Aeronautics' },
  { label: 'Agriculture and Fishing' },
  { label: 'Animal Services' },
  { label: 'Automotive' },
  { label: 'Banking' },
  { label: 'Biotech' },
  { label: 'Business' },
  { label: 'Charity' },
  { label: 'Construction' },
  { label: 'Creative Design' },
  { label: 'Customer Service' },
  { label: 'Editorial' },
  { label: 'Education' },
  { label: 'Energy' },
  { label: 'Engineering' },
  { label: 'Environmental' },
  { label: 'Executive' },
  { label: 'Finance' },
  { label: 'Food Services' },
  { label: 'Full Time' },
  { label: 'Government' },
  { label: 'Healthcare' },
  { label: 'Hospitality' },
  { label: 'Human Resources' },
  { label: 'Human Services' },
  { label: 'Insurance' },
  { label: 'International' },
  { label: 'Internet' },
  { label: 'IT' },
  { label: 'Junior Chef' },
  { label: 'Language Translator' },
  { label: 'Legal' },
  { label: 'Logistics' },
  { label: 'Maintenance' },
  { label: 'Manufacturing' },
  { label: 'Marketing' },
  { label: 'Media' },
  { label: 'Military' },
  { label: 'Overseas' },
  { label: 'Part Time' },
  { label: 'Personal Services' },
  { label: 'Production and Ops' },
  { label: 'Project Management' },
  { label: 'Quality Assurance' },
  { label: 'R & D' },
  { label: 'Real Estate' },
  { label: 'Religious' },
  { label: 'Retail' },
  { label: 'Sales' },
  { label: 'Science' },
  { label: 'Security' },
  { label: 'Skilled Trades' },
  { label: 'Sports' },
  { label: 'Technology' },
  { label: 'Telecommunications' },
  { label: 'Transportation' },
  { label: 'Travel' },
  { label: 'Web' },
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
  link: {
    textDecoration: 'none',
  },
  button: {
    backgroundColor: "#82b3c9",
    color: 'white',
    opacity: .7,
    '&:hover': {
      backgroundColor: "#b3e5fc",
    },
  },
  startButton: {
    borderColor: "#82b3c9",
    color: '#82b3c9',
    '&:hover': {
      backgroundColor: "#82b3c9",
      color: 'black',
    },
  },
});

class EmployerModal extends Component {
  state = {
    open: false,
    selectedIndustry: null,
    selectedStates: null,
    input: {
      employer: true,
      firebase_id: this.props.firebase_id,
      name: this.props.name,
      email: "",
      phone_number: "",
      work_exp: "",
      higher_ed: "",
      skills: "",
      state: "",
      city: "",
      address: "",
      company_name: "",
      company_info: "",
      industry: ""
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
    this.setState({ open: false });
  };

  handleSubmit = () => {
    axios.post("/api/user/", this.state.input)
      .then(r => {
        this.props.pullMongoUserData()
      })
      .catch(err => { console.log(err) })
    this.setState({ open: false });
  };

  handleDropdown = (selectedIndustry) => {
    const tempObj = this.state.input
    tempObj.industry =
      selectedIndustry.label
    this.setState({ input: tempObj, selectedIndustry })
  }
  handleDropdownState = (selectedStates) => {
    const tempObj = this.state.input
    tempObj.state =
      selectedStates.label
    this.setState({ input: tempObj, selectedStates })
  }

  render() {
    const { selectedIndustry } = this.state;
    const { selectedStates } = this.state;
    const { classes } = this.props;


    return (
      <div>
        <Button variant="outlined" onClick={this.handleClickOpen} className={classes.startButton} >
          Get Started
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Company Profile</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter Information to create profile then click submit
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="company_name"
              label="Company Name"
              type="text"
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              margin="dense"
              id="address"
              label="Street Address"
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
            <Select
              placeholder='State'
              id="state"
              value={selectedStates}
              onChange={this.handleDropdownState}
              options={states}
            />
            <TextField
              margin="dense"
              id="company_info"
              label="Company Information"
              type="text"
              multiline
              style={styles.textField}
              onChange={this.handleChange}
              fullWidth
            />
            <Select
              placeholder='Industry'
              id="industry"
              value={selectedIndustry}
              onChange={this.handleDropdown}
              options={options}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} className={classes.button} >
              Cancel
            </Button>
            <Link to="/profile" className={classes.link} >
            <Button onClick={this.handleSubmit} className={classes.button} >
              Submit
            </Button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

EmployerModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployerModal);