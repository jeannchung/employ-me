import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import axios from 'axios'
import ApplicantCard from './ApplicantCard';

const styles = theme => ({
    paper: {
        margin: '1rem',
        minWidth: '50%',
        maxWidth: '80%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
        outline: 'none',
    },
})


class ApplicantModal extends Component {
    state = {
        open: false,
        applicants: []
    }

    handleOpen = () => {
        
        axios.get(`/api/job/${this.props.jobId}`)
            .then(r => {
                console.log(r.data.users_applied)
                this.setState({applicants: r.data.users_applied})
            }).catch(e => console.log(e))

        this.setState({ open: true })

    }

    handleClose = () => {
        this.setState({ open: false });
    }

    render() {
        const { classes } = this.props;

        return <>
            <Button onClick={this.handleOpen} variant="outlined" style={{ color: '#82b3c9', border: '1px solid #82b3c9', marginRight: '0.5em' }}>Applicants</Button>
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
                <div className={classes.paper}>
                    <Typography variant="h6" id="modal-title">
                        Applicants
                    </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                        {this.state.applicants.map(applicant => (<ApplicantCard applicant={applicant} />))}
                    </Typography>
                    <Button onClick={this.handleClose} variant="outlined" style={{ color: '#82b3c9', border: '1px solid #82b3c9', marginRight: '0.5em' }}>Close</Button>
                </div>
            </Modal>
            </>

    }
}


ApplicantModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const ApplicantModalWrapped = withStyles(styles)(ApplicantModal);

export default ApplicantModalWrapped;