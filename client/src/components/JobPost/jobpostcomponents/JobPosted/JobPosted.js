import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'

const styles = {
    card: {
        marginBottom: '1em',
    },
    title: {
        margin: 0,
        fontSize: 16,
    },
    noMargin: {
        margin: 0,
    },
    link: {
        textDecoration: 'none',
    },
    button: {
        backgroundColor: "#82b3c9",
        '&:hover': {
            backgroundColor: "#b3e5fc",
        },
    },
}

function JobPosted(props) {
    const { classes } = props;
    return (
        <Card key={props.key} className={classes.card}>
            <CardContent>
                <h4 className={classes.noMargin}>{props.jobTitle}</h4>
                <h5 className={classes.noMargin}>Salary:</h5> {props.jobSalary}<br />
                <h5 className={classes.noMargin}>Description:</h5> {props.jobDescription}<br />
                <h5 className={classes.noMargin}>Requirements:</h5> {props.jobRequirements}<br />
                <h5 className={classes.noMargin}>Qualifications:</h5> {props.jobQualifications}<br />
                <h5 className={classes.noMargin}>City:</h5> {props.jobCity}<br />
                <h5 className={classes.noMargin}>Contact Name:</h5>{props.jobContactName}<br />
                <h5 className={classes.noMargin}>Email:</h5>{props.jobContactEmail}<br />
                <h5 className={classes.noMargin}>Telephone:</h5>{props.jobContactNumber}<br />
            </CardContent>
            <CardActions>
                <Button size="small" className={classes.button}>Edit</Button>
                <Button size="small" className={classes.button}> {props.isPosted ? 'Delete' : 'Post'} </Button>
            </CardActions>
        </Card>
    )
}
JobPosted.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(JobPosted)