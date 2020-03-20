import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MenuIcon from '@material-ui/icons/Menu';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import KitchenIcon from '@material-ui/icons/Kitchen';
import SportsBaseballIcon from '@material-ui/icons/SportsBaseball';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

export default function RemoteFitDrawer(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const iconDecision = text => {
    if (text === 'Medicine Ball') {
      return (<SportsBaseballIcon />);
    } else if (text === 'No Equipment') {
      return (<DirectionsRunIcon />);
    } else if (text === 'Sand Bag') {
      return (<LocalMallIcon />);
    } else {
      return (<FitnessCenterIcon />);
    }
  };
  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['Home', 'Nutrition'].map((text, index) => (
          <ListItem button key={text} onClick={ () => props.setState({ currentScreen: text })}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <KitchenIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Typography
          align='center'
          className={classes.dividerFullWidth}
          color="textSecondary"
          display="block"
          variant="caption"
        >
          Select the equipment you have
      </Typography>
      <Divider />
      {/* TODO: Place Multiple Equipment in here */}
      <List>
        {['No Equipment', 'Dumbbells/Kettlebells', 'Sand Bag', 'Medicine Ball'].map((text) => (
          <ListItem button key={text} onClick={ () => props.setState({ currentScreen: text })}>
            <ListItemIcon>
              { iconDecision(text) }
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>
            <MenuIcon style={ { color: 'white' } } />
          </Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
       </React.Fragment>
    </div>
  );
}