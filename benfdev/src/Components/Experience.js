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

function ExperienceSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={3} style={{margin: 10}}>
        <Typography variant="headline" component="h3">
          Software Engineer - J.B. Hunt Lowell, AR
        </Typography>
        <Typography variant="title" component="p">
          09/2018 to Present
        </Typography>
        <Typography variant="body2" component="p">
          Work on the Front End side of the Carrier 360 mobile application in an Agile environment using:  React-Native, Redux, Redux-Sagas, React-Navigation, and other popular dependencies. <br/>
          Implemented changes across multiple teams to aid in server side rendering of legal jargon. <br/>
          Work closely with project owners to better understand the logistics business. <br/>
          Implemented major tech initiatives, features, and quality to help the Carrier 360 reach 4.2 stars in the app store.
        </Typography>
      </Paper>
      <Paper className={classes.root} elevation={3} style={{margin: 10}}>
        <Typography variant="headline" component="h3">
          Engagement Specialist - TrestleTree Fayetteville, AR
        </Typography>
        <Typography variant="title" component="p">
          3/2017 to 10/2018
        </Typography>
        <Typography variant="body2" component="p">
          Create exceptional customer service experiences. Perform random daily tasks in order to help others meet tight deadlines. Help customers understand best health practices, and give health advice when appropriate.
        </Typography>
      </Paper>
      <Paper className={classes.root} elevation={3} style={{margin: 10}}>
        <Typography variant="headline" component="h3">
          Independent Contractor as Personal Trainer – Various locations
        </Typography>
        <Typography variant="title" component="p">
          9/2009 to Present
        </Typography>
        <Typography variant="body2" component="p">
          Train various individuals in order to meet fitness goals. Create biomechanic analysis protocol in order to assess clientele. Established marketing and sales techniques to enlist new customers.
        </Typography>
      </Paper>
      <Paper className={classes.root} elevation={3} style={{margin: 10}}>
        <Typography variant="headline" component="h3">
          Fitness Manager - Mountain Life Fitness Granby, CO
        </Typography>
        <Typography variant="title" component="p">
          6/2014 to 7/2016
        </Typography>
        <Typography variant="body2" component="p">
          Oversaw development of the personal training department, supervised 3 to 4 employees, created new revenue streams, conducted business to business transactions, and created policies and procedures.<br/>
          Managed facility operations including POS system, POS procedures, policies, business analytics, and customer experience.<br/>
          Generated over $130,000 annual income through memberships, personal training, and small group training.
        </Typography>
      </Paper>
      <Paper className={classes.root} elevation={3} style={{margin: 10}}>
        <Typography variant="headline" component="h3">
          Head Strength and Conditioning Specialist – US Army/Proxy Personnel, Fort Benning, GA
        </Typography>
        <Typography variant="title" component="p">
          9/2012 to 10/2013
        </Typography>
        <Typography variant="body2" component="p">
          Oversaw the physical development of more than 8,000 basic training soldiers. Developed and conducted intake assessments. <br/>
          Coordinated strength and conditioning improvement throughout basic training with drill instructors and Brigade Physical Therapist. <br/>
          Reduced costs associated with injuries and rehabilitation by more than $850,000 annually. <br/>
          Managed rehabilitation of more than 200+ soldiers after completion of physical therapy. Responsible for annual budget of $100k for conditioning equipment and orthotics.<br/>
          Conducted gait analysis and collected data on more than 3,500 soldiers. Trained cadre to fulfill injury prevention protocols at the completion of Proxy’s contract.
        </Typography>
      </Paper>
    </div>
  );
}

ExperienceSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExperienceSheet);
