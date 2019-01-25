import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    root: {
        ...theme.mixins.gutters(),
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit * 2,
        marginBottom: '1em'
    },
});

function ApplicantCard(props) {
    const { classes } = props;

    return (
        <div>
            <Paper className={classes.root} elevation={1}>
                <Typography variant="h6" component="h3">{props.applicant.name}</Typography>
                <Typography component="p">{props.applicant.city}, {props.applicant.state} </Typography>
                <Typography component="p">{props.applicant.email} {props.applicant.phone_number}</Typography>
                <Typography component="p">Experience: {props.applicant.work_exp}</Typography>
                <Typography component="p">Skills: {props.applicant.skills}</Typography>
                <Typography component="p">Education: {props.applicant.higher_ed}</Typography>
            </Paper>
        </div>
    );
}

ApplicantCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ApplicantCard);