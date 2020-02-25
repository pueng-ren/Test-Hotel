import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Showhotel from './Components/Showhotel'
import Hearder from './NavBar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        
        <div className="App">
          <Hearder />
          <switch>
            <Route exact path={"/Showhotel"} component={Showhotel} />
          </switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;


