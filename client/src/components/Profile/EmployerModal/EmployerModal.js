import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from 'react-select';
import Typography from '@material-ui/core/Typography';

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

const component = {
  Placeholder
}

function Placeholder(props) {
  return (
    <Typography
      color="textSecondary"
      className={props.selectProps.classes.placeholder}
      {...props.innerProps}
    >
      {props.children}
    </Typography>
  );
}
const styles = theme => ({
  select: {
    marginTop: '10px',
    fontSize: 12,
  },
  placeholder: {
    position: 'absolute',
    left: 2,
    fontSize: 16,
  },
})
class EmployerModal extends Component {
  state = {
    open: false,
    selectedOption: null,
    selectedStates: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
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
          <DialogTitle id="form-dialog-title">Company Profile</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Enter Information to create profile then click submit
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="companyName"
              label="Company Name"
              type="text"
              fullWidth
            />
            <TextField
              margin="dense"
              id="address "
              label="Street Address"
              type="text"
              fullWidth
            />
            <Select
              placeholder='State'
              value={selectedStates}
              onChange={this.handleChangeState}
              options={states}
            />
            <Select
              placeholder='Industry'
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
            <TextField
              margin="dense"
              id="companyInfo"
              label="Company Information"
              type="text"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="#8bc34a">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="#8bc34a">
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default EmployerModal