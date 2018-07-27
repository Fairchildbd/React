import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
};

function DevCertificate(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Graduated 2018
          </Typography>
          <Typography variant="headline" component="h2">
            Front End Web Developer Certificate
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            University of Arkansas Global Campus
          </Typography>
          <Typography component="p">
            Jan 2018 to Jul 2018
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

DevCertificate.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DevCertificate);
