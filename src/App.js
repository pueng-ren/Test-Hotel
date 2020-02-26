import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Showhotel from './Components/Show hotel/Showhotel'
import DetaiHotel from './Components/Detail/DetaiHotel'

import Login from './Header/Login'

import NavBar from './Header/NavBar'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        
        <div className="App">
          <NavBar />
          <switch>
            <Route exact path={"/Showhotel"} component={Showhotel} />
            <Route exact path={"/DetaiHotel"} component={DetaiHotel} />

            <Route exact path={"/Login"} component={Login} />

          </switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;


