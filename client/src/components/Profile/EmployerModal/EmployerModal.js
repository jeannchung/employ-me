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
  { label: 'Accounting'},
  { label: 'Administrative'},
  { label: 'Advertising'},
  { label: 'Aeronautics'},
  { label: 'Agriculture and Fishing'},
  { label: 'Animal Services'},
  { label: 'Automotive'},
  { label: 'Banking'},
  { label: 'Biotech'},
  { label: 'Business'},
  { label: 'Charity'},
  { label: 'Construction'},
  { label: 'Creative Design'},
  { label: 'Customer Service'},
  { label: 'Editorial'},
  { label: 'Education'},
  { label: 'Energy'},
  { label: 'Engineering'},
  { label: 'Environmental'},
  { label: 'Executive'},
  { label: 'Finance'},
  { label: 'Food Services'},
  { label: 'Full Time'},
  { label: 'Government'},
  { label: 'Healthcare'},
  { label: 'Hospitality'},
  { label: 'Human Resources'},
  { label: 'Human Services'},
  { label: 'Insurance'},
  { label: 'International'},
  { label: 'Internet'},
  { label: 'IT'},
  { label: 'Junior Chef'},
  { label: 'Language Translator'},
  { label: 'Legal'},
  { label: 'Logistics'},
  { label: 'Maintenance'},
  { label: 'Manufacturing'},
  { label: 'Marketing'},
  { label: 'Media'},
  { label: 'Military'},
  { label: 'Overseas'},
  { label: 'Part Time'},
  { label: 'Personal Services'},
  { label: 'Production and Ops'},
  { label: 'Project Management'},
  { label: 'Quality Assurance'},
  { label: 'R & D'},
  { label: 'Real Estate'},
  { label: 'Religious'},
  { label: 'Retail'},
  { label: 'Sales'},
  { label: 'Science'},
  { label: 'Security'},
  { label: 'Skilled Trades'},
  { label: 'Sports'},
  { label: 'Technology'},
  { label: 'Telecommunications'},
  { label: 'Transportation'},
  { label: 'Travel'},
  { label: 'Web'},
]
const states = [
  { label: 'Alabama'},
  { label: 'Alaska'},
  { label: 'Arizona'},
  { label: 'Arkansas'},
  { label: 'California'},
  { label: 'Colorado'},
  { label: 'Connecticut'},
  { label: 'Delaware'},
  { label: 'District of Columbia'},
  { label: 'Florida'},
  { label: 'Georgia'},
  { label: 'Guam'},
  { label: 'Hawaii'},
  { label: 'Idaho'},
  { label: 'Illinois'},
  { label: 'Indiana'},
  { label: 'Iowa'},
  { label: 'Kansas'},
  { label: 'Kentucky'},
  { label: 'Louisiana'},
  { label: 'Maine'},
  { label: 'Maryland'},
  { label: 'Massachusetts'},
  { label: 'Michigan'},
  { label: 'Minnesota'},
  { label: 'Mississippi'},
  { label: 'Missouri'},
  { label: 'Montana'},
  { label: 'Nebraska'},
  { label: 'Nevada'},
  { label: 'New Hampshire'},
  { label: 'New Jersey'},
  { label: 'New Mexico'},
  { label: 'New York'},
  { label: 'North Carolina'},
  { label: 'North Dakota'},
  { label: 'Ohio'},
  { label: 'Oklahoma'},
  { label: 'Oregon'},
  { label: 'Pennsylvania'},
  { label: 'Puerto Rico'},
  { label: 'Rhode Island'},
  { label: 'South Carolina'},
  { label: 'South Dakota'},
  { label: 'Tennessee'},
  { label: 'Texas'},
  { label: 'Utah'},
  { label: 'Vermont'},
  { label: 'Virgin Islands'},
  { label: 'Virginia'},
  { label: 'Washington'},
  { label: 'West Virginia'},
  { label: 'Wisconsin'},
  { label: 'Wyoming'},
]

class EmployerModal extends Component {
  state = {
    open: false,
    selectedIndustry: null,
    selectedStates: null,
    input: { employer: true, },
  };

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
    axios.post("/api/user/", this.state.input)
      .then(r => {
        console.log(r.data)
      })
      .catch(err => { console.log(err) })
    this.setState({ open: false });
  };

handleDropdown = (selectedIndustry) => {
  const tempObj = this.state.input
  tempObj.industry = 
  selectedIndustry.label
  this.setState({ input: tempObj, selectedIndustry })
  console.log(`Industry selected:`, this.state.input);
}
handleDropdownState = (selectedStates) => {
  const tempObj = this.state.input
  tempObj.state = 
  selectedStates.label
  this.setState({ input: tempObj, selectedStates })
  console.log(`State selected:`, this.state.input);
}

  render() {
    const { selectedIndustry } = this.state;
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

export default EmployerModal