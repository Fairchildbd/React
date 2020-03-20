import React from 'react';
import './App.css';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import Header from './components/Header'
import Home from './screens/Home';
import DbKb from './screens/DbKb';
import Nutrition from './screens/Nutrition';
import NoEquipment from './screens/NoEquipment';
import SandBag from './screens/SandBag';
import MedicineBall from './screens/MedicineBall';
import MultipleEquipment from './screens/MultipleEquipment';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
});

export default function App() {
    const [state, setState] = React.useState({
      currentScreen: 'Home',
      open: false,
    });
    const choseMyScreen = () => {
      if (state.currentScreen === 'Home') {
        return (<Home currentScreen={ state.currentScreen }/>);
      } else if (state.currentScreen === 'Nutrition') {
        return (<Nutrition currentScreen={ state.currentScreen }/>);
      } else if (state.currentScreen === 'No Equipment') {
        return (<NoEquipment currentScreen={ state.currentScreen }/>);
      } else if (state.currentScreen === 'Dumbbells/Kettlebells') {
        return (<DbKb currentScreen={ state.currentScreen }/>);
      } else if (state.currentScreen === 'Sand Bag') {
        return (<SandBag currentScreen={ state.currentScreen }/>);
      } else if (state.currentScreen === 'Medicine Ball') {
        return (<MedicineBall currentScreen={ state.currentScreen }/>);
      } else if (state.currentScreen === 'Multiple Equipment') {
        return (<MultipleEquipment currentScreen={ state.currentScreen }/>);
      } else {
        return (<Home currentScreen={ state.currentScreen }/>);
      }
    }
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App">
        <Header state={ state } setState={ setState } />
        { choseMyScreen() }
      </div>
      </MuiThemeProvider>
    );
  }
