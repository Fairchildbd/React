import React, { Component } from 'react';
import ButtonNavBar from './Components/NavBar';
import CenteredGrid from './Layout/index';
import MainImage from './Components/images/logo.png';
import Paper from '@material-ui/core/Paper';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
  // palette: {
  //   type: 'dark',
  //   primary: blue,
  //   secondary: green,
  // },
});


class App extends Component {

  render() {
    return (
      <MuiThemeProvider theme={theme}>
      <div className="App" >
          <ButtonNavBar />
          <Paper elevation={6} style={{margin: 20}}>
            <img src={MainImage} alt="mainImage" height="80%" width='100%'></img>
          </Paper>
          <CenteredGrid />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
