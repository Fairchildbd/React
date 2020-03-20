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
      background: 'linear-gradient(45deg, #448aff 50%, #FF8E53 60%)',
    },
    paperTitle: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    screenTitle: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      background: '#448aff',
    },
}));

export default function SandBagScreen(props) {
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
              <Paper className={classes.paper} elevation={6} >4 sets of 5 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Squat to Press</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 5 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Stiff Legged Dead Lift (SLDL)</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 5 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Single Legged (SLDL)</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 5 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Bench Press</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Bent Over Row</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Sit Up(Holding Sand Bag)</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 5 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >V-ups (Bodyweight)</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paperTitle} elevation={6} >Second Big Set</Paper>
          </Grid>
          <Grid container spacing={1} direction="row" >
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Squat (Bear hug sand bag)</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >SLDL (Bear hug sand bag)</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Elbows to side Bent Over Row</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Elbows to side Bench Press</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Push Ups</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Wide Bent Over Row</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Sit Up w/ Overhead Press</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 5 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >V-sit w/ twist side to side</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 5 reps</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
}
