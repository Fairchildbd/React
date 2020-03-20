import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';


const styles = {
  root: {
    flexGrow: 1,
    direction: 'row',
  },
};

class LinearDeterminate extends React.Component {

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container>
          <Grid item xs>
            <Paper className={classes.root} elevation={3} style={{margin: 10}} width='50%'>
              <Typography variant="display2" component="h3" style={{padding: 10}}>
                Front End Development
              </Typography>
              <Typography variant="headline" component="h3" style={{padding: 10}}>
                JavaScript
              </Typography>
              <Typography component="p">
                <LinearProgress color="primary" variant="determinate" value={80} />
              </Typography>
              <Typography variant="headline" component="h3" style={{padding: 10}}>
                React/React-Native
              </Typography>
              <Typography component="p">
                <LinearProgress color="primary" variant="determinate" value={80} />
              </Typography>
              <Typography variant="headline" component="h3" style={{padding: 10}}>
                Redux/Redux-Saga
              </Typography>
              <Typography component="p">
                <LinearProgress color="primary" variant="determinate" value={80} />
              </Typography>
              <Typography variant="headline" component="h3" style={{padding: 10}}>
                HTML/CSS
              </Typography>
              <Typography component="p">
                <LinearProgress color="primary" variant="determinate" value={90} />
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper className={classes.root} elevation={3} style={{margin: 10}} width='50%'>
              <Typography variant="display2" component="h3" style={{padding: 10}}>
                Back End Development
              </Typography>
              <Typography variant="headline" component="h3" style={{padding: 10}}>
                Python
              </Typography>
              <Typography component="p">
                <LinearProgress color="secondary" variant="determinate" value={40} />
              </Typography>
              <Typography variant="headline" component="h3" style={{padding: 10}}>
                AWS
              </Typography>
              <Typography component="p">
                <LinearProgress color="secondary" variant="determinate" value={30} />
              </Typography>
              <Typography variant="headline" component="h3" style={{padding: 10}}>
                Firebase
              </Typography>
              <Typography component="p">
                <LinearProgress color="secondary" variant="determinate" value={30} />
              </Typography>
              <Typography variant="headline" component="h3" style={{padding: 10}}>
                Node/ExpressJS/MongoDB
              </Typography>
              <Typography component="p">
                <LinearProgress color="secondary" variant="determinate" value={40} />
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

LinearDeterminate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LinearDeterminate);
