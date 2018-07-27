import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { loadCSS } from 'fg-loadcss/src/loadCSS';
import { withStyles } from '@material-ui/core/styles';
import teal from '@material-ui/core/colors/teal';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    '&:hover': {
      color: teal[500],
    },
  },
});

class FontAwesome extends React.Component {
  componentDidMount() {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.1.0/css/all.css',
      document.querySelector('#insertion-point-jss'),
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Button href="https://github.com/Fairchildbd" target="_blank">
        <Icon
          className={classNames(classes.iconHover, 'fab fa-github')}
          color="inherit"
          style={{ fontSize: 42 }}
        />
        </Button>
        <Button href="https://www.linkedin.com/in/ben-fairchild-411491161" target="_blank">
        <Icon
          className={classNames(classes.iconHover, 'fab fa-linkedin-in')}
          color="primary"
          style={{ fontSize: 42 }}
        />
        </Button>
        <Button href="mailto:fairchildbd@icloud.com">
        <Icon
          className={classNames(classes.iconHover, 'fas fa-envelope')}
          color="action"
          style={{ fontSize: 42 }}
        />
        </Button>
        <Button href="http://weatherapp-1.us-east-2.elasticbeanstalk.com/" target="_blank">
          <Icon
            className={classNames(classes.iconHover, 'fas fa-bolt')}
            color="inherit"
            style={{ fontSize: 42 }}
          />
        </Button>
        <Button href="https://twitter.com/Fairchildbd" target="_blank">
        <Icon
          className={classNames(classes.iconHover, 'fab fa-twitter')}
          color="primary"
          style={{ fontSize: 42 }}
        />
        </Button>
      </div>
    );
  }
}

FontAwesome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FontAwesome);
