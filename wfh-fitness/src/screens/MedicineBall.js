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
      background: 'linear-gradient(45deg, #448aff 30%, #69f0ae 90%)',
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

export default function MedicineBallScreen(props) {
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
              <Paper className={classes.paper} elevation={6} >OverHead Squats</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 15 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Hands Over Head Stiff Legged Dead Lift</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 15 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Bench Press (Throw ball in the air)</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 15 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Bent Over Row (Throw ball on ground)</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 15 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Overhead Lunges</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Overhead Single Legged SLDL</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={12}>
            <Paper className={classes.paperTitle} elevation={6} >Second Big Set</Paper>
          </Grid>
          <Grid container spacing={1} direction="row" >
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Power Clean Ball Slams</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >SLDL Ball Slams</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >V-Ups (With Ball)</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Overhead Sit Ups</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 8 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Push Ups on Medicine Ball</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Over the back Toss</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
          </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
}
