import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin: 32,
      // backgroundColor: 'grey',
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    paperTitle: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      background: 'linear-gradient(45deg, #448aff 50%, #FF8E53 60%)',
    },
    screenTitle: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      background: '#448aff',
    },
}));

export default function DbKbScreen(props) {
    const classes = useStyles();
    return (
      <Paper className={classes.root} elevation={6}>
        <Grid container direction='column'>
          <Grid item xs={12}>
            <Paper className={classes.screenTitle} elevation={6} > {props.currentScreen} </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paperTitle} elevation={6} >First Big Set</Paper>
          </Grid>
          <Grid container spacing={1} direction="row" >
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Power Clean</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Stiff Legged Dead Lift (SLDL)</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Bench Press</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Bent Over Row</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paperTitle} elevation={6} >Second Big Set</Paper>
          </Grid>
          <Grid container spacing={1} direction="row" >
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Squat to Press</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Single Legged SLDL</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Wide Bent Over Row</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Chest Flies</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paperTitle} elevation={6} >Third Big Set</Paper>
          </Grid>
          <Grid container spacing={1} direction="row" >
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Snatch</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Wide SLDL</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Elbows to Side Bench Press</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Bent Over Flies</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paperTitle} elevation={6} >Fourth Big Set</Paper>
          </Grid>
          <Grid container spacing={1} direction="row" >
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Plank</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 30-60 seconds</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Side Plank (Each Side)</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 30-60 seconds</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Bridge</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 30-60 seconds</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >V-ups</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 12 reps</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
}
