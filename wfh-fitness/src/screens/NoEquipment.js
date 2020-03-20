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
      background: 'linear-gradient(45deg, #448aff 30%, #69f0ae 90%)',
    },
    screenTitle: {
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        background: '#448aff',
      },
}));

export default function NoEquipmentScreen(props) {
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
              <Paper className={classes.paper} elevation={6} >Squats</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 20 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Hands Over Head Stiff Legged Dead Lift</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 20 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Push Ups</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 15 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Bent Over Flies (Hold for 5 seconds)</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 15 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Plank</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 30 - 60 secs</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Wide Squats</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Wide Hands Over Head SLDL</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Elbows to Side Push Ups</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >V-ups</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Side Crunch</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Supermans</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 10 reps</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >Run in place/stairs/outside</Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper} elevation={6} >4 sets of 2 minutes</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
}
