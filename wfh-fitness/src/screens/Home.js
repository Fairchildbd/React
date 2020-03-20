import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      margin: 32,
    },
    paper: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      color: 'white',
      background: '#448aff',
    },
    paperTitle: {
      margin: theme.spacing(1),
      padding: theme.spacing(2),
      textAlign: 'center',
      color: 'white',
      background: 'linear-gradient(45deg, #448aff 30%, #69f0ae 90%)',
    },
}));

export default function HomeScreen(props) {
    const classes = useStyles();
    return (
      <Paper className={classes.root} elevation={6}>
        <Grid container direction='column'>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={6} >
              <Typography variant="h3">
                Welcome to Quarantine Fitness!
              </Typography>
              <Typography variant="subtitle1" align='left'>
                My name is Ben, I'm a strength coach and mobile app developer!
                Remote Fitness is a site dedicated to helping friends and family while being we are all working remote during the coronavirus pandemic!
              </Typography>
            </Paper>
            <Paper className={classes.paper} elevation={6} >
              <Typography variant="subtitle1" align='left'>
                First off, please forgive the crazy colors (I love crazy colors too much!!!), and the basic look of the site, I created this in an afternoon.  But don't worry!  I'll keep adding to it!
                Most likely, if you've reached this, you received it from me personally.  So, if you have any questions, don't hesitate to reach out and ask me directly!
                But if, for some reason, you didn't find this site from me directly, most of the exercises that I've listed can have many great demonstrations that are easily found on YouTube!
                But if YouTube doesn't answer your questions, please check back in a day or two, as I will be updating this site soon!
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    );
}
