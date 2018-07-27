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
  },
});

function WelcomeSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="display3" component="h3">
          Hi, I'm Ben!
        </Typography>
        <Typography variant="headline" component="p">
          I am Strength Coach turned Web Developer!  I currently serve both roles in the Northwest Arkansas area!
        </Typography>
      </Paper>
    </div>
  );
}

WelcomeSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WelcomeSheet);
