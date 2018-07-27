import React, { Component } from 'react';
import ButtonNavBar from './Components/NavBar';
import CenteredGrid from './Layout/index';
import MainImage from './Components/images/logo.png';
import Paper from '@material-ui/core/Paper';



class App extends Component {

  render() {
    return (
      <div className="App">
          <ButtonNavBar />
          <Paper elevation={6} style={{margin: 20}}>
            <img src={MainImage} alt="mainImage" height="80%" width='100%'></img>
          </Paper>
          <CenteredGrid />
      </div>
    );
  }
}

export default App;
