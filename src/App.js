import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from "react-router-dom";
import Showhotel from './Components/Show hotel/Showhotel'
import DetaiHotel from './Components/Detail/DetaiHotel'
import Booking from './Components/Booking/Booking'
import Login from './Header/Login'
import Register from './Header/Register'
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
            <Route exact path={"/Register"} component={Register} />
            <Route exact path={"/Booking"} component={Booking} />


          </switch>
        </div>
      </React.Fragment>
    );
  }
}

export default App;


