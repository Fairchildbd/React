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

function Bachelors(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Graduated 2009
          </Typography>
          <Typography variant="headline" component="h2">
            Bachelor's of Science in Kinesiology
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            University of Central Arkansas
          </Typography>
          <Typography component="p">
            Aug 2004 to Aug 2009
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Bachelors.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bachelors);
