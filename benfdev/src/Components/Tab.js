import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import DevCertificate from '../Components/Certificate';
import Masters from '../Components/UofA';
import Bachelors from '../Components/UCA';
import ExperienceSheet from '../Components/Experience';
import Grid from '@material-ui/core/Grid';
import LinearDeterminate from './LevelSkill';
import ImageAvatars from './images/profile';
import FontAwesome from './images/ContactIcons';



function TabContainer({ children, dir }) {
  return (
    <Typography component="div" dir={dir} style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired,
};


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
});

class FullWidthTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary" textAlign="center">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="inherit"
            fullWidth
          >
            <Tab label="Education" />
            <Tab label="Experience" />
            <Tab label="Skills" />
            <Tab label="Contact" />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Grid container spacing={8}>
              <Grid item xs>
                <DevCertificate className={classes.paper} value={0}/>
              </Grid>
              <Grid item xs>
                <Masters className={classes.paper} value={0} />
              </Grid>
              <Grid item xs>
                <Bachelors className={classes.paper} value={0} />
              </Grid>
            </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid container spacing={8}>
              <ExperienceSheet className={classes.paper} value={1} />
            </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid container spacing={8}>
              <Grid item xs>
                <LinearDeterminate className={classes.paper} value={2} />
              </Grid>
            </Grid>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Grid container spacing={8}>
              <Grid item xs>
                <ImageAvatars className={classes.paper} value={3} />
              </Grid>
            </Grid>
            <Grid container spacing={8}>
              <Grid item xs>
                <FontAwesome classname={classes.paper} value={3} />
              </Grid>
            </Grid>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);
