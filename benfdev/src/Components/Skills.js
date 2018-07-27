import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearDeterminate from './LevelSkill';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

function MySkills(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          HTML
        </Typography>
        <Typography component="p">
          <LinearDeterminate />
        </Typography>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          CSS
        </Typography>
        <Typography component="p">
          <LinearDeterminate />
        </Typography>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          JavaScript
        </Typography>
        <Typography component="p">
          <LinearDeterminate />
        </Typography>
      </Paper>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          Python
        </Typography>
        <Typography component="p">
          <LinearDeterminate />
        </Typography>
      </Paper>
    </div>
  );
}

MySkills.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MySkills);
